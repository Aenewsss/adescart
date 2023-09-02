import Image from "next/image";
import BuyWhatsapp from "./Buttons/BuyWhatsapp";
import Link from "next/link";

const Product = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <Link href={{ pathname: 'produto/', query: { category: 'luvas', product: 'luva-preta' } }}>
                <Image width={300} height={500} src="/produto-exemplo.png" alt="produto" />
                <h4 className="fw-bold text-black">Luva preta unigloves</h4>
                <h5 className="fw-bold text-black">R$ 29,99</h5>
            </Link>

            <BuyWhatsapp />
        </div>
    );
}

export default Product;