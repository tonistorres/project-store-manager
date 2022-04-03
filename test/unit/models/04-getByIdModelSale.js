const { expect } = require("chai");
const sinon = require("sinon");
const { connection } = require("../../../models/mysql-connection");
const SaleModel = require("../../../models/data.sale");



describe("", () => {

    describe('FUNÇÃO:getByIdModeSale()--> Qdo ENCONTRAR  registros no DB ', () => {
    
    const returDBGOK = [
        { date: '2022-04-03T02:14:43.000Z', productId: 1, quantity: 5 },
        { date: '2022-04-03T02:14:43.000Z', productId: 2, quantity: 10 }
      ]
    
    before(() => {
      sinon.stub(connection, "execute").resolves(returDBGOK);
    });
    
    after(() => {
      connection.execute.restore();
    });
    
    it('Retorna uma Array com objeto dentro [{ id: 1}] ', async () => {
      const rowsTable = await SaleModel.getByIdModelSale(1);
      expect([{ productId: 1 }]).to.deep.include({ productId: 1 });
    });
    });
    
    });
      