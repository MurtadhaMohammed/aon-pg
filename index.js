const express = require("express");
const app = express();
const port = 3000;
const {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require("./models/Employee");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/employees", getEmployees);
app.post("/employee", addEmployee);
app.put("/employee/:id", updateEmployee);
app.delete("/employee/:id", deleteEmployee);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
