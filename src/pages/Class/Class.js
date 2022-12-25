import './index.css'
import {Button} from "react-bootstrap";
const assignedClasses = ['11A3', '11A7'];
export default function Class(){
    const listOfClass = assignedClasses.map((name) =>
        <Button className='item'>{name}</Button>

    );
    return(
        <div className="main">
            {listOfClass}
        </div>
    )
};
