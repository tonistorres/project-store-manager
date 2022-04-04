const { expect } = require("chai");
const sinon = require("sinon");
const ProductService = require("../../../services/productService");
const ProductController = require("../../../controllers/productsController");


describe("<--- CAMADA CONTROLLER --->", () => {
    const response = {};
    const request = {};
  
    describe(`FUNÇÃO:createProductController()--> A camada SERVICE
      retorna um Objeto de erro { message: 'Product already exists' }`, () => {
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns({ message: 'Product already exists' });
        sinon
          .stub(ProductService, "createServiceProduct")
          .resolves({ message: 'Product already exists' });
      });
  
      after(() => {
        ProductService.createServiceProduct.restore();
      });
  
      it("Testa se Retorna um  OBJETO ", async () => {
        const product = await ProductController .createProductController(
          request,
          response
        );
        expect(product).to.be.an("object");
      });
    });
}); 