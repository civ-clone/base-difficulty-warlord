import Difficulty from '@civ-clone/core-difficulty/Difficulty';
import Warlord from '../Warlord';
import { expect } from 'chai';

describe('Warlord', (): void => {
  it('is a difficulty at level 1', (): void => {
    expect(Object.prototype.isPrototypeOf.call(Difficulty, Warlord)).true;
    expect(Warlord.level()).equal(1);
    expect(Warlord.name).equal('Warlord');
  });
});
