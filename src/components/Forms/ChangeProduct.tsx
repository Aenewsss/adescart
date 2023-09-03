'use client'

import { CategoryEnum } from "@components/enums/category.enum";
import { uploadImageS3 } from "@components/functions/upload-image-s3";
import { IProduct } from "@components/interfaces/product.interface";
import { FormEvent, useEffect, useState } from "react";
import SearchFieldChangeAdmin from "../SearchFieldChangeAdmin";
import Image from "next/image";

const ChangeProductForm = () => {

    const [product, setProduct] = useState<IProduct>(
        {
            name: '', price: '', description: '',
            imageUrl: '',
            category: CategoryEnum.glove
        }
    );

    const [imageFile, setImageFile] = useState<File>();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        product.imageUrl = await uploadImageS3(imageFile!)

    }

    useEffect(() => {
        console.log(product)
    }, [product]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <SearchFieldChangeAdmin setCurrentProduct={setProduct} />
            </div>
            <div className="d-flex gap-5 flex-wrap">
                <div className="mb-3">
                    <label >Nome</label>
                    <input defaultValue={product.name} onChange={e => setProduct({ ...product, name: e.target.value })} required className="form-control" type="text" />
                </div>
                <div className="mb-3">
                    <label >Preço</label>
                    <input defaultValue={product.price} onChange={e => setProduct({ ...product, price: e.target.value })} required className="form-control" type="number" />
                </div>
                <div className="mb-3">
                    <label >Categoria</label>
                    <select defaultValue={product.category} onChange={e => setProduct({ ...product, category: e.target.value as CategoryEnum })} required className="form-control">
                        <option value="mask">Máscaras</option>
                        <option value="glove">Luvas</option>
                        <option value="medicalCap">Toucas</option>
                        <option value="syringe">Serings</option>
                        <option value="apron">Aventais</option>
                        <option value="others">Outros</option>
                    </select>
                </div>
            </div>
            <div className="d-flex gap-5">

                <div className="mb-3">
                    <label>Imagem</label>
                    <input onChange={(e: any) => setImageFile(e.target.files[0])} required className="form-control" type="file" accept="image/*" />
                </div>
                <div className="mb-3">
                    {/* <Image fill alt={product.name} src={product.imageUrl}/> */}
                </div>
            </div>

            <div className="mb-3">
                <label >Descrição</label>
                <textarea onChange={e => setProduct({ ...product, description: e.target.value })} className="form-control" cols={30} rows={10}></textarea>
            </div>

            <div className="mb-3">
                <button type="submit" className="btn btn-main text-white scale">ADICIONAR PRODUTO</button>
            </div>
        </form>
    );
}

export default ChangeProductForm;