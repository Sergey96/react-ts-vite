// based on iPhone 8's scale
const wscale: number = window.innerWidth / 375;
const hscale: number = window.innerHeight / 667;

function getDevicePixelRatio() {
  let mediaQuery;
  const is_firefox = navigator.userAgent.toLowerCase().includes('firefox');
  if (window.devicePixelRatio !== undefined && !is_firefox) {
    return window.devicePixelRatio;
  } else if (window.matchMedia) {
    mediaQuery =
      '(-webkit-min-device-pixel-ratio: 1.5),\
          (min--moz-device-pixel-ratio: 1.5),\
          (-o-min-device-pixel-ratio: 3/2),\
          (min-resolution: 1.5dppx)';
    if (window.matchMedia(mediaQuery).matches) {
      return 1.5;
    }
    mediaQuery =
      '(-webkit-min-device-pixel-ratio: 2),\
          (min--moz-device-pixel-ratio: 2),\
          (-o-min-device-pixel-ratio: 2/1),\
          (min-resolution: 2dppx)';
    if (window.matchMedia(mediaQuery).matches) {
      return 2;
    }
    mediaQuery =
      '(-webkit-min-device-pixel-ratio: 0.75),\
          (min--moz-device-pixel-ratio: 0.75),\
          (-o-min-device-pixel-ratio: 3/4),\
          (min-resolution: 0.75dppx)';
    if (window.matchMedia(mediaQuery).matches) {
      return 0.7;
    }
  } else {
    return 1;
  }
}

export default function normalize(
  size: number,
  based: 'width' | 'height' = 'width',
) {
  if (window.innerWidth > 520) {
    return size;
  }

  const ratio = getDevicePixelRatio() || 1;

  if (ratio < 1) {
    return size;
  }

  const newSize = based === 'height' ? size * hscale : size * wscale;

  return Math.round(newSize * ratio) / ratio - 1;
}
