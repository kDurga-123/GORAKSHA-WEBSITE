import React from "react";
import './MilkFacts.css'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Milkfacts()
{
    return(
        <>
        <div>
            <Navbar/>
            
            <div id="container">
                <div className="image-container">
                    <img className="image" src="./Resouces/milkgraphic.png"/>
                </div>
                    <div className="weather">Regardless of whether you choose skim, 1%, 2% or whole milk, the calcium and nutrient content is the same.</div> 
                    <hr className="first"/> 
                   <hr className="second"/> 
                    <div className="main-div">
                        <div className="milk-fact-container">
                            <div>
                                <img className="milk-image" src="./Resouces/skelotons.png"/>
                            </div>
                            <div className="milk">
                                <h1>206 Reasons</h1>
                                <div>206 more reasons to drink milk – 206 is the number of bones in the human body.Keep them strong by drinking milk.</div>
                            </div>
                        </div> 
                        <div id="secound-contaner">
                            <h1 className="starignt">Straight Milk Facts</h1>
                            <ol type="1">
                                <li>Milk is rich in nutrients essential for human health, including Vitamins A, D, and B12, minerals such as potassium, calcium, phosphorus, zinc, magnesium, and protein.</li>
                                <li>A recent USDA study found nearly half the U.S. population is deficient in vitamin B-12. One solution is to eat fortified cereals and dairy products…like milk!</li>
                                <li>According to the federal government’s current Dietary Guidelines for Americans, children ages 9-18 need 3 servings of dairy products daily. Only 30% of teenage boys and 12% of teenage girls meet this recommendation.</li>
                                <li>Despite its creamy texture, milk is comprised of 85 to 95% water. The rest of its volume comes from nutritious vitamins, proteins, carbohydrates and fat.</li>
                                <li>Calcium is best absorbed into bones at around age 12 for girls and age 14 for boys. During the years of rapid growth during adolescence, 40 percent of total lifetime bone mass is accumulated.  Getting enough calcium is critical in childhood and early teens.</li>
                                <li>Women who eat at least three servings of dairy foods each day are 80 percent less likely to be obese than those who don’t.</li>
                                <li>Recent research found chocolate milk to be an effective recovery aid after prolonged exercise, and can actually improve performance in future exertion.</li>
                            </ol>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <div className="milk-picture">
                            <img className = "brocalli" src="./Resouces/broccoli.png"/>
                        </div>
                        <div className="div">Drinking milk is the easiest way to get the calcium you need. You would need to eat 2½ cups of broccoli just to get the same amount of calcium in one cup of milk!</div>
                       
                    </div>
                    <div className="colour">
                        <div className="about-milk">
                            <img src="./Resouces/teeth.png"/>
                        </div>
                        <div className="drinking-milk">Drinking milk and eating yogurt and cheese are a great way to protect your perfect smile. Milk reduces the level of acidity in the mouth, combats plaque formation and reduces the risk of cavities.</div>
                    </div>
                    <div>
                        <div className="meaningful">
                                <img src="./Resouces/lastgraphic.png"/>
                                <div>Cows provide more than 90% of the planet’s milk supply.</div>
                        </div>
                    </div>
                    <div>
                        <div className="fix">
                            <div className="bones">
                                <h2 className="Strengthen">Strengthen Bones!</h2>
                                <div>Dairy foods, when consumed with a healthy diet, can reduce the risk of osteoporosis and obesity.</div>
                                <div>Low calcium intake during childhood is associated with osteoporosis later in life.</div>
                                <div>Our bones continue to grow until age 30.  Ensure your entire family keeps bones strong by eating dairy and other foods rich in calcium and Vitamin D.</div>
                            </div>
                            <div>
                                <img className="empty" src="./Resouces/osteperosis.png"/>
                            </div>
                        </div>
                        <div className="resource">
                            <img className = "final-image" src="./Resouces/Caloriesinmilk.jpg"/>
                        </div>
                    </div>
            </div>
        </div>
        <div>
            <div className="ter">
                <Footer/>
            </div>
        </div>
     </>
    )
}
export default Milkfacts;



