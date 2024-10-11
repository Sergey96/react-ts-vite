import { StepLine } from '~components/StepLine/StepLine';
import { useTheme } from '~hooks/useTheme';
import { FlexColumn, StyledText, FlexRow } from '~styles/global.styles';

export const Steps = () => {
  const { theme } = useTheme();
  return (
    <>
      <FlexColumn alignitems="center" padding="1rem 0" width="100%">
        <StyledText fontWeight={600} fontSize={theme.fonts.large}>
          Прогресс бар
        </StyledText>
      </FlexColumn>
      <FlexRow width="18.75rem" alignitems="center" gap={24}>
        <StepLine />
      </FlexRow>
    </>
  );
};
