const { expect } = require("chai");
const sinon = require("sinon");
const { connection } = require("../../../models/mysql-connection");
const SaleModel = require("../../../models/data.sale");



describe("", () => {

    describe('FUNÇÃO:createModelSales()--> Qdo ENCONTRAR  registros no DB ', () => {
        
    before(() => {
      sinon.stub(connection, "execute").resolves([{}]);
    });
    
    after(() => {
      connection.execute.restore();
    });
    
    it('Retorna um objeto  {id: insertId} ', async () => {
      const objectId = await SaleModel.createModelSales();      
      expect(objectId).to.be.an('object');
    });
    });
    
    });
      




















