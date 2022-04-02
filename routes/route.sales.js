const express = require('express');
const SaleController = require('../controllers/salesController');

const router = express.Router();

router
   .get('/', SaleController.getAllControllerSales)
   // .post('/', ProductController.createProductController)
   .get('/:id', SaleController.getByIdControllerSale);

module.exports = router;