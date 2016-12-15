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
          specie: action.specie
        }
      ];
    case 'CLEAR_PUSSIES':
      return [];
    default:
      return state;
  }
}
