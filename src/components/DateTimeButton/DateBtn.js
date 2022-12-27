import "./index.css"
import React from "react";
export default function DateBtn(){
    function changeDate() {
        const imgEle = document.getElementsByClassName("daylightImg")[0];
        if (imgEle.alt === "day"){
            imgEle.src = require("../../resources/afternoon.png");
            return;
        }
        imgEle.src = require("../../resources/daytime.png");
        console.log(imgEle.src);

    }
    return (
        <img src={require("../../resources/daytime.png")} className='daylightImg' alt='day' onClick={changeDate} style={{zIndex: 1}} />
    )
}
