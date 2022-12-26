import React from 'react';
import {Button} from "react-bootstrap";
import CalendarRewrite from "../../../components/CalendarButton/CalendarRewrite";

const assignedGate = ['Nam Kỳ Khởi Nghĩa', 'Lê Quý Đôn', ];
export default function Class(){
    const listOfGate = assignedGate.map((name) =>
        <Button className='item' style={{fontSize: "100%", fontWeight: "bold"}}>{name}</Button>
    );
    return(
        <div className="main" style={{flexDirection:"column", flex:1}}>
            <div className="topMenu">
                <CalendarRewrite/>
                <p className="titleMenu">Các cổng ra vào</p>
            </div>
            <div className="listBox">
                {listOfGate}
            </div>
        </div>
    )
};
