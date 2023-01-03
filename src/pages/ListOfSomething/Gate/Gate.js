import React from 'react';
import {Button} from "react-bootstrap";
import CalendarRewrite from "../../../components/CalendarButton/CalendarRewrite";
import './gate.css';

const assignedGate = ['Nam Kỳ Khởi Nghĩa', 'Lê Quý Đôn', ];
export default function Class(){
    function showCheckBox() {
    }
    const listOfGate = assignedGate.map(name =>
        <Button key={name} className='item itemGate' onClick={showCheckBox}>
            <p>{name}</p>
            <div>
                <span>Học Sinh <input type='checkbox' value="Học Sinh"/><br/></span>
                <span>Giáo Viên <input type='checkbox' value="Giáo Viên"/></span>
            </div>
        </Button>
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
}
