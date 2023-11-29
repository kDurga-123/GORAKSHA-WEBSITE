
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDisease } from '../Redux/Cowreducer/action';
import Navbar from '../Navbar/navbar.jsx';
import Footer from "../Footer/footer.jsx";
import axios from 'axios'; // Import axios
import { Link } from "react-router-dom";
import './media.css'
function Cowcare() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.diseases.diseasData);
    const [disease, setDisease] = useState("");
    const [searchedData, setSearchedData] = useState([]);

    useEffect(() => {
        dispatch(getAllDisease());
    }, [dispatch]);

    // Debounce function to delay API requests
    const debouncedFetchData = debounce(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/durga/search/${disease}`);
            setSearchedData(response.data); // Update state with fetched data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, 1000);

    useEffect(() => {
        // Invoke the debounced function when the input changes
        if (disease.trim() !== "") {
            debouncedFetchData();
        }
    }, [disease, debouncedFetchData]);

    // Debounce utility function
    function debounce(func, delay) {
        let timeoutId;
        return function (...args) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="disease-container">
                <div className="input-box">
                    <input className="text" type="text" onChange={(event) => setDisease(event.target.value)}/>
                    <img src="./Resouces/search.png" alt="Search Icon"/>
                </div>
                <div className="symptoms">
                    {disease.trim() === "" ? (
                        // Render original data
                        data.map((item, index) => (
                            <div key={index} className="main-backend">
                                <img src={item.image1} alt="Image 1" className="backendImage"/>
                                <div>{item.diseaseName}</div>
                                <div className="main-button">
                                    <Link to={`/allinformation/${index + 1}`}>
                                        <button>read more</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Render fetched data
                        searchedData.map((item, index) => (
                            <div key={index} className="main-backend">
                                <img src={item.image1} alt="Image 1" className="backendImage"/>
                                <div>{item.diseaseName}</div>
                                {/* Add additional rendering logic for the fetched data */}
                                {/* Adjust the Link and button as needed */}
                                <div className="main-button">
                                    <Link to={`/allinformation/${index + 1}`}>
                                        <button>read more</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Cowcare;
