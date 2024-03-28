"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const StartScene = new telegraf_1.Scenes.BaseScene('Start');
StartScene.enter(ctx => ctx.reply("Hello world!"));
