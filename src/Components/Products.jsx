import { useEffect, useState } from 'react'
import Cards from './Cards'
function Products() {

  const [products, setProducts] = useState([])

  const GetProducts = (async () => {
    const res = await fetch('https://fakestoreapi.com/products/')
    const data = await res.json()
    setProducts(data)
  })

  useEffect(() => {
    GetProducts()
  }, [])

  return (
    <>
      <h1 className='text-center'>All Products</h1>
      <section className="Products_section p-2   mt-1 d-flex flex-wrap ">
        {
          products.map((product) => <Cards key={product.id} product={product} />)
        }
      </section>
    </>
  )
}

export default Products