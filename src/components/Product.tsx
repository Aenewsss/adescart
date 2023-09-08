import Image from "next/image";
import BuyWhatsapp from "./Buttons/BuyWhatsapp";
import Link from "next/link";
import { IProduct } from "@components/interfaces/product.interface";

const Product = ({ product }: { product: IProduct }) => {

    return (
        <div className="d-flex flex-column align-items-center">
            <Link href={{ pathname: 'produto/', query: { category: product.category, id: product._id, product: product.name } }}>
                <Image blurDataURL="/images/blur-product.png" placeholder="blur" loading="lazy" className="scale h-300 mw-300 object-fit-cover"  fill src={product.imageUrl} alt={product.name} />
                <h4 className="fw-bold text-black text-capitalize text-center mt-4">{product.name}</h4>
                <h5 className="fw-bold text-black text-center">R$ {product.price}</h5>
            </Link>

            <BuyWhatsapp />
        </div>
    );
}

export default Product;