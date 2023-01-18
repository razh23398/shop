import React from "react";



function GameInCart(props){


    return (<div style={{
        border: "solid 1px red",
        textAlign: "center",
        textDecoration: "none",
        color: "#ffff",
    }}>
        <p style={{textDecoration: "none"}}>{props.title}</p>
        <img style={{height: "100px", width: "70px"}} src={props.imgUrl}/>
        <p>{props.price}</p>
        <button onClick={props.handleClick} id={props.id}>Remove</button>
    </div>)
}


export default GameInCart