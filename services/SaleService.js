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

// const arrayObject = [
//   { productId: 1, quantity: 2 },
//   { productId: 2, quantity: 5 },
// ];

// const createServiceSale = async (arrayObject) => {
//   try {
// console.log(arrayObject);

// const idvenda = await SaleModel.createModelSales();

//   arrayObject.forEach(async ({ productId, quantity }) => {
// // console.log(productId, quantity, idvenda.id);
// await SaleModel.createModelSalesProducts(idvenda.id, productId, quantity);
//   });

//     // const objReturn = {
//     //   id: getSaleId,
//     //   itemsSold: arrayObject,
//     // };
//     // return { status: 201, message: objReturn };
//   } catch (error) {
//     console.log(error);
//     return { error: 500, message: 'Erro no Servidor' };
//   }
// };

// async function main(){
//  await createServiceSale(arrayObject);
// }

// main();

module.exports = {
    getAllServiceSales,
    getByIdServiceSales,
    // createServiceSale,
};