import { api } from "@components/api"
import { IProduct } from "@components/interfaces/product.interface"
import { authorizationHeader } from "../functions/authorization-header"
import { toast } from "react-toastify"
class ProductService {
    async getAllProducts() {
        const response = await api.get("/product")
        return response.data
    }

    async getProductById(id: string) {
        const response = await api.get(`product/${id}`)
        return response.data
    }

    async createProduct(product: IProduct) {
        const response = await api.post("/product", product, authorizationHeader())
        return response.data
    }

    async updateProduct(product: IProduct) {
        const response = await api.put(`/product/${product._id}`, product, authorizationHeader())
        return response.data
    }

    async removeProduct(id: string) {
        const response = await api.delete(`/product/${id}`, authorizationHeader())
        return response.data

    }
}

export const productService = new ProductService()