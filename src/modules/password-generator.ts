class PasswordGenerator {
    public password : string
    private words : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    private chars : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&?."

    constructor () {
        this.cleanPassword()
    }

    private generateRandomNumber (max : number) : number {
        return Math.floor(Math.random() * max)
    }

    protected cleanPassword () : void {
        this.password = ""
    }

    protected customPassword (password : string) : void {
        this.password = password
    }

    protected generateWord (length = 8) : void {
        this.cleanPassword()

        if (length < 8) console.error("The length of the number must be greater than 7")
        else {
            for (let i = 0; i < length; i++) this.password += this.words[this.generateRandomNumber(this.words.length)]
        }
    }

    protected generateNumber (length = 8) : void {
        this.cleanPassword()

        if (length < 8) console.error("The length of the number must be greater than 7")
        else {
            for (let i = 0; i < length; i++) this.password += this.generateRandomNumber(10).toString()
        }
    }

    protected generateChar (length = 8) : void {
        this.cleanPassword()

        if (length < 8) console.error("The length of the number must be greater than 7")
        else {
            for (let i = 0; i < length; i++) this.password += this.chars[this.generateRandomNumber(this.chars.length)]
        }
    }
}

export default PasswordGenerator
