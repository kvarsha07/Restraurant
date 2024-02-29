import React from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}   />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
