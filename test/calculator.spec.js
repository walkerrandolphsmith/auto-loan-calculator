import expect from 'expect';
import { calculate } from './../src/calculator';

describe('Given a loan amount, interest rate, number of payments, when calculating a monthly payment', () => {
  let r, n, p;
  beforeEach(() => {
    r = 1; n = 1; p = 1;
  });

  it('should return an number', () => {
    console.log(calculate, 'CALC');
    expect(calculate(r, n, p)).toBeA('number');
  });
});
