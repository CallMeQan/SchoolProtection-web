import "./index.css"
import React from "react";

export default class SortClass extends React.Component{
    constructor(props){
        super(props);
        this.options = [
            {value: '11A3'},
            {value: '11A7'}
        ]
        this.listOfClass = this.options.map((item) => <option key={item.value} value={item.value}>{item.value}</option>);
        this.onChanged = this.onChanged.bind(this);
    }

    onChanged(event){
        console.log(event.target.value);
    }

    render(){
        return(
            <select className="classSelection" onChange={this.onChanged}>
                {this.listOfClass}
            </select>
        )
    }
}
