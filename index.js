const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const routerProduct = require('./routes/route.product');
const routerSale = require('./routes/route.sales');

const app = express(); 
app.use(bodyParser.json()); 
app.use(express.json()); 
app.use('/products', routerProduct);
app.use('/sales', routerSale);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
