import { useTheme } from '~hooks/useTheme';
import { FlexColumn, StyledText, FlexRow } from '~styles/global.styles';

export const Texts = () => {
  const { theme } = useTheme();
  return (
    <>
      <FlexColumn alignitems="center" padding="1rem 0" width="100%">
        <StyledText fontWeight={600} fontSize={theme.fonts.large}>
          Стилизованный текст
        </StyledText>
      </FlexColumn>
      <FlexRow alignitems="center" gap={24}>
        <StyledText fontSize={theme.fonts.small}>
          Текст small {theme.fonts.small}
        </StyledText>
        <StyledText fontSize={theme.fonts.medium}>
          Текст medium {theme.fonts.medium}
        </StyledText>
        <StyledText fontSize={theme.fonts.large}>
          Текст large {theme.fonts.large}
        </StyledText>
        <StyledText fontSize={theme.fonts.largest}>
          Текст largest {theme.fonts.largest}
        </StyledText>
        <StyledText fontSize={theme.fonts.big}>
          Текст big {theme.fonts.big}
        </StyledText>
      </FlexRow>
      <FlexRow alignitems="center" gap={24}>
        <StyledText fontWeight={600} fontSize={theme.fonts.small}>
          Текст small
        </StyledText>
        <StyledText fontWeight={600} fontSize={theme.fonts.medium}>
          Текст medium
        </StyledText>
        <StyledText fontWeight={600} fontSize={theme.fonts.large}>
          Текст large
        </StyledText>
        <StyledText fontWeight={600} fontSize={theme.fonts.largest}>
          Текст largest
        </StyledText>
        <StyledText fontWeight={600} fontSize={theme.fonts.big}>
          Текст big
        </StyledText>
      </FlexRow>
      <FlexRow alignitems="center" gap={24}>
        <StyledText fontWeight={700} fontSize={theme.fonts.small}>
          Текст small
        </StyledText>
        <StyledText fontWeight={700} fontSize={theme.fonts.medium}>
          Текст medium
        </StyledText>
        <StyledText fontWeight={700} fontSize={theme.fonts.large}>
          Текст large
        </StyledText>
        <StyledText fontWeight={700} fontSize={theme.fonts.largest}>
          Текст largest
        </StyledText>
        <StyledText fontWeight={700} fontSize={theme.fonts.big}>
          Текст big
        </StyledText>
      </FlexRow>
    </>
  );
};
