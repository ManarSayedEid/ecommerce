"use client"
import { useEffect, useState } from "react"

export default function CategoryFilter({ setCategory, selectedCategory }: { setCategory: (category: string) => void, selectedCategory?: string }) {
    const [categories, setCategories] = useState<string[]>([])

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await fetch("https://fakestoreapi.com/products/categories")
            const data = await res.json()
            setCategories(["All", ...data])
        }

        fetchCategories()
    }, [])

    return (
        <>
            {categories.length > 0 && (
                <div className="p-2 mb-4 w-full max-w-7xl">
                    <ul className="flex flex-wrap gap-3">
                        {categories.map((category: string) => (
                            <li
                                key={category}
                                className={`inline-block px-4 py-2 font-medium transition-colors capitalize shadow-sm transition duration-100 border-1 rounded border-black hover:bg-black hover:text-white cursor-pointer                                     ${selectedCategory === category
                                    ? "bg-black text-white"
                                    : "bg-white text-black"}`}
                                onClick={() => { setCategory(category) }}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}