import { api } from "@components/api"

class ProductService {
    async getAllProducts() {
        const response = await api.get("/product")
        return response.data
    }
}

export const productService = new ProductService()