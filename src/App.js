import logo from './logo.svg';
import React from 'react';
import reportWebVitals from './reportWebVitals.js';
import Header from './Component/Header'; // Ensure Header.js exists in src/components/
import Footer from './Component/Footer'; // Ensure Footer.js exists in src/components/
import About from './Component/About'; // Ensure About.js exists in src/components/
import Places from './Component/Places'; // Ensure Places.js exists in src/components/
import Gallery from './Component/Gallery'; // Ensure Gallery.js exists in src/components/
import Contact from './Component/Contact'; // Ensure Contact.js
import Hero from './Component/Hero';
import Areas from './Component/Areas';

import './style.css';  // Ensure styles.css exists in src/

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Places />
        <Gallery />
        <Contact />
        <Hero />
        <Areas />
      </main>
      <Footer />
    </div>
  );
};

export default App;
