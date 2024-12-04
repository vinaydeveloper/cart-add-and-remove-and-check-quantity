import React from 'react';
import { products } from './data/products';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { useCart } from './hooks/useCart';
import './styles/App.css';

function App() {
  const { addToCart } = useCart();

  return (
    <div className="app">
      <header>
        <h1>Tech Store</h1>
      </header>
      <main>
        <section className="products-section">
          <h2>Products</h2>
          <div className="products-grid">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => addToCart({ ...product, quantity: 1 })}
              />
            ))}
          </div>
        </section>
        <section className="cart-section">
          <Cart />
        </section>
      </main>
    </div>
  );
}

export default App;