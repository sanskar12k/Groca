import React from "react";
import '../Components/frontb.css';
import CardB from "./CardB";
import img1 from "../img/img5.png";
import img2 from "../img/tomato.png";
import img3 from "../img/img8.png";
import img4 from "../img/img10.png";
import img5 from "../img/chickenBreast.png";
import img6 from "../img/badam.png";
const FrontB = () => {
    return(
        <>
        <div className="text-center frontb my-5">
            <h2>Our Products</h2>
       
     <div className="row me-lg-0 me-4 justify-content-md-evenly justify-content-evenly">
         <div className="col-lg-2 mx-lg-1 col-10 col-md-3 py-2">
             <CardB img={img1} title = "Watermelon" price = "100.00"/>
         </div>
         <div className="col-lg-2 mx-lg-1 col-10 col-md-3  py-2">
             <CardB img={img2} title = "Capsicum" price = "400.00"/>
         </div>
         <div className="col-lg-2 mx-lg-1 col-10 col-md-3  py-2">
             <CardB img={img3} title = "Coriander" price = "400.00"/>
         </div>
         <div className="col-lg-2 mx-lg-1 col-10 col-md-3  py-2">
             <CardB img={img4} title = "Egg" price = "200.00" />
         </div>
        
         {/* </div>
         <div className="row justify-content-evenly my-4"> */}
         <div className="col-lg-2 mx-lg-1 col-10 col-md-3  py-2">
             <CardB img={img5} title = "ChickenBreast" price = "500.00"/>
         </div>
         <div className="col-lg-2 mx-lg-1 col-10 col-md-3  py-2">
             <CardB img={img6} title = "Badam" price = "400.00"/>
         </div>
         <div className="col-lg-2 mx-lg-1 col-10 col-md-3  py-2">
             <CardB img={img3} title = "Coriander" price = "400.00"/>
         </div>
         <div className="col-lg-2 mx-lg-1 col-10 col-md-3  py-2">
             <CardB img={img4} title = "Egg" price = "200.00" />
         </div> 
         <div className="col-lg-2 mx-lg-1 col-10 col-md-4  py-2 hidden-md">
             <CardB img={img3} title = "Coriander" price = "400.00"/>
         </div>
         <div className="col-lg-2 mx-lg-1 col-10 col-md-4  py-2 hidden-md">
             <CardB img={img4} title = "Egg" price = "200.00" />
         </div> 
         </div>
         </div>
        </>
    )
}

export default FrontB;