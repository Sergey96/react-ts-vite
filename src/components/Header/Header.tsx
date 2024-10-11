import React, { useEffect } from 'react';
import { HeaderContainer } from './styled';
import { useTheme } from '~hooks/useTheme';
import { FlexColumn, StyledText } from '~styles/global.styles';
import { useAppDispatch } from '~hooks/hooks';
import { Api } from '~api/API';
import { setMe } from '~store/appointment/UserSlice';

interface IProps {
  title: string;
  isBack?: boolean;
  children?: React.ReactNode;
  BottomChildren?: any;
}

export const Header: React.FC<IProps> = () => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  useEffect(() => {
    void Api.auth.me().then(data => {
      if (data.success) {
        dispatch(setMe(data.data));
      } else {
        console.log(data.error);
      }
    });
  }, []);

  return (
    <HeaderContainer>
      <FlexColumn gap={5}>
        <StyledText
          lineheight={22}
          fontSize={20}
          fontWeight={600}
          color={theme.colors.black60}>
          Добро пожаловать
        </StyledText>
      </FlexColumn>
    </HeaderContainer>
  );
};
