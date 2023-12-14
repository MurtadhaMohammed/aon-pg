const express = require("express");
const app = express();
const port = 3000;
const empolyees = require('./routers/employees')

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api/v1/employees', empolyees)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
