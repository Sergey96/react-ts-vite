import * as React from 'react';

interface IProps {
  color?: string;
  isRight?: boolean;
}

export const CalendarArrowDoubleIcon: React.FC<IProps> = ({
  color,
  isRight = false,
}) => (
  <svg
    width="24"
    height="15"
    viewBox="0 0 24 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    {isRight ? (
      <>
        <path
          d="M10 7.08423V4.12339C10 0.452832 12.606 -1.05531 15.7886 0.785511L18.3502 2.27147L20.9119 3.75744C24.0945 5.59826 24.0945 8.60346 20.9119 10.4443L18.3502 11.9302L15.7886 13.4162C12.606 15.2238 10 13.7267 10 10.0451V7.08423Z"
          fill={color ?? '#FF8BA7'}
        />
        <path
          d="M0 7.08423V4.12339C0 0.452832 2.60598 -1.05531 5.78861 0.785511L8.35023 2.27147L10.9119 3.75744C14.0945 5.59826 14.0945 8.60346 10.9119 10.4443L8.35023 11.9302L5.78861 13.4162C2.60598 15.2238 0 13.7267 0 10.0451V7.08423Z"
          fill={color ?? '#FF8BA7'}
        />
      </>
    ) : (
      <>
        <path
          d="M13.2983 7.09742L13.2983 10.0583C13.2983 13.7288 10.6924 15.237 7.50973 13.3961L4.94811 11.9102L2.38648 10.4242C-0.796144 8.58338 -0.796144 5.57818 2.38648 3.73736L4.94811 2.2514L7.50973 0.765434C10.6924 -1.04212 13.2983 0.454933 13.2983 4.13658V7.09742Z"
          fill={color ?? '#FF8BA7'}
        />
        <path
          d="M23.2983 7.09742L23.2983 10.0583C23.2983 13.7288 20.6924 15.237 17.5097 13.3961L14.9481 11.9102L12.3865 10.4242C9.20386 8.58338 9.20386 5.57818 12.3865 3.73736L14.9481 2.2514L17.5097 0.765434C20.6924 -1.04212 23.2983 0.454933 23.2983 4.13658V7.09742Z"
          fill={color ?? '#FF8BA7'}
        />
      </>
    )}
  </svg>
);
