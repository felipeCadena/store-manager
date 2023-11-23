const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const middlewares = require('../../../src/middlewares');

chai.use(sinonChai);

const { expect } = chai;
describe('Testando middleware validateProducts', function () {
  it('Testando name com length menor que 5 ', async function () {
    const data = { name: 'Bone' };
    const req = { body: data };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    middlewares.validateProducts(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ 
      message: '"name" length must be at least 5 characters long' });
  });
  it('Testando que name não existe ', async function () {
    const data = {};
    const req = { body: data };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    middlewares.validateProducts(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
  });

  it('Testando next ', async function () {
    const data = { name: 'Boneca' };
    const req = { body: data };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    middlewares.validateProducts(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  afterEach(sinon.restore);
});