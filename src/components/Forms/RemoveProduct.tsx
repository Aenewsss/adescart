'use client'
import { CategoryEnum } from "@components/enums/category.enum";
import { IProduct } from "@components/interfaces/product.interface";
import { productService } from "@components/services/product.service";
import { FormEvent, useState } from "react";
import SearchFieldChangeAdmin from "../SearchFieldChangeAdmin";
import Image from "next/image";
import { removeImageS3 } from "@components/functions/remove-image-s3";
import { useRouter } from "next/navigation";

const RemoveProductForm = () => {

    const { push } = useRouter()

    const [product, setProduct] = useState<IProduct>(
        {
            _id: '',
            name: '', price: '', description: '',
            imageUrl: '',
            category: CategoryEnum.glove
        }
    );
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        console.log(await removeImageS3(product.imageUrl))

        const result = await productService.removeProduct(product._id!)
        alert('Removido')
        push('/admin/remover-produto')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <SearchFieldChangeAdmin setCurrentProduct={setProduct} />
            </div>
            <div className="d-flex gap-5 flex-wrap">
                <div className="mb-3">
                    <label >Nome</label>
                    <input disabled defaultValue={product.name} onChange={e => setProduct({ ...product, name: e.target.value })} className="form-control" type="text" />
                </div>
                <div className="mb-3">
                    <label >Preço</label>
                    <input disabled defaultValue={product.price} onChange={e => setProduct({ ...product, price: e.target.value })} className="form-control" type="text" />
                </div>
                <div className="mb-3">
                    <label >Categoria</label>
                    <select disabled defaultValue={product.category} onChange={e => setProduct({ ...product, category: e.target.value as CategoryEnum })} className="form-control">
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
                <div style={{ maxWidth: 300, maxHeight: 500 }} className="mb-3">
                    <label>Imagem Atual</label>
                    <Image loading="lazy" fill alt={product.name} src={product.imageUrl} />
                </div>
                <div className="mb-3">
                    <label >Descrição</label>
                    <textarea disabled defaultValue={product?.description} onChange={e => setProduct({ ...product, description: e.target.value })} className="form-control" cols={30} rows={10}></textarea>
                </div>

            </div>


            <div className="mb-3">
                <button type="submit" className="btn btn-main text-white scale">REMOVER PRODUTO</button>
            </div>
        </form>

    )
}
export default RemoveProductForm;
