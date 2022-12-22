export default function NavBar() {
    return(
        <div className="navbar">
            <div className="logoWrap">
                <img className="logo" src={require("../resources/logo.png")} alt="logo"/>
            </div>
            <button className="btn home">Home</button>
            <button className="btn dd">Điểm danh</button>
            <button className="btn ds">Danh sách</button>
        </div>
    )
}
