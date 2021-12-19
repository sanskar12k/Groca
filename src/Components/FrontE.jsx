import React from "react";
import '../Components/fronte.css';
import { Carousel } from "react-bootstrap";
import CardC from "./CardC";
const FrontC = () => {
    return (<>
        <div className="fronte">
            <div className="heading">Our Client Say!</div>
            <div className="text "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia natus perspiciatis ad animi .</div>
 
            <div className="row justify-content-center">
                <Carousel >
                    <Carousel.Item interval={4000}>
                        <CardC title = "Joe Nyrie" pos = "Web Developer"></CardC>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <CardC title = "San Marino" pos = "App Developer"></CardC>
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <CardC title = "Joe Marino" pos = "Software Developer"></CardC>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>


    </>);
}

export default FrontC;