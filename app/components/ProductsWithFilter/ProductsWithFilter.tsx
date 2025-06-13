"use client"
import { useState } from "react";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import Products from "../Products/Products";
import PriceFilter from "../PriceFilter/PriceFilter"

export default function ProductsWithFilter() {
    const [category, setCategory] = useState<string | undefined>()
    const [startPrice, setStartPrice] = useState<number | undefined>(undefined)
    const [endPrice, setEndPrice] = useState<number | undefined>(undefined)
console.log("startPrice", startPrice)
    console.log("endPrice", endPrice)

    return (
        <div
            className="flex flex-col justify-between gap-8 px-6 py-12 mx-auto md:flex-col max-w-7xl">
            <div>
                <CategoryFilter setCategory={setCategory} selectedCategory={category} />

                <PriceFilter
                    setStartPrice={setStartPrice}
                    setEndPrice={setEndPrice}
                />
            </div>
            <Products category={category} startPrice={startPrice} endPrice={endPrice} />
        </div>
    )
}