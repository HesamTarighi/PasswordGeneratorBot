import { Scenes, Markup } from 'telegraf'

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
                ctx['session'].passwordLength = parseInt(ctx.message.text)
                return ctx.scene.leave()
            })
        })
        SetPasswordLengthScene.leave(ctx => ctx.reply(`Entered length: ${ctx['session'].passwordLength}`))

        return SetPasswordLengthScene
    }

    // export const GeneratePassword : any = () => {
    //     const GeneratePasswordScene = new Scenes.BaseScene<any>('Wizard-Hear/GeneratePassword')

    //     GeneratePasswordScene.enter(ctx => {
    //         ctx.reply(
    //             "What password to generate?",
    //             {
    //                 reply_markup: {
    //                     inline_keyboard: [
    //                         [ { text: "Word", callback_data: "generate-password--word" }, { text: "Number", callback_data: "generate-password--number" } ],
    //                         [ { text: "Character", callback_data: "generate-password--char" } ]
    //                     ]
    //                 }
    //             }
    //         )
    //     })

    //     return GeneratePasswordScene
    // }
}

export namespace WizardScenes {
    export const GeneratePassword = new Scenes.WizardScene<any>('Wizard-Hear/GeneratePassword',
        ctx => {
            ctx.reply(
                "What password to generate?",
                {
                    reply_markup: {
                        inline_keyboard: [
                            [ { text: "Word", callback_data: "generate-password--word" }, { text: "Number", callback_data: "generate-password--number" } ],
                            [ { text: "Character", callback_data: "generate-password--char" } ]
                        ]
                    }
                }
            )
        }
    )
}
