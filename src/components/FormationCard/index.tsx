import React from 'react';
import Image from 'next/image';
import { ProgressBar } from '../Progressbar';

import './styles.scss';

interface FormationProps {
  name: string;
  attack: number;
  defence: number;
  middle: number;
  image: string;
  isSelected?: boolean;
  onClickCallback?: () => void;
}

export const FormationCard: React.FC<FormationProps> = ({
  name,
  attack,
  defence,
  middle,
  image,
  isSelected,
  onClickCallback
}) => {
  const selectedClass = isSelected ? '--selected' : '';
  const clickableClass = onClickCallback ? '--clickable' : '';

  return (
    <div
      className={['formation-styled', selectedClass, clickableClass].join(' ').trim()}
      onClick={onClickCallback}
    >
      <p className="formation-name">{name}</p>
      <div className="formation-visual">
        <Image src={image} alt={`${name} formation`} width={250} height={350} />
      </div>
      <div className="formation-stats">
        <div className="stat">
          <p className="stat-name">ATK</p>
          <ProgressBar percentage={attack} isHightlighted={isSelected} />
        </div>
        <div className="stat">
          <p className="stat-name">DEF</p>
          <ProgressBar percentage={defence} isHightlighted={isSelected} />
        </div>
        <div className="stat">
          <p className="stat-name">MID</p>
          <ProgressBar percentage={middle} isHightlighted={isSelected} />
        </div>
      </div>
    </div>
  );
};
