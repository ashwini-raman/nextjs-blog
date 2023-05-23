import pgPromise from 'pg-promise';

const pgp = pgPromise();

const createSingleton = (name, create) => {
  const s = Symbol.for(name);
  let scope = global[s];
  if (!scope) {
    scope = { ...create() };
    global[s] = scope;
  }
  return scope;
};

console.log('database url', process.env.DATABASE_URL);
export const client = () => createSingleton('my-app-db-space', () => pgp(process.env.DATABASE_URL));

// const pgp = require("pg-promise")();
// const cn = { connectionString: process.env.DATABASE_URL };

// if (process.env.DATABASE_URL.includes("localhost") === false) {
//   cn.ssl = {
//     rejectUnauthorized: false,
//   };
// }

// const db = pgp(cn);

// module.exports = db;
