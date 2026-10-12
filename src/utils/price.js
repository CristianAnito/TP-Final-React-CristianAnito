export const getFinalPrice = (item) => {
  const discount = item.discountPercent || 0;
  return Math.round(item.price * (1 - discount / 100) * 100) / 100;
};
