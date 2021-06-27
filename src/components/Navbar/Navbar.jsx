import React from 'react';
import '../../App.css';

function Navbar(){
    return (
        <div className="navbar">
            <h1>Ecommerce</h1>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
            <button><i class="fas fa-shopping-cart"></i></button>
        </div>
    );
}
export default Navbar;