'use strict';

import { createStore } from 'redux';
import {default as pussies} from 'reducers/pussies';

const pussyList = createStore(pussies);

export default pussyList;
