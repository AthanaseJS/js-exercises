const sql = require("mssql");

const config = {
  user: "your_username",
  password: "your_password",
  server: "localhost",
  database: "your_database",
  options: {
    encrypt: false, // Set true for Azure SQL
    trustServerCertificate: true, // set to true for local or self-signed certs
  },
};

async function runQuery() {
  try {
    await sql.connect(config);
    const result = await sql.query("SELECT * FROM your_table");
    console.log(result.recordset);
  } catch (err) {
    console.error(err);
  } finally {
    await sql.close();
  }
}

runQuery();
