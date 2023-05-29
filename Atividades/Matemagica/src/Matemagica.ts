import { ErrorMessages } from "./Error"

export class Matemagica {
    public soma(a, b) {
        if(typeof a != 'number' || typeof b != 'number')
            return ErrorMessages.INVALID_OPERATION
        return a + b
    }

    public sub(a, b)  {
        if(typeof a != 'number' || typeof b != 'number')
            return ErrorMessages.INVALID_OPERATION
        return a - b
    }

    public multi(a, b)  {
        if(typeof a != 'number' || typeof b != 'number')
            return ErrorMessages.INVALID_OPERATION
        return a * b
    }

    public div(a, b)  {
        if(typeof a != 'number' || typeof b != 'number')
            return ErrorMessages.INVALID_OPERATION
        return a / b
    }
    
}

export default Matemagica