export const calculate = (r, n, p) => p * ((r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1))
