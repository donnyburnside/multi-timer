import { combineReducers } from 'redux';

export const timersReducer = (state = [
  {
    id: 10101,
    title: '1 Week',
    seconds: 604800,
    running: true,
  },
  {
    id: 123,
    title: '1 Day',
    seconds: 86400,
    running: true,
  },
  {
    id: 456,
    title: '1 Hour',
    seconds: 3600,
    running: false,
  },
  {
    id: 789,
    title: '1 Minute',
    seconds: 60,
    running: false,
  },
  {
    id: 1222,
    title: '1 Second',
    seconds: 1,
    running: false,
  }
], action) => {
  switch(action.type) {
    case 'ADD_TIMER':
      console.log('Add Timer:', { state, ...action });
      return [...state, { ...action.payload.timer }];

    case 'EDIT_TIMER':
      console.log('Edit Timer:', { state, ...action });
      return [...state].map((x) => {

        return (x.id === action.payload.timer.id) ? { ...x, ...action.payload.timer } : x;

        // console.log('Edit Timer: MATCH', { x: x.id, timer: action.payload.timer.id, eq: x.id === action.payload.timer.id });
        // if (x.id === action.payload.timer.id) {
        //   return {
        //     ...x,
        //     ...action.payload.timer,
        //     // title: action.payload.timer.title,
        //     // seconds: action.payload.timer.seconds,
        //   }
        // }
        // return x;
      });

    case 'REMOVE_TIMER':
      console.log('Remove Timer:', { state, ...action });
      return [...state].filter((x) => x.id !== action.payload.id);

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  timers: timersReducer,
});
