const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const middlewares = require('../../../src/middlewares');
const model = require('../../../src/models');

chai.use(sinonChai);

const { expect } = chai;
describe('Testando middleware ValidateSalesProducts', function () {
  it('Testando productId não encontrado', async function () {
    const data = [
      {
        productId: 99,
        quantity: 5,
      },
      {
        productId: 1,
        quantity: 2,
      },
    ];
    const req = { body: data };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();
    
    sinon.stub(model, 'getProductById')
      .resolves(undefined);
    
    await middlewares.validateSalesProducts(req, res, next);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  afterEach(sinon.restore);
});