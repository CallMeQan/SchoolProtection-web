import * as Icon from 'react-bootstrap-icons';
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import React, {useEffect} from 'react'
import './index.css';
import '../../resources/colorscheme.css'
import $ from 'jquery';

export default function NavBar(){
    function animation(){
        let navBar = $(".navhref");
        let currentActive = navBar.find(".activeBtn");
        let activeWidthNewAnimHeight = currentActive.innerHeight();
        let activeWidthNewAnimWidth = currentActive.innerWidth();
        let itemPosNewAnimTop = currentActive.position();
        let itemPosNewAnimLeft = currentActive.position();
        $(".hori-selector").css({
            "right":itemPosNewAnimTop.right + "px",
            "left":itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
        $(".navhref").on("click","a",function(e){
            $('#navbarSupportedContent ul li').removeClass("activeBtn");
            $(this).addClass('activeBtn');
            let activeWidthNewAnimHeight = $(this).innerHeight();
            let activeWidthNewAnimWidth = $(this).innerWidth();
            let itemPosNewAnimTop = $(this).position();
            let itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "right":itemPosNewAnimTop.right + "px",
                "left":itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        });
    }

    useEffect(() => {
        animation();
        $(window).on('resize', function(){
            setTimeout(function(){ animation(); }, 500);
        });
    }, []);

    return(
        <div className="navbar">
            <div className="logoWrap">
                <img className="logo" src={require("../../resources/logo.png")} alt="logo"/>
            </div>
            <nav className="navhref" >
                <div className="hori-selector" />
                <NavLink to="/lophoc" className="btnNav centerContent"><Icon.List className="icon"/> Lớp Học</NavLink>
                <NavLink to="/hocsinh" className="btnNav centerContent"><Icon.Person className='icon'/> Học Sinh</NavLink>
                <NavLink to="/giaovien" className="btnNav centerContent activeBtn"><Icon.PersonFill className="icon"/> Giáo Viên</NavLink>
                <NavLink to="/congravao" className="btnNav centerContent"><Icon.DoorClosedFill className="icon"/> Cổng ra vào</NavLink>
            </nav>
            <div className='botNav'>
                <img className='icon' src={require("../../resources/schoolLogo.png")} width='65vw' height='65vw' alt='School Logo'/>
                <Button className="btnNav botBtn" onClick={()=>alert("SchoolProtection-web v1")}><Icon.Gear width='100%' height='100%'/></Button>
                <Button className="btnNav botBtn" href="/"><Icon.DoorOpenFill width='100%' height='100%'/></Button>
            </div>
        </div>
    )
}
