'use strict';

import { default as pussyList } from 'stores/pussyList';
import { addPussy, clearPussies } from 'actions/pussyListActions';

pussyList.dispatch(addPussy('Fluffykins', 'Munchkin'));
pussyList.dispatch(addPussy('Shie-Shie', 'Black Tabby'));
console.log(pussyList.getState());
pussyList.dispatch(clearPussies());
console.log(pussyList.getState());

