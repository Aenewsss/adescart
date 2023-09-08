import CurrentPage from "@components/components/CurrentPage";
import Footer from "@components/components/Footer";
import Navbar from "@components/components/Navbar";
import ProductDetails from "@components/components/ProductDetails";
import WhatsAppFixed from "@components/components/WhatsappFixed";

const ProductPage = () => {
    return (
        <>
            <Navbar />
            <main className="mt-5 pt-4">
                <CurrentPage />
                <ProductDetails />
            </main>
            <Footer />
            <WhatsAppFixed />

        </>
    );
}

export default ProductPage;