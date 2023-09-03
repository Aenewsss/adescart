import CreateProductForm from "@components/components/Forms/CreateProduct";

const AddProductPage = () => {
    return (
        <main>
            <section className="container mt-5 pt-5">
                <h1 className="mb-5 display-5">Adicionar Produto</h1>

                <CreateProductForm />
            </section>
        </main>
    );
}

export default AddProductPage;