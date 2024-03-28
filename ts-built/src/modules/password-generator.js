"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PasswordGenerator {
    constructor(passwordLength) {
        this.words = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&?.";
        this.cleanPassword();
        this.passwordLength = passwordLength && !isNaN(passwordLength) ? passwordLength : 8;
    }
    generateRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }
    cleanPassword() {
        this.password = "";
    }
    customPassword(password) {
        this.password = password;
    }
    generateWord() {
        this.cleanPassword();
        if (this.passwordLength < 8)
            console.error("The length of the number must be greater than 7");
        else {
            for (let i = 0; i < this.passwordLength; i++)
                this.password += this.words[this.generateRandomNumber(this.words.length)];
        }
    }
    generateNumber() {
        this.cleanPassword();
        if (this.passwordLength < 8)
            console.error("The length of the number must be greater than 7");
        else {
            for (let i = 0; i < this.passwordLength; i++)
                this.password += this.generateRandomNumber(10).toString();
        }
    }
    generateChar() {
        this.cleanPassword();
        if (this.passwordLength < 8)
            console.error("The length of the number must be greater than 7");
        else {
            for (let i = 0; i < this.passwordLength; i++)
                this.password += this.chars[this.generateRandomNumber(this.chars.length)];
        }
    }
}
exports.default = PasswordGenerator;
