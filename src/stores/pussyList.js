'use strict';

import { createStore } from 'redux';
import {default as pussies} from './../reducers/pussies';

export const pussyList = createStore(pussies);
