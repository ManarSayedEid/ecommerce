export default function PriceFilter({
  setStartPrice,
  setEndPrice
}: {
  setStartPrice: (price: number) => void
  setEndPrice: (price: number) => void
}) {
  return (
    <div className="p-4 mb-6 w-full max-w-7xl">
      <h3 className="text-xl font-semibold mb-3">Price Range</h3>
      <div className="flex items-center gap-3">
        <input
          type="number"
          onChange={(e) => setStartPrice(Number(e.target.value))}
          placeholder="Min Price"
          className="border border-neutral-300 rounded-xl px-4 py-2 w-48 text-base focus:outline-none focus:ring-2 focus:ring-black"
          min={0}
        />
        <span className="text-lg">-</span>
        <input
          type="number"
          onChange={(e) => setEndPrice(Number(e.target.value))}
          placeholder="Max Price"
                  className="border border-neutral-300 rounded-xl px-4 py-2 w-48 text-base focus:outline-none focus:ring-2 focus:ring-black"
                  min={0}
        />
      </div>
    </div>
  )
}
