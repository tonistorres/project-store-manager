const express = require('express');
const SaleController = require('../controllers/salesController');
 const { validaCadastroVenda } = require('../middlewares/meddlewareCadSale');

const router = express.Router();

router
   .get('/', SaleController.getAllControllerSales)
   .post('/', validaCadastroVenda, SaleController.createSaleController)
   .get('/:id', SaleController.getByIdControllerSale)
   .put('/:id', validaCadastroVenda, SaleController.updateSaleController);

module.exports = router;