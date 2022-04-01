const SaleService = require('../services/SaleService');

const getAllControllerSales = async (_req, res) => {
    try {
      const sales = await SaleService.getAllServiceSales();
      // console.log(sales);
      if (sales.message) {
         return res.status(404).json({ message: sales.message });
      }
      return res.status(200).json(sales);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: 'Erro no Servidor' });
    }
  };
  
const getByIdControllerSale = async (req, res) => {
    try {
      const sales = await SaleService.getByIdServiceSales(req.params);
      if (sales.message) {
        return res.status(404).json({ message: sales.message });
      }
      return res.status(200).json(sales);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: 'Erro no Servidor' });
    }
  };
  
  module.exports = {
    getAllControllerSales,
    getByIdControllerSale,
  };