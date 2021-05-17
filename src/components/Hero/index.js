import React from "react";
import "./style.css";

function Hero(props) {
    return (
        <div className="hero text-center" style={
            {
                background: `url('${process.env.PUBLIC_URL}/images/employees.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
            {props.children}
        </div>
    );
}

export default Hero;