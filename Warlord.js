"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warlord = void 0;
const Difficulty_1 = require("@civ-clone/core-difficulty/Difficulty");
// Level 1: a ruleset registers the levels it offers in the game's `availableDifficulties`, and its rules read `level()`.
class Warlord extends Difficulty_1.default {
    static level() {
        return 1;
    }
}
exports.Warlord = Warlord;
exports.default = Warlord;
//# sourceMappingURL=Warlord.js.map