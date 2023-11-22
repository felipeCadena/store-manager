const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models');
const { mockSales, mockSalesPostBody } = require('../mocks/mocksSales');

const connection = require('../../../src/db/connection');

describe('Testando camada model', function () {
  it('Testando getAllSales ', async function () {
    sinon.stub(connection, 'execute').resolves([mockSales]);

    const allSales = await model.getAllSales();

    expect(allSales).to.be.an('array');
    expect(allSales).to.be.deep.equal(mockSales);
    expect(allSales).to.be.length(2);
  });

  it('Testando getSalesById', async function () {
    sinon.stub(connection, 'execute').resolves([mockSales]);

    const sales = await model.getSalesById(1);

    expect(sales).to.be.an('array');
    expect(sales).to.be.deep.equal(mockSales);
  });

  it('Testando caso de erro em getSalesById', async function () {
    sinon.stub(connection, 'execute').resolves([{
      message: 'Sales not found',
    }]);

    const sales = await model.getSalesById(99);
    expect(sales).to.be.contain({
      message: 'Sales not found',
    });
  });

  it('Testando insertSale', async function () {
    const insertId = 3;
    sinon.stub(connection, 'execute').resolves([{ insertId }]);

    const sales = await model.insertSale(mockSalesPostBody);

    expect(sales).to.be.deep.equal(insertId);
  });

  afterEach(sinon.restore);
});