const express = require("express");
const sql = require("mssql");

const app = express();
const port = 3000;

const config = {
  user: "sa",
  password: "qwerty",
  server: "192.168.100.140",
  database: "UCC_KPI",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// Route to get Queries list
app.get("/UCC_KPI", async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .query("SELECT TOP 100 * FROM [UCC_KPI].[dev].[Queries]");
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
