import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useTheme } from '~hooks/useTheme';
import { InfoIcon } from '~icons/InfoIcon';
import { FlexRow, StyledText } from '~styles/global.styles';

export enum MESSAGE_TYPE {
  INFO = 'info',
  WARNING = 'warning',
  DANGER = 'danger',
}
interface IProps {
  text: string;
  onClose?: () => void;
  type?: MESSAGE_TYPE;
}

export const InfoMessage: React.FC<IProps> = ({
  text,
  onClose,
  type = MESSAGE_TYPE.INFO,
}) => {
  const { theme } = useTheme();

  const background = useMemo(() => {
    if (type === MESSAGE_TYPE.INFO) {
      return theme.colors.blue80;
    }
    return type === MESSAGE_TYPE.WARNING
      ? theme.colors.yellow100
      : theme.colors.red80;
  }, [theme.colors.blue80, theme.colors.red80, theme.colors.yellow100, type]);

  return (
    <MessageBlock background={background}>
      <FlexRow gap={6} alignitems="center">
        <InfoIcon />
        <StyledText
          fontWeight={600}
          letterSpacing="-0.14px"
          fontSize={14}
          color={theme.colors.white}>
          {text}
        </StyledText>
      </FlexRow>
    </MessageBlock>
  );
};

const MessageBlock = styled.div<{ background?: string }>`
  background-color: ${props => props.background};
  border-radius: 1.25rem;
  padding: 0.375rem 0.75rem;
  gap: 0.375rem;
  width: 100%;
`;
