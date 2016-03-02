import expect from 'expect';
import GetPayment from './../src/getPayment';
import { getPayment } from './../src/getPayment';

describe('Get Payment', () => {

    describe('Given a loan amount, an interest rate, and a number of payments', () => {
        let p, r, n, result;
        let calculate, round;
        beforeEach(() => {
            p = 25000; r = 0.0015; n = 60;
            result = 100.05;

            let collaborators = {
                calculate: (r,n,p) => result,
                round: (number) => result
            };

            calculate = expect.spyOn(collaborators, 'calculate').andCallThrough();
            round = expect.spyOn(collaborators, 'round').andCallThrough();

            GetPayment.__Rewire__('calculate', calculate);
            GetPayment.__Rewire__('round', round);
        });

        it('should be 436.01', () => {
            let expected = getPayment(n, p, r);
            expect(calculate).toHaveBeenCalledWith(r,n,p);
            expect(round).toHaveBeenCalledWith(result);
            expect(expected).toEqual(result);
        });
    });
});