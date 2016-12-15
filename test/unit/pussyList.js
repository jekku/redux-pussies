'use strict';

import { default as pussyList } from 'stores/pussyList';
import { addPussy, clearPussies } from 'actions/pussyListActions';
import { expect } from 'chai';

describe('Pussy List', () => {
  afterEach(() => {
    pussyList.dispatch(clearPussies());
  });

  it('Should be able to add a new pussy with UUID', (done) => {
    pussyList.dispatch(addPussy('Fluffykins', 'Munchkin'));
    const nextState = pussyList.getState();

    expect(nextState[0].name).to.equal('Fluffykins');
    expect(nextState[0].specie).to.equal('Munchkin');
    expect(nextState[0].id).to.exist;

    done();
  });

  it('Should be able to delete all pussies', (done) => {
    pussyList.dispatch(addPussy('Karo', 'Tabby'));
    pussyList.dispatch(addPussy('Jekri', 'Siamese'));
    pussyList.dispatch(clearPussies());

    expect(pussyList.getState().length).to.equal(0);

    done();
  });

  it('Should be able to delete a pussy from the list by UUID');
});
