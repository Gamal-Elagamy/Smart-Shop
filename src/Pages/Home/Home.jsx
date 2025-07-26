import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../../Component/Loading/Loading'
import Product from '../../Component/Product/Product'
import NotFound from '../NotFound/NotFound'

export default function Home() {
  const [products, setproducts] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState('')
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    grtAllProducts()
  }, [])

  async function grtAllProducts() {
    try {
      setisLoading(true)
      const { data } = await axios.get('https://fakestoreapi.com/products')
      setproducts(data)
    } catch (error) {
      setHasError(true)
    } finally {
      setisLoading(false)
    }
  }

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'name-asc':
        return a.title.localeCompare(b.title)
      case 'name-desc':
        return b.title.localeCompare(a.title)
      default:
        return 0
    }
  })

  if (isLoading) {
    return <Loading />
  }

  if (hasError) {
    return <NotFound />
  }

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row justify-center gap-4 items-center">
        <input
          type="text"
          placeholder="Search by product name..."
          className="p-2 border border-gray-300 rounded-md w-full max-w-md dark:bg-gray-800 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="name-asc">Name: A → Z</option>
          <option value="name-desc">Name: Z → A</option>
        </select>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product, index) => (
            <Product product={product} key={index} />
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-300 col-span-full">
            No Products Found 😔
          </p>
        )}
      </div>
    </>
  )
}
