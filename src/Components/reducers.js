// reducers.js

import { combineReducers } from 'redux';
import { SET_SUBJECT, SET_FACULTY } from '../Components/action';

const subjectReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SUBJECT:
      return action.payload;
    default:
      return state;
  }
};

const facultyReducer = (state = '', action) => {
  switch (action.type) {
    case SET_FACULTY:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  subject: subjectReducer,
  faculty: facultyReducer,
});

export default rootReducer;
