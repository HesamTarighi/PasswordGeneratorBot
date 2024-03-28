"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const PasswordLengthScene = new telegraf_1.Scenes.BaseScene('PasswordLength');
PasswordLengthScene.enter(ctx => ctx.reply("HIIIIIIIIIIIII!"));
exports.default = PasswordLengthScene;
