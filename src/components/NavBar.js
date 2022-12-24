export default function NavBar() {
    return(
        <div className="navbar">
            <div className="logoWrap">
                <img className="logo" src={require("../resources/logo.png")} alt="logo"/>
            </div>
            <nav className="navhref">
                <a href={"/home"} className="btn home">Home</a>
                <a href={"/diemdanh"} className="btn home">Điểm Danh</a>
                <a href={"/danhsach"} className="btn home">Danh Sách</a>
            </nav>
        </div>
    )
}
