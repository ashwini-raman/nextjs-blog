const db = require("../db");
const pgp = require("pg-promise")();

const getUsers = async (req, res, next) => {
  const query = pgp.as.format(
    ` SELECT id, name, email
      FROM clinical_trials.users
    `
  );
  const result = await db.query(query);
  res.json(result);
};

module.exports = {
  getUsers
}