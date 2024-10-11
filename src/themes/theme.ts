type ColorHex = `#${string}`;
interface TColors {
  black100: ColorHex;
  black80: ColorHex;
  black60: ColorHex;
  black40: ColorHex;
  black20: ColorHex;
  black15: ColorHex;
  black10: ColorHex;

  blue100: ColorHex;
  blue80: ColorHex;
  blue60: ColorHex;
  blue40: ColorHex;
  blue20: ColorHex;

  red100: ColorHex;
  red80: ColorHex;
  red60: ColorHex;
  red40: ColorHex;
  red20: ColorHex;

  yellow100: ColorHex;
  yellow80: ColorHex;
  yellow60: ColorHex;
  yellow40: ColorHex;
  yellow20: ColorHex;

  orange: ColorHex;

  white: ColorHex;
  background: ColorHex;
  accent100: ColorHex;
  accent80: ColorHex;
  accent_2: ColorHex;
  accent_3: ColorHex;
  green: ColorHex;
  yellowgreen: ColorHex;
  gray: ColorHex;
}

export interface IFonts {
  big: number;
  largest: number;
  large: number;
  medium: number;
  small: number;
}

interface IThemeButtons {
  cancel: string;
  apply: string;
}

export interface ThemeType {
  colors: TColors;
  buttonColor: IThemeButtons;
  fonts: IFonts;
}

export enum THEME_NAMES {
  BLUE = 'blue',
  PINK = 'pink',
  TURQUOISE = 'turquoise',
  // DARK = 'dark',
}

export type ThemesType = {
  [THEME_NAMES.PINK]: ThemeType;
  [THEME_NAMES.BLUE]: ThemeType;
  [THEME_NAMES.TURQUOISE]: ThemeType;
  // [THEME_NAMES.DARK]: ThemeType;
};

