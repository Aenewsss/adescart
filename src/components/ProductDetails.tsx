'use client'

import Image from "next/image";
import BuyWhatsapp from "./Buttons/BuyWhatsapp";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IProduct } from "@components/interfaces/product.interface";
import { productService } from "@components/services/product.service";

const ProductDetails = () => {

    const searchParams = useSearchParams()

    const [currentProduct, setCurrentProduct] = useState<IProduct>();

    useEffect(() => {
        getCurrentProduct()
    }, []);

    async function getCurrentProduct() {
        const result = await productService.getProductById(searchParams.get('id')!)
        if(result._id) setCurrentProduct(result)
    }

    if(!currentProduct?._id) return <h1 className="mt-5 pt-5">Produto não existe</h1>

    return (
        <section className="mt-5 mb-5 pb-5 container">
            <div className="row">
                <div className="col-xl-6">
                    <Image loading="lazy" style={{maxWidth: 800, maxHeight: 600}} fill src={currentProduct?.imageUrl!} alt={currentProduct?.name!} />
                </div>

                <div className="col-xl-6 ">
                    <div className="d-flex gap-3">
                        <h4 className="fw-bold text-black">{currentProduct.name}</h4>
                        <h5 className="fw-bold text-black align-self-center">R$ {currentProduct.price}</h5>
                    </div>

                    <p>{currentProduct.description || "Produto não possui descrição"}</p>

                    <BuyWhatsapp />
                </div>

            </div>

        </section>
    );
}

export default ProductDetails;