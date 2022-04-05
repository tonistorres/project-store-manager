const express = require('express');
const SaleController = require('../controllers/salesController');
 const { validaCadastroVenda, validaQuantity } = require('../middlewares/middlewareSales');

const router = express.Router();

router
   .get('/', SaleController.getAllControllerSales)
   .post('/', validaCadastroVenda, validaQuantity, SaleController.createSaleController)
   .get('/:id', SaleController.getByIdControllerSale)
   .put('/:id', validaCadastroVenda, validaQuantity, SaleController.updateSaleController);

module.exports = router;