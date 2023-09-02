import CurrentPage from "@components/components/CurrentPage";
import ProductDetails from "@components/components/ProductDetails";

const ProductPage = () => {
    return (
        <main className="mt-5 pt-4">
            <CurrentPage />
            <ProductDetails /> 
        </main>
    );
}

export default ProductPage;