export const clearNumber = (phone?: string, minLength = 0) => {
  if (!phone) {
    return '';
  }

  phone = phone.replace('+7', '');
  const stage = phone.match(/\d/g);

  if (!stage) {
    return '';
  }

  const result = `${stage.slice(-11).join('')}`;

  if (minLength && result.length < minLength) {
    return '';
  }

  if (result?.startsWith('88')) {
    return result?.slice(1);
  }

  return result.slice(0, 10);
};

export const formatPhone = (phone?: string, isClear = true) => {
  let value = phone;
  if (isClear) {
    value = clearNumber(phone);
  }
  const part1 = value?.slice(0, 3);
  const part2 = value?.slice(3, 6);
  const part3 = value?.slice(6, 8);
  const part4 = value?.slice(8, 10);

  if (!part1) {
    return '+7 (';
  }
  if (part1 && !part2 && !part3 && !part4) {
    return `+7 (${part1}`;
  }
  if (part1 && part2 && !part3 && !part4) {
    return `+7 (${part1})-${part2}`;
  }
  if (part1 && part2 && part3 && !part4) {
    return `+7 (${part1})-${part2}-${part3}`;
  }

  return `+7 (${part1})-${part2}-${part3}-${part4}`;
};

export const formatPhoneWeb = (phone?: string, isClear = true) => {
  let value = phone;

  if (isClear) {
    value = clearNumber(phone);
  }

  const part1 = value?.slice(0, 3);
  const part2 = value?.slice(3, 6);
  const part3 = value?.slice(6, 8);
  const part4 = value?.slice(8, 10);

  if (!part1) {
    return '+7 (';
  }
  if (part1 && !part2 && !part3 && !part4) {
    return `+7 (${part1}`;
  }
  if (part1 && part2 && !part3 && !part4) {
    return `+7 (${part1}) ${part2}`;
  }
  if (part1 && part2 && part3 && !part4) {
    return `+7 (${part1}) ${part2} ${part3}`;
  }

  return `+7 (${part1}) ${part2} ${part3} ${part4}`;
};
