const { expect } = require("chai");
const sinon = require("sinon");
const { connection } = require("../../../models/mysql-connection");
const UserModel = require("../../../models/data.product");

describe("<--- CAMADA MODEL ---> ", () => {
  describe("FUNCÃO: getAllModelProducts()--> Qdo ENCONTRAR  registros no DB ", () => {
    const returDBGetAllModelProductsOK = [
      { id: 1, name: "Martelo de Thor", quantity: 10 },
      { id: 2, name: "Traje de encolhimento", quantity: 20 },
      { id: 3, name: "Escudo do Capitão América", quantity: 30 },
    ];

    before(() => {
      sinon.stub(connection, "execute").resolves(returDBGetAllModelProductsOK);
    });

    after(() => {
      connection.execute.restore();
    });

    it("Retona um Array com todos objetos do banco dentro ", async () => {
      const rowsTable = await UserModel.getAllModelProducts();
      expect([{ id: 1 }]).to.deep.include({ id: 1 });
      expect([{ id: 2 }]).to.deep.include({ id: 2 });
      expect([{ id: 3 }]).to.deep.include({ id: 3 });
    });
  });

  describe("FUNCÃO: getAllModelProducts()--> Qdo NAO ENCONTRAR  registros no DB", () => {
    const returnDBGetAllModelProducts = [[]];

    before(() => {
      sinon.stub(connection, "execute").resolves(returnDBGetAllModelProducts);
    });

    after(() => {
      connection.execute.restore();
    });

    it("Retorna um Array", async () => {
      const rowsTable = await UserModel.getAllModelProducts();
      expect(rowsTable).to.be.an("array");
    });

    it("Retorna um Array vazio", async () => {
      const rowsTable = await UserModel.getAllModelProducts();
      expect(rowsTable).to.be.empty;
    });
  });
});
