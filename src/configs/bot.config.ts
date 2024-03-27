import { Telegraf, Context, Scenes } from 'telegraf'

interface SceneContext extends Context {
    scene: Scenes.SceneContextScene<SceneContext>
}

export const bot : Telegraf<SceneContext> = new Telegraf(process.env.TOKEN)

export default bot
