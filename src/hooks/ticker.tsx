import * as React from 'react';

export const useTicker = ({ timers, setTimers, ...props }) => {
  React.useEffect(() => {
    const tick = setInterval(() => {
      const updatedTimers = [...timers].map((x) => x.running ? ({
        ...x,
        seconds: Number(x.seconds - 1) <= 0 ? 0 : Number(x.seconds - 1),
        running: Number(x.seconds - 1) <= 0 ? false : true,
      }) : (x));

      return setTimers(updatedTimers);
    }, 1000);

    return () => clearInterval(tick);
  }, [timers, setTimers]);

  return { timers, setTimers };
};
