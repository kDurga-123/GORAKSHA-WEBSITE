import React from 'react';
import './cowcare.css'
import Navbar from '../Navbar/navbar.jsx';
import Footer from "../Footer/footer.jsx";
import { Link } from 'react-router-dom';

function Cowcare() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='main-contianer'>
                <div className='second-container'>
                    <iframe className ="vedio" src="https://media.flixel.com/cinemagraph/yx4pg78pojcmpn33fijo?hd=false" >
                    </iframe>
                </div>
                <div className='care'>
                    <h1>Cow Care</h1>
                    <div>passionate about caring for cows and know that they are our livelihood. Keeping them happy and healthy is our number one priority.</div>
                </div>
            </div>
            <div className='button-btn'>
               
            <Link to="/cowcare1">
          <button className='know'>Know more</button>
        </Link>
            </div>
            <h1 className='mother'>A cow is like a mother – gentle, nurturing, and always there for you.”</h1>
            <div className='background-images'>
            <div className='content-container'>
            <div class="flx-embed">

            </div>
        </div>
            </div>
            <div className='comfort'>
                <div className='cow'>
                    <h1>Cow Comfort</h1>
                    <div>A comprehensive computerized cooling system keeps the cows comfortable in the summer</div>
                    <div>Corrals are groomed daily to provide a soft, dry, comfortable bed for the cows</div>
                </div>
                <div className='temp'>
                <Link to="/season">
                    <img src='./Resouces/Temp-Sign-3.png'/>
                </Link>
                </div>
            </div>
            <div className='calf'>
            <div className='cowWithCalf'>
                  
                        <img src='./Resouces/Cow-with-Calf.png'/>
                   
                </div>
                <div className='health'>
                    <h1>Nutrition and Health</h1>
                    <div>Cows are fed 3X a day a meal nutritionally balanced to each stage of lactation by a nutritionist</div>
                    <div>Cows eat approximately 100 pounds a day. A typical meal for a cow includes alfalfa, corn silage, minerals, and by products such as bakery waste, cull carrots, and almond hulls</div>
                    <div>Focusing on preventative medicine, a consulting veterinarian is utilized to optimize the health care program</div>
                    <div>Artificial Insemination is used to mate individual cows to specific sires of superior genetic merit</div>
                    <div>Pregnancies are confirmed by employees through ultrasound</div>
                </div>
               
            </div>
            <div className='housing'>
                <div className='dairy'>
                    <h1>Calf Housing</h1>
                    <div>Heifer calves born on the dairy are raised on the dairy to become future milk cows</div>
                    <div>Calves are fed fresh milk twice a day with all day access to grain and water</div>
                    <div>Young calves are raised in individual cribs to promote health, cleanliness, individualized care and bonding with their human caregivers</div>
                </div>
                <div className='barn'>
                    <img src='./Resouces/Calf-Barn.png'/>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
export default Cowcare;