export const theme: ThemesType = {
  [THEME_NAMES.PINK]: {
    colors: {
      //black
      black100: '#151719',
      black80: '#292D32',
      black60: '#46505D',
      black40: '#6A798A',
      black20: '#B3BFCB',
      black15: '#D5DEE7',
      black10: '#D3D3D3',
      //white
      white: '#FFFFFF',
      //blue
      blue100: '#FF518F',
      blue80: '#FF5D96',
      blue60: '#FEA1AB',
      blue40: '#FFD4DF',
      blue20: '#D4E3FD',
      //red
      red100: '#FF3141',
      red80: '#FF5A67',
      red60: '#FF7B85',
      red40: '#FFB0B6',
      red20: '#FFD0D3',
      //yellow
      yellow100: '#FCBB44',
      yellow80: '#FDC969',
      yellow60: '#FEDFA5',
      yellow40: '#FEECC9',
      yellow20: '#FFF7E6',
      //green
      green: '#51B370',
      yellowgreen: '#5AE470',
      //gray
      gray: '#D4E3FD',
      background: '#fff',
      accent100: '#FF8BA7',
      accent80: '#FFD4DF',
      accent_2: '#FFD4DF',
      accent_3: '#FFD4DF',
      orange: '#FF9457',
    },
    fonts: {
      big: 28,
      largest: 24,
      large: 20,
      medium: 16,
      small: 12,
    },
    buttonColor: {
      cancel: '#FF3141',
      apply: '#0961F5',
    },
  },
  [THEME_NAMES.BLUE]: {
    colors: {
      //black
      black100: 'yellowgreen',
      black80: '#292D32',
      black60: '#46505D',
      black40: '#6A798A',
      black20: '#B3BFCB',
      black15: '#D5DEE7',
      black10: '#D3D3D3',
      //white
      white: '#FFFFFF',
      //blue
      blue100: '#0961F5',
      blue80: '#387FF7',
      blue60: '#88B2FA',
      blue40: '#B8D1FC',
      blue20: '#D4E3FD',
      //red
      red100: '#FF3141',
      red80: '#FF5757',
      red60: '#FF7B85',
      red40: '#FFB0B6',
      red20: '#FFD0D3',
      //yellow
      yellow100: '#FCBB44',
      yellow80: '#FDC969',
      yellow60: '#FEDFA5',
      yellow40: '#FEECC9',
      yellow20: '#FFF7E6',

      orange: '#FF9457',
      //green
      green: '#51B370',
      yellowgreen: '#5AE470',
      //gray
      gray: '#D4E3FD',
      background: '#fff',
      accent100: '#387FF7',
      accent80: '#B8D1FC',
      accent_2: '#88B2FA',
      accent_3: '#B8D1FC',
    },
    fonts: {
      big: 28,
      largest: 24,
      large: 20,
      medium: 16,
      small: 12,
    },
    buttonColor: {
      cancel: '#FF3141',
      apply: '#0961F5',
    },
  },
  [THEME_NAMES.TURQUOISE]: {
    colors: {
      //black
      black100: 'yellowgreen',
      black80: '#292D32',
      black60: '#46505D',
      black40: '#6A798A',
      black20: '#B3BFCB',
      black15: '#D5DEE7',
      black10: '#D3D3D3',
      //white
      white: '#FFFFFF',
      //blue
      blue100: '#17948C',
      blue80: '#26ADA5',
      blue60: '#26ADA5',
      blue40: '#C5E9F1',
      blue20: '#D4E3FD',
      //red
      red100: '#FF3141',
      red80: '#FF5A67',
      red60: '#FF7B85',
      red40: '#FFB0B6',
      red20: '#FFD0D3',
      //yellow
      yellow100: '#FCBB44',
      yellow80: '#FDC969',
      yellow60: '#FEDFA5',
      yellow40: '#FEECC9',
      yellow20: '#FFF7E6',

      orange: '#FF9457',
      //green
      green: '#51B370',
      yellowgreen: '#5AE470',
      //gray
      gray: '#D4E3FD',
      background: '#fff',
      accent100: '#17948C',
      accent80: '#C5E9F1',
      accent_2: '#C5E9F1',
      accent_3: '#17948C',
    },
    fonts: {
      big: 28,
      largest: 24,
      large: 20,
      medium: 16,
      small: 12,
    },
    buttonColor: {
      cancel: '#FF3141',
      apply: '#0961F5',
    },
  },
  // [THEME_NAMES.DARK]: {
  //   colors: {
  //     //black
  //     black100: 'yellowgreen',
  //     black80: '#F1F1F1',
  //     black60: '#F1F1F1',
  //     black40: '#F1F1F1',
  //     black20: '#B3BFCB',
  //     black15: '#D5DEE7',
  //     black10: '#D3D3D3',
  //     //white
  //     white: 'white',
  //     //blue
  //     blue100: '#2E2D3C',
  //     blue80: '#2E2D3C',
  //     blue60: '#26ADA5',
  //     blue40: '#26ADA5',
  //     blue20: '#D4E3FD',
  //     //red
  //     red100: '#FF3141',
  //     red80: '#FF5A67',
  //     red60: '#FF7B85',
  //     red40: '#FFB0B6',
  //     red20: '#FFD0D3',
  //     //yellow
  //     yellow100: '#FCBB44',
  //     yellow80: '#FDC969',
  //     yellow60: '#FEDFA5',
  //     yellow40: '#FEECC9',
  //     yellow20: '#FFF7E6',
  //     //green
  //     green: '#51B370',
  //     //gray
  //     gray: '#D4E3FD',
  //     background: '#17171F',
  //     accent100: '#AE5DFF',
  //     accent80: '#B08FD1',
  //     accent_2: '#B08FD1',
  //     accent_3: '#AE5DFF',
  //     orange: '#FF9457',

  //     yellowgreen: '#5AE470',
  //   },
  //   fonts: {
  //     big: 28,
  //     largest: 24,
  //     large: 20,
  //     medium: 16,
  //     small: 12,
  //   },
  //   buttonColor: {
  //     cancel: '#FF3141',
  //     apply: '#0961F5',
  //   },
  // },
};

export type IDefaultTheme = typeof theme.pink;
