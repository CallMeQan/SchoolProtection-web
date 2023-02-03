import './index.css';
import React from 'react';
import * as Icon from 'react-bootstrap-icons';

export default class FormLogin extends React.Component{
    render(){
        return(
            <div className="remakeFlex">
                <form className="loginBox" action='/hocsinh'>
                    <img className="imgLogo" src={require("../../resources/logo.png")} alt="logo"/>
                    <div className="loginForm">
                        <div className="inputBox">
                            <Icon.PersonLock/>
                            <input placeholder="Nhập tên đăng nhâp..."/>
                        </div>
                        <div className="inputBox">
                            <Icon.ShieldLock/>
                            <input type="password" placeholder="Nhập mật khẩu..."/>
                        </div>
                        <button type='submit' className='btnLogin'><Icon.ArrowRight/></button>
                        <p className="subtext">
                            THPT Marie Curie <img src={require("../../resources/schoolLogo.png")} alt="school" width="15%" style={{marginLeft: "1%"}}/>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}
