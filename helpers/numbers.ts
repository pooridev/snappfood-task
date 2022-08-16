export const formatPrice = (number: number): string => {
  const intl = new Intl.NumberFormat('fa-IR');
  return intl.format(number);
};

const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

export const toPersianDigit = (text: string | number): string => {
  return text.toString().replace(/[0-9]/g, (w) => persianNumbers[+w]);
};
