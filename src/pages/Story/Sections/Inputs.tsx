import Checkbox from '~components/Checkbox/Checkbox';
import { SearchInput } from '~components/SearchInput/SearchInput';
import { useTheme } from '~hooks/useTheme';
import { FlexColumn, StyledText, FlexRow } from '~styles/global.styles';

export const Inputs = () => {
  const { theme } = useTheme();
  return (
    <>
      <FlexColumn alignitems="center" padding="1rem 0" width="100%">
        <StyledText fontWeight={600} fontSize={theme.fonts.large}>
          Поля ввода
        </StyledText>
      </FlexColumn>
      <FlexRow alignitems="center" gap={64}>
        <SearchInput
          border={theme.colors.accent100}
          value={''}
          onChange={function (value: string): void {
            throw new Error('Function not implemented.');
          }}
        />
        <SearchInput
          border={theme.colors.black60}
          value={''}
          onChange={function (value: string): void {
            throw new Error('Function not implemented.');
          }}
        />
        <Checkbox
          value={undefined}
          checked={true}
          onChange={() => {}}
          name={undefined}
          id={undefined}
          label="Чекбокс"
          disabled={undefined}
        />
        <Checkbox
          value={undefined}
          checked={false}
          onChange={() => {}}
          name={undefined}
          id={undefined}
          label="Чекбокс"
          disabled={undefined}
        />
      </FlexRow>
    </>
  );
};
