const { expect } = require("chai");
const sinon = require("sinon");
const ProductService = require("../../../services/productService");
const ProductController = require("../../../controllers/productsController");


describe("<--- CAMADA CONTROLLER --->", () => {
    const response = {};
    const request = {};
  
    describe(`FUNÇÃO:getByIdControllerProduct()--> A camada SERVICE
      retorna um um Objeto de erro { message: 'Product not found' }`, () => {
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns({ message: 'Product not found' });
        sinon
          .stub(ProductService, "getByIdServiceProducts")
          .resolves({ message: 'Product not found' });
      });
  
      after(() => {
        ProductService.getByIdServiceProducts.restore();
      });
  
      it("Testa se Retorna um  OBJETO ", async () => {
        const product = await ProductController .getByIdControllerProduct(
          request,
          response
        );
        expect(product).to.be.an("object");
      });
  
      it("Testa se a chave message do Objeto retornado é ['Product not found'] ", async () => {
          const product = await ProductController.getByIdControllerProduct(
              request,
              response
            );
        expect(product.message).to.be.equal("Product not found");
      });
    });


    describe(`FUNÇÃO:getByIdControllerProduct()--> A camada SERVICE
    retorna um um Objeto { id: 1,name: 'Martelo de Thor', quantity: 10}`, () => {
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns({ id: 1, name: 'Martelo de Thor', quantity: 10});
      sinon
        .stub(ProductService, "getByIdServiceProducts")
        .resolves({ id: 1, name: 'Martelo de Thor', quantity: 10});
    });

    after(() => {
      ProductService.getByIdServiceProducts.restore();
    });

    it("Testa se Retorna um  OBJETO ", async () => {
      const product = await ProductController .getByIdControllerProduct(
        request,
        response
      );
      expect(product).to.be.an("object");
    });

    it("Testa se a chave message do Objeto retornado é ['Product not found'] ", async () => {
        const product = await ProductController.getByIdControllerProduct(
            request,
            response
          );
      expect(product.quantity).to.be.equal(10);
    });
  });






}); 