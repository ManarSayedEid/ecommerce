import ProductsWithFilter from "./components/ProductsWithFilter/ProductsWithFilter"
import HeroSection from "./components/HeroSection/HeroSection"
import Products from "./components/Products/Products"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductsWithFilter />
    </main>
  )
}
