import type { ReactNode } from 'react';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useTheme } from '~hooks/useTheme';
import { theme } from '~themes/theme';

import Mulish from '~/assets/fonts/mulish_regular.ttf';
import MulishBold from '~/assets/fonts/mulish_bold.ttf';
import MulishBoldItalic from '~/assets/fonts/mulish_bold_italic.ttf';
import MulishExtraBold from '~/assets/fonts/mulish_extra_bold.ttf';
import MulishBlackItalic from '~/assets/fonts/mulish_black_italic.ttf';

import { useAppSelector } from '~hooks/hooks';
import { getFontSize } from '~store/settings/SettingsSlice';

export const normalizePxToRem = (value: number) => value / 16;

interface IBody {
  background?: string;
  gap?: number;
  children?: ReactNode;
}

export const StyledBody = styled.div<IBody>`
  display: flex;
  flex: 1;
  gap: ${props => props.gap ?? 0}px;
  background-color: ${props => props.background};
  padding-top: 0rem;
  flex-direction: column;
`;

export const Body: React.FC<IBody> = ({ background, gap, children }) => {
  const themeObj = useTheme();
  return (
    <StyledBody
      background={background ?? themeObj.theme.colors.background}
      gap={gap}>
      {children}
    </StyledBody>
  );
};

export const ViewH = styled.div<{ height: string }>`
  height: ${props => props.height};
`;

export const Flex1 = styled.div`
  display: flex;
  flex: 1;
`;

interface IFlexView {
  gap?: number;
  justify?: string;
  overflow?: string;
  alignitems?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  background?: string;
  isBorder?: boolean;
  wrap?: string;
  flex?: number;
  padding?: string;
  border?: string;
  borderWidth?: number;
  borderradius?: number | string;
  maxwidth?: string;
  minwidth?: string;
  onClick?: () => void;
  cursor?: string;
}

export const FlexRow = styled.div<IFlexView>`
  display: flex;
  flex-direction: row;
  ${props => (props.gap ? 'gap: ' + normalizePxToRem(props.gap) + 'rem' : '')};
  ${props => (props.overflow ? 'overflow: ' + props.overflow : '')};
  ${props => (props.justify ? 'justify-content: ' + props.justify : '')};
  ${props => (props.alignitems ? 'align-items: ' + props.alignitems : '')};
  ${props => (props.height ? 'height: ' + props.height : '')};
  ${props => (props.width ? 'width: ' + props.width : '')};
  ${props => (props.maxwidth ? 'max-width: ' + props.maxwidth : '')};
  ${props => (props.minwidth ? 'min-width: ' + props.minwidth : '')};
  ${props => (props.minHeight ? 'min-height: ' + props.minHeight : '')};
  ${props => (props.background ? 'background: ' + props.background : '')};
  ${props => (props.isBorder ? 'border: 1px solid' : '')};
  ${props => (props.wrap ? 'flex-wrap:' + props.wrap : '')};
  ${props => (props.flex ? 'flex: ' + props.flex : '')};
  ${props => (props.padding ? 'padding: ' + props.padding : '')};
  ${props =>
    props.border
      ? `border: ${props.borderWidth || 1}px solid ${props.border}`
      : ''};
  ${props =>
    props.borderradius ? 'border-radius: ' + props.borderradius + 'px' : ''};
  ${props => (props.cursor ? 'cursor: ' + props.cursor : '')};
`;

interface IShadowBox {
  gap?: number;
  onClick?: () => void;
  cursor?: string;
  border?: string;
  padding?: string;
}

export const ShadowBox = styled.div<IShadowBox>`
  border-radius: 0.75rem;
  width: 100%;
  box-shadow: #e5e2e2 0.125rem 0.125rem 0.25rem 0.125rem;
  ${props => (props.gap ? 'gap: ' + props.gap + 'px' : '')};
  ${props => (props.padding ? 'padding: ' + props.padding : '')};
  ${props => (props.cursor ? 'cursor: ' + props.cursor : '')};
  ${props => (props.border ? 'border: 2px solid' + props.border : '')};
`;

export const FlexColumn = styled.div<IFlexView>`
  display: flex;
  flex-direction: column;
  ${props => (props.gap ? 'gap: ' + props.gap + 'px' : '')};
  ${props => (props.overflow ? 'overflow: ' + props.overflow : '')};
  ${props => (props.justify ? 'justify-content: ' + props.justify : '')};
  ${props => (props.alignitems ? 'align-items: ' + props.alignitems : '')};
  ${props => (props.height ? 'height: ' + props.height : '')};
  ${props => (props.width ? 'width: ' + props.width : '')};
  ${props => (props.maxwidth ? 'max-width: ' + props.maxwidth : '')};
  ${props => (props.minHeight ? 'min-height: ' + props.minHeight : '')};
  ${props => (props.background ? 'background: ' + props.background : '')};
  ${props => (props.isBorder ? 'border: 1px solid' : '')};
  ${props => (props.flex ? 'flex: ' + props.flex : '')};
  ${props => (props.padding ? 'padding: ' + props.padding : '')};
  ${props =>
    props.border
      ? `border: ${normalizePxToRem(props.borderWidth || 1)}rem solid ${props.border}`
      : ''};
  ${props =>
    props.borderradius ? 'border-radius: ' + props.borderradius + 'px' : ''};
  ${props => (props.cursor ? 'cursor: ' + props.cursor : '')};
`;

