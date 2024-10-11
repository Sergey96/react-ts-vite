import styled from "styled-components"
import { theme } from "~themes/theme"

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`

export const ProgressCicle = styled.div<{ color: string }>`
  height: 18px;
  width: 18px;
  z-index: 10;
  border-radius: 9px;
  background-color: ${(props) => props.color ?? theme.pink.colors.blue80};
`

export const ProgressLine = styled.div<{ color: string }>`
  flex: 1;
  z-index: 1;
  height: 5px;
  border: 1px solid ${(props) => props.color ?? theme.pink.colors.gray};
  transform: scaleX(1.1);
  background-color: ${(props) => props.color ?? theme.pink.colors.gray};
`
