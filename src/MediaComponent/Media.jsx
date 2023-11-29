import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDisease } from '../Redux/CowReducer/Action.js';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from "../Footer/Footer.jsx";
import axios from 'axios';
import { Link } from "react-router-dom";
import './Media.css';

function Cowcare() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.diseases.diseasData);
  const [disease, setDisease] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const record = 6;
  const lastIndex = currentPage * record;
  const firstIndex = lastIndex - record;
  const Records = data.slice(firstIndex, lastIndex);
  const nthPage = Math.ceil(data.length / record);
  const numbers = Array.from({ length: nthPage }, (_, i) => i + 1);

  useEffect(() => {
    dispatch(getAllDisease());
  }, [dispatch]);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentpage(currentPage - 1);
    }
  }

  function changepage(id) {
    setCurrentpage(id);
  }

  function nextPage() {
    if (currentPage < nthPage) {
      setCurrentpage(currentPage + 1);
    }
  }

  const debouncedFetchData = debounce(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/durga/search/${disease}`);
      setSearchedData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, 1000);

  useEffect(() => {
    if (disease.trim() !== "") {
      debouncedFetchData();
    }
  }, [disease, debouncedFetchData]);

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
      <Navbar />
      <div className="disease-container">
        <div className="input-box">
          <input className="text" type="text" onChange={(event) => setDisease(event.target.value)} placeholder="search the disease...."/>
          <img src="./Resouces/search.png" alt="Search Icon" className="kit"/>
        </div>
        <div className="symptoms">
          {disease.trim() === "" ? (
            Records.map((item, index) => (
              <div key={index} className="main-backend">
                <div className="announce">
                  <img src={item.image1} alt="Image 1" className="backendImage"/>
                </div>
                <div className="disease_name">{item.diseaseName}</div>
                <div className="main-button">
                  <Link to={`/allinformation/${index + 1}`}>
                    <button className="already">read more</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            searchedData.map((item, index) => (
              <div key={index} className="main-backend">
                <img src={item.image1} alt="Image 1" className="backendImage"/>
                <div className="disease_name">{item.diseaseName}</div>
                <div className="main-button">
                  <Link to={`/allinformation/${index + 1}`}>
                    <button className="alredy">read more</button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <nav className="page">
        <li className="page_num">
          <a className="click" onClick={prePage}>
            prev
          </a>
        </li>
        {numbers.map((n, i) => (
          <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
            <a className="click2" onClick={() => changepage(n)}>{n}</a>
          </li>
        ))}
        <li className="page_num1">
          <a className="click3" onClick={nextPage}>
            next
          </a>
        </li>
      </nav>
      <Footer />
    </div>
  );
}

export default Cowcare;

