import {Button} from "react-bootstrap";
import React from "react";
import './index.css';

export default function exportDiv(items, action){
    return items.map((item) =>{
            console.log(item);
            return(
                <Button className='item' onClick={() => action(item)}>
                    <div style={{display: "flex"}}>
                        <img src={item.image} alt={item.name} />
                        <div>
                            <p>ID: {item.schoolId}</p>
                            <p>Họ và Tên: {item.name}</p>
                            <p>Lớp Học: {item.class}</p>
                        </div>
                    </div>
                </Button>
            );
        }
    );
}
