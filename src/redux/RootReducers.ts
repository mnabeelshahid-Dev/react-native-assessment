// src/redux/RootReducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import questionsReducer from './reducers/QuestionsReducer';

const RootReducer = combineReducers({
  questions: questionsReducer,
  // add more reducers here
});

export default RootReducer;
