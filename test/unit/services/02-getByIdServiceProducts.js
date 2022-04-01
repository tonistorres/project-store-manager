const { expect } = require("chai");
const { describe } = require("mocha");
const sinon = require("sinon");
const ProductModel = require("../../../models/data.product");
const ProductService = require("../../../services/productService");


describe('', () => {

    describe('FUNÇÃO:getByIdServiceProducts()--> Qdo ENCONTRAR registro no DB ', () => { 
    const resultModelRegisterOk =  { id: 4, name: 'Martelo de Thor', quantity: 10 } ;

    before(() => {
        sinon
          .stub(ProductModel, "getByIdModelProduct")
          .resolves(resultModelRegisterOk);
      });
  
      after(() => {
        ProductModel.getByIdModelProduct.restore();
      });


      it("Retornar um objeto", async () => {
        const row = await ProductService.getByIdServiceProducts(1);
        expect({row}).to.be.an('object');
        
      });

 })

describe('FUNÇÃO:getByIdServiceProducts()--> Qdo NÃO ENCONTRAR registro no DB ', () => {
    const resultModelRegisterFAIL = undefined ;

    before(() => {
        sinon
          .stub(ProductModel, "getByIdModelProduct")
          .resolves(resultModelRegisterFAIL);
      });
  
      after(() => {
        ProductModel.getByIdModelProduct.restore();
      });

      it("Retornar um array vazio", async () => {
        const product = await ProductService.getByIdServiceProducts(1);
          expect(product).to.be.an('object');        
      });
});
});
