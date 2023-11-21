const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const service = require('../../../src/services');
const controller = require('../../../src/controllers');

chai.use(sinonChai);

const { expect } = chai;

const mockProducts = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do CapitÃ£o AmÃ©rica',
  },
];
describe('Testando camada controller', function () {
  it('Testando getAllProducts ', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returnsThis();
    res.json = sinon.stub();

    sinon.stub(service, 'getAllProducts').resolves({ status: 200, data: mockProducts });

    await controller.getAllProducts(req, res);

    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.deep.calledWith(mockProducts);
  });
  it('Testando getProductById ', async function () {
    const res = {};
    const req = {
      params: {
        id: 1,
      },
    };

    res.status = sinon.stub().returnsThis();
    res.json = sinon.stub();

    sinon.stub(service, 'getProductById').resolves({ status: 200, data: mockProducts[0] });

    await controller.getProductById(req, res);

    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.be.deep.calledWith(mockProducts[0]);
  });

  afterEach(sinon.restore);
});