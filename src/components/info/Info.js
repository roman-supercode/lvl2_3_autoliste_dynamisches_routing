import "./Info.css";
import { useParams } from "react-router-dom";
import Data from "../../Data";

function Info() {
    const params = useParams();
    // console.log(params);
    let cars = Data[params.id]; 
    // console.log(blog);
    return (
        <div className="InfoContainer">
            <h2>{cars.CarMake}</h2>
            <p>{cars.carModel}</p>
            <p>{cars.CarYear}</p>
        </div>
    );
};

export default Info;