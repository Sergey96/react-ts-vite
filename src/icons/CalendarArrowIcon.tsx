import * as React from 'react';

interface IProps {
  color?: string;
  isRight?: boolean;
}

export const CalendarArrowIcon: React.FC<IProps> = ({
  color,
  isRight = false,
}) => (
  <svg width={14} height={15} viewBox="0 0 14 15" fill="none">
    {isRight ? (
      <path
        d="M.92 7.223v-2.96C.92.591 3.524-.918 6.707.923L9.27 2.41l2.561 1.486c3.183 1.84 3.183 4.846 0 6.687L9.27 12.069l-2.562 1.486c-3.183 1.807-5.789.31-5.789-3.371V7.223z"
        fill={color ?? '#FF8BA7'}
      />
    ) : (
      <path
        d="M13.594 7.223v-2.96c0-3.671-2.606-5.18-5.789-3.339L5.244 2.41 2.682 3.896c-3.183 1.84-3.183 4.846 0 6.687l2.562 1.486 2.561 1.486c3.183 1.807 5.789.31 5.789-3.371V7.223z"
        fill={color ?? '#FF8BA7'}
      />
    )}
  </svg>
);
