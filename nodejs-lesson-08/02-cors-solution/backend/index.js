const express = require('express');
const cors = require('cors');

const products = [
  { id: 1, name: 'Moishe Ufnik' },
  { id: 2, name: 'Kipi Ben Kipod' },
];

const main = () => {
  const app = express();
  const corsOprions = {
    origin: 'http://127.0.0.1:5501',
  };

  let corsSingleRoute = {
    origin: 'http://127.0.0.1:5501',
  };

  app.get('/api/v1/single-route-example', cors(corsSingleRoute), (req, res) => {
    res.json(products);
  });

  app.use(cors(corsOprions));
  app.get('/api/v1/users', (req, res) => res.json(products));
  app.listen(3000, () => console.log('running on 3000'));
};

main();
