import React from 'react';
import { HoverContainer, OutlineButtonContainer } from './styled';
import { useTheme } from '~hooks/useTheme';
import { StyledText } from '~styles/global.styles';

interface IProps {
  title: string;
  onClick: () => void;
}

export const OutlineButton: React.FC<IProps> = ({ title, onClick }) => {
  const { theme } = useTheme();

  return (
    <div onClick={onClick}>
      <HoverContainer>
        <OutlineButtonContainer
          color={theme.colors.blue80}
          border_color={theme.colors.blue80}>
          <StyledText>{title}</StyledText>
        </OutlineButtonContainer>
      </HoverContainer>
    </div>
  );
};
