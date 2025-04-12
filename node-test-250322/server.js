const express = require("express");
const sql = require("mssql");

const app = express();
const port = 3000;

const config = {
  user: "sa",
  password: "qwerty",
  server: "192.168.100.140",
  database: "EMPLOYEE",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// Route to get employee list
app.get("/employees", async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT TOP 10 * FROM [EMPLOYEE].[dbo].[Employee]");
    res.json(result.recordset); // Return result as JSON
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).send("Database error");
  } finally {
    sql.close();
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
