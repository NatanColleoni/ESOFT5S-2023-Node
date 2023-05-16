export default class Product {
    name: String
    price: Number
    quantity: Number

    constructor(name: String, price: Number, quantity: Number) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    public getName(){
        return this.name
    }
    public setName(name: String) {
        this.name = name
    }

    public getPrice(){
        return this.price
    }
    public setPrice(price: Number) {
        this.price = price
    }

    public getQuantity(){
        return this.quantity
    }
    public setQuantity(quantity: Number) {
        this.quantity = quantity
    }
}