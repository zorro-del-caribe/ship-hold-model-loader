const test = require('tape');
const loader = require('../index');
const shipHold = require('ship-hold');

test('load models based on folder', function (t) {
  const sh = shipHold();
  const models = loader(sh, {folder: './test/models'});
  t.equal(models.Users.table, 'users');
  t.equal(models.Products.table, 'products');
  t.equal(models.Ignores.table, 'ignores');
  t.equal(sh.models().length, 3);
  t.equal(models.Users, sh.model('Users'));
  t.equal(models.Products, sh.model('Products'));
  t.equal(models.Ignores, sh.model('Ignores'));
  t.end();
});

test('load models based on folder ignoring files', function (t) {
  const sh = shipHold();
  const models = loader(sh, {folder: './test/models',exclude:['Ignores.js']});
  t.equal(models.Users.table, 'users');
  t.equal(models.Products.table, 'products');
  t.equal(sh.models().length, 2);
  t.equal(models.Users, sh.model('Users'));
  t.equal(models.Products, sh.model('Products'));
  t.end();
});

