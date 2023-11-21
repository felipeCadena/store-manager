const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const service = require('../../../src/services');
const controller = require('../../../src/controllers');

chai.use(sinonChai);

const { expect } = chai;

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
describe('Testando camada controller', function () {
  it('Testando getAllSales ', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returnsThis();
    res.json = sinon.stub();

    sinon.stub(service, 'getAllSales').resolves({ status: 200, data: mockSales });

    await controller.getAllSales(req, res);

    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.deep.calledWith(mockSales);
  });

  it('Testando getSalesById ', async function () {
    const res = {};
    const req = {
      params: {
        id: 1,
      },
    };

    res.status = sinon.stub().returnsThis();
    res.json = sinon.stub();

    sinon.stub(service, 'getSalesById').resolves({ status: 200, data: mockSales });

    await controller.getSalesById(req, res);

    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.deep.calledWith(mockSales);
  });

  afterEach(sinon.restore);
});