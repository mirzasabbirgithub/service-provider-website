import logo from './logo.svg';
import './App.css';
import Header from './Pages/SharedPages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import PageNotFound from './Pages/SharedPages/PageNotFound/PageNotFound';
import Login from './Pages/Login/Login';
import Footer from './Pages/SharedPages/Footer/Footer';
import Checkout from './Pages/Checkout/Checkout';
import Register from './Pages/Register/Register';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
