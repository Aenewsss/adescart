
import { productService } from "@components/services/product.service"

const RemoveProductButton = ({ productId }: any) => {

    async function handleDelete() {
        await productService.removeProduct(productId)
    }

    return <button onClick={handleDelete} className="btn btn-danger text-white scale">REMOVER PRODUTO</button>
}

export default RemoveProductButton