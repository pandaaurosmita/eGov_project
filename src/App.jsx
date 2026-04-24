import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
