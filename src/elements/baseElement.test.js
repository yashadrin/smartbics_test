import BaseElement from './baseElement';
import assert from 'assert';

describe('BaseElement', () => {
  describe('IsDomElement',() =>{
    it('should return true for body', () => {
      let baseElement = new BaseElement();
      assert.equal(baseElement.isDomElement(document), true);
    });

    it('should return false for test object', () => {
      let baseElement = new BaseElement();
      assert.equal(baseElement.isDomElement({test:'test'}), false);
    });
  });
});