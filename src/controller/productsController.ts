import {writeFile} from 'fs/promises'
import { Request, Response } from 'express'
import Product from '../models/product'
import ProductService from '../services/productsService'

class ProductsController {
    public async createProduct(req: Request, res: Response) {
        await ProductService.createProduct(req.body).then(() => {
            return res.status(201).json("Objeto criado")
        }).catch(() => {
            return res.status(500)
        })    
    }

    public async listProducts(req: Request, res: Response) {
        const productList = await ProductService.listProducts()

        return res.status(200).json(productList)
    }

    public async listProductsStock(req: Request, res: Response) {
        const productStock = await ProductService.listProductStock()

        return res.status(200).json(productStock)
    }

    public async getTotalStockPrice(req: Request, res: Response) {
        const totalPrice = await ProductService.getStockPrice()

        return res.status(200).json(totalPrice)
    }
}

export default new ProductsController()