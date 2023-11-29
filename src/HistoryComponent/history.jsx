import React, { useEffect, useState } from "react";
import './history.css';
import { useSelector, useDispatch } from "react-redux"; // need to import useDispatch from react-redux.
import { getAllCows } from '../Redux/Cowreducer/action'; // Adjust the relative path as needed
import Navbar from '../Navbar/navbar.jsx';
import Footer from "../Footer/footer.jsx";
import { Link } from "react-router-dom";

function History() {
    const [readText,setReadText] = useState(false);
    const dispatch = useDispatch();
    const data = useSelector(state => state.cow.cowData); 

    useEffect(() => {
        dispatch(getAllCows());
    }, []); // Use an empty dependency array to ensure this effect only runs once.

    const read = {
        WebkitLineClamp : 20,
        webkitBoxOrient : 'vertical',
        overflow : 'hidden',
        display : '-webkit-box'
        
    }

    const [currentPage,setCurrentpage] = useState(1);
    const record = 6;
    const lastIndex = currentPage + record;
    const firstIndex = lastIndex - record;
    const Records = data.slice(firstIndex,lastIndex);
    const nthPage = Math.ceil(data.length/record)
    const numbers =Array.from({ length: nthPage }, (_, i) => i + 1);


    function prePage()
    {
        if(currentPage !== 1)
        {
            setCurrentpage(currentPage -1)
        }

    }
    function changepage(id)
    {
        setCurrentpage(id);
    }
    function nextPage()
    {
        if(currentPage < nthPage)
        {
            setCurrentpage(currentPage+1)
        }
    }


    return (
        <div>
            <Navbar/>
            <div className="cows">
                <div>
                    <img className="history" src="./Resouces/screen.jpg"/>
                    <div className="readmore" style={readText ? null : read}>
                        <h2 className="sacred">The Sacred Cow</h2>
                        <p>

                        Cows have been domesticated for thousands of years, with evidence of their domestication dating back to around 10,000 years ago. This domestication played a crucial role in the development of early human societies.
                        The sacred cow, revered in Hinduism, extends beyond its religious significance and has deeply ingrained cultural, historical, and ecological implications in India. 
                        Nandi is the divine bull and the loyal vehicle (vahana) of Lord Shiva. Often depicted as a bull, Nandi is considered Shiva's devoted devotee and gatekeeper. In temples dedicated to Lord Shiva, you can often find a statue or image of Nandi placed at the entrance, facing the sanctum sanctorum where Lord Shiva's idol is enshrined.
                        The bull, symbolized by Nandi, represents strength and virility. It also symbolizes the animal nature of humans. Shiva's association with Nandi emphasizes the control over one's animal instincts and desires. There are various mythological stories highlighting the importance of the relationship between Lord Shiva and Nandi, emphasizing concepts of humility and devotion.

                        </p>
                        <h4  className="sacred">Cows as Symbols of Divinity</h4>
                        <p>
                        Lord Krishna, in His original spiritual form, is a cowherd boy in the heavenly community of Goloka Vrindavan, where He tends to transcendental surabhi cows. Krishna brought this pastoral lifestyle to Earth, emphasizing the importance of cows in human society, sustainable agriculture, and cooperation between humans and cows.
                        The significance of cows is not limited to Hinduism. In ancient Egypt, the goddess Hathor was often depicted as a cow and associated with fertility, music, and dance. Some Native American cultures held the buffalo in high regard for sustenance, clothing, and spiritual rituals.
                        <p>
                        In Hinduism, the cow holds a revered and sacred status. It is associated with several deities, with the most notable being Kamadhenu, a divine cow believed to grant wishes. The cow is also closely linked to Lord Krishna, who was a cowherd and is often depicted with cows. Hindus regard the cow as a symbol of non-violence (ahimsa), purity, and motherhood. Consequently, the slaughter of cows is considered a sin in Hinduism, and many regions in India have laws protecting them.
                        In Hinduism, the cow is considered a symbol of divinity, representing the goddess Kamadhenu or Surabhi, who is believed to grant wishes and provide inexhaustible sustenance. It's worth noting that the cow is associated with purity and selflessness, aligning with the concept of "ahimsa" or non-violence, which is central to Hindu ethical and spiritual values. This sacred status of the cow is ingrained in the daily lives of many Hindus.
                        </p>
                        </p>
                        <h4  className="sacred">Legal Protections and Cultural Practices</h4>
                        <p>
                        In modern times, there is a growing awareness of the environmental impact of cattle farming, including deforestation, greenhouse gas emissions, and resource consumption. This has led to discussions about sustainable and ethical cattle farming practices.
                        In India, where the majority of the population practices Hinduism, there are stringent laws in place to protect cows from harm, and the slaughter of cows is banned in many states. These laws stem from the religious and cultural reverence for the cow and reflect the broader values of non-violence and compassion. The sight of cows roaming freely in Indian streets and being fed by devotees is a common one, showcasing the practical manifestation of these beliefs.

                        </p>
                        <h4  className="sacred">Sustainability and Environmental Awareness</h4>
                        <p>
                        Beyond the religious and cultural aspects, the veneration of cows also holds a practical purpose in the context of sustainable agriculture and environmental consciousness. Cows provide valuable resources like milk, dung, and even labor for farming. Cow dung, for instance, is widely used as fuel, a disinfectant, and fertilizer. This connection between cows and agriculture highlights their vital role in rural Indian life.
                        Cows have played a crucial role in agriculture and as a source of food, milk, and other products. Ownership of cattle often symbolized wealth and status in many societies.
                        </p>
                        <h4  className="sacred">Resonance in Other Religions</h4>
                        <p>
                        While the cow's sacred status is most prominent in Hinduism, it's interesting to note that the symbolic reverence of animals, including cattle, can be found in various world religions. For instance, in ancient Egyptian mythology, the goddess Hathor was associated with a cow, and in some Native American cultures, the buffalo played a pivotal role in their way of life. These animals, like the cow in Hinduism, were regarded with profound respect for their contributions to sustenance and cultural symbolism.
                        Cows have been significant in various cultures and religions, often symbolizing prosperity, nourishment, and purity.
                        </p>
                        <h4  className="sacred">Global Impact of Cow Protection</h4>
                        <p>
                        The significance of cow protection is not confined to India alone. Mahatma Gandhi, the iconic Indian leader, promoted the cause of cow protection and vegetarianism, as he believed that cows were ill-treated and that their protection was an ethical imperative. This sentiment resonated globally and prompted discussions on animal rights and ethical treatment of animals.

                        </p>
                        <h4  className="sacred">The Cow in the Modern World</h4>
                        <p>
                        As the world grapples with environmental issues and ethical concerns about animal welfare, the veneration of the cow in Hinduism offers valuable lessons. It encourages the sustainable and ethical treatment of animals, emphasizing that their contributions to human life go beyond mere consumption. The cow symbolizes a harmonious and mutually beneficial relationship between humans and animals.
                        </p>
                        <p>The significance of cows in culture and religion is multifaceted, with different cultures and traditions having their own unique interpretations and practices. Cows are revered and protected in Hinduism and hold a special place in the beliefs and practices of millions of people. Nandi, as the divine bull, signifies devotion and humility in the presence of Lord Shiva. Beyond Hinduism, the historical, economic, and cultural importance of cattle is evident in various societies. While practices and beliefs may differ, the cow remains a symbol of sustenance, divinity, and cooperation between humans and animals in many parts of the world.
                        the sacred cow in Hinduism represents not just a religious belief but a profound cultural and ethical ethos. Its protection is deeply intertwined with the values of non-violence, sustainability, and reverence for all life, serving as a reminder of the intricate relationship between humans, animals, and the environment. This cultural legacy continues to shape the way people perceive and interact with the world around them, transcending borders and faiths.

                        </p>
                        
                    </div>
                    <div id="button">
                        <button className="clickme" onClick={()=>setReadText(!readText)}>{readText ? 'READ LESS...' : 'READMORE...'}</button>
                    </div>
                    <h1 className="type">Types of Cows in India</h1>
                    <p className="diffe">There are differetn types of cows in India. Indian cow names are mostly derived from the breeding tract of the cow. </p>
                </div>
                <div className="layout">
                {
                    Records?.map((record, index) => {
                        if (record) {
                        const { Colour, image, name, track } = record;
                        return (
                            <div key={Colour} className="main_container">
                            <div className="card-container">
                                <img src={image} alt={Colour} className="card-img" />
                                <h4 id="card-title">{name}</h4>
                                <h5 className="location">{track}</h5>
                                <div className="button_container">
                                <Link to={`/cow/${index + 1}`}>
                                    <button className="card-btn">more details</button>
                                </Link>
                                </div>
                            </div>
                            </div>
                        );
                        } else {
                        return null; // Handle the case when 'record' is null
                        }
                    })
                }

                 </div>
            </div>
            {/* pagination */}
            <nav className="page">
                <li className="page_num">
                    <a className="click" onClick={prePage}>prev</a>
                </li>
                {
                    numbers.map((n,i)=>(
                        <li className={`page-item ${currentPage === n ? 'active' : ' '}`} key={i}>
                            <a  className="click2" onClick={()=>changepage(n)} >{n}</a>
                        </li>
                    ))
                }
                <li className="page_num1">
                    <a  className="click3" onClick={nextPage}>next</a>
                </li>
            </nav>
            <div>
            <Footer className="footer"/>
            </div>
        </div>
        
    );
    
}

export default History;


