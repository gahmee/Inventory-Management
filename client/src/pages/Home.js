import { useEffect, useState } from 'react'
import ProductTable from '../components/ProductTable'


const Home = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:4000/api/products')
            const json = await response.json()

            if (response.ok) {
                setProducts(json);
            }
        }

        fetchProducts();

    }, [])

    return (
        <div>
            <div className='Products'>
                {/* {products && products.map((product) => (
                    <ProductTable key={product._id} product={product} />
                ))} */}
                {products && <ProductTable products={products} />}
            </div>
        </div>
    )
}

export default Home