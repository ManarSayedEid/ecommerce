export type Product = {
    id: number
    category: string
    title: string
    image: string
    price: number
    description: string
    rating: {
        rate: number
        count: number
    }
}

export default async function productDetails({ params }: { params: { id: string } }) {
    const { id } = params
    let product: Product | null = null

    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        product = await res.json()
    } catch (error) {
        console.error("Failed to fetch product details:", error)
        return <div className="flex items-center justify-center h-64 text-center">Failed to load product details. Please try again or contact support if the problem persists.</div>
    }

    if (!product) return <div className="flex items-center justify-center h-64 text-center">Product not found.</div>

    const { title, description, price, image, rating } = product

    return (
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
    )
}