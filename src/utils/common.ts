function hexToRgb(hex: string) {
  const result = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex);
  return result != undefined
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : undefined;
}

export const calcDisabledBackgroundColor = (
  color: string,
  disabled = false,
) => {
  if (!disabled) {
    return color;
  }

  const rgb = hexToRgb(color);
  if (!rgb) {
    return color;
  }
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`;
};

export const sleep = (pause: number) =>
  new Promise(resolve => {
    setTimeout(resolve, pause);
  });

export const debounce = <F extends (...args: any) => any>(
  func: F,
  waitFor: number,
) => {
  let timeout: any = 0;

  const debounced = (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};

export const clearDecimalValue = (value: string) => {
  const result = value.match(/\d+/);
  return result?.length ? result[0] : '';
};
