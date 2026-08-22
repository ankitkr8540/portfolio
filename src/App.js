import React, { useState, useEffect } from 'react';
import Preloader from '../src/components/Pre';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import BlogList from './components/Blogs/BlogList';
import BlogPost from './components/Blogs/BlogPost';
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import OpenToWork from './components/Home/OpenToWork';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const start = Date.now();
    const MIN_MS = 400;

    const dismiss = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_MS - elapsed);
      const t = setTimeout(() => upadateLoad(false), remaining);
      return t;
    };

    if (document.readyState === 'complete') {
      const t = dismiss();
      return () => clearTimeout(t);
    }

    let timeoutId;
    const handleLoad = () => { timeoutId = dismiss(); };
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className='App' id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <OpenToWork />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<BlogList />} />
          <Route path='/blogs/:slug' element={<BlogPost />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
