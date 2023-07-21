const inquirer = require('inquirer');
const mysql = require('mysql2');

const prompt = inquirer.createPromptModule();

let db;

const getAll = (tableName) => {
    db.query('SELECT * FROM ??', tableName, (err, results) => {
        if (err) {
            console.error(err);
        } else {
            console.table(results);
            init();
        }
    });
};

const getAllEmployees = () => {
    db.query(`
SELECT
    employees.id,
    CONCAT(employees. first_name, " " „employees.last_name) AS name,
    title AS role, 
    salary,
    departments.name AS department, 
    employees.manager_id,
    CONCAT(managers.first_name, ' ' ,managers. last _name) AS manager
    FROM employees
    LEFT JOIN roles
    ON employees.role_id = roles. id
    LEFT JOIN departments
    ON roles.department_id = departments.id
    LEFT JOIN employees AS managers
    ON employees.manager_ Id = managers.id
    `, (err, results) => {
        if (err) {
            return console.error(err);
        }
        console.table(results);
        init();
    });
};

const insertDepartment = (data) => {
    db.query('INSERT INTO departments SET ?', data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Added!");
            init();
        }
    });
};

const handleAction = ({ action }) => {
    switch (action) {
        case 'View All Departments': {
            getAll('departments');
            break;
        }
        case 'View All Employees': {
            getAllEmployees('employees');
            break;
        }
        case 'View All Roles': {
            getAll('roles');
            break;
        }
        case 'Add Department': {
            prompt([
            {
                message: 'Enter Department Name',
                name: 'name',
            }, 

            ])
            .then(insertDepartment);
            break;
        }
        default: {
            process.exit();
        }
    }
};

const init = () => {
    prompt({
        type: "rawlist",
        message: "What would you like to do?",
        name: "action",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role",
            "Exit",
        ]
    }).then(handleAction);
};

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee_db',
}, init());

const insertEmployee = (data) => {

}