import React from 'react';
import CalendarRewrite from "../../../components/CalendarButton/CalendarRewrite";
import GateList from "../../../components/DivList/GateList/GateList";
import '../index.css';

const assignedGate = ['Nam Kỳ Khởi Nghĩa', 'Lê Quý Đôn', ];
export default function Class(){
    function showCheckBox() {
    }

    const listOfGate = GateList(assignedGate, showCheckBox);
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
