const { expect } = require("chai");
const sinon = require("sinon");
const { connection } = require("../../../models/mysql-connection");
const SaleModel = require("../../../models/data.sale");

describe("", () => {
  describe("FUNCÃO: getAllModelSales()--> Qdo ENCONTRAR  registros no DB ", () => {
    const returDBOK = [
      {
        saleId: 1,
        date: "2022-04-01T15:58:45.000Z",
        productId: 1,
        quantity: 5,
      },
      {
        saleId: 1,
        date: "2022-04-01T15:58:45.000Z",
        productId: 2,
        quantity: 10,
      },
      {
        saleId: 2,
        date: "2022-04-01T15:58:45.000Z",
        productId: 3,
        quantity: 15,
      },
    ];

    before(() => {
      sinon.stub(connection, "execute").resolves(returDBOK);
    });

    after(() => {
      connection.execute.restore();
    });

    it("Retona um Array com todos objetos do banco dentro ", async () => {
      const rowsTable = await SaleModel.getAllModelSales();      
      expect([{ saleId: 1 }]).to.deep.include({ saleId: 1 });
    });

  });

  describe("FUNCÃO:  getAllModelSales()--> Qdo NAO ENCONTRAR  registros no DB", () => {
    const returnDBFail = [[]];

    before(() => {
      sinon.stub(connection, "execute").resolves(returnDBFail);
    });

    after(() => {
      connection.execute.restore();
    });

    it("Retorna um Array", async () => {
        const rowsTable = await SaleModel.getAllModelSales();      
      expect(rowsTable).to.be.an("array");
    });

    it("Retorna um Array vazio", async () => {
        const rowsTable = await SaleModel.getAllModelSales();      
      expect(rowsTable).to.be.empty;
    });
  });
});
