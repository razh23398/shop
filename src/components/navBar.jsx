import React, { useEffect } from "react";
import {FaGamepad} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"
import Cart from "./cart";
import { useState } from "react"; 
import "../css/dropDown.css"

function NavBar(){


// פתיחה של עגלה ואז סגירה שלה בלחיצת כפתור⭐⭐⭐⭐⭐⭐⭐⭐
const [popCart, setPopCart] = useState(null)
const [isCart, setIsCart] = useState(true)
function handleCartClick(){
    setIsCart(true)
    if (isCart === true){
        setPopCart(
        <div>
        <Cart/>
        </div>)
        setIsCart(false)
    }else if (isCart === false){
        setPopCart(null)
    }
}

    return (
<div className="nav-bar">
    <div>
        <a href="#" style={{
        display: "flex",
        alignItems: "center",
        }}>
            <FaGamepad className="icon game-icon"/>
            <h1>Old Games</h1>
        </a>
        <div>
            <a href="#Action">Action</a>
            <a href="#Kids">Kids</a>
            <a href="#Strategy">Strategy</a>
            <a href="#Sport">Sport</a>
            <a href="#Simulator">Simulator</a>
            <a href="#Adventures">Adventures</a>
        </div>
    </div>
    <div style={{
        display: "flex",
        alignItems: "center"
        }}>
        <a href="#">
            <FaShoppingCart onClick={handleCartClick} className="icon cart-icon"/>
            {popCart}
        </a>
        <p className="cart-number">0</p>
    </div>
</div>)
}

export default NavBar

