'use client'

import { productService } from "@components/services/product.service";
import { useEffect, useState } from "react";

const SearchFieldChangeAdmin = ({ setCurrentProduct, oldImage }: any) => {

    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        getProducts()
    }, []);

    async function getProducts() {
        setProducts(await productService.getAllProducts())
    }

    async function getProductById(productId: string) {
        const currentProduct = products.find(el => el._id == productId) 
        setCurrentProduct(currentProduct)
        if(oldImage) oldImage.current = currentProduct.imageUrl
    }

    return (
        <>
            {/* <input list="products" placeholder="Buscar produto" className="form-control bg-transparent text-black" type="search" name="search" /> */}
            <select onClick={(e: any) => getProductById(e.target.value)} className="form-control" >
                {
                    products.map(product => (
                        <option key={product._id} value={product._id}>{product.name}</option>
                    ))
                }
            </select>
        </>
    );
}

export default SearchFieldChangeAdmin;