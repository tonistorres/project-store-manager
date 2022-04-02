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

const createServiceProduct = async (product) => {
  try {
    const { name, quantity } = product;
    
    // criar verifação saber se o produto existe 
    const exist = await ProductModel.getByNameModelProduct(name);

    if (exist) {
     return { erro: true, status: 409, message: 'Product already exists' };
    }
    const created = await ProductModel.createModelProduct({ name, quantity });
    return created;
  } catch (error) {
    console.log(error);
    return { error: 500, message: 'Erro no Servidor' };
  }
};

const updateServiceProduct = async (product) => {
  try {
    const { id, name, quantity } = product;

    const exist = await ProductModel.getByIdModelProduct(id);

    if (!exist) {
      return { erro: true, status: 422, message: 'Product not found' };
    }

    const updated = await ProductModel.updateModelProduct({ id, name, quantity });

     return updated;
  } catch (error) {
    console.log(error);
    return { error: 500, message: 'Erro no Servidor' };
  }
};

module.exports = { 
  getAllServiceProducts,
  getByIdServiceProducts,
  createServiceProduct,
  updateServiceProduct,
   };