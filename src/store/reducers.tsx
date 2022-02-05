import { combineReducers } from 'redux';

export const timersReducer = (state = [], action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  timers: timersReducer,
});
