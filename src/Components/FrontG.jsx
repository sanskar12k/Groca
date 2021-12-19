import React from "react";
import '../Components/frontg.css';
import { InputGroup, FormControl, Button } from "react-bootstrap";
import img from '../img/img14.png'
const FrontG = () => {
    return ( 
        <>
            <div className="frontg">
            <div className="row justify-content-around">
            <div className="col-lg-4 col-1 hidden-sm "></div>
            <div className="col-lg-4 col-10 align-self-center">
            <div className="heading">
                Subscribe to Our Newsletter
            </div>
            <InputGroup className="mb-3 hide-mobile">
    <FormControl
      placeholder="Your email address"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button id="button-addon2">
      Read More
    </Button>
  </InputGroup>
            </div>
            <div className="col-4 hidden-md">
                <img src={img} alt="" />
            </div>
            </div>
                
            </div>
        </>
     );
}
 
export default FrontG;