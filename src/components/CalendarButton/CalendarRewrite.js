import {Button} from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import "./Calendar.css"
import React from "react";
import Calendar from "react-calendar";
export default function CalendarRewrite(){
    function openCalendar() {
        const calendar = document.getElementsByClassName("react-calendar")[0];
        const calendarBtn = document.getElementsByClassName("CalendarBtn")[0];
        if (calendar.style.display === "none"){
            calendar.style.display = "block";
            calendarBtn.classList.add("activeBtn");
            return;
        }
        calendarBtn.classList.remove("activeBtn");
        calendar.style.display = "none";
    }
    return (
        <div className="boxCalendar">
            <Button className="CalendarBtn" onClick={openCalendar}><Icon.Calendar width="100%" height="100%"/></Button>
            <Calendar/>
        </div>
    )
}
