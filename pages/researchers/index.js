import Layout from '../../components/layout';
import styles from './researchers.module.css';
import { Space, Table, Tag } from 'antd';
const db = require("../api/db");
const pgp = require("pg-promise")();

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

export async function getStaticProps() {
  const query = pgp.as.format(
    ` SELECT id, name, email
      FROM clinical_trials.users`,
  );
  const result = await db.query(query);
  return {
    props: {
      data: result,
    },
  };
}

export default function Researchers({data}) {
  return (
    <Layout>
      <div className={styles.pageTitle}>
        Researchers
      </div>
      <Table columns={columns} dataSource={data} />
    </Layout>
  );
}