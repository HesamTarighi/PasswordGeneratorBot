"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandsController = void 0;
const telegraf_1 = require("telegraf");
const action_buttons_1 = require("../markup/action-buttons");
class CommandsController {
    constructor() { }
    startCommand(ctx) {
        ctx.reply(
        // ---
        "Welcome! \n Password generator bot started.", 
        // ---
        telegraf_1.Markup.keyboard(action_buttons_1.keyboard.map(button => button.text))
            .oneTime()
            .resize()
        // ---
        );
    }
    generateCommand(ctx) {
        ctx.reply("Password generated.");
    }
}
exports.CommandsController = CommandsController;
