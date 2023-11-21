const { expect } = require('chai');
const sinon = require('sinon');
const service = require('../../../src/services');
const model = require('../../../src/models');

const mockSales = [
  {
    date: '2021-09-09T04:54:29.000Z',
    productId: 1,
    quantity: 2,
  },
  {
    date: '2021-09-09T04:54:54.000Z',
    productId: 2,
    quantity: 2,
  },
];
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

  afterEach(sinon.restore);
});