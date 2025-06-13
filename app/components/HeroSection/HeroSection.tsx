import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
      <div
        className="flex-1 space-y-6">
        <p
          className='hidden text-sm text-gray-600 uppercase md:block'>
          Your go-to platform for online islamic marketplace
        </p>

        <h1
          className="text-4xl font-bold md:text-5xl">
          The UK&rsquo;s largest Online Islamic marketplace
        </h1>

        <p
          className="text-lg text-gray-600">
          Riwaya is the worlds first online premium Islamic marketplace. Based UK, we are built for the Islamic and Ethical consumer and business in mind. Bringing together amazing sellers and customers in one easy to navigate place.
        </p>

        <div
          className="flex gap-4">
          <Link href="/products">
            <button
              className="px-6 py-3 text-black transition transition-colors duration-100 cursor-pointer bg-white border-2 border-black hover:bg-black hover:text-white"
            >
              Start Shopping
            </button>
          </Link>
        </div>

      </div>

      <Image
        src="/riwaya.png"
        alt="riwaya logo"
        width={382}
        height={287}
        className="rounded-lg"
        priority
      />
    </section>

  )
}
