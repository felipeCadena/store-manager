const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const middlewares = require('../../../src/middlewares');

chai.use(sinonChai);

const { expect } = chai;
describe('Testando middlewares', function () {
  it('Testando validateProducts ', async function () {
    const data = { name: 'Bone' };
    const req = { body: data };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    middlewares.validateProducts(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
  });

  afterEach(sinon.restore);
});