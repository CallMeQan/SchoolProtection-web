import {Button} from "react-bootstrap";
import React from "react";
import './index.css';

export default function exportDiv(items, action){
    return items.map((item) =>{
        let imgSrc = require("../../resources/cross.png");
        for (const [key] of Object.entries(item.status)) {
            if(key === "sang_27_12_2022"){
                imgSrc = require("../../resources/checked.png");
            }
        }
        return(
            <Button key={item.schoolId} className='item' onClick={() => action(item)}>
                <div style={{display: "flex"}}>
                    <img src={item.image} alt={item.name} className='avatar'/>
                    <div>
                        <p>ID: {item.schoolId}</p>
                        <p>Họ và Tên: {item.name}</p>
                        <p>Lớp Học: {item.class}</p>
                    </div>
                    <img src={imgSrc} alt="dd" width='30%' height='30%'/>
                </div>
            </Button>
        );
    }
    );
}
