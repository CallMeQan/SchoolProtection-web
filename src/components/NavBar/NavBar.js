import * as Icon from 'react-bootstrap-icons';
import {Link, useLocation} from "react-router-dom";
import {Button} from "react-bootstrap";
import React from 'react'
import './index.css';
import '../../resources/colorscheme.css'

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
                <img className="logo" src={require("../../resources/logo.png")} alt="logo"/>
            </div>
            <nav className="navhref" >
                <Link to="/lophoc" className="btnNav centerContent"><Icon.List className="icon"/> Lớp Học</Link>
                <Link to="/hocsinh" className="btnNav centerContent"><Icon.Person className='icon'/> Học Sinh</Link>
                <Link to="/giaovien" className="btnNav centerContent"><Icon.PersonFill className="icon"/> Giáo Viên</Link>
                <Link to="/congravao" className="btnNav centerContent"><Icon.DoorClosedFill className="icon"/> Cổng ra vào</Link>
            </nav>
            <div className='botNav'>
                <img className='icon' src={require("../../resources/schoolLogo.png")} width='65vw' height='65vw' alt='School Logo'/>
                <Button className="btnNav botBtn" onClick={()=>alert("SchoolProtection-web v1")}><Icon.Gear width='100%' height='100%'/></Button>
                <Button className="btnNav botBtn" href="/"><Icon.DoorOpenFill width='100%' height='100%'/></Button>
            </div>
        </div>
    )
}
