const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const middlewares = require('../../../src/middlewares');
const model = require('../../../src/models');

chai.use(sinonChai);

const { expect } = chai;
describe('Testando middleware ValidateSaleQuantity', function () {
  it('Testando quantity undefined', async function () {
    const data = {};
    const req = { body: data, params: { id: 1, productId: 2 } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();
    
    await middlewares.validateSalesQuantity(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" is required' });
  });

  it('Testando quantity menor ou igual a 0', async function () {
    const data = {
      quantity: 0,
    };
    const req = { body: data, params: { id: 1, productId: 2 } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();
    
    await middlewares.validateSalesQuantity(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });

  it('Testando product não encontrado no db', async function () {
    const data = {
      quantity: 20,
    };
    const req = { body: data, params: { id: 1, productId: 999 } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();
    
    sinon.stub(model, 'getProductById').resolves(undefined);
  
    await middlewares.validateSalesQuantity(req, res, next);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found in sale' });
  });

  it('Testando sale não encontrado no db', async function () {
    const data = {
      quantity: 20,
    };
    const req = { body: data, params: { id: 999, productId: 1 } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();
    
    sinon.stub(model, 'getProductById').resolves({ id: 2, name: 'Traje de encolhimento' });
    sinon.stub(model, 'getSalesById').resolves([]);
  
    await middlewares.validateSalesQuantity(req, res, next);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
  });

  it('Testando next', async function () {
    const data = {
      quantity: 20,
    };
    const req = { body: data, params: { id: 1, productId: 2 } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();
    
    sinon.stub(model, 'getProductById').resolves({ id: 2, name: 'Traje de encolhimento' });
    sinon.stub(model, 'getSalesById').resolves([
      { date: '2023-11-23T19:18:10.000Z', productId: 1, quantity: 5 },
      { date: '2023-11-23T19:18:10.000Z', productId: 2, quantity: 10 },
    ]);
    
    await middlewares.validateSalesQuantity(req, res, next);
    expect(next).to.have.been.calledWith();
  });

  afterEach(sinon.restore);
});