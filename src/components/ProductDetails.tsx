'use client'

import Image from "next/image";
import BuyWhatsapp from "./Buttons/BuyWhatsapp";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IProduct } from "@components/interfaces/product.interface";
import { productService } from "@components/services/product.service";
import Spinner from "./Spinner";

const ProductDetails = () => {

    const searchParams = useSearchParams()

    const [currentProduct, setCurrentProduct] = useState<IProduct>();
    const [spinner, setSpinner] = useState<boolean>(true);

    useEffect(() => {
        getCurrentProduct()
    }, [, searchParams]);

    async function getCurrentProduct() {
        const result = await productService.getProductById(searchParams.get('id')!)
        if (result._id) setCurrentProduct(result)
        setSpinner(false)
    }

    if (!currentProduct?._id && !spinner) return <h1 className="mt-5 pt-5">Produto não existe</h1>

    return (
        <section className="mt-5 mb-5 pb-5 container">
            <Spinner visible={spinner} />

            <div className="row">
                <div className="col-md-6">
                    <Image blurDataURL="/images/blur-product.png" placeholder="blur" loading="lazy" style={{ maxWidth: 800, maxHeight: 600 }} fill src={currentProduct?.imageUrl!} alt={currentProduct?.name!} />
                </div>

                <div className="col-md-6 mt-md-0 mt-3">
                    <div className="d-flex gap-3">
                        <h4 className="fw-bold text-black text-capitalize">{currentProduct?.name}</h4>
                        <h5 className="fw-bold text-black align-self-center">R$ {currentProduct?.price}</h5>
                    </div>

                    <p>{currentProduct?.description || "* Produto não possui descrição"}</p>

                    <BuyWhatsapp />
                </div>

            </div>

        </section>
    );
}

export default ProductDetails;