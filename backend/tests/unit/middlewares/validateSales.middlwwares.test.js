const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const middlewares = require('../../../src/middlewares');

chai.use(sinonChai);

const { expect } = chai;
describe('Testando middleware ValidateSales', function () {
  it('Testando body sem quantity', async function () {
    const data = [
      {
        productId: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ];
    const req = { body: data };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    middlewares.validateSales(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" is required' });
  });

  it('Testando body sem productId', async function () {
    const data = [
      {
        quantity: 5,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ];
    const req = { body: data };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    middlewares.validateSales(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"productId" is required' });
  });

  it('Testando quantity igual ou menor que 0', async function () {
    const data = [
      { 
        productId: 2,
        quantity: 0,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ];
    const req = { body: data };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    middlewares.validateSales(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });

  afterEach(sinon.restore);
});