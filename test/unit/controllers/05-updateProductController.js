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

    describe(`FUNÇÃO:updateProductController()-->Qdo Produto Alterado retorna 
    um objeto de erro { message: 'Product not found' }`, () => {
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns({ message: 'Product not found' });
        sinon
          .stub(ProductService, "updateServiceProduct")
          .resolves({ message: 'Product not found' });
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

      it("Testa se Retorna um  OBJETO ", async () => {
        const product = await ProductController .updateProductController(
          request,
          response
        );
        expect(product.message).to.be.equal("Product not found");
      });

    });
}); 