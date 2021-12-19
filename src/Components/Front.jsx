import React from "react";
import Bg from "../img/img2.png";
import "../Components/front.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import CardA from "./CardA";
const Front = () => {

    return (
        <>
<div className="mt-3">
            <div className="bg">
                <div className="row justify-content-md-end justify-content-center text-start">
                    <div className="col-md-6 col-10 ps-5">
                        <div className="img1 mt-5 pt-4"> <img src={Bg} alt="" /> </div>
                        <div className="txt"> 100% Healthy & Affordable </div>
                        <div className="h-1">Organic <br /> Vegetable </div>
                        <div className="h-2">Small Changes Big Difference</div>
                        <Button variant="contained">Shop Now</Button>
                    </div>
                </div>
            </div>
            </div>
            <div className="row  justify-content-md-evenly justify-content-center my-4 ms-md-0 ms-1 ">
                <div className="col-lg-4 col-md-10 my-md-0 my-3">
                    <CardA title="Veggies" name="Organic Product" color="#f9b1af"/>
                </div>
                {/* <div className="col-1"></div> */}
                <div className="col-lg-4 col-md-10  pt-lg-0 pt-md-4">
                    <CardA title="Fruits" name="Fresh Product" color="#ffdb4f"/>
                </div>
            </div>
        </>
    )

}

export default Front;