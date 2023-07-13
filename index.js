const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    database: 'employee_db',
},
console.log('Connected!')
);

const prompt = inquirer.createPromptModule();

prompt ({
        type: "rawlist",
        name: "query",
        message: "Select an option",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role"
        ]
    }
).then((answers) => {
    if (answers.query === 'View All Departments') {
        db.query('SELECT * FROM departments', (err, results) => {
            if (err) {
                console.error(err);
            } else {
              console.table(results);
            }
        })
        }
    }); 
        