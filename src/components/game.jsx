import React, { useEffect, useState } from "react";
import PopDesc from "./popDescription";

function Game(props){



    // ⭐פונקציה שמגלה את התיאור של המשחק כשמעבירים את העכבר על התמונה
    // pop jump const
    const [popDesc, setPopDesc] = useState(null)
    function handleHover(event){
        let x = event.pageX
        let y = event.pageY
        setPopDesc(
        <div style={{
            pointerEvents: "none",
            position: "absolute",
            top: y + "px",
            left: x + "px",
        }}>
            <PopDesc
            title={props.title}
            desc={props.description}
        />
        </div>
        )
    }


    return (<div style={{
        textAlign: "center",
        height: "500px",
        marginRight: "20px",
        color: "#a9c52f"
    }}>
    <img onMouseMove={handleHover} onMouseLeave={function(){setPopDesc(null)}} className="game-img" src={props.imgUrl}/>
    <h1 style={{height: "40px"}} className="game-title">{props.title}</h1>
    {popDesc}
    <p className="game-year">{props.year}</p>
    <h3 className="game-price">{props.price}$</h3>
    <button id={props.id} genre={props.genre} onClick={props.handleAddClick} className="game-button-add">Add to cart</button>
    </div>)





}

export default Game

