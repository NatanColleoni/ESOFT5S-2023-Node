import Product from "./Product"
import { ErrorMessages } from "./errorMessage.enum"

export default class ArrayRandomValues {
    public products: Array<Product>

    constructor(arr) {
        this.products = arr
    }

    public getRandomValuesFromArray(arr: any, randomQuantity: any) {
        if(randomQuantity > arr.length) return ErrorMessages.INVALID_NUMBER_RANGE
        let randomProducts: any = []

        while(randomProducts.length < randomQuantity) {
            let randomNumber: any = Math.floor(Math.random() * arr.length)
            if(!randomProducts.includes(arr[randomNumber])) {
                randomProducts.push(arr[randomNumber])
            }
        }
        return randomProducts
    }
}