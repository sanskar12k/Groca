import React from "react";
import '../Components/frontb.css';
import CardB from "./CardB";
import img1 from "../img/img5.png";
import img2 from "../img/tomato.png";
import img3 from "../img/img8.png";
import img4 from "../img/img10.png";
import img5 from "../img/chickenBreast.png";
import img6 from "../img/badam.png";
const FrontD = () => {
    return(
        <>
        <div className="text-center frontb my-5">
            <h2>Our Special Products</h2>
        </div>
     <div className="row justify-content-evenly me-md-4 me-1">
         <div className="col-lg-2 col-md-5  col-10 pb-3 py-2">
             <CardB img={img1} title = "Watermelon" price = "100.00"/>
         </div>
         <div className="col-lg-2 col-md-5  col-10 pb-3 py-2">
             <CardB img={img2} title = "Capsicum" price = "400.00"/>
         </div>
         <div className="col-lg-2 col-md-5  col-10 pb-3 py-2">
             <CardB img={img3} title = "Coriander" price = "400.00"/>
         </div>
         <div className="col-lg-2 col-md-5  col-10 pb-3 py-2">
             <CardB img={img4} title = "Egg" price = "200.00" />
         </div>
        
         </div>
        </>
    )
}

export default FrontD;