import styled from 'styled-components';
import { normalizePxToRem } from '~styles/global.styles';
import { theme } from '~themes/theme';

interface IHomeScreenContainer {
  color?: string;
}

export const SearchContainer = styled.div`
  flex-grow: 1;
`;

export const SearchIconContainer = styled.div<IHomeScreenContainer>`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 1;
  margin-top: 0.375rem;
  margin-left: 0.75rem;
  background-color: ${props => props.color ?? theme.pink.colors.white};
`;

export const SearchDelimiter = styled.div`
  position: absolute;
  width: 0.0625rem;
  height: 1.5rem;
  z-index: 1;
  margin-top: 0.625rem;
  margin-left: 2.625rem;
  background-color: #79797999;
`;

export const SearchInputForm = styled.div<{ size: number }>`
  padding: 0.625rem;
  height: ${props => props.size ?? 44};
`;

export const SearchInputTitle = styled.div<{ color: string }>`
  color: ${props => props.color};
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
`;

export const SearchTextInput = styled.input<{
  color: string;
  background: string;
  size?: 44 | 50;
  border?: string;
  letterSpacing?: string;
  fontWeight?: number;
}>`
  background: ${props => props.background};
  color: ${props => props.color};

  font-size: 0.9375rem;
  border-radius: 1.25rem;
  padding-left: 3.125rem;
  height: ${props => normalizePxToRem(props.size ?? 42)}rem;
  ${props => (props.border ? `border: 0.125rem solid ${props.border}` : '')};
  ${props =>
    props.letterSpacing ? 'letter-spacing: ' + props.letterSpacing : ''};
  ${props =>
    props.fontWeight && props.fontWeight > 500
      ? 'font-family: Mulish Regular'
      : 'font-family: Mulish Regular'};
  width: 100%;
`;
