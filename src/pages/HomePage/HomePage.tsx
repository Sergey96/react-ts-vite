import { useTheme } from '~hooks/useTheme';
import { FlexColumn, StyledText } from '~styles/global.styles';

export const HomePage = () => {
  const { theme } = useTheme();

  return (
    <FlexColumn gap={16} alignitems="center" padding="1rem 0" width="100%">
      <FlexColumn gap={48} minwidth="21.25rem" padding="0 1.5rem" width="100%">
        <StyledText
          fontSize={theme.fonts.largest}
          fontWeight={600}
          textalign="center">
          Добро пожаловать
        </StyledText>
        <FlexColumn gap={16} alignitems="center">
          <StyledText fontSize={theme.fonts.medium}>Привет :)</StyledText>
          <StyledText
            fontSize={theme.fonts.medium}
            fontWeight={500}
            textalign="center">
            Для начала работы отредактируйте этот файл и/или добавьте свои
            страницы в /src/pages
          </StyledText>
          <StyledText
            fontSize={theme.fonts.medium}
            fontWeight={500}
            textalign="center">
            Так же вы можете ознакомиться с базовыми компонентами в{' '}
            <a href="/story">StoryBook</a>
          </StyledText>
        </FlexColumn>
      </FlexColumn>
    </FlexColumn>
  );
};
