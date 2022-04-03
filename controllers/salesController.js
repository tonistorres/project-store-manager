const SaleService = require('../services/SaleService');

const ERRO_SERVIDOR = 'Erro no Servidor';

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
        .json({ message: ERRO_SERVIDOR });
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
        .json({ message: ERRO_SERVIDOR });
    }
  };
  
const createSaleController = async (req, res) => {
  try {
    const sale = await SaleService.createServiceSale(req.body);
    // return res.status(201).json(sale);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERRO_SERVIDOR });
  }
};

  module.exports = {
    getAllControllerSales,
    getByIdControllerSale,
    createSaleController,
  };