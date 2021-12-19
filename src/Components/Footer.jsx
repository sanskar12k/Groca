import React from "react";
import '../Components/footer.css';
import bg from '../img/logo1.png';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
    return (<>
    <div className="footer">
        <div className="row py-md-5 py-3  justify-content-center">
        <div className="col-lg-8 col-md-11 col-12">
            <div className="row justify-content-evenly">
            <div className="col-md-3 col-11">
                    <div className="imgs">
                        <img src={bg} alt="" />
                    </div>
                    <div className="address">
                        <HomeIcon/> No.58 A, East Madison Street, <br />
                             Baltimore, MD, USA 4508 
                    </div>
                    <div className="call">
                        <CallIcon/> +91 12345678
                    </div>
                    <div className="mail">
                        <MailIcon/> support@gmail.com
                    </div>
                    <div className="social"></div>
                     
            </div>
            <div className="col-md-3 col-4 py-md-0 py-4">
               
                <div className="items">
                    <ul >
                    <div className="imgs">
                    Help
                </div>
                        <li>
                            <a href="#actions">Search</a>
                        </li>
                        <li>
                            <a href="#actions">Help</a>
                        </li>

                        <li>
                            <a href="#actions">Information</a>
                        </li> 
                        <li>
                            <a href="#actions">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#actions">Shipping Information</a>
                        </li>                   </ul>
                </div>
            </div>
            <div className="col-md-3 col-4 py-md-0 py-4">
                
                <div className="items">
                    <ul >
                    <div className="imgs">
                Support
                </div>
                        <li>
                            <a href="#actions">Contact</a>
                        </li>
                        <li>
                            <a href="#actions">About Us</a>
                        </li>

                        <li>
                            <a href="#actions">Careers</a>
                        </li> 
                        <li>
                            <a href="#actions">Refund & Returns</a>
                        </li>
                        <li>
                            <a href="#actions">Deliveries</a>
                        </li>                   </ul>
                </div>
            </div>
            <div className="col-md-3 col-4 py-md-0 py-4">
                
                <div className="items">
                    <ul >
                    <div className="imgs">
                    Information
                </div>
                        <li>
                            <a href="#actions">Search Terms</a>
                        </li>
                        <li>
                            <a href="#actions"> Advanced Search </a>
                        </li>

                        <li>
                            <a href="#actions"> Help & FAQs </a>
                        </li> 
                        <li>
                            <a href="#actions">Store Location</a>
                        </li>
                        <li>
                            <a href="#actions">Order & Returns</a>
                        </li>                   </ul>
                </div>
            </div>
            </div>
        </div>

        </div>
    </div>

    </>);
}

export default Footer;