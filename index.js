const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    database: 'employee_db',
},
console.log('Connected!')
);

const promot = inquirer.createPromptModule();

prompt ([
    
])