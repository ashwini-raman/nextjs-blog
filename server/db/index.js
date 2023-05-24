const pgp = require("pg-promise")();
const databaseURL = process.env.DATABASE_URL ?? 'postgres://postgresUser:deduct-flier-audio-catnip@clinical-trials-test-postgres.ccaauojtmr5g.ap-southeast-2.rds.amazonaws.com:5432/clinical_trials';
const cn = { connectionString: databaseURL };

if (databaseURL.includes("localhost") === false) {
  cn.ssl = {
    rejectUnauthorized: false,
  };
}

const db = pgp(cn);

module.exports = db;
