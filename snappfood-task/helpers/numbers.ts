export const formatPrice = (number: number): string => {
  const intl = new Intl.NumberFormat('fa-IR');
  return intl.format(number);
};
