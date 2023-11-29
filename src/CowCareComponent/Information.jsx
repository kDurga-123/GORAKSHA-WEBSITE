import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Information.css'

function Cowcare1() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="cowshed">
        <h1>How to treat :</h1>
        <div className="how">
        Many people think that keeping a cow tied up in a cowshed is a natural thing. When people see cows roaming on a road, they react by saying that the cattle owners should not let them loose and that they should be cared for and protected within the confines of a cowshed. Instead of finding their own food – often from trashcans and garbage heaps – they should be fed within the cowshed.

            While I think it is appalling to let cows out on the street to fend for themselves, keeping them in cowsheds permanently simply to be fed and to give milk, is even worse. Some spend their entire lives standing on concrete or dirt floors contaminated with blood, urine and faeces, often confined in crowded cowsheds.

        </div>
      </div>
      <img className="treat"src="./Resouces/cow10.JPG"/>
      <div className="farming">Cattle farming is growing and intensifying in many parts of the world, in response to increasing demand for beef [1]. The model used for new dairy farms is usually one of intensive production on an industrial scale. Cows are permanently housed in groups of up to a few thousand and fed a loose mix of conserved forages and concentrated ingredients, despite advertising often suggesting to the consumer that the cows are kept on pasture. Calves are slaughtered at just a few days of age if they are male and reared to replace their short-lived mothers if female. Beef production in some of the world’s major beef producing countries, especially the USA and Australia, is equally intensive, with cattle finished in feedlots similar to the intensive dairy production model, or in the case of Australia, sent to Asia for finishing in feedlots. Other countries rear cattle primarily at pasture, for example Brazil, but the tendency is towards more intensive production systems, e.g., in China [2]. With this intensification has come criticism, mainly in Western countries, that cattle not only have poor welfare in the modern intensive production systems, leading to short lifespans, but they also contribute worldwide to climate change through their methane emissions, and they reduce food security through the increasing use of cereals in their diet, which could otherwise be used more efficiently to feed humans directly.

T           he world’s largest cattle herd is in India, where the predominantly vegetarian population rely on nutrients from dairy products as a major part of their diet. Cattle have been treated differently in India to the rest of the world for centuries, being revered and used mainly for dairy, not beef products, because of a belief that cow slaughter is immoral. A new book, ‘Cow Care in Hindu Animal Ethics’ by Kenneth R. 
      </div>
      <div className="th">
          <img src="/Resouces/th.jpeg"/>
      </div>
<div className="Valpey">Valpey, published in the Palgrave Macmillan animal ethics series, explores the evolution of the cow culture in India and what it means for society today, in India and elsewhere. In this review of Valpey’s book, I consider how Indian philosophy towards cattle management practices arose, and whether there are any lessons for cattle management in the rest of the world.

                Valpey introduces the book by setting out the extent of the greater regard for cows in India than elsewhere. It is not just because of the majority Hindu population there, he argues, because the early writers on cow sanctity considered that they were making statements about cattle as a general principle, not just related to India or Hinduism. Nevertheless, attitudes towards cows are central to the Hindu faith. Given that there is general support for protection of cows in India, Valpey reminds us of the various motivations for this support. The least desirable is the uninformed, blind following of activist movements for cattle, often in association with membership of a particular political party, which may lead to hatred and violence. Such is seen in the cow vigilantism that has recently been spreading in India. Some vigilante groups patrol India’s borders to try to catch cattle smugglers, others lynch cow butchers or cow eaters (typically Muslims). Also undesirable is the call for action against cattle slaughterers that is borne from a desire to gain praise for oneself, a motive commonly associated with politicians. Most beneficial is the sort of dedicated activism, which seeks to make changes to the welfare and ethics of cattle production for their sake. In this regard, Valpey considers that cows should be considered as subjects in themselves, not objects with only instrumental significance, even though many people in India and perhaps most people in Western countries appear to adhere to the latter view. Here, there are lessons for today’s animal activists in Western countries.</div>
      <div>
        <div className="extent">
        <iframe
                    width="700"
                    height="315"
                    src="https://www.youtube.com/embed/SFydWFDkpaI"
                    frameborder="0"
                    allowfullscreen
                    className="iframe"
  ></iframe>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Cowcare1;
