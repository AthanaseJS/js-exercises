const express = require("express");
const sql = require("mssql");
const cors = require("cors"); // ✅ Added this line

const app = express();
const port = 3000;
app.use(cors());

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

app.get("/UCC_KPI_Queries", async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query(`
      SELECT TOP (10) [Id],
        [Sqlname],
        [JobName],
        [SqlText],
        [Status]
      FROM [UCC_KPI].[dev].[Queries]
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).send("Database error");
  }
});

//D:\VSCode\js-exercises\node-test-250322
//http://localhost:3000/UCC_KPI_Queries
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
