'use client'

import { useEffect, useState } from "react";
import Product from "./Product";
import { productService } from "@components/services/product.service";
import { IProduct } from "@components/interfaces/product.interface";
import { useSearchParams } from "next/navigation";
import Spinner from "./Spinner";

const ProductsList = () => {

    const searchParams = useSearchParams()

    const [products, setProducts] = useState<IProduct[]>([]);
    const [spinner, setSpinner] = useState<boolean>(true);

    useEffect(() => {
        getProducts()
    }, [, searchParams]);

    async function getProducts() {
        const result = await productService.getAllProducts();
        const productCategory = searchParams.get('category')

        if (!productCategory) setProducts(result)
        else setProducts(result.filter((el: IProduct) => el.category == productCategory))
        setSpinner(false)
    }

    if (products.length == 0 && !spinner) return <h1 className="text-black container mb-5 fw-bold mt-5">Nenhum produto encontrado nesta categoria</h1>

    return (
        <section className="mb-5 pb-5 container">
            <Spinner visible={spinner} />
            <div className="row">
                {
                    products.map((product: IProduct) => (
                        <div key={product._id} className="col-md-4 mt-5">
                            <Product product={product} />
                        </div>
                    ))
                }

            </div>
        </section>
    );
}

export default ProductsList;