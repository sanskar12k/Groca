import React from "react";
import "../Components/CardA.css";
import {Card, Button} from "react-bootstrap";
import img1 from "../img/img5.png";
import img2 from "../img/img12.jpg";

const CardA = (props) =>{
    var color = props.color;
    return(
        <>
        <div className="carda">
    <Card  style={{   backgroundColor:color }}>
  
    <div className="row justify-content-around">
        <div className="col-md-6 col-5 ms-1 align-self-center"> <Card.Img variant="top" src={img2} /></div>
  
 <div className="col-md-5 col-5 ms-1">
  <Card.Body>
    <Card.Title clasName="titleText" >{props.title}</Card.Title>
    <Card.Text className="textText">
    
    <span style={{fontWeight: "bold"}} >100% </span>{props.name}

    </Card.Text>
    <Button >Buy Now</Button>
  </Card.Body>
  </div>
  </div>
  
</Card>
</div>
        </>
    )

}

export default CardA;

