import React, { useEffect, useState } from "react";
import GameInCart from "./gameInCart";
import { gamesInCart } from "./gameHolder";




function Cart(props){


    const [gameRowInCart,setGameRowInCart] = useState([])
// פונקציה שמכניסה את המשחק לתוך העגלה⭐ רצה על האורך של רשימת המשחקים [שם,תמונה,מחיר] 
    function makeGameRowInCart(){
        let gameRow = []
        for (let i = 0; i < gamesInCart.length; i +=3) {
            gameRow.push(<GameInCart 
            id={i}
            title={gamesInCart[i]}
            imgUrl={gamesInCart[i+1]}
            price={gamesInCart[i+2]}
            handleClick={handleClick}
            />)
        }
        return gameRow
    }

    let totalAmount = 0
// מוחקת את המשחק בלחיצת כפתור בתוך הקומפומנטה של הקארט
// וגם מורידה את המספר של הקארט ב-1 !⭐⭐⭐⭐⭐⭐
    function handleClick(event) {
        document.querySelector(".cart-number").innerHTML -= 1
        let idNumber = event.target.getAttribute("id");
        gamesInCart.splice(idNumber, 3);
        setGameRowInCart(
            gamesInCart.map((game, index) => {
                if (index !== idNumber) {
                    return (
                        <GameInCart
                            id={index}
                            title={game[0]}
                            imgUrl={game[1]}
                            price={game[2]}
                            handleClick={handleClick}
                        />
                    );
                }
            })
        );
        console.log(gamesInCart)
    }





    return (<div 
    style={{
        minWidth: "300px",
        height: "400px",
        position: "absolute",
        top: "100px",
        right: "350px",
        backgroundColor: "#a9c52f"
    }}>

    <h1>Games in cart</h1>
    <div style={{
        display: "flex"
    }}>
    {makeGameRowInCart()}
    </div>

    <p>Total aomount {totalAmount}$</p>
    </div>)
}

export default Cart


// מנסה לחבר את כל המחירים של המשחקים לכמות אחת שנמצאת בתוך העגלה