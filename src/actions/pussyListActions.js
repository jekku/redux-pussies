'use strict';

const ADD_PUSSY = 'ADD_PUSSY';
const CLEAR_PUSSIES = 'CLEAR_PUSSIES';

export const addPussy = (name) => {
  return {
    type: ADD_PUSSY,
    name,
  };
};

export const clearPussies = () => {
  return {
    type: CLEAR_PUSSIES,
  };
};
