import Difficulty from '@civ-clone/core-difficulty/Difficulty';

// Level 1: a ruleset registers the levels it offers in the game's `availableDifficulties`, and its rules read `level()`.
export class Warlord extends Difficulty {
  static level(): number {
    return 1;
  }
}

export default Warlord;
