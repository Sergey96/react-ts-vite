import { HomeScreenHeaderContainer, HomeScreenHeaderTop } from './styled';
import type { ReactNode } from 'react';
import React from 'react';
import { Image, StyledText } from '~styles/global.styles';
import { useTheme } from '~hooks/useTheme';

interface IProps {
  name: string;
  surname: string;
  avatar: string;
  children?: ReactNode;
}

export const UserNameWidget: React.FC<IProps> = ({
  name,
  surname,
  avatar,
  children,
}) => {
  const { theme } = useTheme();

  return (
    <HomeScreenHeaderTop>
      <Image size={66} round="true" src={avatar} border={theme.colors.white} />
      <HomeScreenHeaderContainer>
        <StyledText
          fontSize={18}
          fontWeight={600}
          letterSpacing="-0.2px"
          color={theme.colors.white}>
          {name || 'Имя не задано'}
        </StyledText>
        <StyledText
          fontSize={18}
          fontWeight={600}
          letterSpacing="-0.2px"
          color={theme.colors.white}>
          {surname || 'Не задано'}
        </StyledText>
      </HomeScreenHeaderContainer>
      {children}
    </HomeScreenHeaderTop>
  );
};
