require('dotenv').config();
const { Sequelize, Model, DataTypes } = require('sequelize');

const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;
const db_pass = process.env.DB_PASSWORD;
const db_port = process.env.DB_PORT;

console.log(`${db_host} ${db_user} ${db_name} ${db_name} ${db_pass} ${db_port}`);

const sequelize = new Sequelize(db_name, db_user, db_pass, {
    db_host,
    db_port,
    dialect: 'postgres',
    logging: false
  });

class Users extends Model {}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'users',
    timestamps: false
});

const id = 2;
const email = 'fakemail@mail.com';
const password = 'fakepass';

Users.findAll().then(result=>{
    for (let value of result){
        console.log(`result of the query: ${value.dataValues.id} ${value.dataValues.email} ${value.dataValues.password}`);
    }
});

Users.findOne().then(result=>{
    console.log(`result of the query: ${result.dataValues.id} ${result.dataValues.email} ${result.dataValues.password}`);
});