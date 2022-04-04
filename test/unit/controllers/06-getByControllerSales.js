const { expect } = require("chai");
const sinon = require("sinon");
const SaleService = require("../../../services/SaleService");
const SaleController = require("../../../controllers/salesController");


describe("<--- CAMADA CONTROLLER --->", () => {
    const response = {};
    const request = {};
  
    describe(`FUNÇÃO:getByIdControllerSale()--> A camada SERVICE
      retorna um um Objeto de erro { message: 'Sale not found' }`, () => {
      before(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns({ message: 'Sale not found' });
        sinon
          .stub(SaleService, "getByIdServiceSales")
          .resolves({ message: 'Sale not found' });
      });
  
      after(() => {
        SaleService.getByIdServiceSales.restore();
      });
  
      it("Testa se Retorna um  OBJETO ", async () => {
        const sale = await SaleController .getByIdControllerSale(
          request,
          response
        );
        expect(sale).to.be.an("object");
      });
  
      it("Testa se a chave message do Objeto retornado é ['Sale not found'] ", async () => {
          const sale = await SaleController.getByIdControllerSale(
              request,
              response
            );
        expect(sale.message).to.be.equal("Sale not found");
      });
    });


    describe(`FUNÇÃO:getByIdControllerSale()--> A camada SERVICE
    retorna um array de Objetos [{},{}]`, () => {
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns([
    {
        date: "2022-04-04T16:01:24.000Z",
        productId: 1,
        quantity: 5
    },
    {
        date: "2022-04-04T16:01:24.000Z",
        productId: 2,
        quantity: 10
    }
]);
      sinon
        .stub(SaleService, "getByIdServiceSales")
        .resolves([
            {
                date: "2022-04-04T16:01:24.000Z",
                productId: 1,
                quantity: 5
            },
            {
                date: "2022-04-04T16:01:24.000Z",
                productId: 2,
                quantity: 10
            }
        ]);
    });

    after(() => {
      SaleService.getByIdServiceSales.restore();
    });

    it("Testa se Retorna um  Array ", async () => {
      const sale = await SaleController .getByIdControllerSale(
        request,
        response
      );
      expect(sale).to.be.an("array");
    });

  });
}); 