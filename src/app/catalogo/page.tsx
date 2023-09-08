import CatalogTop from "@components/components/CatalogTop";
import CurrentPage from "@components/components/CurrentPage";
import Footer from "@components/components/Footer";
import Navbar from "@components/components/Navbar";
import ProductsList from "@components/components/ProductsList";
import WhatsAppFixed from "@components/components/WhatsappFixed";

const CatalogPage = () => {
    return (
        <main >
            <Navbar />
            <CatalogTop />
            <CurrentPage />
            <ProductsList />
            <Footer />
            <WhatsAppFixed />
        </main>
    );
}

export default CatalogPage;