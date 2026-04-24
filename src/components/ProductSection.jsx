import React, { useState, useEffect } from 'react';
import productsData from '../data/products.json';
import './ProductSection.css';

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Products', 'Initiatives', 'News', 'Podcasts', 'Case Studies', 'Blogs', 'Reports'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(productsData);
      setFilteredProducts(productsData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let result = products;
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (searchTerm) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, products]);

  return (
    <section className="product-section py-5 bg-light fade-in">
      <div className="container">
        <div className="row mb-5 align-items-end">
          <div className="col-md-8">
            <h2 className="display-5 fw-bold text-primary mb-0">Latest at <span className="text-dark">eGov</span></h2>
          </div>
          <div className="col-md-4">
            <div className="input-group shadow-sm rounded-pill overflow-hidden">
              <span className="input-group-text bg-white border-0 ps-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
              <input 
                type="text" 
                className="form-control border-0 py-3" 
                placeholder="Search products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2 mb-5">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`btn rounded-pill px-4 fw-bold ${selectedCategory === cat ? 'btn-primary' : 'btn-outline-primary bg-white text-muted border-light shadow-sm'}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status" style={{width: '3rem', height: '3rem'}}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted fw-bold">Fetching latest updates...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="row g-4">
            {filteredProducts.map(product => (
              <div key={product.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm product-card hover-lift">
                  <div className="position-relative overflow-hidden" style={{height: '240px'}}>
                    <img src={product.image} className="card-img-top h-100 w-100 object-fit-cover transition-all" alt={product.name} />
                    <span className="badge bg-white text-primary position-absolute top-0 end-0 m-3 shadow-sm px-3 py-2 rounded-pill fw-bold">
                      {product.category}
                    </span>
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold text-primary mb-3">{product.name}</h5>
                    <p className="card-text text-muted mb-4 small">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
                      <span className="fw-bold text-warning h5 mb-0">{product.price}</span>
                      <div className="d-flex gap-1">
                        {product.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="badge bg-light text-muted fw-normal">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card border-0 shadow-sm text-center py-5 px-4 bg-white">
            <div className="display-1 mb-3">🔍</div>
            <h3 className="fw-bold text-primary">No results found</h3>
            <p className="text-muted mb-4">We couldn't find anything matching "{searchTerm}" in {selectedCategory}.</p>
            <button className="btn btn-primary rounded-pill px-5 fw-bold" onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
