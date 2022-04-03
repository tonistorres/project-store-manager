const { expect } = require("chai");
const { describe } = require("mocha");
const sinon = require("sinon");
const SaletModel = require("../../../models/data.sale");
const SaleService = require("../../../services/SaleService");


describe('', () => {

    describe('FUNÇÃO:getByIdServiceSale()--> Qdo ENCONTRAR registro no DB ', () => { 
    const resultOk =  [
        { date: '2022-04-03T02:14:43.000Z', productId: 1, quantity: 5 },
        { date: '2022-04-03T02:14:43.000Z', productId: 2, quantity: 10 }
    ]
      

    before(() => {
        sinon
          .stub(SaletModel, "getByIdModelSale")
          .resolves(resultOk);
      });
  
      after(() => {
        SaletModel.getByIdModelSale.restore();
      });


      it("Retornar um Array de Objetos [{ date: '2022-04-03T02:14:43.000Z', productId: 1, quantity: 5 }]", async () => {
        const row = await SaleService.getByIdServiceSales(1);
        expect([{productId: 1}]).to.deep.include({productId: 1});        
      });

 })

 describe('FUNÇÃO:getByIdServiceSale()--> Qdo NÃO ENCONTRAR registro no DB ', () => { 
    const resultOkFail =  { message: 'Sale not found' }
      

    before(() => {
        sinon
          .stub(SaletModel, "getByIdModelSale")
          .resolves(resultOkFail);
      });
  
      after(() => {
        SaletModel.getByIdModelSale.restore();
      });


      it("Retornar um Objeto { message: 'Sale not found' }", async () => {
        const objectErro = await SaleService.getByIdServiceSales(1);
        expect(objectErro).to.be.an('object');      
      });

 })



});
