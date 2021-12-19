import React from "react";
import "../Components/cardc.css";
import { Card } from "react-bootstrap";
import profile from '../img/google2.jpg';
const CardC = (props) => {
    return (
        <>
            <div className="cardC">
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title> 
                        <img src={profile} alt="" />
                        {props.title}
                        <p>{props.pos}</p>
                        </Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta ut officiis sunt dolore quod ad sit, odio autem iusto tempore, accusamus nostrum iure mollitia optio excepturi eum. Quasi, voluptatem?
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default CardC;