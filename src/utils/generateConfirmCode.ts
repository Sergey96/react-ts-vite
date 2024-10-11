const randomNum = (min = 0, max = 9) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export const generateConfirmCode = (lengthCode = 3) => {
  const code = [];
  for (let i = 0; i <= lengthCode; i++) {
    code.push(randomNum());
  }
  return code.join(' ');
};
