import { Telegraf, Context, Scenes } from 'telegraf'
import dotenv from 'dotenv'

dotenv.config()

interface MyContext extends Context {
    scene: Scenes.SceneContextScene<MyContext>
}

export const bot : Telegraf<MyContext> = new Telegraf(process.env.TOKEN)

export default bot
