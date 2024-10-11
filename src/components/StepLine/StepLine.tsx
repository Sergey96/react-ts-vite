import React, { useMemo } from 'react';

import { ProgressCicle, ProgressContainer, ProgressLine } from './styled';
import { useTheme } from '~hooks/useTheme';

export const StepLine = ({ all = 5, progressValue = 5 }) => {
  const { theme } = useTheme();
  const progress = useMemo(() => new Array(all).fill(0), [all]);

  return (
    <ProgressContainer>
      {progress.map((_, index) => (
        <React.Fragment key={index}>
          <ProgressCicle
            color={
              progressValue >= index + 1
                ? theme.colors.blue80
                : theme.colors.gray
            }
          />
          {all !== index + 1 && (
            <ProgressLine
              color={
                progressValue >= index + 2
                  ? theme.colors.blue80
                  : theme.colors.gray
              }
            />
          )}
        </React.Fragment>
      ))}
    </ProgressContainer>
  );
};
