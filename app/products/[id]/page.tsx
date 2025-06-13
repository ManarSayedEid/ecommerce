import Head from "next/head"
import { generateProductJsonLd } from "@/app/utilities/get-json-ld"
import { Product } from "@/app/utilities/types"

export const generateMetadata = async ({ params }: {params: Promise<{ id: string }>}) => {
    const { id } = await params
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
            cache: 'no-store'
        })

        const product = await res.json()
        return {
            title: product.title,
            description: product.description
        }
    } catch {
        return {
            title: 'Product not found',
            description: 'The product you are looking for does not exist.'
        }
    }
}

export default async function productDetails({ params }: {params: Promise<{ id: string }>}) {
    const { id } = await params
    let product: Product | null = null

    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
            cache: 'no-store'
        })

        product = await res.json()
    } catch {
        return <div className="flex items-center justify-center h-64 text-center">Failed to load product details. Please try again later.</div>
    }


    if (!product) return <div className="flex items-center justify-center h-64 text-center">Product not found.</div>

    const { title, description, price, image, rating } = product

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(generateProductJsonLd(product)) }}
                />
            </Head>
            <section className="container max-w-5xl px-4 py-8 mx-auto">
                <div className="grid items-center gap-8 mb-12 md:grid-cols-2">
                    <div className="relative w-full h-[400px]">
                        <img
                            src={image}
                            alt={title}
                            width={300}
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{title}</h1>
                        <p className="text-gray-600 mb-4">{description}</p>
                        <div className="flex items-center gap-4 mt-4">
                            <p className="text-lg font-semibold">${price}</p>
                            <span className="text-sm text-gray-500">Rating: {rating.rate} ({rating.count})</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}