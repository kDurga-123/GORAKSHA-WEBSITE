import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDisease } from '../Redux/Cowreducer/action';
import { useParams } from 'react-router-dom';

function AllInformation() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.diseases.diseasData);
    const { id } = useParams(); // Move this line up

    useEffect(() => {
        dispatch(getAllDisease());
    }, []);

    const selecteddisease = data.find((cow, index) => String(index + 1) === id);
    const [content, setContent] = useState('');

    function symptoms() {
        setContent(<div>{selecteddisease.symptoms}</div>);
    }

    function howTocare() {
        setContent(<div>{selecteddisease.howtocare}</div>);
    }

    function Disease() {
        setContent(<div>{selecteddisease.whydisease}</div>);
    }

    function Medicine() {
        setContent(<div>{selecteddisease.basicmedicine}</div>);
    }

    return (
        <div>
            <div>
                {selecteddisease && (
                    <div key={selecteddisease.diseaseId}>
                        <img src={selecteddisease.image1} alt="Image 1" className="backendImage" />
                        <img src={selecteddisease.image2} alt="Image 2" />
                        <img src={selecteddisease.image3} alt="Image 3" />
                        <a href={selecteddisease.beforecare} target="_blank" rel="noopener noreferrer">Open in New Tab</a>
                    </div>
                )}
            </div>
            <button onClick={symptoms}>Show Symptoms</button>
            <button onClick={howTocare}>How to Care</button>
            <button onClick={Disease}>Why This Disease</button>
            <button onClick={Medicine}>Basic Medicine</button>

            <div>{content}</div>
        </div>
    )
}

export default AllInformation;
