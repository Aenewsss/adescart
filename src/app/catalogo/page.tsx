import CatalogTop from "@components/components/CatalogTop";
import CurrentPage from "@components/components/CurrentPage";
import ProductsList from "@components/components/ProductsList";

const CatalogPage = () => {
    return (
        <main >
            <CatalogTop />
            <CurrentPage />
            <ProductsList />
        </main>
    );
}

export default CatalogPage;