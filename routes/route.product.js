const express = require('express');
const { validaProduct, validaQuantityComplement } = require('../middlewares/middlewarCustomValid');
const ProductController = require('../controllers/productsController');

const router = express.Router();

router
   .get('/', ProductController.getAllControllerProducts)
   .post('/', validaProduct, ProductController.createProductController)
   .get('/:id', ProductController.getByIdControllerProduct)
   .put('/:id', validaProduct, validaQuantityComplement, ProductController.updateProductController);

module.exports = router;