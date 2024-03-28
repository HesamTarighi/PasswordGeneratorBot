"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keyboard_controller_1 = __importDefault(require("./keyboard-controller"));
class HearController extends keyboard_controller_1.default {
    generatePassword(ctx) {
        ctx.reply("What password to generate?", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Word", callback_data: "generate-password--word" }, { text: "Number", callback_data: "generate-password--number" }],
                ]
            }
        });
    }
}
exports.default = HearController;
