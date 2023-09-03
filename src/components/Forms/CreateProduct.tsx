'use client'

import { CategoryEnum } from "@components/enums/category.enum";
import { uploadImageS3 } from "@components/functions/upload-image-s3";
import { IProduct } from "@components/interfaces/product.interface";
import { productService } from "@components/services/product.service";
import Image from "next/image";
import { FormEvent, useState } from "react";

const CreateProductForm = () => {

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

        const result = await productService.createProduct(product)
        alert('Created')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="d-flex gap-5 flex-wrap">
                <div className="mb-3">
                    <label >Nome</label>
                    <input onChange={e => setProduct({ ...product, name: e.target.value })} required className="form-control" type="text" />
                </div>
                <div className="mb-3">
                    <label >Preço</label>
                    <input onChange={e => setProduct({ ...product, price: e.target.value })} required className="form-control" type="price" />
                </div>
                <div className="mb-3">
                    <label >Categoria</label>
                    <select onChange={e => setProduct({ ...product, category: e.target.value as CategoryEnum })} required className="form-control">
                        <option value="mask">Máscaras</option>
                        <option value="glove">Luvas</option>
                        <option value="medicalCap">Toucas</option>
                        <option value="syringe">Serings</option>
                        <option value="apron">Aventais</option>
                        <option value="others">Outros</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label>Imagem</label>
                    <input onChange={(e: any) => setImageFile(e.target.files[0])} required className="form-control" type="file" accept="image/*" />
                </div>
                {imageFile &&
                    <div className="mb-3 d-flex flex-column">
                        <label>Imagem escolhida</label>
                        <Image style={{ maxWidth: 300, maxHeight: 500 }} fill alt={imageFile.name} src={URL.createObjectURL(imageFile)} />

                    </div>
                }
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

export default CreateProductForm;