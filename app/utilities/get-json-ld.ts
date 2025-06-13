import { Product } from "./types"

export function generateItemListJsonLd(products: Product[]) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": products.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://fakestoreapi.com/products/${product.id}`,
            "item": {
                "@type": "Product",
                "name": product.title,
                "image": product.image,
                "description": product.description,
                "sku": product.id,
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "price": product.price,
                    "availability": "https://schema.org/InStock"
                }
            }
        }))
    }
}
    
export function generateProductJsonLd(product: Product) {
    return {
        "@context": "https://schema.org/",
        "@type": "Product",
        url: `https://fakestoreapi.com/products/${product.id}`,
        name: product.title,
        image: product.image,
        description: product.description,
        sku: product.id,
        offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: product.price,
            availability: "https://schema.org/InStock"
        }
    }
}