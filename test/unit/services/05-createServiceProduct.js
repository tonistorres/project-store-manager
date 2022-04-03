const { expect } = require("chai");
const sinon = require("sinon");
const ProductModel = require("../../../models/data.product");
const ProductService = require("../../../services/productService");


describe("<--- CAMADA SERVICE --->", () => {
    describe("FUNÇÃO:createServiceProduct()--> Qdo RETORNAR REGISTROS do DB", () => {
      const resultgetAllServiceProducts = [
        { id: 1, name: "Martelo de Thor", quantity: 10 },
        { id: 2, name: "Traje de encolhimento", quantity: 20 },
        { id: 3, name: "Escudo do Capitão América", quantity: 30 },
      ];
  
      before(() => {
        sinon
          .stub(ProductModel, "getAllModelProducts")
          .resolves(resultgetAllServiceProducts);
      });
  
      after(() => {
        ProductModel.getAllModelProducts.restore();
      });
  
      it("Retona um Array com todos objetos do banco dentro ", async () => {
        const rowsTable = await ProductService.getAllServiceProducts();
        expect([{ id: 1 }]).to.deep.include({ id: 1 });
        expect([{ id: 2 }]).to.deep.include({ id: 2 });
        expect([{ id: 3 }]).to.deep.include({ id: 3 });
      });
    });
  
  });
  