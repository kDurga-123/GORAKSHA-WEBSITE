import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";


function Summer()
{
    const first = ['Rapid and weak pulse','Rapid but shallow breathing','Abnormal vital parameters: Elevated heart rate, respiration rate, rectal temperature etc.','Unusual salivation',
'Dizziness / unconsciousness','Skin becomes dull and may be cold too','In case of heat stroke, body temperature is very high– sometimes as high as 106 – 108°F.']

const second = ['Ensure that the animals are kept under shades. The most effective source of shade is trees. If shade trees are not available, thatched roof of a minimum height of 9 feet should be provided. Agri-nets with 20% perforation are also useful. If facilities are not available with the individual farmers, facilities available at the village shall be used by the community.','Thatching the roof with materials like paddy straw etc, painting the roof with white paint or, providing a false ceiling insulation will help provide a cooler environment.',
'Create barriers against hot wind using thatched wall or wet gunny cloth/ gunny bags.','Ensure one ventilator of 3 x 1 feet per cow in covered shed. In these sheds heavy duty fan is best option to facilitate ventilation.','Misting/Fogging of water in the microenvironment of the animal at least thrice in an hour along with provision of fan is useful in hot dry weather. Auto Mister/ Fugger with mini pumps and cyclic timers are preferable.',
'Heat stress can also be managed by spraying/ sprinkling water directly on the body of animalsfor a period of 1 to 5 minutes at an interval of 10- 30 minutes. Fans/  blowers should be used to induce evaporation  from the skin of animals. With a provision of fan this method can work both in hot dry and hot humid condition.','The most effective way of combating heat stress in buffalo is wallowing in the water pond.']

const third = ['Ensure adequate round the clock drinking water to animals, which should be provided under shade.','Feeding should be practiced during early morning, evening &night.','Prefer grazing during early morning & late evening hours to avoid the scorching heat.','Ration density may be increased so as to provide same nutrients at reduced dry matter intake.  Diets with low-fibre and high fermentable carbohydrate have lower dietary heat increment compared to high fibre diets.','Ensure increased mineral supplementation during hot weather to meet the increased demand of minerals. Potassium rich mineral mixture should be preferred.']



    return(
        <div>
            <div>
               <Navbar/> 
            </div>
            <div>
                <img src="./Resouces/animals.png"/>
            </div>
            <div>
                <h2>Managing Dairy Cattle  During Summer in India: Practical Approaches</h2>
                <div>Heat Stress indicates all high temperature related stress, which induces thermoregulatory changes in cattle. During the extreme hot humid or hot dry weather, this thermoregulatory capability of cattle to dissipate heat by sweating and panting is compromised and heat stress occurs. Severe heat stress can further lead to rise in body temperature, increased pulse rate, increased peripheral blood flow, reduced feed intake, and increased water intake.</div>
                <div>When the environmental temperature goes beyond Upper critical temperature (24°-26°C for Exotic and crossbred cattle and 33°C for Zebu cattle and 36°C for buffaloes), body is unable to maintain the core body temperature through sweating and panting (evaporative heat loss mechanism). This when coupled with rising body heat production rate lead to hyperthermia in the animal </div>
                <h2>Importance of Thermal Humidity Index</h2>
                <div>Temperature-humidity index (THI) is the most common estimate of heat stress in the dairy industry (Armstrong, 1994). It combines the impacts of dry bulb temperature and relative humidity but does not include solar radiation or wind speed. Thus, THI is a good indicator of heat stress in housing structures (Collier et al., 2008). Ravagnolo et al (2000) reported that the milk yield declined @ 0.2 kg per unit increase in THI when THI exceeded 72. The authors concluded that THI could be used to estimate the effect of heat stress on production. Bouraoui et al. (2002) reported that the THI was widely used in hot areas all over the world to assess the impact of heat stress. It is commonly considered that THI equal to 72 is the threshold of environmental heat stress in cows. Thatcher et al. (2010) reported that dairy cows were exposed to heat stress when THI exceed above 72 and when it exceed 88, then animals is exposed to severe heat stress condition.</div>
                <img src="https://www.pashudhanpraharee.com/wp-content/uploads/2022/04/heat-stress-300x165.jpg"/>
                <h2>Body Temperature</h2>
                <div>Physiological parameters like rectal temperature, skin temperature, and udder skin temperature gives an immediate response to the climatic stress and consequently the level of discomfort to the animals. Rectal temperature (RT) is taken directly inside the body cavity which is typically slightly higher than skin temperature. Change in rectal temperature has been considered as an important measure of physiological status as well as ideal indicator for assessment of stress in animals (Johnson, 1980; West, 2003). McDowell et al. (1996) reported that even a rise of less than 1°C in rectal temperature was enough to reduce performance in most dairy animals. RT is generally considered to be a useful measure of body temperature and changes in RT indicates changes of a similar magnitude in deep body temperature. RT is considered as a good index of body temperature even though there is a considerable variation in different parts of the body core at different times of the day. Bernabucci et al. (2002) assessed the effect of hot season (39.5 ± 0.20C) in transition dairy cows and found that temperature differed significantly (39.5 vs. 39.1°C). Koubkova et al. (2002) reported significant increase in RT from 37.3 to 39.3°C when high yielding HF cows were exposed to high temperature conditions.</div>
                <h2>Dry matter intake (DMI)</h2>
                <div>The NRC predicts that the DMI for a 600 kg cow producing 40 kg milk will decline from 18.7 kg at 200C to 16.7 kg at 350C (9%). However, the energy that is consumed during hot weather is used less efficiently for milk production because of greater maintenance costs, which are estimated to be 20% greater when environmental temperature are 350C than they were 200C . Ronchi et al. (2001) reported that dry matter intake decreased by 23% in heifers managed at 320C and 70% relative humidity. Holter et al. (1997) established a significant negative correlation between THI and DMI for cows and suggested that the effect of THI is probably mediated through the effects of increasing body temperature of cow.

</div>
                <h2>Milk yield (MY)</h2>
                <div>Reduced milk production is the first perceived consequence of heat stress. Heat stress affects the productive performance of dairy animals by reducing their dry matter intake (DMI), feed efficiency and milk yield (Gantner et al., 2011). Reduced feed intake during heat stress is the major reason for reduced milk production in dairy cows (Baumgard et al., 2012). The optimum environmental temperature for lactation depends on species, breed and degree of tolerance to heat or cold. The milk yield of Holstein cattle declines at temperature above 21°C, in case of Brown Swiss and Jersey cattle it declines at about 24 to 27°C whereas milk yield of Zebu cattle declines only above 34°C (Hafez, 1968). The most significant factors affecting milk yield during hot weather in South Carolina were the total numbers of hours when THI exceeded 74 during the preceding four days, and the number of hours exceeding THI 80 on the preceding day ) (Ghosh et al., 2017).
</div>
                <h2>Udder health</h2>
                <div>Heat stress results in increases in Somatic cells count (SCC) (Ghosh et al., 2017). Somatic cells in milk are predominantly white blood cells or leukocytes which are present as one of the primary protective mechanisms of the mammary gland which is slough off from the lining of mammary gland during normal course of milking (Harmon, 1994).The majority of somatic cells are leukocytes (white blood cells) which become present in increasing numbers in milk usually as an immune response to a mastitis-causing pathogen – and a small number of epithelial cells, which are milk-producing cells shed from inside of the udder when an infection occurs. SCC of a parameter derived from this count, is often used to distinguish between infected and uninfected quarters. Nelson et al. (1969) reported a positive relationship between high summer environmental temperature and SCC in milk. The high somatic cell counts observed in hot humid condition due to harsh climatic condition of high humidity  ambient temperature leading to stress condition and increase in susceptibility of infection (Hogan et al., 1989).

</div>
                <h2>Reproduction</h2>
                <div>The patterns of reproductive behavior of farm animals vary with the variation in climatic conditions. Pronounced variations observed in the signs of estrus, rates of conception and frequency of calving are generally attributed to climatic factors. Heat stress resulted in decreased growth rate, average daily gain and feed intake, estrus frequency, estrus duration, calving rate and increased in inseminations per conception (Patel et al., 2017). Rabiee et al. (2010) reported that secretion of gonadotropin-releasing hormone from the hypothalamus and the gonadotropins, luteinizing hormone (LH) and follicle stimulating hormone (FSH) from the anterior pituitary gland affected by heat stress.

</div>
                <h2>Economic importance:</h2>
                <div>All the changes associated with heat stress lead to loss of productivity, reduced breeding efficiency and even loss of life in extreme cases. Every year in India severe loss in milk production incurred due to heat stress causing huge financial loss. Heat stress has also detrimental effects on reproduction by decreasing oestrus expression, conception rate and by increasing length of service and dry period.</div>
                <h2>Susceptible animals:</h2>
                <div>Though indigenous breeds of cattle are more thermo-tolerant, crossbred and exotic breeds of cattle are highly sensitive to heat stress.  Buffaloes are more prone to this owing to their black skin that absorbs more solar radiations and fewer sweat glands (only 1/6th that of cattle), compromising heat dissipation through evaporative heat loss.

</div>
                <h2>Detecting Heat stress through symptoms:</h2>
                <div>In case of heat stress, the following symptoms are seen</div>
                <ul id="physiological">
          {first.map((item, index) => (
            <li key={index} className="list">{item}</li>
          ))}
        </ul>
        <h1>Managing Heat stress:</h1>
        <h2>Management of heat stress</h2>
        <h3>Increase water availability to cows</h3>
        <div>Normal water supply recommendations are inadequate in the summer. Water intake increases by up to 50% as the THI approaches 80. Waterer space available and water intake per animal becomes very important. During heat episodes, Mader et al. (1997a) found that as much as three times the normal waterer space (7.5 vs. 2.5 cm of linear space per animal) may be needed to allow for sufficient room for all animals to access and benefit from available water.</div>
        <h3>Change the feeding routine</h3>
        <div>The two most important changes are mix and feed more often and feed a greater proportion of feed at night, 60 to 70% of feed. Watch for feed heating in the bunk – clean bunks out more often Increase airflow / ventilation. Open up the sides of the barn to maximize the natural ventilation. Install fans in the barn. The most important areas to increase ventilation are the holding area, along the inside of the feed bunk and over the stalls. (Kundu et al., 2013).

</div>
        <h3>Ration specification changes</h3>
        <div>Some the key changes for lactating cows: increase the ration concentration but do not compromise fibre levels, add fat to the ration, increase potassium to 1.4 – 1.6% (West, 2002), increase sodium to 0.45 – 0.5%, increase magnesium to 0.3 – 0.4%. This requires a careful selection of mineral sources to ensure that chloride levels are kept low. Consider a modest increase in protein but don’t over feed a fraction.

</div>
<h3>Shed Cooling</h3>
<div>Use a fan, foggers and fine mist in the barn to cool the air. This will help reduce the heat load on the cows. Breathing cooler air will help cows cool faster. Make sure misters are effective and that they don’t inadvertently simply increase the humidity.</div>
<h3>Feed additives during summer
</h3>
<div>Purwar et al.,2017 also found reduction in heat stress in KF heifer by supplementation of protected fat (2.5% of DMI), yeast (10 g/animal/day), niacin (6 g/animal/day), zinc (40 mg/kg DMI), and chromium (1.5 mg/kg DMI). Similarly Patel et al., 2017 also found reduce heat stress by supplementation of 80 and 120 ppm zinc to KF cows.

</div>
<h3>The following factors are important in managing thermal stress</h3>
            </div>
            <ul id="physiological">
          {second.map((item, index) => (
            <li key={index} className="list">{item}</li>
          ))}
        </ul>
        <img src="https://www.pashudhanpraharee.com/wp-content/uploads/2022/04/Heat-Stress-in-Dairy-animals.png"/>
        <h3>Animal cooling systems are very important especially in high yielding crossbreds and exotic animals</h3>
        <div>
        <ul id="physiological">
          {third.map((item, index) => (
            <li key={index} className="list">{item}</li>
          ))}
        </ul>
        <div>
            <h2>Treatment:</h2>
            <div>Immediate veterinary aid should be provided to the suffering animal. In the meantime, the animal shall be moved to a cooler place, given bath with cold water or wrapped in wet sheets and provided with fan.</div>
        </div>
        <div>
            <h2>Here are 10 heat stress management tips to help your herd stay cool.</h2>
            <h3>Provide shade. </h3>
            <div>Cows will experience lower respiration rates, decreased body temperature and less aggression when provided with adequate shade.
</div>
<h3>Clean water tanks.  </h3>
            <div>Cows can drink 30–50 gallons of water on a normal day, but that number can double when cows experience heat stress. By providing fresh, clean water, cows will drink more and stay hydrated.

</div>
<h3>Feed during cooler hours. </h3>
<div>Cows don’t like to consume hot feed, and TMRs are prone to heating when left out. By unloading, mixing and feeding in the morning, cows can eat before the feed gets hot and ruminate during the warmer hours of the day.</div>
<h3>Watch for inconsistent manure. </h3>
<div>Decreased rumen fermentation efficiency occurs when the cow is experiencing heat stress, leading to lost nutrient utilization. Reformulating the ration can help achieve optimum nutrition potential during phases when dry matter intake drops.</div>
<h3>Ensure access to feed. </h3>
<div>Depressed intake is common during heat stress periods. By providing feed at all times, cows will eat small amounts throughout the day to reduce thermal heating from large meals.
</div>
<h3>Use sprinklers, soakers and fans. </h3>
<div>Observe where the cows are congregating. Why are they there? Is a sprinkler out elsewhere in the barn? Are the fans providing air flow? Even if you have cooling equipment, ensure it is optimally located and functioning properly.</div>
<h3>Reduce time in holding pens. </h3>
<div>The key issue with heat stress is that the environment is too warm to dissipate the heat coming from the cows. Keeping cows in close holding pens for prolonged periods of time reduces space and airflow.
</div>
<h3>Don’t lock up during midday. </h3>
<div>Cows are smart and will move away from areas that are too hot, but only if they have the space to do so. By allowing them to move during the hottest time of the day, you allow them to move to cooler locations in the barn.</div>
<h3>Feed more digestible high-quality forages. </h3>
<div>Since cows are prone to eat less when hot, efficiently accessing nutrients is essential to health and production. First cutting or fermented forages provide energy without requiring as much rumination as more fibrous feeds, reducing provisional heating.</div>
<h3>Utilize a yeast culture additive. </h3>
<div>Yeast cultures have been found to stimulate the bacteria in the rumen responsible for both fiber digestion and acid removal. This will aid in improved fermentation efficiency and prevent acidosis, which can decrease body temperature.</div>

        </div>
        </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Summer;