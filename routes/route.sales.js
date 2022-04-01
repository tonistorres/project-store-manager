const express = require('express');
const SaleController = require('../controllers/salesController');

const router = express.Router();

router
   .get('/', SaleController.getAllControllerSales)
   .get('/:id', SaleController.getByIdControllerSale);

module.exports = router;