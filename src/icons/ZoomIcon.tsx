import * as React from 'react';

interface IProps {
  color: string;
  backgroundColor?: string;
}

export const ZoomIcon: React.FC<IProps> = ({ color, backgroundColor }) => (
  <svg width={22} height={21} viewBox="0 0 22 21" fill="none">
    <circle
      cx={10.5}
      cy={10.5}
      r={9.5}
      fill={backgroundColor}
      stroke={color}
      strokeWidth={2}
    />
    <path stroke={color} strokeWidth={2} d="M17.7071 17.2929L20.7071 20.2929" />
  </svg>
);
