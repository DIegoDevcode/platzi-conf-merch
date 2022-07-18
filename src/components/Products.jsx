import React from 'react'
import { Product } from './Product'
import '../Styles/components/Products.css'

export const Products = () => {
  return (
    <div className='Products'>
        <div className="Products-item">
            {Products.map(product => (
                <Product key={product.id } product={product} />
            ))}
        </div>
    </div>
  )
}

export default Products