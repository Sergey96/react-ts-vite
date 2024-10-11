import {
  ButtonVariants,
  StandardButton,
} from '~components/Buttons/StandardButton/StandardButton';
import { useTheme } from '~hooks/useTheme';
import { FlexColumn, StyledText, FlexRow } from '~styles/global.styles';

export const Buttons = () => {
  const { theme } = useTheme();
  return (
    <>
      <FlexColumn alignitems="center" padding="1rem 0" width="100%">
        <StyledText fontWeight={600} fontSize={theme.fonts.large}>
          Кнопки
        </StyledText>
      </FlexColumn>
      <FlexRow alignitems="center" gap={24}>
        <StandardButton
          text="Отправить"
          variant={ButtonVariants.PRIMARY}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <StandardButton
          text="Отправить"
          variant={ButtonVariants.SECONDARY}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <StandardButton
          text="Отправить"
          variant={ButtonVariants.SUCCESS}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <StandardButton
          text="Отправить"
          variant={ButtonVariants.WARNING}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <StandardButton
          text="Отправить"
          variant={ButtonVariants.DANGER}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <StandardButton
          text="Отправить"
          isOutline
          variant={ButtonVariants.DANGER}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <StandardButton
          text="Отправить"
          disabled
          variant={ButtonVariants.PRIMARY}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </FlexRow>
    </>
  );
};
