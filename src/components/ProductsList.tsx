import Product from "./Product";

const ProductsList = () => {
    return (
        <section className="mb-5 pb-5">
            <div className="row">
                <div className="col-xl-4">
                    <Product />
                </div>
                <div className="col-xl-4">
                    <Product />
                </div>
                <div className="col-xl-4">
                    <Product />
                </div>

            </div>
        </section>
    );
}

export default ProductsList;