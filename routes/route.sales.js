const express = require('express');
const SaleController = require('../controllers/salesController');
 // const { validaCadastroVenda } = require('../middlewares/meddlewareCadSale');

const router = express.Router();

router
   .get('/', SaleController.getAllControllerSales)
   .post('/', SaleController.createSaleController)
   .get('/:id', SaleController.getByIdControllerSale)
   .put('/:id', SaleController.updateSaleController);

module.exports = router;