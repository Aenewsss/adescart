'use client'

import { IProduct } from "@components/interfaces/product.interface";
import { productService } from "@components/services/product.service";
import { useEffect, useState } from "react";

const ProductsCount = () => {

    const [Products, setProducts] = useState<IProduct[]>();
    
    useEffect(() => {
        getProducts()
    }, []);

    async function getProducts() {
        setProducts(await productService.getAllProducts())
    }

    return ( 
        <div className="mt-5">
            <h3>Você possui {Products?.length} produtos cadastrados</h3>
            <h4>Acesse o menu lateral para administrar A Descart!</h4>
        </div>
     );
}
 
export default ProductsCount;