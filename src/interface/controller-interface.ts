import { Context } from "telegraf"

export interface CommandInterface {
    startCommand: (ctx : Context) => void,
}

export interface HearInterface {
    generatePassword: (ctx : Context) => void
    setPasswordLength: (ctx : Context) => void
}

export interface KeyboardInterface {
    generateWordPassword: (ctx : Context) => void
}
