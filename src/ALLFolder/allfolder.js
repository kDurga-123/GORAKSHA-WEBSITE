import React from "react";
// import Navbar from "../Navbar/navbar";
import Media from "../MediaComponent/media";
import Contact from "../ContactComponent/contact";
import Cowcare from "../CowCareComponent/cowcare";
import History from "../HistoryComponent/history";
import Login from "../LoginComponent/login";
import Home from "../HomeComponent/home";
import Milkfacts from "../MilkFactComponent/milkFacts";
import { Route, Routes } from "react-router";
import CowDetail from "../HistoryComponent/allDetails"
import Cowcare1 from "../CowCareComponent/cowcare1";
import Season from "../CowCareComponent/season";
import Summer from "../CowCareComponent/summer";
import RainySeason from "../CowCareComponent/rainy";
import AllInformation from "../MediaComponent/allinformation";
export default function Allfolders()
{
    return(
        <div>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/media" element={<Media/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cowcare" element={<Cowcare/>}/>
                <Route path="/milkfacts" element={<Milkfacts/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/history" element={<History/>}/>
                <Route path="/cow/:id" element={<CowDetail />} />
                <Route path="/cowcare1" element={<Cowcare1/>}/>
                <Route path="/cowcare/season" element={<Season/>}/>
                <Route path="/cowcare/summer" element={<Summer/>}/>
                <Route path="/cowcare/rainy" element={<RainySeason/>}/>
                <Route path="/allinformation/:id" element={<AllInformation/>}/>
            </Routes>
        </div>
    )
}