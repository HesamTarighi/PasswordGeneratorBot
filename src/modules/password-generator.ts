class PasswordGenerator {
    public password : string
    protected passwordLength : number
    private words : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    private chars : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&?."

    constructor (passwordLength? : number) {
        this.cleanPassword()

        this.passwordLength = passwordLength && !isNaN(passwordLength) ? passwordLength : 8
    }

    private generateRandomNumber (max : number) : number {
        return Math.floor(Math.random() * max)
    }

    protected cleanPassword () : void {
        this.password = ""
    }

    public customPassword (password : string) : void {
        this.password = password
    }

    public generateWord () : void {
        this.cleanPassword()

        if (this.passwordLength < 8) console.error("The length of the number must be greater than 7")
        else {
            for (let i = 0; i < this.passwordLength; i++) this.password += this.words[this.generateRandomNumber(this.words.length)]
        }
    }

    public generateNumber () : void {
        this.cleanPassword()

        if (this.passwordLength < 8) console.error("The length of the number must be greater than 7")
        else {
            for (let i = 0; i < this.passwordLength; i++) this.password += this.generateRandomNumber(10).toString()
        }
    }

    public generateChar () : void {
        this.cleanPassword()

        if (this.passwordLength < 8) console.error("The length of the number must be greater than 7")
        else {
            for (let i = 0; i < this.passwordLength; i++) this.password += this.chars[this.generateRandomNumber(this.chars.length)]
        }
    }
}

export default PasswordGenerator
