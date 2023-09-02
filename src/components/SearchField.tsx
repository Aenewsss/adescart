'use client'

import { useEffect, useState } from "react";

const SearchField = () => {

    const [products, setWines] = useState([]);
    const [productFound, setProductFound] = useState({ name: '', id: '' });

    // useEffect(() => {
    //     api.get("/wine/listAll")
    //         .then((response) => {
    //             response.data.forEach(product => {
    //                 setWines(products => [...products, product])
    //             })
    //         })
    //         .catch(err => console.error("ops! ocorreu um erro" + err));
    // }, []);

    const searchProduct = (e: any) => {
        const value = e.target.value.toLowerCase();

        products.forEach((product: any) => {

            let name = product.name.toLowerCase();

            if (name.includes(value)) {
                setProductFound({ name: product.name, id: product._id });
            }

        });

        if (value == '') setProductFound({ name: '', id: '' });
    }

    return (
        <>
            <input placeholder="Buscar produto" className="form-control bg-transparent text-white" type="search" name="search" onChange={searchProduct} />
            <a className={productFound.name.length > 0 ? 'd-block text-white mt-2 bg-opacity ps-2 pe-2 pt-1 pb-1' : 'd-none'} href={`/inside/${productFound?.id}`}>{productFound?.name}</a>
        </>
    );
}

export default SearchField;