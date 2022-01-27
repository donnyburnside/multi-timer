import { combineReducers } from 'redux';

export const timersReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TIMER':
      return [...state, { ...action.payload.timer }];

    case 'REMOVE_TIMER':
      return [...state].filter((x) => x.id !== action.payload.id);

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  timers: timersReducer,
});
