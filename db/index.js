const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "aon",
  password: "",
  port: 5432,
});

client
  .connect()
  .then(() => console.log("Connected"))
  .catch((e) => console.log("Error ", e));


module.exports = client