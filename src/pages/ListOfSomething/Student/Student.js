import React from 'react';
import CalendarRewrite from "../../../components/CalendarButton/CalendarRewrite";
import ExportDiv from '../ExportListDiv';
export default function Student(){
    const listOfStudent = ExportDiv(require("../../../resources/data/schoolprotection-ba83e-default-rtdb-student-export.json"), (value)=>{
        alert(value.name);
    });
    return(
        <div className="main" style={{flexDirection:"column", flex:1}}>
            <div className="topMenu">
                <CalendarRewrite/>
                <p className="titleMenu">Học Sinh</p>
            </div>
            <div className="listBox">
                {listOfStudent}
            </div>
        </div>
    )
};
