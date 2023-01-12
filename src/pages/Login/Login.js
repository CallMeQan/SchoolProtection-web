import './index.css';
import React from 'react'

export default class FormLogin extends React.Component{
    render(){
        return(
            <div className="remakeFlex">
                <form className="loginBox" action='/hocsinh'>
                    <img className="imgLogo" src={require("../../resources/logo.png")} alt="logo"/>
                    <div className="loginForm">
                        <div className="inputBox">
                            <input placeholder="Nhập tên đăng nhâp..."/>
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Nhập mật khẩu..."/>
                        </div>
                        <button type='submit' className='btnLogin'>Đăng Nhập</button>
                        <p className="subtext" style={{display: "flex", justifyContent: "space-between"}}>
                            - Admin only <img src={require("../../resources/schoolLogo.png")} alt="school" width="15%"/>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}
