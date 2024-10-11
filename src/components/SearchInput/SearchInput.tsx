import { useTheme } from '~hooks/useTheme';
import { ZoomIcon } from '~icons/ZoomIcon';
import {
  SearchContainer,
  SearchDelimiter,
  SearchIconContainer,
  SearchTextInput,
} from './styled';

interface IProps {
  placeholder?: string;
  value: string;
  border?: string;
  onChange: (value: string) => void;
}

export const SearchInput: React.FC<IProps> = ({
  value,
  onChange,
  border,
  placeholder = 'Найти',
}) => {
  const { theme } = useTheme();
  return (
    <SearchContainer>
      <SearchIconContainer>
        <ZoomIcon
          color={border ?? theme.colors.blue100}
          backgroundColor={theme.colors.white}
        />
      </SearchIconContainer>
      <SearchDelimiter />

      <SearchTextInput
        color={theme.colors.black80}
        background={theme.colors.white}
        border={border}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </SearchContainer>
  );
};
