import styled from 'styled-components';

export const HomeScreenHeaderTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const HomeScreenHeaderPhotoProfile = styled.div`
  display: flex;
  width: 71px;
  height: 71px;
  border-radius: 36px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const HomeScreenHeaderContainer = styled.div`
  gap: 5px;
  flex-grow: 1;
  display: flex;
`;

interface IHomeScreenProfileName {
  color?: string;
  fontSize?: number;
}

interface IHomeScreenUserStatus {
  color?: string;
  fontSize?: number;
}

export const HomeScreenUserStatus = styled.p<IHomeScreenUserStatus>`
  font-size: ${props => props.fontSize ?? 16}px;
  color: ${props => props.color};
  line-height: 16px;
  margin: 0;
  padding: 0;
  font-family: mulish_regular;
`;

export const HomeScreenProfileName = styled.p<IHomeScreenProfileName>`
  font-size: ${props => props.fontSize ?? 18}px;
  color: ${props => props.color};
  margin: 0;
  padding: 0;
  line-height: 24px;
  font-family: mulish_regular;
`;
