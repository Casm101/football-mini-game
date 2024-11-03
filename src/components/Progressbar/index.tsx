import React from 'react';

import './styles.scss';

interface ProgressBarProps {
  percentage: number;
  isHightlighted?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  isHightlighted
}) => {
  const highlightedClass = isHightlighted ? '--highlighted' : '';

  return (
    <div className={['progressbar-styled', highlightedClass].join(' ').trim()}>
      <div style={{ width: `${percentage}%` }} className="progress" />
    </div>
  );
};
