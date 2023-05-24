const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
const data = [
  {
    key: '1',
    name: 'Mike',
    email: 'mike@test.com',
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    email: 'john@test.com',
    address: '10 Downing Street',
  },
  {
    key: '3',
    name: 'jim',
    email: 'john@test.com',
    address: '10 Downing Street',
  },
];

app.get('/', (req, res) => {
    res.json(data);
});

app.listen(3001, () => {
    console.log('App listening on port 3001');
});