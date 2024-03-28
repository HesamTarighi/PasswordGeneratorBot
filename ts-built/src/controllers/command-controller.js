"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keyboard_controller_1 = __importDefault(require("./keyboard-controller"));
class CommandsController extends keyboard_controller_1.default {
    constructor() {
        super();
    }
    startCommand(ctx) {
        ctx.reply("Welcome! \n Password generator bot started.", console.log(this.keyboardButtons)
        // Markup.keyboard(this.keyboardButtons.map(button => button.text))
        // .oneTime()
        // .resize()
        );
    }
}
exports.default = CommandsController;
