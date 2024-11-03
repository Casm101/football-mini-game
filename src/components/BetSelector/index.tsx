import React from 'react';

import './styles.scss';
import Image from 'next/image';

interface BetSelectorProps {
  betOptions: string[];
  selectedBetOption?: number;
  setSelectedBet: (index: number) => void;
}

export const BetSelector: React.FC<BetSelectorProps> = ({
  betOptions,
  selectedBetOption,
  setSelectedBet
}) => {
  return (
    <div className="betselector-styled">
      {betOptions.map((option, idx) => {
        const isSelected = selectedBetOption === idx;
        const selectedClass = isSelected ? 'selected' : '';

        return (
          <div
            className={['bet-option', selectedClass].join(' ')}
            key={idx}
            onClick={() => setSelectedBet(idx)}
          >
            <span>{option}</span>
            <Image
              src={`/currency/starknet-token.png`}
              alt={option}
              height={28}
              width={28}
            />
          </div>
        );
      })}
    </div>
  );
};
