const ProductService = require('../services/productService');

const ERRO_SERVIDOR = 'Erro no Servidor';

const getAllControllerProducts = async (_req, res) => {
    try {
      const products = await ProductService.getAllServiceProducts();
       if (products.message) {
        return res.status(404).json({ message: products.message });
      }
      return res.status(200).json(products);
    } catch (error) {
     // console.log(error);
      return res
        .status(500)
        .json({ message: ERRO_SERVIDOR });
    }
  };
  
const getByIdControllerProduct = async (req, res) => {
    try {
      const product = await ProductService.getByIdServiceProducts(req.params);
      if (product.message) {
        return res.status(404).json({ message: product.message });
      }
      return res.status(200).json(product);
    } catch (error) {
     // console.log(error);
      return res
        .status(500)
        .json({ message: ERRO_SERVIDOR });
    }
  };

const createProductController = async (req, res) => {
  try {
    const product = await ProductService.createServiceProduct(req.body);
    if (product.erro) {
      return res.status(product.status).json({ message: product.message });  
    }
    return res.status(201).json(product);
  } catch (error) {
   // console.log(error);
    return res.status(500).json({ message: ERRO_SERVIDOR });
  }
};

const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductService.updateServiceProduct({ ...req.body, id });
    if (product.erro) {
      console.log(product.status);
      return res.status(product.status).json({ message: product.message });  
    }
    return res.status(200).json(product);
  } catch (error) {
   // console.log(error);
    return res.status(500).json({ message: ERRO_SERVIDOR });
  }
};

const getDeleteIdControllerProduct = async (req, res) => {
  try {
    const product = await ProductService.deleteByIdServiceProduct(req.params);
    if (product.erro && product.status === 204) {
      return res.status(204).end();
    }
    return res.status(product.status).json({ message: product.message });
  } catch (error) {
   // console.log(error);
    return res
      .status(500)
      .json({ message: ERRO_SERVIDOR });
  }
};
module.exports = { 
  getAllControllerProducts,
  getByIdControllerProduct,
  createProductController,
  updateProductController,
  getDeleteIdControllerProduct,
  };