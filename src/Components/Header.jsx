import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "../Css/Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">BikeParts</Link>
            </div>
            <div className="search-box ">
                <input type="text" placeholder="Search for bike parts..." />
                <button className="search-btn">
                    <FaSearch />
                </button>
            </div>
            <div className="right-section">
                <Link to="/cart" className="cart">
                    <FaShoppingCart />
                </Link>
                <span className="username">John Doe</span>
                <Link to="/profile" className="profile-icon">
                    <FaUserCircle />
                </Link>
                <button className="menu-btn" onClick={() => setMenuOpen(true)}>
                    <FaBars />
                </button>
            </div>
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setMenuOpen(false)}>
                    <FaTimes />
                </button>
                <nav className="mobile-nav">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
                    <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
                    <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
