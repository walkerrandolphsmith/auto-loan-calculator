import { calculate } from './calculator';
import { round } from './round';

export const getPayment = (n, p, r) => round(calculate(r, n, p));