const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models');

// const app = require('../../../src/app');
const connection = require('../../../src/db/connection');

const products = [
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
describe('Testando os endpoints de products', function () {
  it('Testando o retorno do endpoint products ', async function () {
    sinon.stub(connection, 'execute').resolves(products);

    const allProducts = await model.getAllProducts();

    expect(allProducts).to.be.an('array');
  });

  afterEach(sinon.restore);
});