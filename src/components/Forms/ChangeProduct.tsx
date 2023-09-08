'use client'

import { CategoryEnum } from "@components/enums/category.enum";
import { uploadImageS3 } from "@components/functions/upload-image-s3";
import { IProduct } from "@components/interfaces/product.interface";
import { FormEvent, useEffect, useRef, useState } from "react";
import SearchFieldChangeAdmin from "../SearchFieldChangeAdmin";
import Image from "next/image";
import { productService } from "@components/services/product.service";
import { removeImageS3 } from "@components/functions/remove-image-s3";
import { toast } from "react-toastify"
import Spinner from "../Spinner";

const ChangeProductForm = ({ productDetails }: any) => {

    const oldImage = useRef('')
    const [spinner, setSpinner] = useState<boolean>(false)
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
        setSpinner(true)
        event.preventDefault();

        if (imageFile) {
            console.log(oldImage.current)
            await removeImageS3(oldImage.current)
            product.imageUrl = await uploadImageS3(imageFile!)
        }

        const result = await productService.updateProduct(product).catch(e => toast.error('Erro ao atualizar produto, tente logar novamente'))
        if (result) {
            toast.success('Produto alterado com sucesso')
            setProduct({
                name: '', price: '', description: '',
                imageUrl: '',
                category: CategoryEnum.glove
            })
        }
        else toast.error('Erro ao atualizar produto')
        setSpinner(false)
    }

    useEffect(() => {
        if (productDetails) setProduct(productDetails)
    }, [productDetails]);

    return (
        <form onSubmit={handleSubmit}>
            <Spinner visible={spinner} />

            {
                !productDetails &&
                <div className="mb-3">
                    <SearchFieldChangeAdmin setCurrentProduct={setProduct} oldImage={oldImage} />
                </div>
            }
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
            <div className="row">
                <div className="col-md-6 d-flex flex-md-column flex-column-reverse">
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
                <div style={{ maxWidth: 300, maxHeight: 500 }} className="mb-3 col-md-6 mt-md-0 mt-4">
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