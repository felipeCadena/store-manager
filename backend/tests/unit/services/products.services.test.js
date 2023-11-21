const { expect } = require('chai');
const sinon = require('sinon');
const service = require('../../../src/services');
const model = require('../../../src/models');

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
describe('Testando camada service', function () {
  it('Testando getAllProducts ', async function () {
    sinon.stub(model, 'getAllProducts').resolves(mockProducts);

    const allProducts = await service.getAllProducts();

    expect(allProducts.data).to.be.deep.equal(mockProducts);
    expect(allProducts.status).to.be.equal(200);
  });

  it('Testando getProductById', async function () {
    sinon.stub(model, 'getProductById').resolves(mockProducts[0]);

    const product = await service.getProductById(1);

    expect(product.data).to.be.deep.equal(mockProducts[0]);
    expect(product.status).to.be.equal(200);
  });

  // it.only('Testando caso de erro em getProductById', async function () {
  //   sinon.stub(model, 'getProductById').resolves(mockProducts);

  //   const product = await service.getProductById(99);

  //   expect(product.status).to.be.equal(404);
  //   expect(product.data).to.be.deep.equal({
  //     message: 'Product not found',
  //   });
  // });

  afterEach(sinon.restore);
});