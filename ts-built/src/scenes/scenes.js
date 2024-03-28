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
exports.WizardScenes = exports.BaseScenes = void 0;
const telegraf_1 = require("telegraf");
const password_generator_1 = __importDefault(require("../modules/password-generator"));
const enums_1 = require("../enums/enums");
const bot_config_1 = __importDefault(require("../configs/bot.config"));
var BaseScenes;
(function (BaseScenes) {
    BaseScenes.Start = () => {
        const StartScene = new telegraf_1.Scenes.BaseScene('Base-Command/Start');
        StartScene.enter(ctx => {
            ctx.reply("Welcome! \n Password generator bot started.", telegraf_1.Markup.keyboard([
                'Generate Password',
                'Set Password Length'
            ])
                .oneTime()
                .resize());
        });
        return StartScene;
    };
    BaseScenes.SetPasswordLength = () => {
        const SetPasswordLengthScene = new telegraf_1.Scenes.BaseScene('Base-Hear/SetPasswordLength');
        SetPasswordLengthScene.enter(ctx => {
            ctx.reply("Please enter your password length: ");
            SetPasswordLengthScene.on('text', ctx => {
                if (!isNaN(Number(ctx.message.text)))
                    ctx['session'].passwordLength = parseInt(ctx.message.text);
                else
                    ctx['session'].passwordLength = 8;
                return ctx.scene.leave();
            });
        });
        SetPasswordLengthScene.leave(ctx => ctx.reply(`Entered length: ${ctx['session'].passwordLength}`));
        return SetPasswordLengthScene;
    };
})(BaseScenes || (exports.BaseScenes = BaseScenes = {}));
var WizardScenes;
(function (WizardScenes) {
    WizardScenes.GeneratePassword = new telegraf_1.Scenes.WizardScene('Wizard-Hear/GeneratePassword', (ctx) => __awaiter(this, void 0, void 0, function* () {
        yield ctx.reply("What password to generate?", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Word", callback_data: enums_1.PasswordGeneratorCallbackData.WORD }, { text: "Number", callback_data: enums_1.PasswordGeneratorCallbackData.NUMBER }, { text: "Character", callback_data: enums_1.PasswordGeneratorCallbackData.CHARACTER }],
                    [{ text: "Cancel", callback_data: enums_1.PasswordGeneratorCallbackData.CANCEL }]
                ]
            }
        });
        ctx.wizard.state.data = { chatId: ctx.chat.id, inputMessageId: ctx.message.message_id };
        return ctx.wizard.next();
    }), (ctx) => __awaiter(this, void 0, void 0, function* () {
        const generator = new password_generator_1.default(ctx.session.passwordLength);
        function cancel() {
            bot_config_1.default.telegram.deleteMessage(ctx.wizard.state.data.chatId, ctx.wizard.state.data.inputMessageId + 1);
            ctx.scene.leave();
        }
        if (ctx.callbackQuery) {
            if (ctx.callbackQuery.data == enums_1.PasswordGeneratorCallbackData.WORD)
                generator.generateWord();
            if (ctx.callbackQuery.data == enums_1.PasswordGeneratorCallbackData.NUMBER)
                generator.generateNumber();
            if (ctx.callbackQuery.data == enums_1.PasswordGeneratorCallbackData.CHARACTER)
                generator.generateChar();
            if (ctx.callbackQuery.data == enums_1.PasswordGeneratorCallbackData.CANCEL) {
                cancel();
                return;
            }
            ctx.reply(telegraf_1.Format.code(generator.password));
        }
        else
            cancel();
        if (generator.password != '' && generator.password != null)
            cancel();
    }));
})(WizardScenes || (exports.WizardScenes = WizardScenes = {}));
