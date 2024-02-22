import Logger from "./Logger";
import SignupAccountDAO from "./SignupAccountDAO";

export default class Signup {
    constructor (private accountDAO: SignupAccountDAO, private logger: Logger) {

    }

    async execute (input: any) {

    }

    isValidName (name: string) {
        return !name.match(/[a-zA-Z] [a-zA-Z]+/);
    }

    isValidEmail (email: string) {
        return !email.match(/^(.+)@(.+)$/);
    }

    isInvalidCarPlate (carPlate: string) {
		return !carPlate.match(/[A-Z]{3}[0-9]{4}/);
	}
}