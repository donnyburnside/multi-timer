import { useSelector, useDispatch } from 'react-redux';

export const useTimers = (id) => {
  const dispatch = useDispatch();
  const timers = useSelector((state) => state.timers);
  const timer = useSelector((state) => state.timers.find((x) => x.id === id));
  const setTimers = (payload) => dispatch({ type: 'SET_TIMERS', payload });
  const addTimer = (payload) => dispatch({ type: 'ADD_TIMER', payload });
  const editTimer = (payload) => dispatch({ type: 'EDIT_TIMER', payload });
  const deleteTimer = (payload) => dispatch({ type: 'DELETE_TIMER', payload });

  return { timers, setTimers, timer, addTimer, editTimer, deleteTimer };
};
