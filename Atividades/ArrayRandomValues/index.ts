import Product from "./src/Product"
import ArrayRandomValues from "./src/arrayRandomValues";

function main(){
    const productList: Product[] = [
        new Product("Caneta", 7.99, 10),
        new Product("Lapis", 7.99, 10),
        new Product("Apagador", 7.99, 10),
        new Product("Cola", 7.99, 10),
        new Product("Apontador", 7.99, 10),
        new Product("Canetão", 7.99, 10)
    ]

    const arrayRandomValues = new ArrayRandomValues(productList);
    const randomProducts1 = arrayRandomValues.getRandomValuesFromArray(2)
    const randomProducts2 = arrayRandomValues.getRandomValuesFromArray(3)
    const randomProducts3 = arrayRandomValues.getRandomValuesFromArray(5)

    console.log("\n random 1: ")
    randomProducts1.forEach(item => {
        console.log(item.getName())
    })

    console.log("\n random 2: ")
    randomProducts2.forEach(item => {
        console.log(item.getName())
    })

    console.log("\n random 3: ")
    randomProducts3.forEach(item => {
        console.log(item.getName())
    })
}

main()