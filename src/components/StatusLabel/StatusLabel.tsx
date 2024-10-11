import { useTheme } from '~hooks/useTheme';
import {
  FlexColumn,
  normalizePxToRem,
  StyledText,
} from '~styles/global.styles';

export const ColorDemo = ({ color, name, value, size = 24 }) => {
  const { theme } = useTheme();
  return (
    <FlexColumn gap={4} alignitems="center">
      <FlexColumn
        background={color}
        width={normalizePxToRem(size) + 'rem'}
        height={normalizePxToRem(size) + 'rem'}
        borderradius={size / 2}></FlexColumn>
      {name && <StyledText fontSize={theme.fonts.small}>{name}</StyledText>}
      {value && <StyledText fontSize={theme.fonts.small}>{value}</StyledText>}
    </FlexColumn>
  );
};
