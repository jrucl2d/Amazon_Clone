import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScrenn from "./screens/SigninScrenn";
import { useSelector } from "react-redux";
import RegisterScreen from "./screens/RegisterScrenn";

function App() {
  const { userInfo } = useSelector((state) => state.userSignin);
  const handleSideMenu = () => {
    document.querySelector(".sidebar").classList.toggle("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={handleSideMenu}>&#9776;</button>
            <Link to="/">Mamazon</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            {userInfo ? (
              <Link to="/profile">
                {userInfo.name}
                {userInfo.isAdmin && "(Admin)"}
              </Link>
            ) : (
              <Link to="/signin">Sign in</Link>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={handleSideMenu}>
            X
          </button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/" exact component={HomeScreen} />
            <Route path="/register" exact component={RegisterScreen} />
            <Route path="/cart/:id" component={CartScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/signin" component={SigninScrenn} />
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
