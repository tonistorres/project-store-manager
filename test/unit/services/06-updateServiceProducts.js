const { expect } = require("chai");
const sinon = require("sinon");
const ProductModel = require("../../../models/data.product");
const ProductService = require("../../../services/productService");


describe("<--- CAMADA SERVICE --->", () => {
    describe("FUNÇÃO:updateServiceProduct()--> Qdo Product já existir ", () => {
      
      before(() => {
        sinon
          .stub(ProductModel, "getByIdModelProduct")
          .resolves(false);
      });
  
      after(() => {
        ProductModel.getByIdModelProduct.restore();
      });
  
      it("Retona um retorna um objeto { erro: true, status: 404, message: 'Product not found' }  ", async () => {
        const objectErro = await ProductService.updateServiceProduct({ name: 'Agua Sanitaria 1000ml', quantity: 5, id: '3' } );
        expect(objectErro).to.be.an('object');
        expect({erro: true}).to.have.own.property('erro');   
      });
    });

    describe("FUNÇÃO:updateServiceProduct()--> Qdo Retornar Produto ATUALIZADO DB", () => {
      
      before(() => {
        sinon
          .stub(ProductModel, "updateModelProduct")
          .resolves({ name: 'Agua Sanitaria 1000ml', quantity: 5, id: 3 })});
  
      after(() => {
        ProductModel.updateModelProduct.restore();
      });
  
      it("Retona um retorna um objeto { id:9, name: 'Agua Sanitaria', quanty: 10 }  ", async () => {
        const objectErro = await ProductService.updateServiceProduct({ name: 'Agua Sanitaria 1000ml', quantity: 5, id: '3' } );
        expect(objectErro).to.be.an('object');        
      });
    });

  
  });  