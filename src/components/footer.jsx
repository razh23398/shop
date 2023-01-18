import React from "react";
import {FaFacebookSquare, FaInstagram} from "react-icons/fa"

function Footer(){
    return (<div style={{
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        }}>
    <FaFacebookSquare />
    <FaInstagram />
    </div>)
}

export default Footer