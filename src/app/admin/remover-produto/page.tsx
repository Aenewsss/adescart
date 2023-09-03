import RemoveProductForm from "@components/components/Forms/RemoveProduct";

const RemoveProductPage = () => {
    return (
        <main>
            <section className="container mt-5 pt-5">
                <h1>Remover Produto</h1>

                <RemoveProductForm />
            </section>
        </main>
    );
}

export default RemoveProductPage;