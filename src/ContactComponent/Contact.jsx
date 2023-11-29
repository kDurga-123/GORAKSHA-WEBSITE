import React from "react";
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import './Contact.css'; 
import { Link } from "react-router-dom";
import { Form, Alert, Button } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="stille">
        <div className="six">
          <div>
            <h1 className="us">Contact Us!</h1>

            <h2 className="telepehone">telepehone or email us. We would love to hear from you.<b className="emergency">In case of an emergency, please call the helpline number.</b></h2>
            <Link to="/doctor">
              <button className="btn btn-info resemble">Book Appointment</button>
            </Link>
            <button className="btn btn-danger help">helpline</button>
          </div>
        </div>
        <div className="five">
            <img className="keyboard"src="https://thumbs.dreamstime.com/z/medical-doctor-woman-showing-empty-hand-isolated-white-background-161233317.jpg" width="30%" height="100px" />
        </div>
      </div>
      <h1 className="get">your cow can get</h1>
      <div className="timings">
        <div>
            <img src="https://cdn5.vectorstock.com/i/1000x1000/21/84/24-hours-doctor-service-logo-icon-sign-247-day-vector-28122184.jpg"/>
        </div>
        <div>
            <img src="https://tse4.mm.bing.net/th?id=OIP.UsCLY748Z5q4ssm8K4qDtgAAAA&pid=Api&P=0&h=220"/>
        </div>
        <div>
            <img src="https://tse1.mm.bing.net/th?id=OIP.4UCfH2DbPRIaqIXYFKLhmAHaFE&pid=Api&P=0&h=220"/>
        </div>
        <div>
            <img src="https://tse2.mm.bing.net/th?id=OIP.kzZB8XnSHmq_vSa2PgCcfgHaFc&pid=Api&P=0&h=220"/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
