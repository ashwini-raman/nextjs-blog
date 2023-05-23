import Layout from '../../components/layout';
import styles from './researchers.module.css';
import { Space, Table, Tag } from 'antd';
const { client } = require('../../db');
  const db = client();
// const db = require("../../db");
const pgp = require("pg-promise")();
import { getUsers } from '../api/users';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

// const data = [
//   {
//     key: '1',
//     name: 'Mike',
//     email: 'mike@test.com',
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     email: 'john@test.com',
//     address: '10 Downing Street',
//   },
// ];

export const getServerSideProps = async () => {
  // const data = await getUsers();
  const query = pgp.as.format(
    ` SELECT id, name, email
      FROM clinical_trials.users`,
  );
  const data = await db.query(query);
  return {
    props: {
      data,
    },
  };
}

export default function Researchers({data}) {
  const handleInsert = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        // body: JSON.stringify({
        //   date: new Date(),
        // }),
      });
      const json = await response.json();
      console.log(json);
      if (!response.ok) {
        throw new Error(json.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Layout>
      <div className={styles.pageTitle}>
        Researchers
      </div>
      <div>
        <button onClick={handleInsert}>Add new</button>
      </div>
      <Table columns={columns} dataSource={data} />
    </Layout>
  );
}