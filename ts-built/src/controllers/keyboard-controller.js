"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const password_generator_1 = __importDefault(require("../modules/password-generator"));
class KeyboardController extends password_generator_1.default {
    constructor() {
        super();
        this.keyboardButtons = [
            { text: "Generate Password", action: 'generatePassword' }
        ];
    }
    generateWordPassword(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.reply("HIIIIII");
            // console.log(this.password)
            // await this.generateWord(9)
            // ctx.reply(this.password)
        });
    }
}
exports.default = KeyboardController;
