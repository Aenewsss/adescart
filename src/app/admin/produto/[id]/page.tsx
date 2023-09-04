'use client'

import RemoveProductButton from "@components/components/Buttons/RemoveProduct"
import ChangeProductForm from "@components/components/Forms/ChangeProduct"
import { CategoryEnum } from "@components/enums/category.enum"
import { IProduct } from "@components/interfaces/product.interface"
import { productService } from "@components/services/product.service"
import { FC, useState, useEffect } from 'react'

interface PageProps {
    params: {
        id: string
    }
}

const ProductDetailsAdmin: FC<PageProps> = ({ params }) => {

    const [product, setProduct] = useState<IProduct>(
        {
            _id: '',
            name: '', price: '', description: '',
            imageUrl: '',
            category: CategoryEnum.glove
        }
    );

    useEffect(() => {
        getProductById()
    }, [params]);

    async function getProductById(){
        const result = await productService.getProductById(params.id)
        setProduct(result)
    }

    return (
        <section className="container mt-5 pt-5">
            <h1 className="display-5">{product.name}</h1>

            <ChangeProductForm productDetails={product}/>

            <RemoveProductButton productId={params.id}/>
        </section>
    );
}

export default ProductDetailsAdmin;