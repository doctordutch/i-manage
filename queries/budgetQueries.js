const connection = require('../db/database');
const inputCheck = require('../utils/inputCheck');
const cTable = require('console.table')
// return all data in department table
const queryBudgetByDepartment = () => {
    const sql = `SELECT department.name AS "Department Name", 
                SUM(salary) AS "Department Budget",
                COUNT(role.title) AS "Employee Count"
                FROM employee 
                LEFT JOIN role ON employee.role_id = role.id 
                LEFT JOIN department ON role.department_id = department.id
                GROUP BY department.name`;
    const params = [];
    connection.promise().query(sql, params)
        .then( ([rows, fields]) => {
            console.table(rows)
        })
        .catch(console.log)
};