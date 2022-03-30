const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const router = require('./routes/route');

const app = express(); 
app.use(bodyParser.json()); 
app.use(express.json()); 
app.use('/user', router);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
