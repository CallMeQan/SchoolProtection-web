import React from 'react';
import CalendarRewrite from "../../../components/CalendarButton/CalendarRewrite";
import DivList from '../../../components/DivList/NormalList/DivList';
import SearchBar from '../../../components/SearchBar/SearchBar';
import '../index.css';

export default function Teacher(){
    const listOfTeacher = DivList(require("../../../resources/data/schoolprotection-ba83e-default-rtdb-teacher-export.json"), (value)=>{
        alert(value.name);
    });
    return(
        <div className="main" style={{flexDirection:"column", flex:1}}>
            <div className="topMenu">
                <CalendarRewrite/>
                <SearchBar/>
                <p className="titleMenu">Giáo Viên</p>
            </div>
            <div className="listBox">
                {listOfTeacher}
            </div>
        </div>
    )
}
