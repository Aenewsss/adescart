import { api } from "@components/api"
import { IProduct } from "@components/interfaces/product.interface"

class ProductService {
    async getAllProducts() {
        const response = await api.get("/product")
        return response.data
    }

    async createProduct(product: IProduct) {
        const response = await api.post("/product", product)
        return response.data
    }

    async updateProduct(product: IProduct) {
        const response = await api.put(`/product/${product._id}`, product)
        return response.data
    }

    async removeProduct(id: string) {
        const response = await api.delete(`/product/${id}`)
        return response.data

    }
}

export const productService = new ProductService()