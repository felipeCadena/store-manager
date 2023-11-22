const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const service = require('../../../src/services');
const controller = require('../../../src/controllers');
const { mockSales, mockSalesPostBody, mockSalesPost } = require('../mocks/mocksSales');

chai.use(sinonChai);
const { expect } = chai;

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

  it('Testando insertSale ', async function () {
    const res = {};
    const req = {
      body: {
        mockSalesPostBody,
      },
    };

    res.status = sinon.stub().returnsThis();
    res.json = sinon.stub();

    sinon.stub(service, 'insertSale').resolves({ status: 201, data: mockSalesPost });

    await controller.insertSale(req, res);

    expect(res.status).to.be.calledWith(201);
    expect(res.json).to.be.deep.calledWith(mockSalesPost);
  });

  afterEach(sinon.restore);
});