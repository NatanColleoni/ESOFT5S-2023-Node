import Product from "../models/product";
import { writeFile, readFile } from 'fs/promises'

class ProductService {
    async createProduct(product: Product[]){
        try {
            await writeFile('products.json', JSON.stringify(product))
        }catch(err) {
            throw new Error(err);
        }
    }

    async listProducts(): Promise<Product[]>{
        const readProduct = await readFile('products.json', "utf-8")
        return JSON.parse(readProduct)
    }

    async listProductStock() {
        const listProduct = await this.listProducts()
        const listProductStock = listProduct.map(x => {
            let t = {
                nome: x.nome,
                qtde: x.qtde,
                preco: x.preco,
                valor_estoque: x.qtde * x.preco
            }
            return t
        })

        return listProductStock
    }

    //DESAFIO: criar novo metodo e nova rota stock value e usando reduce na service, pegar o objeto de estoque e calcular o total de valor_stock
    async getStockPrice() {
        const estoquePorItem = await this.listProductStock()
        const totalEstoquePreco = estoquePorItem.reduce((acumulador, valorEstoqueProduto) => {
            return acumulador + valorEstoqueProduto.valor_estoque
        }, 0)

        return {
            valor_estoque: parseFloat(totalEstoquePreco.toFixed(2))
        }
    }
}

export default new ProductService()