const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models');

const connection = require('../../../src/db/connection');

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
describe('Testando camada model', function () {
  it('Testando getAllProducts ', async function () {
    sinon.stub(connection, 'execute').resolves([mockProducts]);

    const allProducts = await model.getAllProducts();

    expect(allProducts).to.be.an('array');
    expect(allProducts).to.be.deep.equal(mockProducts);
    expect(allProducts).to.be.length(3);
  });

  it('Testando getProductById', async function () {
    sinon.stub(connection, 'execute').resolves([[mockProducts]][0]);

    const product = await model.getProductById(1);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal({
      id: 1,
      name: 'Martelo de Thor',
    });
  });

  it('Testando caso de erro em getProductById', async function () {
    sinon.stub(connection, 'execute').resolves([[{
      message: 'Product not found',
    }]]);

    const product = await model.getProductById(99);

    expect(product).to.be.contain({
      message: 'Product not found',
    });
  });

  afterEach(sinon.restore);
});