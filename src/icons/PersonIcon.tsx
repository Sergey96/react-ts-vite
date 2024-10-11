import * as React from 'react';
import { useTheme } from '~hooks/useTheme';

interface IProps {
  color?: string;
}

export const PersonIcon: React.FC<IProps> = ({ color }) => {
  const { theme } = useTheme();

  return (
    <svg width={21} height={26} viewBox="0 0 21 26" fill="none">
      <ellipse
        cx={10.2384}
        cy={19.7924}
        rx={9.84513}
        ry={6.11604}
        fill={color ?? theme.colors.white}
      />
      <ellipse
        cx={10.2383}
        cy={5.89231}
        rx={5.46952}
        ry={5.56004}
        fill={color ?? theme.colors.white}
      />
    </svg>
  );
};
