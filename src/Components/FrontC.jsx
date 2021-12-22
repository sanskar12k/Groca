import React, { useEffect, useState } from "react";
import "../Components/frontc.css";
import { Button } from "react-bootstrap";
const FrontC = () => {
    const times = new Date("2021/12/29") ;

    const [time , setTime] = useState(new Date());
    const[day, setday] = useState(Math.floor((times-time)/86400000));
    const [hr, setHr] = useState(Math.floor((times - time )/3600000) -24*day );
    const [min, setMin] = useState(Math.floor((times - time )/60000) - 60*hr - 24*60*day) ;
    const [sec, setSec] = useState(Math.floor((times - time )/1000) - 60*min - 3600*hr - 24*60*60*day );
    useEffect(()=>{
        setTimeout(() => {
        setTime(new Date());
        setday(Math.floor((times-time)/86400000));
        setHr((Math.floor((times - time )/3600000) -24*day) );
        setMin((Math.floor((times - time )/60000) - 60*hr - 24*60*day));
        setSec((Math.floor((times - time )/1000) - 60*min - 3600*hr - 24*60*60*day));
        // console.log(sec);
        // console.log(min);
       },1000);
    })
    // console.log(sec);
    // console.log(min);
    // console.log(hr  );
    return ( 
     
        <>
            <div className="frontc">
               
                <div className="row ms-md-5 ps-md-5 ">
                <div className="col-lg-4 col-md-12 "> 
                <div className="heading ">
                 Special Discount <br/>
                    for all Grocery products</div>
                    <p className="mx-4 text ps-md-5"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque enim aliquam nulla officia eius animi sapiente facere. Earum velit incidunt numquam. </p>
                   <div className="time">{day} days & {hr}:{min}:{sec} left</div> 
                    <Button variant="primary">Add To Cart</Button>
                    </div>                
                </div>
            </div>
        </>
     );
}
 
export default FrontC;