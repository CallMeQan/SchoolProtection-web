import "./index.css"
import React from "react";
export default class DateBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {morning: true};
        this.changeDate = this.changeDate.bind(this);
    }

    changeDate = () => this.setState({morning: !this.state.morning});
    

    render(){
        return(
            <img src={
                this.state.morning ? require("../../resources/daytime.png")
                : require("../../resources/afternoon.png")
            } className='daylightImg' alt='day' onClick={this.changeDate} style={{zIndex: 1}} />
        )
    }
}
