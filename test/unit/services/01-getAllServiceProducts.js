const { expect } = require("chai");
const sinon = require("sinon");
const ProductModel = require("../../../models/data.product");
const ProductService = require("../../../services/productService");

describe("<--- CAMADA SERVICE --->", () => {
  describe("FUNÇÃO:getAllServiceProducts()--> Qdo RETORNAR REGISTROS do DB", () => {
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

  describe("FUNÇÃO:getAllServiceProducts()--> Qdo NÃO RETORNAR REGISTROS do DB", () => {
    
    before(() => {
      sinon.stub(ProductModel, "getAllModelProducts").resolves([]);
    });

    after(() => {
      ProductModel.getAllModelProducts.restore();
    });

    it("É um objeto ", async () => {
      const resultSearch = await ProductService.getAllServiceProducts();
      expect(resultSearch).to.be.an("object");
    });

    it("retorna status e mensagem de erro [Product not found] ", async () => {
      const resultSearch = await ProductService.getAllServiceProducts();
      expect(resultSearch.message).to.be.equals("Product not found");
    });
  });
});
