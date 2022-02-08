import * as React from 'react';

export const useTicker = ({ timers, setTimers, ...props }) => {
  React.useEffect(() => {
    const tick = setInterval(() => {
      const updatedTimers = [...timers].map((x) => {
        const newValue = (x.seconds - 1);

        if (x.running) {
          return {
            ...x,
            seconds: (newValue <= 0) ? 0 : newValue,
            running: (newValue <= 0) ? false : true,
          };
        };

        return x;
      });

      return setTimers(updatedTimers);
    }, 1000);

    return () => clearInterval(tick);
  }, [timers, setTimers]);

  return { timers, setTimers };
};
