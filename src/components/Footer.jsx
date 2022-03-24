import React from 'react';
import facebook_logo from '..//images/facebook_logo.jpg';
import inst_logo from '..//images/inst_logo.png';
import whatsapp from '..//images/whatsapp_logo.png';
import styles from '../componentStyles/Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="adress">
                <p>
                    Rotshild, 1 <br />
                    Tel-Aviv, Israel <br />
                    0587236129
                </p>
            </div>

            <div className="footer-websites">
                <a href="https://instagram.com/seva_gretchko?utm_medium=copy_link">
                    <img className="icon-contact" src={inst_logo}></img>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100059381994346">
                    <img className="icon-contact" src={facebook_logo}></img>
                </a>
                <a href="https://api.whatsapp.com/send?phone=79122414944">
                    <img className="icon-contact" src={whatsapp}></img>
                </a>
            </div>
        </div>
    );
}
