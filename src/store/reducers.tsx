import { combineReducers } from 'redux';

export const timersReducer = (state = [], action) => {
  return state;
};

export const rootReducer = combineReducers({
  timers: timersReducer,
});
