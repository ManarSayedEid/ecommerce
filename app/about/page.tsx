import Image from "next/image"

export const metadata = {
  title: 'About Riwaya',
  description: 'Discover Riwaya — the UK’s largest online Islamic marketplace.'
}

export default function AboutPage() {
  return (
    <section className="container max-w-4xl px-4 py-8 mx-auto">
      <div className="grid items-center gap-4 mb-12 md:grid-cols-2">
        <Image
          src="/riwaya.png"
          alt="Riwaya logo"
          width={382}
          height={287}
          className="rounded-lg"
          priority
        />
        <div>
          <p className="mb-4 text-sm text-gray-600 uppercase">About Riwaya</p>
          <h1 className="mb-4 text-2xl font-semibold font-montserrat-alternates">
            The UK&rsquo;s largest Online Islamic marketplace
          </h1>
          <p className="mb-4 text-gray-700">
            Riwaya is the world&rsquo;s first online premium Islamic marketplace. Based in the UK, we&rsquo;re built with the Islamic and Ethical consumer and business in mind — bringing together amazing sellers and customers in one easy-to-navigate platform.
          </p>
          <p className="text-gray-700">
            Buy and sell on Riwaya — the world&rsquo;s first online premium Islamic gifts marketplace. We showcase hand-selected sellers from around the world and feature their products in one curated space. Born during the COVID-19 pandemic, Riwaya bridges the gap between outstanding Islamic sellers and their customers.
          </p>
        </div>
      </div>
    </section>
  )
}
