import styled from 'styled-components';
import { normalizePxToRem } from '~styles/global.styles';
import { theme } from '~themes/theme';

export const HeaderContainer = styled.div<{
  background?: string;
}>`
  background-color: ${props => props.background ?? theme.pink.colors.white};
  overflow: hidden;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const ImageBackgroundContainer = styled.div<{ background: string }>`
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  min-width: 20rem;
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;
  gap: 1.25rem;
  background-color: ${props => props.background ?? 'FF8BA7'};
`;

export const HeaderTitle = styled.p<{ color: string; fontSize: number }>`
  color: ${props => props.color ?? theme.pink.colors.black100};
  font-size: ${props => props.fontSize ?? theme.pink.fonts.large}px;
  font-family: 'Roboto';
  letter-spacing: -0.375px;
`;

export const HeaderRightControl = styled.div`
  opacity: 1;
  min-width: 42px;
`;

export const ImageSvgContainer = styled.div<{ size: number; color: string }>`
  width: ${props => normalizePxToRem(props.size)}rem;
  height: ${props => normalizePxToRem(props.size)}rem;
  border: 0.0625rem solid ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props => normalizePxToRem(props.size / 2) + 'rem'};
  background-color: ${props => props.color};
  svg {
    scale: 2;
  }
`;
