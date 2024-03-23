import { KeyboardInterface } from "../interface/controller-interface"
import { HearInterface } from "../interface/controller-interface"
import { CommandInterface } from "../interface/controller-interface"
import PasswordGenerator from '../modules/password-generator'
import { Context, Markup } from "telegraf"
import bot from "../configs/bot.config"

namespace Controller {
    export class ActionController extends PasswordGenerator implements KeyboardInterface {
        public generateWordPassword = async ctx => {
            await this.generateWord(ctx.session.passwordLength as number || 8)
            ctx.reply(this.password)
        }
        public generateNumberPassword = async ctx => {
            await this.generateNumber(ctx.session.passwordLength as number || 8)
            ctx.reply(this.password)
        }
        public generateCharPassword = async ctx => {
            await this.generateChar(ctx.session.passwordLength as number || 8)
            ctx.reply(this.password)
        }
    }
}

export default Controller
