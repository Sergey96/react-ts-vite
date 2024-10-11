import React, { useMemo } from 'react';
import { useTheme } from '~hooks/useTheme';
import { StandardButtonContainer, StandardButtonTouchable } from './styled';
import { StyledText } from '~styles/global.styles';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  // INFO = 'info',
  // LIGHT = 'light',
  // DARK = 'dark',
}

interface IProps {
  text?: string;
  variant?: ButtonVariants;
  isOutline?: boolean;
  onClick: () => void;
  disabled?: boolean;
  LeftIcon?: React.JSX.Element;
  RightIcon?: React.JSX.Element | null;
  color?: string;
  borderradius?: number;
  children?: React.ReactNode;
  isBig?: boolean;
}

export const StandardButton: React.FC<IProps> = ({
  text,
  color,
  borderradius,
  variant = ButtonVariants.PRIMARY,
  isOutline,
  onClick,
  disabled,
  LeftIcon,
  RightIcon,
  children,
  isBig,
}) => {
  const { theme } = useTheme();

  const variants = useMemo(
    () => ({
      [ButtonVariants.PRIMARY]: theme.colors.blue80,
      [ButtonVariants.SECONDARY]: theme.colors.black40,
      [ButtonVariants.SUCCESS]: theme.colors.green,
      [ButtonVariants.DANGER]: theme.colors.red100,
      [ButtonVariants.WARNING]: theme.colors.yellow100,
    }),
    [
      theme.colors.black40,
      theme.colors.blue80,
      theme.colors.green,
      theme.colors.red100,
      theme.colors.yellow100,
    ],
  );

  const background = useMemo(() => {
    if (isOutline) {
      return 'transparent';
    }

    return variants[variant];
  }, [isOutline, variant, variants]);

  const borderColor = useMemo(() => {
    if (isOutline) {
      return '#DFDFDF';
    }

    return 'transparent';
  }, [isOutline, variant, variants]);

  const textColor = useMemo(() => {
    if (isOutline) {
      return '#7B7B7B';
    }

    return theme.colors.white;
  }, [isOutline, theme.colors.white, variant, variants]);

  return (
    <StandardButtonTouchable onClick={disabled ? () => {} : onClick}>
      <StandardButtonContainer
        shadow={isOutline ? '#DFDFDF' : color ?? background}
        disabled={disabled}
        isBig={isBig}
        borderradius={borderradius}
        bordercolor={borderColor}
        background={color ?? background}>
        {LeftIcon}
        <StyledText
          fontWeight={600}
          letterSpacing="-0.18px"
          fontSize={isBig ? theme.fonts.large : theme.fonts.medium}
          color={textColor}>
          {text}
        </StyledText>
        {children}
        {RightIcon}
      </StandardButtonContainer>
    </StandardButtonTouchable>
  );
};
