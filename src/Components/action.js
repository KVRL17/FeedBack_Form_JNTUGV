// actions.js

export const SET_SUBJECT = 'SET_SUBJECT';
export const SET_FACULTY = 'SET_FACULTY';

export const setSubject = (subject) => ({
  type: SET_SUBJECT,
  payload: subject,
});

export const setFaculty = (faculty) => ({
  type: SET_FACULTY,
  payload: faculty,
});
