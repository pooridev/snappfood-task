export const getRandomArrayElement = (array: string[]) => {
  return array[Math.floor(Math.random() * array.length)];
};
