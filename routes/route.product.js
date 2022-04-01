const express = require('express');
const ProductController = require('../controllers/productsController');

const router = express.Router();

router
   .get('/', ProductController.getAllControllerProducts)
   .get('/:id', ProductController.getByIdControllerProduct)

module.exports = router;