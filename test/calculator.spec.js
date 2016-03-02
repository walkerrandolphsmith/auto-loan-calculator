import expect from 'expect';
import { calculate } from './../src/calculator';

describe('Calculator', () => {

  describe('Given a loan amount is not provided, when calculating a monthly payment', () => {
    let r, n, p;
    beforeEach(() => {
      r = 1; n = 1; p = undefined;
    });

    it('should return an number', () => {
      expect(calculate(r, n, p)).toEqual(-1);
    });
  });

  describe('Given a interest rate is not provided, when calculating a monthly payment', () => {
    let r, n, p;
    beforeEach(() => {
      r = undefined; n = 1; p = 1;
    });

    it('should return an number', () => {
      expect(calculate(r, n, p)).toEqual(-1);
    });
  });

  describe('Given the number of payments is not provided, when calculating a monthly payment', () => {
    let r, n, p;
    beforeEach(() => {
      r = 1; n = undefined; p = 1;
    });

    it('should return an number', () => {
      expect(calculate(r, n, p)).toEqual(-1);
    });
  });


  describe('Given a loan amount, interest rate, number of payments, when calculating a monthly payment', () => {
    let r, n, p;
    beforeEach(() => {
      r = 1; n = 1; p = 1;
    });

    it('should return an number', () => {
      expect(calculate(r, n, p)).toBeA('number');
    });
  });

});

