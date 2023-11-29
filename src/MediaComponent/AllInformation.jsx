import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDisease } from '../Redux/CowReducer/Action.js';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './AllInformation.css'
import Navbar from '../Navbar/Navbar.jsx';
import Footer from "../Footer/Footer.jsx";

function AllInformation() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.diseases.diseasData);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getAllDisease());
    }, []);

    const selecteddisease = data.find((cow, index) => String(index + 1) === id);
const [content, setContent] = useState('');

useEffect(() => {
    if (selecteddisease) {
        setContent(
            <>
            <ul className="Screen-readers">
        <li>{selecteddisease.symptoms}</li>
        </ul>
        </>);
    }
}, [selecteddisease]);

    function symptoms() {
        setContent(<div>{selecteddisease.symptoms}</div>);
    }

    function howToCare() {
        setContent(<div>{selecteddisease.howtocare}</div>);
    }

    function Disease() {
        setContent(<div>{selecteddisease.whydisease}</div>);
    }

    function Medicine() {
        setContent(<><div>{selecteddisease.basicmedicine}</div>
        <div className="announce">
            <img src={selecteddisease.image3} alt="Image 3" className="img-fluid" />
        </div>
        </>);
    }

    return (
        <>
        <Navbar/>
        <div className="information-container">
            <div className="image-container">
                {selecteddisease && (
                    <div key={selecteddisease.diseaseId} className="image-row">
                        <img src={selecteddisease.image1} alt="Image 1" id="img-fluid" />
                        <img src={selecteddisease.image2} alt="Image 2" id="img-fluid" />
                        
                    </div>
                )}
            </div>
            <div className="button-container">
                <Button variant="primary" onClick={symptoms} className="showSymptoms">Show Symptoms</Button>
                <Button variant="info" onClick={howToCare}>How to Care</Button>
                <Button variant="warning" onClick={Disease}>Why This Disease</Button>
                <Button variant="success" onClick={Medicine}>Basic Medicine</Button>
            </div>
            <div className="content-container">{content}</div>
        </div>
        <Footer/>
        </>
    );
}

export default AllInformation;
