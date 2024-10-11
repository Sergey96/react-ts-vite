import React from 'react';
import { Spinner } from 'react-bootstrap';

interface IProps {
  loading: boolean;
  background?: string;
}

export const Preloader: React.FC<IProps> = ({ loading, background }) => {
  if (!loading) {
    return <></>;
  }

  return (
    <div
      style={{ background: background ?? 'transparent' }}
      className="d-flex justify-content-center mb-4 mt-2">
      <Spinner size="sm" color="primary" />
    </div>
  );
};
