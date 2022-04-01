const ProductModel = require('../models/data.product');

const getAllServiceProducts = async () => {
    const products = await ProductModel.getAllModelProducts();        
    if (products.length === 0) {
      return { message: 'Product not found' };      
    }
    return products;
};

const getByIdServiceProducts = async (requisicao) => {
  const { id } = requisicao;
  const verificaExiste = await ProductModel.getByIdModelProduct(id);
  if (verificaExiste) {
    const user = await ProductModel.getByIdModelProduct(id);
     return user;   
  }
   return { message: 'Product not found' };      
};

module.exports = { 
  getAllServiceProducts,
  getByIdServiceProducts,
   };