import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { getDoctors } from '../Redux/CowReducer/Action.js'; 
import Navbar from '../Navbar/Navbar.jsx';
import Footer from "../Footer/Footer.jsx";
import './Doctor.css'
import { Link } from "react-router-dom";
import { Form, Alert, Button } from "react-bootstrap";

function Doctor(){
    const dispatch = useDispatch();
    const DoctorData = useSelector(state => state.doctor.doctorData); 
    console.log(DoctorData)
    useEffect(() => {
        dispatch(getDoctors());
    }, []); // Use an empty dependency array to ensure this effect only runs once.

    return(
        <div>
            <Navbar/>
            <div className="main-con">
            {DoctorData.map((doctor, index) => (
                <div key={index} className="fox">
                    <img src={doctor.image} alt={doctor.name} className="accessible"/>
                    <div><b>Name : </b>{doctor.name}</div>
                    <div><b>age : </b>{doctor.age}</div>
                    <div><b>Location : </b>{doctor.location}</div>
                    <div><b>Experience : </b>{doctor.experience}</div>
                    <Link to="/book">
                        <button id="Book"  class="btn btn-success">Book</button>
                    </Link>
                    <Link to="/distance">
                        <button id="distance" className="btn btn-secondary">distance</button>
                    </Link>
                </div>
        ))}
            </div>
            <Footer/>
        </div>
    )
}
export default Doctor;