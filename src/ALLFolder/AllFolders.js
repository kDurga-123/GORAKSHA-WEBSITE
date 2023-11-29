import React, { useState } from 'react';
import Media from "../MediaComponent/Media.jsx";
import Contact from "../ContactComponent/Contact.jsx";
import Cowcare from "../CowCareComponent/CowCare.jsx";
import History from "../HistoryComponent/History.jsx";
import Login from "../LoginComponent/Login.jsx";
import Home from "../HomeComponent/Home.jsx";
import Milkfacts from "../MilkFactComponent/MilkFacts.jsx";
import { Route, Routes } from "react-router";
import CowDetail from "../HistoryComponent/AllDetails.jsx";
import Cowcare1 from "../CowCareComponent/Information.jsx";
import Season from "../CowCareComponent/Season.jsx";
import Summer from "../CowCareComponent/Summer.jsx";
import RainySeason from "../CowCareComponent/Rainy.jsx";
import Doctor from "../ContactComponent/Doctor.js";
import AllInformation from "../MediaComponent/AllInformation.jsx";
import Distance from "../ContactComponent/Distance.js";
import Book from "../ContactComponent/Book.jsx";
import AllAppointments from '../ContactComponent/Table.jsx';

function Allfolders() {
  const [appointments, setAppointments] = useState([]);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cowcare" element={<Cowcare />} />
        <Route path="/milkfacts" element={<Milkfacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
        <Route path="/cow/:id" element={<CowDetail />} />
        <Route path="/cowcare1" element={<Cowcare1 />} />
        <Route path="/cowcare/season" element={<Season />} />
        <Route path="/cowcare/summer" element={<Summer />} />
        <Route path="/cowcare/rainy" element={<RainySeason />} />
        <Route path="/allinformation/:id" element={<AllInformation />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/distance" element={<Distance />} />
        <Route path="/book" element={<Book propSetAppointments={setAppointments} />} />
        <Route path="/allappointments" element={<AllAppointments appointments={appointments} setAppointments={setAppointments} />} />
      </Routes>
    </div>
  );
}

export default Allfolders;
