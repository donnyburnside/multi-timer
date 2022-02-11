import { createStore, combineReducers } from 'redux';

const timersReducer = (state = [
  { id: 1, title: 'Timer #1', running: false, seconds: 1234, timestamp: 0, },
  { id: 2, title: 'Timer #2', running: true, seconds: 65, timestamp: Date.now(), },
  { id: 3, title: 'Timer #3', running: false, seconds: 4321, timestamp: 0, },
], action) => {
  switch (action.type) {
    case 'SET_TIMERS':
      return [...action.payload];
    case 'ADD_TIMER':
      return [...state, {...action.payload}];
    case 'EDIT_TIMER':
      return [...state].map((x) => x.id === action.payload.id ? {...x, ...action.payload} : x);
    case 'DELETE_TIMER':
      return [...state].filter((x) => x.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  timers: timersReducer,
});

export const store = createStore(rootReducer);
