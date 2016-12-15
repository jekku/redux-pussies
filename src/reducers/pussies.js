'use strict';

import { v4 as getUUID } from 'node-uuid';

export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_PUSSY':
      return [
        ...state,
        {
          id: getUUID(),
          name: action.name,
        }
      ];
    case 'CLEAR_PUSSIES':
      return [];
    default:
      return state;
  }
}
