import React from 'react';
import CalendarRewrite from "../../../components/CalendarButton/CalendarRewrite";
import '../index.css'
import ExportDiv from "../ExportListDiv";

export default function Teacher(){
    const listOfTeacher = ExportDiv(require("../../../resources/data/schoolprotection-ba83e-default-rtdb-teacher-export.json"), (value)=>{
        alert(value.name);
    });
    return(
        <div className="main" style={{flexDirection:"column", flex:1}}>
            <div className="topMenu">
                <CalendarRewrite/>
                <p className="titleMenu">Giáo Viên</p>
            </div>
            <div className="listBox">
                {listOfTeacher}
            </div>
        </div>
    )
};
