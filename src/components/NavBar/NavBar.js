import * as Icon from 'react-bootstrap-icons';
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import React, {useEffect} from 'react'
import './index.css';
import '../../resources/colorscheme.css'
import $ from 'jquery';

export default function NavBar(){
    function animation(){
        var tabsNewAnim = $('.mainContent');
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
        $(".mainContent").on("click","li",function(){
            $('.mainContent li').removeClass("active");
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
        setTimeout(animation, 350);
    }

    function resizeMin(){
        $(".botNav").children(".unused").css({
            "display": "none",
        });
        setTimeout(animation, 350);
    }

    return(
        <div className="navbar" onMouseOver={resizeFull} onMouseOut={resizeMin}>
            <div className='topNavBar'>
                <img className="logo" src={require("../../resources/logo.png")} alt="logo"/>
                <p className='centerContent'>SchoolProtection</p>
            </div>

            <ul className="mainContent">
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
                <img className='botBtn icon unused' src={require("../../resources/schoolLogo.png")} alt='School Logo'/>
            </div>
        </div>
    )
}
