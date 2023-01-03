import {Button} from "react-bootstrap";
import React from "react";
import './index.css';

export default function exportDiv(items, action){
    return items.map((item) => {
        return (
            <Button key={item} className='item itemGate' onClick={action}>
                <p>{item}</p>
                <div>
                    <span>Học Sinh <input type='checkbox' value="Học Sinh"/><br/></span>
                    <span>Giáo Viên <input type='checkbox' value="Giáo Viên"/></span>
                </div>
            </Button>
        )
    });
}