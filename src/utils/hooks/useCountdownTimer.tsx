import React, { useState, useEffect } from 'react';

export interface useCountdownTimerProps {
  targetDate: Date;
}

export const useCountdownTimer = ({ targetDate }: useCountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = (targetDate.getTime() - now) / 1000;

      const days = Math.floor(difference / 86400);
      const hours = Math.floor((difference % 86400) / 3600);
      const minutes = Math.floor((difference % 3600) / 60);
      const seconds = Math.floor(difference % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => { clearInterval(interval); };
  }, [targetDate]);

  return { timeLeft, targetDate };
};
