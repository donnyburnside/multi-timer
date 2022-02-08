import { createStore, combineReducers } from 'redux';

const timersReducer = (state = [], action) => {
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
