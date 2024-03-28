"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const bot_config_1 = require("./configs/bot.config");
const controllers_1 = require("./controllers/controllers");
// define commands
const command = new controllers_1.Controller.Command();
// define hears
const hears = new controllers_1.Controller.Hear();
// use hears
bot_config_1.bot.hears(hears.hears.map(hear => hear.text), ctx => ctx.reply('hello'));
console.log(hears.hears.map(hear => hear.text));
// use commands
bot_config_1.bot.command('start', command.startCommand);
bot_config_1.bot.command('generate', command.generateCommand);
bot_config_1.bot.launch();
