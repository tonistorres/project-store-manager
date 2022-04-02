const ProductService = require('../services/productService');

const getAllControllerProducts = async (_req, res) => {
    try {
      const users = await ProductService.getAllServiceProducts();
      // console.log(users);
      if (users.message) {
        return res.status(404).json({ message: users.message });
      }
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: 'Erro no Servidor' });
    }
  };
  
const getByIdControllerProduct = async (req, res) => {
    try {
      const user = await ProductService.getByIdServiceProducts(req.params);
      if (user.message) {
        return res.status(404).json({ message: user.message });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: 'Erro no Servidor' });
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
    console.log(error);
    return res.status(500).json({ message: 'Erro no Servidor' });
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
    console.log(error);
    return res.status(500).json({ message: 'Erro no Servidor' });
  }
};

module.exports = { 
  getAllControllerProducts,
  getByIdControllerProduct,
  createProductController,
  updateProductController,
  };