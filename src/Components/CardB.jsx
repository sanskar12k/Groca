import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import img from "../img/img5.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/cardb.css'
const CardB = (props) => {
    const [styles, setStyle] = useState(
        {
            display:"none"
        })
        if(props.discount >= "0"){
            setStyle({
                display:"block"
            })
        } 
    return (
        <>
        <div className="cardb">
            <Card  className="text-center" >
            <div className="row justify-content-around" style={styles}>
                <div className="col-3">
                 SALE       
                 </div>  
                                   
                 <div className="col-3">
                 Save <br /> {props.discount}%      
                 </div> 
            </div>
                <Card.Img variant="top" src={props.img}  />
                <Card.Body>
                    <span >3kg</span>  <span  >2kg</span>    <span  >1kg</span>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                      
                        🌟🌟🌟🌟🌟
                        <p>${props.price}</p>
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
            </div>
        </>
    );
}

export default CardB;