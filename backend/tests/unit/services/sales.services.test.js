const { expect } = require('chai');
const sinon = require('sinon');
const service = require('../../../src/services');
const model = require('../../../src/models');
const { mockSales, mockSalesPostBody, mockSalesPost } = require('../mocks/mocksSales');

describe('Testando camada service', function () {
  it('Testando getAllSales ', async function () {
    sinon.stub(model, 'getAllSales').resolves([mockSales]);

    const allSales = await service.getAllSales();

    expect(allSales.data).to.be.deep.equal([mockSales]);
    expect(allSales.status).to.be.equal(200);
  });

  it('Testando getSalesById', async function () {
    sinon.stub(model, 'getSalesById').resolves([mockSales]);

    const sales = await service.getSalesById(1);

    expect(sales.data).to.be.deep.equal([mockSales]);
    expect(sales.status).to.be.equal(200);
  });

  it('Testando caso de erro em getSalesById', async function () {
    sinon.stub(model, 'getSalesById').resolves([]);

    const sales = await service.getSalesById(99);
    expect(sales.data).to.be.deep.equal({ message: 'Sale not found' });
    expect(sales.status).to.be.equal(404);
  });

  it('Testando a insertSale', async function () {
    const insertId = 3;
    sinon.stub(model, 'insertSale').resolves(insertId);

    const sales = await service.insertSale(mockSalesPostBody);
    expect(sales.data).to.be.deep.equal(mockSalesPost);
    expect(sales.status).to.be.equal(201);
  });

  it('Testando a deleteSales', async function () {
    const id = 1;
    const affectedRows = 1;
    sinon.stub(model, 'deleteSales').resolves(affectedRows);

    const sales = await service.deleteSales(id);
    
    expect(sales.data).to.be.deep.equal(affectedRows);
    expect(sales.status).to.be.equal(204);
  });

  it('Testando caso de erro na deleteSales', async function () {
    const id = 99;
    const affectedRows = 0;
    sinon.stub(model, 'deleteSales').resolves(affectedRows);

    const sales = await service.deleteSales(id);
    
    expect(sales.data).to.be.deep.equal({ message: 'Sale not found' });
    expect(sales.status).to.be.equal(404);
  });

  afterEach(sinon.restore);
});