export const Image = styled.img<{
  size: number;
  round?: 'true' | 'false';
  border?: string;
}>`
  width: ${props => normalizePxToRem(props.size)}rem;
  height: ${props => normalizePxToRem(props.size)}rem;
  ${props =>
    props.round
      ? 'border-radius: ' + normalizePxToRem(props.size / 2) + 'rem'
      : ''};
  ${props => (props.border ? 'border: 0.125rem solid' + props.border : '')};
  object-fit: cover;
`;
interface IImageMock {
  size: number;
  isRound?: boolean;
  background?: string;
}

export const ImageMock = styled.div<IImageMock>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  ${props => (props.isRound ? 'border-radius: ' + props.size / 2 + 'px' : '')};
  background: ${props => props.background ?? theme.pink.colors.blue60};
`;

interface IStyledText {
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  letterSpacing?: string;
  textalign?: string;
  textDecoration?: string;
  lineheight?: number;
}

export const ViewAbsolute = styled.div`
  position: absolute;
`;

export const ViewAbsoluteCustom = styled.div`
  position: absolute;
  top: -6.25rem;
  left: 0;
  height: 6.25rem;
  width: 6.25rem;
  border: 1px solid;
  background: red;
`;

export const FlexGrow1 = styled.div<{ gap?: number }>`
  flex-grow: 1;
  ${props => (props.gap ? 'gap: ' + props.gap + 'px' : '')}
`;

export const Line = styled.div<{ color?: string }>`
  background-color: ${props => props.color ?? theme.pink.colors.black10};
  height: 1.5px;
  width: 100%;
`;

export const FixedPosition = styled.div<{
  bottom?: string;
  top?: string;
  width: string;
}>`
  position: fixed;
  ${props => (props.bottom ? `bottom: ${props.bottom}` : '')};
  ${props => (props.top ? `top: ${props.top}` : '')};
  width: ${props => props.width};
  max-width: 30rem;
  min-width: 20rem;
`;
export const getFontNameByWeight = (weight?: number) => {
  switch (weight) {
    case 700:
      return 'Mulish Extra Bold';
    case 600:
      return 'Mulish Bold';
    case 500:
      return 'Mulish Regular';
    default:
      return 'Mulish Regular';
  }
};

export const StyledText = styled.p<IStyledText>`
  ${props =>
    props.fontSize
      ? 'font-size: ' + normalizePxToRem(props.fontSize) + 'rem'
      : '1rem'};
  ${props =>
    props.lineheight
      ? 'line-height: ' + normalizePxToRem(props.lineheight) + 'rem'
      : ''};
  ${props => (props.fontWeight ? 'font-weight: ' + props.fontWeight : '')};
  ${props => (props.color ? 'color: ' + props.color : '')};
  ${props =>
    props.letterSpacing ? 'letter-spacing: ' + props.letterSpacing : ''};
  font-family: ${props => getFontNameByWeight(props.fontWeight)};
  ${props => (props.textalign ? 'text-align: ' + props.textalign : '')};
  ${props =>
    props.textDecoration ? 'text-decoration: ' + props.textDecoration : ''};
`;

interface IGlobalStyles {
  fontSize?: number;
}

export const GlobalStylesCustom = createGlobalStyle<IGlobalStyles>`

html {
  font-size: ${props => (props.fontSize ? props.fontSize : 16)}px;
  height: 100vh;
}

@font-face {
  font-family: 'Mulish Regular';
  letter-spacing: -1%;
  src: url(${Mulish}) format('truetype'),
}
@font-face {
  font-family: 'Mulish Bold';
  letter-spacing: -1%;
  src: url(${MulishBold}) format('truetype'),
}
@font-face {
  font-family: 'Mulish Bold Italic';
  letter-spacing: -1%;
  src: url(${MulishBoldItalic}) format('truetype'),
}
@font-face {
  font-family: 'Mulish Extra Bold';
  letter-spacing: -1%;
  src: url(${MulishExtraBold}) format('truetype'),
}
@font-face {
  font-family: 'Mulish Black Italic';
  letter-spacing: -1%;
  src: url(${MulishBlackItalic}) format('truetype'),
}

body {
  font-family: 'Mulish Regular', sans-serif;
}
`;

export const GlobalStyles = () => {
  const fontSize = useAppSelector(getFontSize);
  return <GlobalStylesCustom fontSize={fontSize} />;
};
