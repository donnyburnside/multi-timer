import { combineReducers } from 'redux';

export const timersReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TIMER':
      return [...state, {
        id: Math.random(),
      }];

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  timers: timersReducer,
});
