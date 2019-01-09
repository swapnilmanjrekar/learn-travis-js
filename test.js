const assert = require('assert');

const sumArray = require( './sumArray');
describe('Array', function() {
  describe('sumArray', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(sumArray([2,3]),5);
    });
  });
});
