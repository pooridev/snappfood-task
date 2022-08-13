const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/products', (req, res) => {
  res.json({
    products: [
      {
        id: 1,
        name: 'Product 1',
        price: 10
      },
      {
        id: 2,
        name: 'Product 2',
        price: 20
      }
    ]
  });
});

app.listen(4000);
