const flippingBits = (num) => {
  const az = ~(num >>> 0);

  return az >>> 0;
};
flippingBits(9);
