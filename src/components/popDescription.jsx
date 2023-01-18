import React from "react";


function PopDesc(props){


    return (<div style={{
        minHeight: "100px",
        minWidth: "200px",
        maxWidth: "200px",
        overflowWrap: "break-word",
        color: "#283739",
        backgroundColor: "#f7eebb",
        borderRadius: "10px"
    }}>
    <p>{props.title}</p>
    <p>{props.desc}</p>
    </div>)
}

export default PopDesc