const express = require('express');
const { 
   cadProdCampName,
   cadProdCampNameMaior5,
   cadProdCampQutExist,
   cadProdCampQutMaiorZero,
   // updateQuntMaiorZero,
} = require('../middlewares/middlewareValidaPS');
const ProductController = require('../controllers/productsController');

const router = express.Router();

router
   .get('/', ProductController.getAllControllerProducts)

   .post('/', 
    cadProdCampName,
    cadProdCampNameMaior5,
    cadProdCampQutExist,
    cadProdCampQutMaiorZero,
    ProductController.createProductController)

   .get('/:id', ProductController.getByIdControllerProduct)
   
   .put('/:id',
   cadProdCampNameMaior5,
   cadProdCampQutExist,
   cadProdCampQutMaiorZero,
   ProductController.updateProductController)

   .delete('/:id', ProductController.getDeleteIdControllerProduct);

module.exports = router;