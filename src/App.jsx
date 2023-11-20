
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import NewPosts from './NewPosts.jsx';
import NewPage from './NewPage.jsx';
import About from './About.jsx'
import Missing from './Missing.jsx';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  

  return (
    <div className='App'>
      <Header />
      <Nav />
      <Home/>
      <NewPosts />
      <NewPage />
      <About />
      <Missing />
      <Footer />
    </div>
  )
};

export default App;
