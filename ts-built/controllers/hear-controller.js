"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HearController = void 0;
const action_buttons_1 = require("../markup/action-buttons");
class HearController {
    constructor() {
        this.hears = [];
        this.hears.push(...action_buttons_1.keyboard.map(button => button.text));
    }
    generatePassword(ctx) {
        ctx.reply("Password generated.");
    }
}
exports.HearController = HearController;
