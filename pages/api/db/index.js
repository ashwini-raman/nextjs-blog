const pgp = require("pg-promise")();
const cn = { connectionString: process.env.DATABASE_URL };

if (process.env.DATABASE_URL.includes("localhost") === false) {
  cn.ssl = {
    rejectUnauthorized: false,
  };
}

const db = pgp(cn);

module.exports = db;
