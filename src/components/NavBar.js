import * as Icon from 'react-bootstrap-icons';
import {Link, useLocation} from "react-router-dom";
import {Button} from "react-bootstrap";
import React from 'react'
import './index.css';

export default function NavBar(){
    const location = useLocation()

    React.useEffect(() => {
        const listOfA = document.getElementsByClassName("btnNav");
        for (let i = 0; i < listOfA.length; i++) {
            listOfA[i].classList.remove("activeBtn");
            if (listOfA[i].href === window.location.href){
                listOfA[i].classList.add("activeBtn");
            }
            console.log(window.location.href);
        }
    }, [location])
    return(
        <div className="navbar">
            <div className="logoWrap">
                <img className="logo" src={require("../resources/logo.png")} alt="logo"/>
            </div>
            <nav className="navhref" >
                <Link to="/diemdanh" className="btnNav centerContent"><Icon.Book className="icon"/> Điểm Danh</Link>
                <Link to="/hocsinh" className="btnNav centerContent"><Icon.Person className='icon'/> Học Sinh</Link>
                <Link to="/giaovien" className="btnNav centerContent"><Icon.PersonFill className="icon"/> Giáo Viên</Link>
                <Link to="/lophoc" className="btnNav centerContent"><Icon.List className="icon"/> Lớp Học</Link>
            </nav>
            <div className='botNav'>
                <Button className="btnNav botBtn" href="/setting"><Icon.Gear width='100%' height='100%'/></Button>
                <img className='icon' src={require("../resources/schoolLogo.png")} width='75px' height='75px' alt='School Logo'/>
            </div>
        </div>
    )
}
