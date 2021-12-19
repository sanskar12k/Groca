import React from "react";
import '../Components/frontf.css';
import { Card, Button } from "react-bootstrap";
import img1 from "../img/img11.jpg";
const FrontF = () => {
    return (<>
        <div className="frontf">
            <div className="heading">
                Our Latest News
            </div>
            <div className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ratione!
            </div>
            <div className="row justify-content-center ps-4 pt-4">
                <div className="col-lg-4 col-md-8 bigcard">
                    <div className="row">
                        <Card >
                            {/* <div className="row"> */}
                                {/* <div className="col-6"> */}
                                    <Card.Img variant="top" src={img1} />
                                {/* </div> */}
                                {/* <div className="col-6"> */}
                                    <Card.Body>
                                        <Card.Title>Best In Quality Fresh Meat & Seafood</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officiis atque, autem fuga.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                {/* </div> */}
                            {/* </div> */}
                        </Card>
                    </div>
                </div>
                {/* <div className="col-1">
                   
                </div> */}
                <div className="col-lg-4 col-md-8 smcard">
                    <div className="row">
                        <Card style={{ width: '33rem' }}>
                            <div className="row">
                                <div className="col-6 align-self-center">
                                    <Card.Img variant="top" src={img1} /></div>
                                <div className="col-6">
                                    <Card.Body>
                                        <Card.Title>Best In Quality Fresh Meat & Seafood</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officiis atque, autem fuga.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card style={{ width: '33rem' }}>
                            <div className="row">
                                <div className="col-6 align-self-center">
                                    <Card.Img variant="top" src={img1} /></div>
                                <div className="col-6">
                                    <Card.Body>
                                        <Card.Title>Best In Quality Fresh Meat & Seafood</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officiis atque, autem fuga.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card style={{ width: '33rem' }}>
                            <div className="row">
                                <div className="col-6 align-self-center">
                                    <Card.Img variant="top" src={img1} /></div>
                                <div className="col-6">
                                    <Card.Body>
                                        <Card.Title>Best In Quality Fresh Meat & Seafood</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officiis atque, autem fuga.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default FrontF;