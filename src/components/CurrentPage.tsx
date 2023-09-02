'use client'

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CurrentPage = () => {

    const [currentCategory, setCurrentCategory] = useState('');
    const [currentProduct, setCurrentProduct] = useState('');

    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        setCurrentCategory(searchParams.get('category') || '')
        setCurrentProduct(searchParams.get('product') || '')
    }, [pathname, searchParams])

    return (
        <div className="container fs-5 d-flex gap-2 text-uppercase mt-4 mb-4">
            <Link className="text-black fw-bold" href="/">HOME / </Link>
            <Link className={`${currentCategory ? 'text-black' : 'text-secondary'} fw-bold`} href="/catalogo">PRODUTOS</Link>
            {currentCategory &&
                <Link
                    className={`${!currentProduct ? 'text-secondary' : 'text-black'} fw-bold`}
                    href={{ pathname: '/catalogo', query: { category: currentCategory } }}>
                    / {currentCategory}
                </Link>
            }
            {
                currentProduct &&
                <Link className='text-secondary fw-bold' href="/"> / {currentProduct} </Link>
            }
        </div>
    );
}

export default CurrentPage;