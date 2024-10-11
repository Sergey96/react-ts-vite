import { useTheme } from '~hooks/useTheme';
import { FlexColumn, StyledText } from '~styles/global.styles';
import { Colors } from './Sections/Colors';
import { Texts } from './Sections/Texts';
import { Notifications } from './Sections/Notifications';
import { Buttons } from './Sections/Buttons';
import { Inputs } from './Sections/Inputs';
import { Steps } from './Sections/Steps';
import { Icons } from './Sections/Icons';

export const StoryBook = () => {
  const { theme } = useTheme();

  return (
    <FlexColumn gap={16} padding="1rem 2rem" width="100%">
      <FlexColumn alignitems="center" padding="1rem 0" width="100%">
        <StyledText fontWeight={600} fontSize={theme.fonts.big}>
          StoryBook
        </StyledText>
      </FlexColumn>
      <Texts />
      <Notifications />
      <Colors />
      <Buttons />
      <Inputs />
      <Steps />
      <Icons />
    </FlexColumn>
  );
};
