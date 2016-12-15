import { v4 as getUUID } from 'node-uuid';

export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_PUSSY':
      return [
        ...state,
        {
          id: getUUID(),
          name: action.name,
          photoUrl: 'http://lorempixel.com/640/480/cats/'
        }
      ];
    case 'CLEAR_PUSSIES':
      return [];
    case 'DELETE_PUSSY':
      return state.filter(p => p.id !== action.id);
    default:
      return state;
  }
}
