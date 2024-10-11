import styled from 'styled-components';
import { theme } from '~themes/theme';
import { calcDisabledBackgroundColor } from '~utils/common';

export const StandardButtonTouchable = styled.div`
  cursor: pointer;
  flex-grow: 1;
  flex: 1;
`;

export const StandardButtonContainer = styled.div<{
  background?: string;
  bordercolor?: string;
  disabled?: boolean;
  isBig?: boolean;
  shadow?: string;
  borderradius?: number;
}>`
  background-color: ${props =>
    calcDisabledBackgroundColor(
      props.background ?? theme.pink.buttonColor.apply,
      props.disabled,
    )};
  box-shadow: 1px 1px 3px 1px
    ${props =>
      calcDisabledBackgroundColor(
        props.background ?? theme.pink.buttonColor.apply,
        props.disabled,
      )};
  display: flex;
  ${props =>
    props.bordercolor ? 'border: 1px solid ' + props.bordercolor : ''};
  height: ${props => (props.isBig ? '4rem' : '2.625rem')};
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.borderradius ?? 22}px;
  flex-direction: row;
  gap: 6px;
  user-select: none;
`;
