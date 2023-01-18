import React from "react";
import Game from "./game";
import games from "../data/games";
import { useState, useEffect } from "react";
import "../css/buttonAdd.css"


let gamesInCart = []
function GameHolder(props){

    const [cartNumber, setCartNumber] = useState(gamesInCart.length/3)
    useEffect(function(){
        document.querySelector(".cart-number").innerHTML = cartNumber
    }, [cartNumber])


// לא מצליח לפתור את העניין של המספר. הוא מתחיל מחדש שאני מכניס משחקים מהקטגוריה של ילדים
    // פונקציה שמעלה ב-1 את המספר של מספר הפריטים בעגלה ב-נאב-בר⭐
    // הפוקציה אמורה גם להכניס את המשחק לתוך הקומפוננטה של העגלה 🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩
    const handleAddClick = (event) => {
// הפונקציה גורמת לכל כפתור הוספה באתר להוסיף את המשחק שלו לתוך העגלה⭐ נדרש להוסיף פה את כל הקטגוריות כשיהיו
        for (let i = 0; i <= document.querySelectorAll(".game-button-add").length; i++){
            if (event.target.getAttribute("genre") === "Action" && i == event.target.id){
                if (gamesInCart.includes(games.Action[i].title)){
                    alert("this game is in the cart")
                }else{
                    gamesInCart.push(games.Action[i].title)
                    gamesInCart.push(games.Action[i].imgUrl)
                    gamesInCart.push(games.Action[i].price)
                    console.log(gamesInCart)
                }
            }else if (event.target.getAttribute("genre") === "Kids" && i == event.target.id){
                if (gamesInCart.includes(games.Kids[i].title)){
                    alert("this game is in the cart")
                }else{
                    gamesInCart.push(games.Kids[i].title)
                    gamesInCart.push(games.Kids[i].imgUrl)
                    gamesInCart.push(games.Kids[i].price)
                }
            }else if (event.target.getAttribute("genre") === "Strategy" && i == event.target.id){
                if (gamesInCart.includes(games.Strategy[i].title)){
                    alert("this game is in the cart")
                }else{
                    gamesInCart.push(games.Strategy[i].title)
                    gamesInCart.push(games.Strategy[i].imgUrl)
                    gamesInCart.push(games.Strategy[i].price)
                }
            }else if (event.target.getAttribute("genre") === "Sport" && i == event.target.id){
                if (gamesInCart.includes(games.Sport[i].title)){
                    alert("this game is in the cart")
                }else{
                    gamesInCart.push(games.Sport[i].title)
                    gamesInCart.push(games.Sport[i].imgUrl)
                    gamesInCart.push(games.Sport[i].price)
                }
            }else if (event.target.getAttribute("genre") === "Simulator" && i == event.target.id){
                if (gamesInCart.includes(games.Simulator[i].title)){
                    alert("this game is in the cart")
                }else{
                    gamesInCart.push(games.Simulator[i].title)
                    gamesInCart.push(games.Simulator[i].imgUrl)
                    gamesInCart.push(games.Simulator[i].price)
                }
            }else if (event.target.getAttribute("genre") === "Adventures" && i == event.target.id){
                if (gamesInCart.includes(games.Adventures[i].title)){
                    alert("this game is in the cart")
                }else{
                    gamesInCart.push(games.Adventures[i].title)
                    gamesInCart.push(games.Adventures[i].imgUrl)
                    gamesInCart.push(games.Adventures[i].price)
                }
            }
            setCartNumber(gamesInCart.length/3)
        }

    }

    // פוקציה שיוצרת שורה של משחקים לפי הקטגוריות, צריך להוסיף קטגוריות נוספות ,🚩
    const makeGameRow = (genre) =>{
        let gamesArray = []
        if (genre === "Action"){
            for (let i = 1; i < Object.keys(games.Action).length; i++) {
                gamesArray.push(
                <Game 
                    handleAddClick={handleAddClick}
                    id={i}
                    key={i}
                    genre={"Action"}
                    title={games.Action[i].title}
                    imgUrl={games.Action[i].imgUrl}
                    description={games.Action[i].description}
                    year={games.Action[i].year}
                    price={games.Action[i].price}
                />
                )
            }
        }
        else if (genre === "Kids"){
            for (let i = 1; i < Object.keys(games.Kids).length; i++) {
                gamesArray.push(
                <Game 
                    handleAddClick={handleAddClick}
                    id={i}
                    key={i}
                    genre={"Kids"}
                    title={games.Kids[i].title}
                    imgUrl={games.Kids[i].imgUrl}
                    description={games.Kids[i].description}
                    year={games.Kids[i].year}
                    price={games.Kids[i].price}
                />
                )
            }
        }
        else if (genre === "Strategy"){
            for (let i = 1; i < Object.keys(games.Strategy).length; i++) {
                gamesArray.push(
                <Game 
                    handleAddClick={handleAddClick}
                    id={i}
                    key={i}
                    genre={"Strategy"}
                    title={games.Strategy[i].title}
                    imgUrl={games.Strategy[i].imgUrl}
                    description={games.Strategy[i].description}
                    year={games.Strategy[i].year}
                    price={games.Strategy[i].price}
                />
                )
            }
        }else if (genre === "Sport"){
            for (let i = 1; i < Object.keys(games.Sport).length; i++) {
                gamesArray.push(
                <Game 
                    handleAddClick={handleAddClick}
                    id={i}
                    key={i}
                    genre={"Sport"}
                    title={games.Sport[i].title}
                    imgUrl={games.Sport[i].imgUrl}
                    description={games.Sport[i].description}
                    year={games.Sport[i].year}
                    price={games.Sport[i].price}
                />
                )
            }
        }
        else if (genre === "Simulator"){
            for (let i = 1; i < Object.keys(games.Simulator).length; i++) {
                gamesArray.push(
                <Game 
                    handleAddClick={handleAddClick}
                    id={i}
                    key={i}
                    genre={"Simulator"}
                    title={games.Simulator[i].title}
                    imgUrl={games.Simulator[i].imgUrl}
                    description={games.Simulator[i].description}
                    year={games.Simulator[i].year}
                    price={games.Simulator[i].price}
                />
                )
            }
        }
        else if (genre === "Adventures"){
            for (let i = 1; i < Object.keys(games.Adventures).length; i++) {
                gamesArray.push(
                <Game 
                    handleAddClick={handleAddClick}
                    id={i}
                    key={i}
                    genre={"Adventures"}
                    title={games.Adventures[i].title}
                    imgUrl={games.Adventures[i].imgUrl}
                    description={games.Adventures[i].description}
                    year={games.Adventures[i].year}
                    price={games.Adventures[i].price}
                />
                )
            }
        }
        return gamesArray
    }




    return (<div id={props.name} style={{
        textAlign: "center",
        backgroundColor: "#283739",
        minHeight: "600px",
        width: "auto",
        }}>
        <h1>{props.holderGaner}</h1>
        <div className="game-holder"
         style={{
            minHeight: "600px",
            marginTop: "0px",
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "scroll",
            width: "auto",
        }}>

        {makeGameRow(props.name)}
        </div>


    </div>)
}

export default GameHolder
export { gamesInCart }