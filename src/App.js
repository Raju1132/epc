import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Retailer/Home'; 
import Header from './Components/Header';
import Footer from './Components/Footer';
import ModelSearch from './Pages/Retailer/ModelSearch';
import VinSearch from './Pages/VinSearch';
import Parts from './Pages/Parts';

function Layout({ children }) {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login';

  return (
    <>
    <div className='justify-content'>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/model-search" element={<ModelSearch />} />
          <Route path="/vin-search" element={<VinSearch/>}/>
          <Route path="/parts/:vinno" element={<Parts/>}/>

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
