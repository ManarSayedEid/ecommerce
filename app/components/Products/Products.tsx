"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Head from "next/head"
import { generateItemListJsonLd } from "@/app/utilities/get-json-ld"
import { Product } from "@/app/utilities/types"

export default function Products({ category, startPrice, endPrice }: { category?: string, startPrice?: number, endPrice?: number }) {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(() => setError("Failed to load products. Please try again or contact support if the problem persists."))
            .finally(() => setLoading(false))
    }, [])

    const filteredProducts = products.filter((product) => {
        if (category && category !== "All" && product.category !== category) return false
        if (startPrice && product.price < startPrice) return false
        if (endPrice && product.price > endPrice) return false
        return true
    })

    if (loading) return <div className="flex items-center justify-center h-64 text-center">Loading...</div>
    if (error) return <div className="flex items-center justify-center h-64 text-center">{error}</div>
    if (!filteredProducts.length) return <div className="flex items-center justify-center h-64 text-center">No products available.</div>

    return (
        <>
            {!loading && !error && filteredProducts.length > 0 && (
                <Head>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateItemListJsonLd(filteredProducts)) }}
                    />
                </Head>
            )}
            <main className="p-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product: Product) => {
                        return (
                            <Link
                                key={product.id}
                                href={`/products/${product.id}`}
                                className="block group hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] transition-all"
                            >
                                <div className="font-mono overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg" role="article">
                                    <div className="relative aspect-square">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="absolute inset-0 object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex justify-between mb-2 min-h-[3.5rem]">
                                            <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
                                                {product.title}
                                            </h2>
                                        </div>
                                        <p className="text-gray-800 text-sm line-clamp-2 min-h-[2.5rem] leading-[1.25rem]">
                                            {product.description}
                                        </p>
                                        <div className="mt-2">
                                            <span
                                                className={`inline-block bg-transparent border border-gray-400 rounded-full px-3 py-1 text-sm text-gray-800`}
                                            >
                                                {product.category}
                                            </span>
                                        </div>
                                        <div className="flex items-center mt-2 text-gray-600">
                                            <span className="font-semibold">${product.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </main>
        </>
    )
}