import { Telegraf, Context, Scenes } from 'telegraf'

interface SceneContext extends Context {
    scene: Scenes.SceneContextScene<SceneContext>
}

export const bot : Telegraf<SceneContext> = new Telegraf("7020681483:AAGpzfRwJQcFpQiIda4RCmbYZqFSpOVRVZg")

export default bot
