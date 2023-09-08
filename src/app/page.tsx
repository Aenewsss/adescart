import Differentials from "@components/components/Differentials";
import Feedbacks from "@components/components/Feedbacks";
import Footer from "@components/components/Footer";
import HomeTop from "@components/components/HomeTop";
import Navbar from "@components/components/Navbar";
import Products from "@components/components/Products";
import WhatsAppFixed from "@components/components/WhatsappFixed";


export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeTop />
      <Products />
      <Differentials />
      <Feedbacks />
      <Footer />
      <WhatsAppFixed />
    </main>
  )
}
