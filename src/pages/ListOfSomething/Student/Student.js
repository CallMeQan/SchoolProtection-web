import React from 'react';
import CalendarRewrite from "../../../components/CalendarButton/CalendarRewrite";
import DivList from '../../../components/DivList/NormalList/DivList';
import SearchBar from '../../../components/SearchBar/SearchBar';
import SortClass from '../../../components/SortClass/SortClass';
import '../index.css';

export default function Student(){
    const listOfStudent = DivList(require("../../../resources/data/schoolprotection-ba83e-default-rtdb-student-export.json"), (value)=>{
        alert(value.name);
    });
    return(
        <div className="main" style={{flexDirection:"column", flex:1}}>
            <div className="topMenu">
                <div className='titleSearch'>
                    <p className="titleMenu">Học Sinh</p>
                    <SortClass/>
                    <SearchBar/>
                </div>
                <CalendarRewrite/>
            </div>
            <div className="listBox">
                {listOfStudent}
            </div>
        </div>
    )
}
