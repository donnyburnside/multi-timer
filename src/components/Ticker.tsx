import * as React from 'react';

import { useTicker } from '../hooks/ticker';
import { useTimers } from '../hooks/timers';

export default function Ticker({ ...props }) {
  const { timers, setTimers } = useTimers();
  const ticker = useTicker({ timers, setTimers });

  return null;
};
