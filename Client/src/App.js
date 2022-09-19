import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import EventBus from "./common/EventBus";
import AuthService from "./services/auth.service";

import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./Components/Products/ProductDetails";
import ProductList from "./Components/Products/ProductList";
import Cart from "./Components/Cart/Cart"


export const ProductsContext = React.createContext({});

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <div>
         <ProductsContext.Provider value={{
        products,
        setProducts
      }}>
        <Navbar logOut={logOut} currentUser={currentUser} />

      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/home"} element={<Home />} />
        <Route exact path="about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/me" element={<Profile />} />
      </Routes>
      <Footer />
      </ProductsContext.Provider>
    </div>
  );
};

export default App;
