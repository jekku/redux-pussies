'use strict';

import { default as pussyList } from 'stores/pussyList';
import { addPussy, clearPussies, deletePussy } from 'actions/pussyListActions';
import { expect } from 'chai';

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
    expect(currentState[currentState.length - 1].name).to.equal('Jekri');
    expect(currentState[currentState.length - 1].id).to.exist;

    done();
  });

  it('Should be able to delete all pussies', (done) => {
    pussyList.dispatch(clearPussies());

    expect(pussyList.getState().length).to.equal(0);

    done();
  });

  it('Should be able to delete a pussy from the list by UUID', (done) => {
    const currentState = pussyList.getState();
    const pussyToDelete = currentState[0].id;

    pussyList.dispatch(deletePussy(pussyToDelete));

    const nextState = pussyList.getState();
    const stillHasPussy = !!nextState.find(p => p === pussyToDelete);

    expect(stillHasPussy).to.be.false;

    done();
  });
});
