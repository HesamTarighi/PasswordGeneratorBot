"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const bot_config_1 = __importDefault(require("./configs/bot.config"));
const telegraf_session_local_1 = __importDefault(require("telegraf-session-local"));
const telegraf_1 = require("telegraf");
const scenes_1 = require("./scenes/scenes");
// uasge
dotenv_1.default.config();
const stage = new telegraf_1.Scenes.Stage([
    scenes_1.BaseScenes.Start(), scenes_1.BaseScenes.SetPasswordLength(), // Base Scenes
    scenes_1.WizardScenes.GeneratePassword // Wizard Scenes
]);
bot_config_1.default.use((new telegraf_session_local_1.default({ database: process.env.DATABASE_PATH })).middleware());
bot_config_1.default.use(stage.middleware());
// hears
bot_config_1.default.hears('Generate Password', ctx => ctx.scene.enter('Wizard-Hear/GeneratePassword'));
bot_config_1.default.hears('Set Password Length', ctx => ctx.scene.enter('Base-Hear/SetPasswordLength'));
// commands
bot_config_1.default.command('start', ctx => ctx.scene.enter('Base-Command/Start'));
bot_config_1.default.launch();
