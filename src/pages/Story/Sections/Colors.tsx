import { ColorDemo } from '~components/StatusLabel/StatusLabel';
import { useTheme } from '~hooks/useTheme';
import { FlexColumn, StyledText, FlexRow } from '~styles/global.styles';

export const Colors = () => {
  const { theme } = useTheme();
  const colors = Object.keys(theme.colors);
  return (
    <>
      <FlexColumn alignitems="center" padding="1rem 0" width="100%">
        <StyledText fontWeight={600} fontSize={theme.fonts.large}>
          Цветовая схема
        </StyledText>
      </FlexColumn>
      <FlexRow width="100%" wrap="wrap" alignitems="center" gap={24}>
        {colors.map((color, index) => (
          <ColorDemo
            key={index}
            name={color}
            value={theme.colors[color]}
            color={theme.colors[color]}
          />
        ))}
      </FlexRow>
    </>
  );
};
