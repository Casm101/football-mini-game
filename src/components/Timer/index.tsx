import React, { useEffect, useState } from 'react';

import './styles.scss';

interface TimerProps {
  duration: number;
  runOnEnd?: () => void;
}

export const Timer: React.FC<TimerProps> = ({ duration, runOnEnd }) => {
  const [timeLeft, setTimeLeft] = useState(duration / 1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft <= 1) {
          clearInterval(intervalId);
          if (runOnEnd) runOnEnd();
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (timeLeft <= 0 && runOnEnd) runOnEnd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  return (
    <div className="timer-styled">
      <p>{timeLeft}</p>
    </div>
  );
};
