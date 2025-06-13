import ProductsWithFilter from "./components/ProductsWithFilter/ProductsWithFilter"
import HeroSection from "./components/HeroSection/HeroSection"

export const metadata = {
  title: 'Riwaya | UK’s Largest Islamic Marketplace',
  description: 'Discover thousands of Islamic products tailored to your faith and lifestyle.'
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductsWithFilter />
    </main>
  )
}
