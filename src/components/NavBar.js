import * as Icon from 'react-bootstrap-icons';
import {Link} from "react-router-dom";

export default function NavBar() {
    return(
        <div className="navbar">
            <div className="logoWrap">
                <img className="logo" src={require("../resources/logo.png")} alt="logo"/>
            </div>
            <nav className="navhref">
                <Link to="/home" className="btn home"><Icon.House className="icon"/> Home</Link>
                <Link to="/diemdanh" className="btn home"><Icon.Book className="icon"/> Điểm Danh</Link>
                <Link to="/danhsach" className="btn home"><Icon.List className="icon"/> Danh Sách</Link>
            </nav>
        </div>
    )
}
