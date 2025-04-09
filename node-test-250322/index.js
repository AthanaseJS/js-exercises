// index.js
require("dotenv").config();
const sql = require("mssql");

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT, 10),
  options: {
    encrypt: process.env.DB_ENCRYPT === "true", // set to true for Azure databases
    trustServerCertificate: process.env.DB_TRUST_SERVER_CERT === "true",
  },
};

async function queryDatabase() {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM YourTable`;

    console.log(result.recordset);
  } catch (err) {
    console.error("SQL error", err);
  } finally {
    await sql.close();
  }
}

queryDatabase();
