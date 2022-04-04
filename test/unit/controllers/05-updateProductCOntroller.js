const { expect } = require("chai");
const sinon = require("sinon");
const ProductService = require("../../../services/productService");
const ProductController = require("../../../controllers/productsController");


describe("<--- CAMADA CONTROLLER --->", () => {
    const response = {};
    const request = {};
  
    describe(`FUNÇÃO:updateProductController()-->Qdo Produto Alterado retorna 
    { id: 3, name: "Agua Sanitaria 1000ml", quantity: 5 }`, () => {
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns({ id: 3, name: "Agua Sanitaria 1000ml", quantity: 5 });
        sinon
          .stub(ProductService, "updateServiceProduct")
          .resolves({ id: 3, name: "Agua Sanitaria 1000ml", quantity: 5 });
      });
  
      after(() => {
        ProductService.updateServiceProduct.restore();
      });
  
      it("Testa se Retorna um  OBJETO ", async () => {
        const product = await ProductController .updateProductController(
          request,
          response
        );
        expect(product).to.be.an("object");
      });
    });
}); 