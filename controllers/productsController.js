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

module.exports = { getAllControllerProducts, getByIdControllerProduct };