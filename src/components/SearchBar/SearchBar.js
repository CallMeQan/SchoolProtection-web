import "./index.css"
import * as Icon from 'react-bootstrap-icons';
import React from "react";

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ""}
        this.onTextChanged = this.onTextChanged.bind(this);
    }

    onTextChanged(){
    }

    render(){
        return(
            <div className="searchBar">
                <input type='text' className="searchInput" placeholder="Tìm kiếm..." onChange={this.onTextChanged}></input>
                <Icon.Search className="icon"></Icon.Search>
            </div>
        )
    }
}
