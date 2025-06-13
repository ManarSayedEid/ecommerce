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
