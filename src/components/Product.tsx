import Image from "next/image";
import BuyWhatsapp from "./Buttons/BuyWhatsapp";
import Link from "next/link";
import { IProduct } from "@components/interfaces/product.interface";

const Product = ({ product }: { product: IProduct }) => {

    return (
        <div className="d-flex flex-column align-items-center">
            <Link href={{ pathname: 'produto/', query: { category: product.category, id: product._id, product: product.name } }}>
                <Image className="scale" width={300} height={500} src={product.imageUrl} alt={product.name} />
                <h4 className="fw-bold text-black text-capitalize text-center mt-4">{product.name}</h4>
                <h5 className="fw-bold text-black text-center">R$ {product.price}</h5>
            </Link>

            <BuyWhatsapp />
        </div>
    );
}

export default Product;