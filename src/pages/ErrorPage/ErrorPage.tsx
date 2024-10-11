import { InfoMessage, MESSAGE_TYPE } from '~components/InfoMessage/InfoMessage';
import { FlexColumn } from '~styles/global.styles';

export const ErrorPage = () => (
  <FlexColumn gap={12} width="100%">
    <FlexColumn gap={12} width="100%" padding="16px 16px 60px 16px">
      <FlexColumn padding="0 0 84px 0" gap={14}>
        <InfoMessage text="Возникла ошибка" type={MESSAGE_TYPE.DANGER} />
      </FlexColumn>
    </FlexColumn>
  </FlexColumn>
);
