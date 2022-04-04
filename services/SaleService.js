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

/** Criando um end-point pra requisição do tipo N:N */
const createServiceSale = async (reqArrayObj) => {
  try {
const idvenda = await SaleModel.createModelSales();
console.log(idvenda);
console.log(reqArrayObj);
await Promise.all(reqArrayObj.map(async (item) => {
await SaleModel.createModelSalesProducts(
  { id: idvenda.id, productId: item.productId, quantity: item.quantity },
  );
  }));
 
    const retornaObjetoFormato = {
      id: idvenda.id,
      itemsSold: reqArrayObj,
    };
    
    return retornaObjetoFormato;
  } catch (error) {
    console.log(error);
    return { error: 500, message: 'Erro no Servidor' };
  }
};

const updateServiceSales = async (id, { productId, quantity }) => {
  try {
        // const exist = await SaleModel.getByIdModelSale(id);

    // if (!exist) {
    //   return { erro: true, status: 404, message: 'Product not found' };
    // }

    const updated = await SaleModel.updateModelSales(
      { qtde: quantity, idvenda: id, idProduct: productId },
      );
    
     return updated;
  } catch (error) {
    // console.log(error);
    return { error: 500, message: 'Erro no Servidor' };
  }
};

module.exports = {
    getAllServiceSales,
    getByIdServiceSales,
    createServiceSale,
    updateServiceSales,
};