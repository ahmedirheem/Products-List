import React, { useState } from 'react';
import ProductsList from './ProductsList';
import products from './products.json';
import './App.css';

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (category) => {
    setActiveFilter(category);

    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filteredData = products.filter(product => product.category === category);
      setFilteredProducts(filteredData)
    }
  }

  const categories = ["All", "Electronics", "Clothes", "Shoes", "Bags"];

  return (
    <div className='App'>
      <header>
        <h1>Products List</h1>
      </header>

      <section className="categories-sec">
        {categories.map(category => (
          <button
            key={category}
            className={activeFilter === category ? 'active' : ''}
            onClick={() => handleFilterChange(category)}>{category}</button>
        ))}
      </section>

      <ProductsList products={filteredProducts} />
    </div>
  )
};
export default App;