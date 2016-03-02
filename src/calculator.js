export const calculate = (r, n, p) => {
  if(!r || !n || !p) {
    return -1;
  }else {
    return p * ((r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1))
  }
};