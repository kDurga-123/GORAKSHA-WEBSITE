import React from "react";
import Navbar from '../Navbar/Navbar.jsx';
import Footer from "../Footer/Footer.jsx";
import './Home.css'
function Home()
{
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div>
                    <div className="quote">It doesn't matter how much milk you spill as long as you don't lose the cow.</div>
                    <div>
                      <img className="motherCow" src="./Resouces/cow.png"/>
                        <img className="childCow" src="./Resouces/sheep.png"/>
                        <hr className="new"/>
                    </div>

                </div>
                <div>
                    <img className="animation" src="./Resouces/mainPage.avif"/>
                </div>
            </div>
            <div>
                <h1 className="why"> Why use Goraksha.com ??</h1>
                <div className="boxContainer">
                    <div className="value1">
                        <div>Explore the history of cow domestication,<br/> evolution, and cultural <br/>significance at Goraksha.com</div>
                    </div>
                    <div className="value2">
                        <div> you can educate yourself about<br/> common cow diseases and learn essential <br/>care practices for these gentle creatures</div>
                    </div>
                    <div className="value3">
                            <div>At Goraksha.com, we offer 24-hour <br/>doctor support for immediate cow care</div>
                    </div>
                </div>
                <div className="ourplateform">
                    <div>
                        <h1 className="our">OUR PLATFORM</h1>
                    </div>
                    <div className="imagesAndContent">
                        <div>
                            <img className="adjest" src="./Resouces/tick.png"/>
                            <div className="offline">Works online and offline, wherever you are</div>
                        </div>
                        <div>
                        <img className="adjest1" src="./Resouces/tick.png"/>
                            <div className="offline1" >You can reserve a doctor's appointment slot for your convenience.</div>
                        </div>
                        <div>
                        <img className="adjest1" src="./Resouces/tick.png"/>
                            <div className="offline1">You can book emergency appointment slots.</div>
                        </div>
                        <div>
                        <img className="adjest1" src="./Resouces/tick.png"/>
                            <div className="offline1">Goraksha.com provides round-the-clock access to veterinary support for your cows.</div>
                        </div>
                        <div>
                        <img className="adjest1" src="./Resouces/tick.png"/>
                            <div className="offline1">You can call us directly to receive instructions and assistance.</div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
            <div>
                <h1 className="get">Get started with:</h1>
                <div className="starting">
                    <div>
                        <img src="./Resouces/History1.png"/>    
                        <h3>History</h3>
                    </div>
                   <div>
                        <img src="./Resouces/CowFacts.png"/>
                        <h3>Cow Care</h3>
                   </div>
                   <div>
                        <img src="./Resouces/sustain.png"/>
                        <h3>Sustainability</h3>
                   </div>
                    
                </div>
            </div>
            <div className="doctor">
                <div>
                <img src="./Resouces/indian-doctors.jpg" />
                </div>
                <div>
                <h2>Doctor words:</h2>
                    <div className="information">I have been taking my hairy kids, some call them pets, but they are family,to Cat & Cow for over<br/> ten years. They are the best. Very compassionate, helpful, understanding, maybe more than <br/>words can express.
                        Being  grateful for their service is an understatement. I thank Dr. Allen,<br/> and all of Cow associates for their kindness, not only to us humans, but to the love<br/> of our non-biological family members. </div>
                            <br/>
                            <ul className="unoredred">
                                <li><b>Information Hub:</b> goraksha.com is a go-to source for cattle farmers seeking valuable information.</li>
                                <li><b>Data Tools:</b> The website offers data and analytics tools for smarter decision-making.</li>
                                <li><b>Community Forum: </b>Farmers can connect and share insights through an online forum on the site</li>
                            </ul>
                    </div>
                </div>
                <div>
                    <h1 className="trust">Trusted by farmers</h1>
                    <h5 className="farmersReview">Farmers tell us they are finding veterinary doctors easily with the Goraksha website.</h5>
                    <div className="review">
                        <div>
                            <img className="farmer"src="./Resouces/farmer1.avif"/>
                            <h2></h2>
                        </div>
                        <div>
                            <img className="farmer" src="./Resouces/farmer2.webp"/>
                            <h2></h2>
                        </div>
                        <div>
                            <img className="farmer" src="./Resouces/farmer3.jpg"/>
                            <h2></h2>
                        </div>
                    </div>
                    <button className="button">READ REVIEWS</button>
                </div>
                <div>
                     <iframe width="700" height="400" src="https://www.youtube.com/embed/2hCoxn5CMwk" frameborder="0" allowfullscreen></iframe>
                </div>
           <Footer/>

        </div>
    )
}
export default Home;


