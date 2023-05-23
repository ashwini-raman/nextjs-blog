// const pgp = require('pg-promise')({
//   noWarnings: true
// })

// const db = pgp(`postgres://postgresUser:deduct-flier-audio-catnip@clinical-trials-test-postgres.ccaauojtmr5g.ap-southeast-2.rds.amazonaws.com:5432/clinical_trials`)
// const { client } = require('../../db');
  // const db = client();
// const pgp = require("pg-promise")();

// export async function getUsers() {
//   const query = pgp.as.format(
//     ` SELECT id, name, email
//       FROM clinical_trials.users`,
//   );
//   const data = await db.query(query);
//   return json({data:result});
// }

// import { client } from '../../db';
export default async function handler(req, res) {
  res.status(200).json({data: "hello"});
  // try {
  //   const response = await db.one(
  //     'INSERT INTO clinical_trials.users values (${id}, ${name}, ${email})',
  //     {
  //       id: '5',
  //       name: 'Ashwini',
  //       email: 'test@test.com'
  //     }
  //   );

  //   res.status(200).json({
  //     message: 'A-OK!',
  //     data: {
  //       id: response.id,
  //     }
  //   });
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
}