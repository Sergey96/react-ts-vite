import { useTheme } from '~hooks/useTheme';
import { CalendarArrowDoubleIcon } from '~icons/CalendarArrowDoubleIcon';
import { CalendarArrowIcon } from '~icons/CalendarArrowIcon';
import { InfoIcon } from '~icons/InfoIcon';
import { PersonIcon } from '~icons/PersonIcon';
import { StarsIcon } from '~icons/StarsIcon';
import { TelegramIcon } from '~icons/TelegramIcon';
import { WhatsAppIcon } from '~icons/WhatsAppIcon';
import { ZoomIcon } from '~icons/ZoomIcon';
import { FlexColumn, FlexRow, StyledText } from '~styles/global.styles';

export const Icons = () => {
  const { theme } = useTheme();

  return (
    <>
      <FlexColumn alignitems="center" padding="1rem 0" width="100%">
        <StyledText fontWeight={600} fontSize={theme.fonts.large}>
          Иконки
        </StyledText>
      </FlexColumn>
      <FlexRow alignitems="center" gap={16}>
        <CalendarArrowDoubleIcon color={theme.colors.accent100} />
        <CalendarArrowIcon color={theme.colors.accent100} />
        <InfoIcon color={theme.colors.accent100} />
        <PersonIcon color={theme.colors.accent100} />
        <StarsIcon color={theme.colors.accent100} />
        <TelegramIcon />
        <WhatsAppIcon />
        <ZoomIcon color={theme.colors.accent100} />
      </FlexRow>
    </>
  );
};
