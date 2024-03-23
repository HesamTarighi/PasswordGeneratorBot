import dotenv from 'dotenv'
import bot from './configs/bot.config'
import Controller from './controllers/controllers'
import LocalSession from 'telegraf-session-local'
import { Scenes } from 'telegraf'
import { BaseScenes, WizardScenes } from './scenes/scenes'

// uasge
dotenv.config()

const action = new Controller.ActionController()
const stage = new Scenes.Stage([
    BaseScenes.Start(), BaseScenes.SetPasswordLength(), // Base Scenes
    WizardScenes.GeneratePassword // Wizard Scenes
])

bot.use((new LocalSession<any>({ database: process.env.DATABASE_PATH })).middleware())
bot.use(stage.middleware())

// hears
bot.hears('Generate Password', ctx => ctx.scene.enter('Wizard-Hear/GeneratePassword'))
bot.hears('Set Password Length', ctx => ctx.scene.enter('Base-Hear/SetPasswordLength'))

// commands
bot.command('start', ctx => ctx.scene.enter('Base-Command/Start'))

// actions
bot.action('generate-password--word', action.generateWordPassword)
bot.action('generate-password--number', action.generateNumberPassword)
bot.action('generate-password--char', action.generateCharPassword)

bot.launch()
