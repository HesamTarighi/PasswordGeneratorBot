import { Context } from "telegraf";
export interface CommandInterface {
    startCommand: (ctx: Context) => void;
    generateCommand: (ctx: Context) => void;
}
export interface HearInterface {
    generatePassword: (ctx: Context) => void;
}
//# sourceMappingURL=controller-interface.d.ts.map