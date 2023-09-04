'use client'

import { CategoryEnum } from "@components/enums/category.enum";
import { uploadImageS3 } from "@components/functions/upload-image-s3";
import { IProduct } from "@components/interfaces/product.interface";
import { FormEvent, useEffect, useRef, useState } from "react";
import SearchFieldChangeAdmin from "../SearchFieldChangeAdmin";
import Image from "next/image";
import { productService } from "@components/services/product.service";
import { removeImageS3 } from "@components/functions/remove-image-s3";

const ChangeProductForm = () => {

    const oldImage = useRef('')

    const [product, setProduct] = useState<IProduct>(
        {
            _id: '',
            name: '', price: '', description: '',
            imageUrl: '',
            category: CategoryEnum.glove
        }
    );

    const [imageFile, setImageFile] = useState<File>();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (imageFile) {
            console.log(oldImage.current)
            await removeImageS3(oldImage.current)
            product.imageUrl = await uploadImageS3(imageFile!)
        }

        const result = await productService.updateProduct(product)
        alert('Atualizado')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <SearchFieldChangeAdmin setCurrentProduct={setProduct} oldImage={oldImage}/>
            </div>
            <div className="d-flex gap-5 flex-wrap">
                <div className="mb-3">
                    <label >Nome</label>
                    <input defaultValue={product.name} onChange={e => setProduct({ ...product, name: e.target.value })} required className="form-control" type="text" />
                </div>
                <div className="mb-3">
                    <label >Preço</label>
                    <input defaultValue={product.price} onChange={e => setProduct({ ...product, price: e.target.value })} required className="form-control" type="text" />
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
                <div>
                    <div className="mb-3">
                        <label>Trocar Imagem</label>
                        <input
                            onChange={(e: any) => {
                                setProduct({ ...product, imageUrl: URL.createObjectURL(e.target.files[0]) });
                                setImageFile(e.target.files[0])
                            }} className="form-control" type="file" accept="image/*" />
                    </div>
                    <div className="mb-3">
                        <label >Descrição</label>
                        <textarea defaultValue={product?.description} onChange={e => setProduct({ ...product, description: e.target.value })} className="form-control" cols={30} rows={10}></textarea>
                    </div>

                </div>
                <div style={{ maxWidth: 300, maxHeight: 500 }} className="mb-3">
                    <label>Imagem Atual</label>
                    <Image loading="lazy" fill alt={product.name} src={product.imageUrl} />
                </div>
            </div>


            <div className="mb-3">
                <button type="submit" className="btn btn-main text-white scale">ALTERAR PRODUTO</button>
            </div>
        </form>
    );
}

export default ChangeProductForm;