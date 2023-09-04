'use client'

import { IProduct } from "@components/interfaces/product.interface";
import { productService } from "@components/services/product.service";
import Link from "next/link";
import { useEffect, useState } from "react";

const SearchField = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [productsFound, setProductsFound] = useState<any[]>([]);

    useEffect(() => {
        getProducts()
    }, []);

    async function getProducts() {
        const result = await productService.getAllProducts()
        if (result) setProducts(result)
    }

    const searchProduct = (e: any) => {
        const value = e.target.value.toLowerCase();

        const productsMatch = products.filter(el => value != '' && el.name.includes(value)).map(el => ({ name: el.name, id: el._id, category: el.category }))
        setProductsFound(productsMatch);
    }

    return (
        <div className="position-relative">
            <input placeholder="Buscar produto" autoComplete="off" className="form-control bg-transparent text-white" type="search" name="search" onChange={searchProduct} />
            {
                productsFound.length > 0 &&
                <div className="form-control position-absolute">
                    {
                        productsFound.map(productFound => (
                            <Link onClick={() => setProductsFound([])} key={productFound.id} className='d-block text-black fw-bold  ps-2 pe-2 pt-1 pb-1' href={{ pathname: '/produto', query: { category: productFound.category, id: productFound.id, product: productFound.name } }}>{productFound?.name}</Link>
                        ))
                    }
                </div>
            }
        </div >
    );
}

export default SearchField;