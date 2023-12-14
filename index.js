const express = require("express");
const app = express();
const port = 3000;
const { getEmployees , addEmployee} = require("./models/Employee");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/employees", getEmployees);
app.post("/employee", addEmployee);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
