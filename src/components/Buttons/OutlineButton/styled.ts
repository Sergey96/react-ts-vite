import styled from 'styled-components';
import { theme } from '~themes/theme';

interface IOutlineButton {
  color?: string;
  fontSize?: number;
  border_color?: string;
}

export const HoverContainer = styled.div`
  :hover {
    background-color: #387ff7;
    cursor: pointer;
    > p {
      color: white;
    }
  }
`;

export const OutlineButtonContainer = styled.div<IOutlineButton>`
  color: ${props => props.color ?? theme.pink.colors.blue80};
  border: 1px solid ${props => props.border_color ?? '#FF8BA7'};
  border-radius: 24px;
  text-align: center;
  padding: 4px 15px;
  font-size: 12px;
  font-family: mulish_bold;
`;
