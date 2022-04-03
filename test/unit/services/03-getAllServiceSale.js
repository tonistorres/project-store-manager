c
describe("", () => {
  describe("FUNÇÃO:getAllServiceSales()--> Qdo RETORNAR REGISTROS do DB", () => {
    const resultDBOK = [
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
      sinon
        .stub(SaletModel,"getAllModelSales")
        .resolves(resultDBOK);
    });

    after(() => {
        SaletModel.getAllModelSales.restore();
    });

    it("Retona um Array com todos objetos do DB ", async () => {
      const rowsTable = await SaleService.getAllServiceSales();
      expect([{ saleId: 1 }]).to.deep.include({ saleId: 1 });      
    });
  });

  describe("FUNÇÃO:getAllServiceSales()--> Qdo NÃO RETORNAR REGISTROS do DB", () => {
    
    before(() => {
      sinon.stub(SaletModel, "getAllModelSales").resolves([]);
    });

    after(() => {
      SaletModel.getAllModelSales.restore();
    });

    it("É um objeto ", async () => {
            const rowsTable = await SaleService.getAllServiceSales();
      expect(rowsTable).to.be.an("object");
    });

    it("retorna status e mensagem de erro [Sale not found] ", async () => {
            const rowsTable = await SaleService.getAllServiceSales();
      expect(rowsTable.message).to.be.equals("Sale not found");
    });
  });
});
