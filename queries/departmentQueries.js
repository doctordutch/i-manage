const connection = require('../db/database');
const inputCheck = require('../utils/inputCheck');
const cTable = require('console.table')

const queryDepartments = () => {
    const sql = `SELECT id AS "Department ID", name AS "Department Name" FROM department`;
    const params = [];
    connection.promise().query(sql, params)
        .then( ([rows, fields]) => {
            console.table(rows)
        })
        .catch(console.log)
};

// get single department by id
const queryDepartment = (id) => {
    const sql = `SELECT * from department
                WHERE department.id = ?`;
    const params = [id];
    connection.promise().query(sql, params)
        .then( ([rows, fields]) => {
            console.table(rows)
        })
        .catch(console.log)
};

// delete department
const deleteDepartment = (id) => {
    const sql = `DELETE FROM department WHERE id = ?`;
    const params = [id];
    connection.promise().query(sql, params)
        .then( ([rows, fields]) => {
        })
        .catch(console.log)
};

// add department
const addDepartment = (name) => {
    const sql = `INSERT INTO department (name)
                VALUES (?)`;
    const params = [name];
    connection.promise().query(sql, params)
    .then( ([rows, fields]) => {
    })
    .catch(console.log)
};

module.exports = { queryDepartments, queryDepartment, addDepartment, deleteDepartment };