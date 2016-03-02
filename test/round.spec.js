import expect from 'expect';
import { round } from './../src/round';

describe('Round', () => {

  describe('Given a 0.001, when rounding down', () => {
    let n;
    beforeEach(() => {
      n= 0.001;
    });

    it('should be 0', () => {
      expect(round(n)).toEqual(0);
    });
  });

  describe('Given a 0.005, when rounding down', () => {
    let n;
    beforeEach(() => {
      n= 0.005;
    });

    it('should be 0.01', () => {
      expect(round(n)).toEqual(0.01);
    });
  });

});

