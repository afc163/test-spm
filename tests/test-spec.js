var expect = require('expect.js');
var test = require('../index');

describe('test', function() {

  it('normal usage', function() {
    expect(test).to.be.a('object');
  });

});
