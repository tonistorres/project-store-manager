const express = require('express');
const { validaProduct } = require('../middlewares/middlewarCustomValid');
const ProductController = require('../controllers/productsController');

const router = express.Router();

router
   .get('/', ProductController.getAllControllerProducts)
   .post('/', validaProduct, ProductController.createProductController)
   .get('/:id', ProductController.getByIdControllerProduct);
   // put no requesito 8

module.exports = router;