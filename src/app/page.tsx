import Differentials from "@components/components/Differentials";
import Feedbacks from "@components/components/Feedbacks";
import HomeTop from "@components/components/HomeTop";
import Products from "@components/components/Products";


export default function Home() {
  return (
    <main>
      <HomeTop />
      <Products />
      <Differentials />
      <Feedbacks />
    </main>
  )
}
