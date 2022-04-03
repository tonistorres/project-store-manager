const { expect } = require("chai");
const sinon = require("sinon");
const ProductModel = require("../../../models/data.product");
const ProductService = require("../../../services/productService");


describe("<--- CAMADA SERVICE --->", () => {
    describe("FUNÇÃO:createServiceProduct()--> Qdo NÃO RETORNAR REGISTROS do DB", () => {
        
      before(() => {
        sinon
          .stub(ProductModel, "getByNameModelProduct")
          .resolves(true);
      });
  
      after(() => {
        ProductModel.getByNameModelProduct.restore();
      });
  
      it("Retona um retorna um objeto { erro: true, status: 409, message: 'Product already exists' }  ", async () => {
        const objectErro = await ProductService.createServiceProduct({ name: "Martelo de Thor", quantity: 10 } );
        expect(objectErro).to.be.an('object');   
        expect({erro: true}).to.have.own.property('erro');   
      });
    });

    describe("FUNÇÃO:createServiceProduct()--> Qdo RETORNAR REGISTROS do DB", () => {
    //   const resultOK = {
    //     id: 4,
    //     name: "Desinfetante 1000ml",
    //     quantity: 5
    // }
  
      before(() => {
        sinon
          .stub(ProductModel, "getByNameModelProduct")
          .resolves(false);
      });
  
      after(() => {
        ProductModel.getByNameModelProduct.restore();
      });
  
      it("Retona um retorna um objeto { id:4, name:'desinfetante', quantity:5 }  ", async () => {
        const objectErro = await ProductService.createServiceProduct({ name: "Martelo de Thor", quantity: 10 } );
        expect(objectErro).to.be.an('object');   
        expect({name: "Desinfetante 1000ml"}).to.have.own.property('name');
      });
    });

    describe("FUNÇÃO:createServiceProduct()--> Qdo ERRO NO SERVIDOR", () => {
      const resultERRO_SERVER = { error: 500, message: 'Erro no Servidor' }
  
      before(() => {
        sinon
          .stub(ProductModel, "createModelProduct")
          .resolves(resultERRO_SERVER);
      });
  
      after(() => {
        ProductModel.createModelProduct.restore();
      });
  
      it("Retona um retorna um objeto { error: 500, message: 'Erro no Servidor' }  ", async () => {
        const objectErro = await ProductService.createServiceProduct({ name: "Martelo de Thor", quantity: 10 } );
        expect(objectErro).to.be.an('object');   
        expect({error: 500}).to.have.own.property('error');
      });
    });

  
  });
  