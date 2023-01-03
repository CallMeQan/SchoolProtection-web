import React from 'react';
import {Button} from "react-bootstrap";
import CalendarRewrite from "../../../components/CalendarButton/CalendarRewrite";
import DateBtn from "../../../components/DateTimeButton/DateBtn";

//Mục đích là hiện ra danh sách các lớp, sau đó ấn button sẽ hiện ra danh sách học sinh của lớp đó, với danh sách hs sẽ điểm danh
// Mục đích đính chính lại thì cái mục đích trước đó chưa thế thực hiện vì ko có nhiều thời gian, giờ chỉ bấm vào và alert tên lớp và có bao nhiêu người
const assignedClasses = ['11A3', '11A7'];
export default function Class(){
    const listOfClass = assignedClasses.map((name) =>
        <Button key={name} className='item'><p style={{fontSize: "2vw"}}>{name}</p></Button>
    );
    return(
        <div className="main" style={{flexDirection:"column", flex:1}}>
            <div className="topMenu">
                <CalendarRewrite/>
                <DateBtn/>
                <p className="titleMenu">Lớp Học</p>
            </div>
            <div className="listBox">
                {listOfClass}
            </div>
        </div>
    )
}
