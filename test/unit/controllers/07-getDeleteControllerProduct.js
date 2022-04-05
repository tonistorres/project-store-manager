const { expect } = require("chai");
const sinon = require("sinon");
const ProductService = require("../../../services/productService");
const ProductController = require("../../../controllers/productsController");


describe("<--- CAMADA CONTROLLER --->", () => {
    const response = {};
    const request = {};
  
    describe(`FUNÇÃO:getDeleteControllerProduct()--> A camada SERVICE
      retorna um um Objeto { message: 'Product not found'}`, () => {
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns({ message: 'Product not found'});
        sinon
          .stub(ProductService, "deleteByIdServiceProduct")
          .resolves({ message: 'Product not found'});
      });
  
      after(() => {
        ProductService.deleteByIdServiceProduct.restore();
      });
  
      it("Testa se Retorna um  OBJETO ", async () => {
        const prduct = await ProductController.getDeleteIdControllerProduct(
          request,
          response
        );
        expect(prduct).to.be.an("object");
      });
  
      it("Testa se a chave message do Objeto retornado é ['Product not found'] ", async () => {
          const product = await ProductController.getDeleteIdControllerProduct(
              request,
              response
            );
        expect(product.message).to.be.equal("Product not found");
      });
    });

}); 