const express = require('express');
const SaleController = require('../controllers/salesController');

const router = express.Router();

router
   .get('/', SaleController.getAllControllerSales)
   .post('/', SaleController.createSaleController)
   .get('/:id', SaleController.getByIdControllerSale);

module.exports = router;