import * as Icon from 'react-bootstrap-icons';
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import React, {useEffect} from 'react'
import './index.css';
import '../../resources/colorscheme.css'
import $ from 'jquery';

export default function NavBar(){
    function animation(){
        var tabsNewAnim = $('.navhref');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
            "top":itemPosNewAnimTop.top + "px", 
            "left":itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
        $(".navhref").on("click","li",function(){
            $('.navhref li').removeClass("active");
            $(this).addClass('active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "top":itemPosNewAnimTop.top + "px", 
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

    function resizeFull(){
        $(".botNav").children(".unused").css({
            "display": "flex",
        });
    }

    function resizeMin(){
        $(".botNav").children(".unused").css({
            "display": "none",
        });
    }

    return(
        <div className="navbar" onMouseOver={resizeFull} onMouseOut={resizeMin}>
            <div className="logoWrap">
                <img className="logo" width="100%" height="100%" src={require("../../resources/logo.png")} alt="logo"/>
            </div>
            <ul className="navhref">
                <div className="hori-selector" />
                <li className='nav-item centerContent active'>
                    <NavLink to="/hocsinh" className="nav-link centerContent">
                        <Icon.Person className="icon"/> <i>Học Sinh</i>
                    </NavLink>
                </li>
                <li className='nav-item centerContent'>
                    <NavLink to="/giaovien" className="nav-link centerContent">
                        <Icon.PersonFill className="icon"/> <i>Giáo Viên</i>
                    </NavLink>
                </li>
                <li className='nav-item centerContent'>
                    <NavLink to="/congravao" className="nav-link centerContent">
                        <Icon.DoorClosedFill className="icon"/> <i>Cổng Ra Vào</i>
                    </NavLink>
                </li>
            </ul>            
            <div className='botNav'>
                <Button className="botBtn firstBotBtn" onClick={()=>alert("SchoolProtection-web v1")}><Icon.Gear width='100%' height='100%'/></Button>
                <Button className="botBtn unused" href="/"><Icon.DoorOpenFill width='100%' height='100%'/></Button>
                <img className='icon unused' src={require("../../resources/schoolLogo.png")} width='65vw' height='65vw' alt='School Logo'/>
            </div>
        </div>
    )
}
