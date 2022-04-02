const express = require('express');
const { validaProduct } = require('../middlewares/middlewarCustomValid');
const ProductController = require('../controllers/productsController');

const router = express.Router();

router
   .get('/', ProductController.getAllControllerProducts)
   .post('/', validaProduct, ProductController.createProductController)
   .get('/:id', ProductController.getByIdControllerProduct)
   .put('/:id', validaProduct, ProductController.updateProductController);

module.exports = router;