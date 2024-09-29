import React from 'react'

const ProductsList = ({ products }) => {
  return (
    <div className='products-list'>
      {products.map((product, index) => (
        <div className='product-card' key={index}>
          <img src={`assets/${product.img}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductsList;