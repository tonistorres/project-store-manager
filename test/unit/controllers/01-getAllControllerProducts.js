const { expect } = require("chai");
const sinon = require("sinon");
const ProductService = require("../../../services/productService");
const ProductController = require("../../../controllers/productsController");

describe("<--- CAMADA CONTROLLER --->", () => {
  const response = {};
  const request = {};

  describe(`FUNÇÃO:getAllControllerProducts()--> A camada SERVICE
    retorna um um Objeto de erro { message: 'Product not found' }
    quado a camada MODEL retonna um Array vazio []`, () => {
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns({ message: "Product not found" });
      sinon
        .stub(ProductService, "getAllServiceProducts")
        .resolves({ message: "Product not found" });
    });

    after(() => {
      ProductService.getAllServiceProducts.restore();
    });

    it("Testa se Retorna um  OBJETO ", async () => {
      const product = await ProductController.getAllControllerProducts(
        request,
        response
      );
      expect(product).to.be.an("object");
    });

    it("Testa se a chave message do Objeto retornado é ['Product not found'] ", async () => {
      const product = await ProductController.getAllControllerProducts(
        request,
        response
      );
      expect(product.message).to.be.equal("Product not found");
    });
  });


  describe(`FUNÇÃO:getAllControllerProducts()--> A camada SERVICE
  retorna um Array de objetos do tipo [ {id: 2, name: "Traje de encolhimento",
  quantity: 20},] quado a camada MODEL retonna true`, () => {
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns([
        {
          id: 1,
          name: "Martelo de Thor",
          quantity: 10,
        },
        {
          id: 2,
          name: "Traje de encolhimento",
          quantity: 20,
        },
        {
          id: 3,
          name: "Escudo do Capitão América",
          quantity: 30,
        },
      ]);
      sinon.stub(ProductService, "getAllServiceProducts").resolves(true);
    });
  
    after(() => {
      ProductService.getAllServiceProducts.restore();
    });
  
    it("Testa se Retorna um  Array ", async () => {
      const product = await ProductController.getAllControllerProducts(
        request,
        response
      );
      expect(product).to.be.an("array");
    });
  });
  


});
