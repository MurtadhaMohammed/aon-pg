const client = require("../db");

async function getEmployees(req, res) {
  let search = req.query.search || "";
  const result = await client.query(
    `SELECT * FROM employees WHERE name ILIKE '%${search}%'`
  );
  res.send(result.rows);
}

async function addEmployee(req, res) {
  let { name, department } = req.body;
  const result = await client.query(
    `INSERT INTO employees (name, department) VALUES ('${name}', '${department}') RETURNING *`
  );
  res.send(result.rows);
}

async function updateEmployee(req, res) {
  let id = req.params.id;
  let { name, department } = req.body;
  const result = await client.query(`UPDATE employees
  SET name = '${name}' , department = '${department}'
  WHERE id = ${id} RETURNING *`);
  res.send(result.rows);
}

async function deleteEmployee(req, res) {
  let id = req.params.id;
  const result = await client.query(`DELETE FROM employees
  WHERE id = ${id}
  RETURNING *`);
  res.send(result.rows);
}

module.exports = {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
