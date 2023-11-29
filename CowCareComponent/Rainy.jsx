import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Rainy.css'
function RainySeason(){
    return(
        <div>
           
                <Navbar/>
                <div className="string">
                <div className="all-images">
                    <img src="https://img.freepik.com/free-photo/caws-relaxing-grassy-field-costa-rica-rainforest_23-2148248882.jpg?w=900&t=st=1701274957~exp=1701275557~hmac=c7a18e3c85f97cbf77d1ab9538f734372d8466859e3af4c4f91a684fc0466928"/>
                    <img src="https://img.freepik.com/premium-photo/there-is-cow-walking-down-road-rain-generative-ai_927978-12161.jpg?size=626&ext=jpg&ga=GA1.1.1304291997.1700318015&semt=ais"/>
                    <img src="https://img.freepik.com/free-photo/herd-horses-grazing-grassy-field-with-foggy-background-iceland_181624-19585.jpg?size=626&ext=jpg&ga=GA1.1.1304291997.1700318015&semt=ais"/>
                    <img src="https://img.freepik.com/free-photo/grassy-field-near-water-with-cows-eating-grass-daytime_181624-10731.jpg?size=626&ext=jpg&ga=GA1.1.1304291997.1700318015&semt=ais"/>
                    <img src="https://img.freepik.com/premium-photo/thoroughbred-horses-grazing-cloudy-day-field_208861-3978.jpg?size=626&ext=jpg&ga=GA1.1.1304291997.1700318015&semt=ais"/>
                    <img src="https://img.freepik.com/free-photo/brown-cow-eatting-grass_1150-10814.jpg?size=626&ext=jpg&ga=GA1.1.1304291997.1700318015&semt=ais"/>
                </div>
            <div className="caring-container">
                <h2>Tips for Caring for Cows in the Rainy Season:</h2>
                <h3>Shelter:</h3>
                <div>Provide adequate shelter to protect cows from heavy rainfall and ensure they have a dry place to rest.
                    Well-designed barns or sheds can help minimize exposure to rain and mud.</div>
                    <h3>Foot Care:</h3>
                    <div>Mud and wet conditions can lead to hoof problems. Regular hoof trimming helps prevent issues like foot rot.
                    Ensure proper drainage in pens and paddocks to reduce mud accumulation.</div>
                    <h3>Disease Prevention:</h3>
                    <div>Vaccinate your cows against common rainy season diseases (see below).
                    Implement a herd health program with the guidance of a veterinarian.</div>
                    <h3>Nutrition:</h3>
                    <div>Adjust the diet to account for changes in forage quality during the rainy season.
                    Monitor body condition and provide necessary supplements.</div>
                    <h3>Water Management:</h3>
                    <div>Ensure access to clean and uncontaminated water sources.
                    Prevent waterlogging in feeding and resting areas.</div>
                    <h2>Common Rainy Season Diseases in Cattle:</h2>
                    <h3>Foot Rot:</h3>
                    <div>Caused by bacteria in moist conditions.
                    Keep areas as dry as possible, and promptly treat any signs of lameness.</div>
                    <h3>Respiratory Infections:</h3>
                    <div>Increased moisture can contribute to respiratory issues.
                    Provide good ventilation in barns and address any signs of coughing or nasal discharge.</div>
                    <h3>Internal Parasites:</h3>
                    <div>Wet conditions favor the survival of parasites.
                    Maintain a deworming program based on veterinary recommendations.</div>
                    <h2>
                    Vaccines for Cattle During Rainy Season:
                    </h2>
                    <h3>Clostridial Vaccines:</h3>
                    <div>Protect against diseases like blackleg.
                    Administer booster shots as recommended by your veterinarian.</div>
                    <h3>Foot-and-Mouth Disease (FMD) Vaccine:</h3>
                    <div>FMD is more prevalent in wet conditions.
                    Vaccinate according to the recommended schedule.</div>
                    <h3>Leptospirosis Vaccine:</h3>
                    <div>Leptospirosis can spread through contaminated water.
                    Consider vaccination to prevent leptospirosis.</div>
                    <h3>Bovine Respiratory Disease (BRD) Vaccines:</h3>
                    <div>Vaccines targeting common respiratory pathogens.
                    Especially important in areas prone to respiratory infections.</div>
                    <h2>General Disease Prevention Measures:</h2>
                    <h3>Regular Veterinary Check-ups:</h3>
                    <div>Schedule regular visits with a veterinarian for health assessments and vaccinations.
                    </div>
                    <div>Quarantine New Animals:

                    If introducing new animals, quarantine them before introducing them to the main herd.
                    Biosecurity Practices:

                    Implement biosecurity measures to prevent the introduction and spread of diseases.
                    Environmental Management:

                    Properly manage manure to prevent the proliferation of pathogens.
                    Always consult with a veterinarian to tailor your herd health program to the specific needs and conditions of your farm. Veterinary advice is essential for disease prevention and proper vaccination protocols. Regular monitoring and prompt action in response to any signs of illness are key to maintaining a healthy herd during the rainy season.</div>

            </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default RainySeason;