'use strict';

import { pussyList } from './../../stores/pussyList';
import { addPussy, clearPussies, deletePussy } from './../../actions/pussyListActions';

describe('Pussy List', () => {
  beforeEach(() => {
    pussyList.dispatch(addPussy('Fluffykins'));
    pussyList.dispatch(addPussy('Karo'));
  });

  afterEach(() => {
    pussyList.dispatch(clearPussies());
  });

  it('Should be able to add a new pussy with UUID', (done) => {
    pussyList.dispatch(addPussy('Jekri'));

    const currentState = pussyList.getState();
    expect(currentState[currentState.length - 1].name).toBe('Jekri');
    expect(currentState[currentState.length - 1].id).toBeDefined();

    done();
  });

  it('Should be able to delete all pussies', (done) => {
    pussyList.dispatch(clearPussies());

    expect(pussyList.getState().length).toBe(0);

    done();
  });

  it('Should be able to delete a pussy from the list by UUID', (done) => {
    const currentState = pussyList.getState();
    const pussyToDelete = currentState[0].id;

    pussyList.dispatch(deletePussy(pussyToDelete));

    const nextState = pussyList.getState();
    const stillHasPussy = !!nextState.find(p => p === pussyToDelete);

    expect(stillHasPussy).toBe(false);

    done();
  });
});
