import React from 'react';
import Image from 'next/image';

import './styles.scss';

interface FootballProps {
  isSelected: boolean;
  selectBall?: () => void;
}

export const Football: React.FC<FootballProps> = ({ isSelected, selectBall }) => {
  const selectedClass = isSelected ? '--selected' : '';

  return (
    <div className="football-styled">
      <Image
        src={`/shootout/football${selectedClass}.svg`}
        alt="Football selector icon"
        className={`football ${selectedClass}`}
        onClick={selectBall}
        width={150}
        height={150}
      />
    </div>
  );
};
