import React, { FC, useState, useEffect } from 'react';
import Timer from '../component/Timer';

const useTimer = (limitSec: number): [number, () => void] => {
  const [timeLeft, setTimeLeft] = useState(limitSec);

  const reset = () => {
    setTimeLeft(limitSec);
  };

  const tick = () => {
    setTimeLeft(prevTime => (prevTime === 0 ? limitSec : prevTime - 1 ));
  };

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  return [timeLeft, reset];
};

const TimerContainer: FC = () => {
  const LIMIT = 60;
  const [timeLeft, reset] = useTimer(LIMIT);

  return <Timer timeLeft={timeLeft} reset={reset} />;
}

export default TimerContainer;
