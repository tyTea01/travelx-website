import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import DataPage from './components/pages/DataPage';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element = {<Home/>} />
          <Route path='/About' element = {<About/>} /> 
          <Route path='/Contact' element = {<Contact/>} /> 
          <Route path='/DataPage' element = {<DataPage/>} />
        </Routes>
        <Footer/>
      </Router>
      
      </>
    
    </div>
    
  );
}

export default App;
