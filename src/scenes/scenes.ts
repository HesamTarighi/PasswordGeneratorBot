import { Scenes, Markup, Format } from 'telegraf'
import PasswordGenerator from '../modules/password-generator'
import { PasswordGeneratorCallbackData } from '../enums/enums'
import bot from '../configs/bot.config'

export namespace BaseScenes {
    export const Start : any = () => {
        const StartScene = new Scenes.BaseScene<any>('Base-Command/Start')

        StartScene.enter(ctx => {
            ctx.reply(
                "Welcome! \n Password generator bot started.",
                Markup.keyboard([
                    'Generate Password',
                    'Set Password Length'
                ])
                .oneTime()
                .resize()
            )
        })

        return StartScene
    }

    export const SetPasswordLength : any = () => {
        const SetPasswordLengthScene = new Scenes.BaseScene<any>('Base-Hear/SetPasswordLength')

        SetPasswordLengthScene.enter(ctx => {
            ctx.reply("Please enter your password length: ")
            SetPasswordLengthScene.on('text', ctx => {
                if (!isNaN(Number(ctx.message.text))) ctx['session'].passwordLength = parseInt(ctx.message.text)
                else ctx['session'].passwordLength = 8
                return ctx.scene.leave()
            })
        })
        SetPasswordLengthScene.leave(ctx => ctx.reply(`Entered length: ${ctx['session'].passwordLength}`))

        return SetPasswordLengthScene
    }
}

export namespace WizardScenes {
    export const GeneratePassword = new Scenes.WizardScene<any>('Wizard-Hear/GeneratePassword',
        async ctx => {
            await ctx.reply(
                "What password to generate?",
                {
                    reply_markup: {
                        inline_keyboard: [
                            [ { text: "Word", callback_data: PasswordGeneratorCallbackData.WORD }, { text: "Number", callback_data: PasswordGeneratorCallbackData.NUMBER }, { text: "Character", callback_data: PasswordGeneratorCallbackData.CHARACTER } ],
                            [ { text: "Cancel", callback_data: PasswordGeneratorCallbackData.CANCEL } ]
                        ]
                    }
                }
            )

            ctx.wizard.state.data = { chatId: ctx.chat.id, inputMessageId: ctx.message.message_id }
            return ctx.wizard.next()
        },
        async ctx => {
            const generator : any = new PasswordGenerator(ctx.session.passwordLength)

            function cancel () : void {
                bot.telegram.deleteMessage(ctx.wizard.state.data.chatId, ctx.wizard.state.data.inputMessageId + 1)
                ctx.scene.leave()
            }

            if (ctx.callbackQuery) {
                if (ctx.callbackQuery.data == PasswordGeneratorCallbackData.WORD) generator.generateWord()
                if (ctx.callbackQuery.data == PasswordGeneratorCallbackData.NUMBER) generator.generateNumber()
                if (ctx.callbackQuery.data == PasswordGeneratorCallbackData.CHARACTER) generator.generateChar()
                if (ctx.callbackQuery.data == PasswordGeneratorCallbackData.CANCEL) {
                    cancel()
                    return
                }

                ctx.reply(Format.code(generator.password))
            } else cancel()

            if (generator.password != '' && generator.password != null) cancel()
        }
    )
}
