const { expect } = require("chai");
const sinon = require("sinon");
const SaleService = require("../../../services/SaleService");
const SaleController = require("../../../controllers/salesController");

describe("<--- CAMADA CONTROLLER --->", () => {
  const response = {};
  const request = {};

  describe(`FUNÇÃO:getAllControllerSales()--> A camada SERVICE
    retorna um um Objeto de erro { message: 'Product not found' }
    quado a camada MODEL retonna um Array vazio []`, () => {
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns({ message: "Sale not found" });
      sinon
        .stub(SaleService, "getAllServiceSales")
        .resolves({ message: "Sale not found" });
    });

    after(() => {
      SaleService.getAllServiceSales.restore();
    });

    it("Testa se Retorna um  OBJETO ", async () => {
      const sales = await SaleController.getAllControllerSales(
        request,
        response
      );
      expect(sales).to.be.an("object");
    });

    it("Testa se a chave message do Objeto retornado é ['Sale not found'] ", async () => {
        const sales = await SaleController.getAllControllerSales(
            request,
            response
          );
      expect(sales.message).to.be.equal("Sale not found");
    });
  });


  describe(`FUNÇÃO:getAllControllerSales()--> A camada SERVICE
  retorna um Array de objetos do tipo [ {id: 2, name: "Traje de encolhimento",
  quantity: 20},] quado a camada MODEL retonna true`, () => {
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns([
        {
          saleId: 1,
          date: '2022-04-01T18:13:15.000Z',
          productId: 1,
          quantity: 5
        },
        {
          saleId: 1,
          date: '2022-04-01T18:13:15.000Z',
          productId: 2,
          quantity: 10
        },
        {
          saleId: 2,
          date: '2022-04-01T18:13:15.000Z',
          productId: 3,
          quantity: 15
        }
      ]);
      sinon.stub(SaleService, "getAllServiceSales").resolves(true);
    });
  
    after(() => {
      SaleService.getAllServiceSales.restore();
    });
  
    it("Testa se Retorna um  Array ", async () => {
        const sale = await SaleController.getAllControllerSales(
            request,
            response
          );
      expect(sale).to.be.an("array");
    });
  });
  
});
