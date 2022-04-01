const SaleModel = require('../models/data.sale');

const getAllServiceSales = async () => {
    const sales = await SaleModel.getAllModelSales();        
    if (sales.length === 0) {
      return { message: 'Sale not found' };      
    }
    return sales;
};

const getByIdServiceSales = async (requisicao) => {
  const { id } = requisicao;
  const verificaExiste = await SaleModel.getByIdModelSale(id);
  if (verificaExiste.length > 0) {
    const sale = await SaleModel.getByIdModelSale(id);
     return sale;   
  }
   return { message: 'Sale not found' };      
};

module.exports = {
    getAllServiceSales,
    getByIdServiceSales,
};