const { expect } = require("chai");
const sinon = require("sinon");
const { connection } = require("../../../models/mysql-connection");
const UserModel = require("../../../models/data.product");


describe("Users Model", () => {

describe('Qdo ENCONTRAR  registros no DB fn (getByIdModelProduct())', () => {

const returDBGOK = [{ id: 1, name: 'Martelo de Thor', quantity: 10 }]

before(() => {
  sinon.stub(connection, "execute").resolves(returDBGOK);
});

after(() => {
  connection.execute.restore();
});

it('Retorna uma Array com objeto dentro [{ id: 1}] ', async () => {
  const rowsTable = await UserModel.getByIdModelProduct(1);
  expect([{ id: 1 }]).to.deep.include({ id: 1 });
});
});

});
  