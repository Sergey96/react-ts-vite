import { InfoMessage, MESSAGE_TYPE } from '~components/InfoMessage/InfoMessage';
import { useTheme } from '~hooks/useTheme';
import { FlexColumn, StyledText, FlexRow } from '~styles/global.styles';

export const Notifications = () => {
  const { theme } = useTheme();
  return (
    <>
      <FlexColumn alignitems="center" padding="1rem 0" width="100%">
        <StyledText fontWeight={600} fontSize={theme.fonts.large}>
          Уведомления
        </StyledText>
      </FlexColumn>
      <FlexRow alignitems="center" gap={24}>
        <InfoMessage text="Инфо: ваш текст" type={MESSAGE_TYPE.INFO} />
        <InfoMessage text="Внимание: ваш текст" type={MESSAGE_TYPE.WARNING} />
        <InfoMessage text="Ошибка: ваш текст" type={MESSAGE_TYPE.DANGER} />
      </FlexRow>
    </>
  );
};
