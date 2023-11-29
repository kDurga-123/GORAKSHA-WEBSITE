import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Season.css'

function Season()
{
    const a = ['Increased dry matter intake to raise the heat production','Increased rumination','Increased gastrointestinal tract motility',
'Increased rate of passage of feed and liquid in the rumen and digestive tract','Increased basal metabolic rate and maintenance energy requirements.',
'Loss of body weight.','Use of body tissue to maintain energy levels causes the immune system to be depressed and less responsive to challenges.','Increased body oxygen consumption','Increased cardiac output',
'Increased adrenalin, cortisol and growth hormone levels','Increased hepatic glycose output','Decreased rumen volume'
,'Decreased dry matter digestibility','Decreased insulin response to a glucose infusion','Decreased temperature of skin, ears, legs'
,'For the dairy cows cold should be considered as a local problem. Direct chilling of the udder depends as much on the thermal properties of the floor as on the temperature.']


const b = ['Increase barn temperature- Supply of heating in the winter keep the calf healthy, less chances of calf pneumonia, diarrhea and mortality.',' Reduce humidity to ensure better ventilation, preventing excessive moisture in sheds, roof dripping and ground freezing phenomenon.','Ventilation should be carried in afternoon.','Less water should be used in winter barn to wash the ground and dry cleaning should be followed.'
,'In the afternoon sunlight cattle should be kept out of the barn.',' Bedding should be provided to protect them from cold floor.',' Waterers or water tanks should not be frozen.',
'Lukewarm water should be provided for drinking purpose','Cold weather increases feed needs of cows. Hay provides more heat during digestion than concentrate feeds.','Eave inlets should not be closed. This will restrict the ventilation rate and create wet, damp conditions.',' Prevention of cold draught. Cows need dry, draught-free resting area.','Having dry teats when the cow leaves the parlor is important. One way to lessen the risk is to dip the teats, allow the dip of about 30 seconds and then blot dry using a paper towel.',' Protect the animal from frostbite'];

const c = ['Rectal temperature is the most accurate method of determining if a calf is experiencing hypothermia.','Mild hypothermia- Body temperature drops below 100F.',
'Severe hypothermia- Body temperature drops below 94F. Vital organs are cold and impaired brain function results.','Calf shivers to increase heat production and shunt blood from body extremities to the body core.',
'Signs of life are hard to detect if temperature falls below 86F.']

const d = ['Blankets are most useful for calves less than 3 weeks of age that are not yet eating grain. Warm blankets should not be so hot that they cause skin burns or sweating during the day.',' Prevention of the radiant heat loss.','Thick, dry straw or sawdust at resting area should be provided for better insulation.','Wind drafts must be avoided because they encourage heat loss.',
' Young dairy calves have very little stored fat they can use for warmth. To cope with cold stress by feed with extra energy should be provided.','Additional amount of feed (starter, milk replacer, or milk) that a calf would need to eat to compensate for extra energy used to keep warm during cold weather.','Calves less than 3 weeks of age increases the amount of milk or milk replacer to provided extra energy.','Repeated changes in the calf’s diet should not be done.','Calves that are eating starter, especially those over 3 weeks of age have a lower LCT and can more easily cover their increased energy needs by voluntarily eating more grain is beneficial in terms of generating heat.',
'In cold weather, provision of warm water three times per day for a minimum of 30 minutes each time in order to ensure calves have ample opportunity to drink.','Closing air inlets restricts the ventilating rate and causes moisture to accumulate in the shed. As moisture accumulates, it will begin to condense on cold surfaces, and if the surfaces are below freezing, frost will form.','In severe cold weather and during blizzard conditions, air inlets can be partially closed to reduce airflow blowing into the barn. The minimum inlet opening during severe cold weather is one-half inch for each 10 feet of building width. (There should be an inlet on each long side of the building.) When normal winter weather conditions return, eave inlets should be reopened to the standard one inch per 10 feet of building width on both sides of the building. Of course, eave inlet adjustments are much easier if the inlets have been designed to be adjusted. Boards on hinges are the most common type of adjustable eave inlet.']


const e = ['Tissue Insulation: o This represents the thermal resistance to the flow of heat from body core to the skin surface. Decreasing the temperature of the superficial tissues of the body by vasoconstriction reduces the temperature gradient from the skin surface to the environment, therefore the heat loss. o Subcutaneous fat has also some insulating properties.','Hair coat ——–'];

const f = ['Air insulation:———']


const g = [' Although it may be more comfortable for you, indoor feeding usually is not advisable. Ammonia concentrations in poorly ventilated buildings can be exorbitantly high, causing pneumonia and other breathing problems; high humidity will decrease the insulating capabilities of a cow’s coat. Outdoor feeding will be perfectly comfortable for your cow, and often much cleaner.','High-moisture rations will likely be chilled in the feed bunks. If this occurs, intake will be reduced and more energy will be required to digest the feed.','It is tempting to feed earlier and earlier as daylight decreases and evening temperatures drop, but your cow will be more comfortable if you delay feeding time in the cold. The activity involved in eating and the fermentation in the rumen will increase heat production during the evening.',
' Livestock’s maintenance nutritional requirements can increase significantly during cold weather. Lowest critical environmental temperatures (LCT) for livestock vary according to species and researchers, but livestock can tolerate 20° or 32°F without additional energy demands. Energy requirements for an animal increase by one percent for every degree below the LCT.','All dietary changes, be they increases or decreases, should be made gradually.','To protect animals from a sudden drop in temperature, keep the animals in a covered shed/area during the night.',
'Blankets can be used to retain body heat for inpidual animals.','Avoid keeping animals in a damp area, as well as protect them from smoke from fires which are lit to provide warmth. The dampness and smoke increases their chances of contracting pneumonia.','Animals should be given lukewarm feed and water to drink.','To maintain the body temperature of animals in milk, they should be fed with a mixture of oil cakes and jaggery.',
' To ensure that essential salts are maintained in the animals, provide salt mixtures in adequate quantities along with their feed.','This is the right time to deworm the animals.',
'If the animals have not yet been vaccinated against FMD, PPR, Haemorrhagic Septicaemia, Enterotoxemia, Black Quarter etc, ensure that this is done now.','The bedding/hay in the animal sheds must be kept dry and changed/aired every day.','Take adequate care to prevent occurrence of Mastitis in animals.']
    return (
      <>
       <Navbar/>
            <div>
            <img className="img" src="https://img.freepik.com/free-photo/herd-cows-producing-milk-gruyere-cheese-france-spring_181624-29832.jpg?size=626&ext=jpg&ga=GA1.1.1304291997.1700318015&semt=ais"/>
                  <div className="winter">
                      <div>
                          <div id="main-div">
                              <div className="management">
                                    <h1>MANAGEMENT OF CATTLE DURING WINTER</h1>
                                    <div>The winter season has started after arrival of Nov. in India.The dairy cattle has to acclatimize themselves with the surrounding temperature in order to keep themselves healthy.
                                          In order to cope with colder temperatures, cattle grow thick winter coats and increase their production of body heat. They accomplish this by increasing their heart rate and respiration, thus increasing blood flow to keep extremities from freezing. Although this physiological response enables cows to withstand extremely low temperatures in relative comfort, they also require more feed in order to maintain their body and production. For this cows may require up to 20 percent more feed during cold weather.
                                          Production performance of the animal will also be affected when it is too cool because increased proportion of energy will be used for maintenance of body temperature and productivity depends on the ability of the animal to keep normal and stable body temperature. But the impact of cold stress on nutrient utilization and animal performance in cattle has received less research attention. Dairy cattle are housed in the cowsheds that minimize the impact of environmental temperature fluctuations on the animals. But the animals housed under loose housing system needs attention to protect them from cold stress. The animals can be protected by providing comfortable micro environment. In different areas and during different parts of the year temperature varies from 0 to 40C and comfortable temperature varies from 18 to 27C, therefore protection is required from extremes on both sides.
                                          During this season many animals often refuse to eat, become feverish and pneumonitic.This affects the milk production, health and reproduction of the animal.
                                          Normal cow and buffalo body temperature ranges between 101-102 degree Fahrenheit and suitable ambient temperature is 65-75 degree F.Severe cold surroundings result in increased energy loss, which has to be compensated by giving extra calorie-rich feed and special care.Breed, nutrition, age, state of lactation, gestation effects and management are the main factors affecting SNF and fat percentage.
                                          Nutrition, especially balanced rations, fortified and supplemented with protein ingredients like whole cotton seed or cakes, becomes important.
                                          Rations containing about 17 per cent fibre in the animal feed are also helpful to increase fat percentage in milk. Concentrate mixture should comprise grains (40 per cent), oil cakes (32 per cent), brans (25per cent), mineral mixture (2per cent) and common salt (1 per cent).
                                          Apart from this the extra energy-rich grains at approximately 0.8 per cent of body weight should be fed to counter the stress of cold for maintaining normal milk production and other activities.

                                    </div>
                              </div>
                              <div className="cold">
                                  <h2>Signs of cold stress: ———-</h2>
                                  <ul id="physiological">
                                      {c.map((item, index) => (
                                        <li key={index} className="list">{item}</li>
                                      ))}
                                  </ul>
                              </div>
                              <div className="stress">
                                  <div className="All_images">
                                      <img src="https://img.freepik.com/free-photo/calf-grazing-near-edge-rice-field_1353-89.jpg?w=900&t=st=1700326253~exp=1700326853~hmac=4a2428952ef941458e5df2a0f9f547f442139f3fc84dd62dc4701762ddcddb10"/>
                                      <img src="https://img.freepik.com/free-photo/cow-calf_1398-5245.jpg?size=626&ext=jpg&ga=GA1.1.1304291997.1700318015&semt=ais"/>
                                      <img src="https://img.freepik.com/free-photo/cows-standing-green-field-front-fuji-mountain-japan_335224-197.jpg?size=626&ext=jpg&ga=GA1.1.1304291997.1700318015&semt=ais"/>
                                      <img src="https://img.freepik.com/free-photo/grassy-field-near-water-with-cows-eating-grass-daytime_181624-10731.jpg?size=626&ext=jpg&ga=GA1.1.1304291997.1700318015&semt=ais"/>
                                      <img src="https://img.freepik.com/free-photo/beautiful-white-cow-standing-meadow_181624-50875.jpg?size=626&ext=jpg&ga=GA1.1.1304291997.1700318015&semt=ais"/>
                                      <img src="https://img.freepik.com/free-photo/cows-meadows-alpine-mountains_1182-1844.jpg?size=626&ext=jpg&ga=GA1.1.1304291997.1700318015&semt=ais"/>
                                      <img src="https://img.freepik.com/free-photo/closeup-shot-cow-calf-green-field-with-fence_181624-49369.jpg?size=626&ext=jpg&ga=GA1.1.1304291997.1700318015&semt=ais"/>
                                      <img src="https://img.freepik.com/premium-photo/black-white-cow-grazing-meadow_190619-2737.jpg?size=626&ext=jpg&ga=GA1.1.1304291997.1700318015&semt=ais"/>
                                      <img src="https://img.freepik.com/free-photo/brown-cow-green-grass-field_181624-35622.jpg?size=626&ext=jpg&ga=GA1.1.1304291997.1700318015&semt=ais"/>
                                      <img src="https://img.freepik.com/free-photo/brown-mountain-cows-grazing-pasture-summer_167946-105.jpg?size=626&ext=jpg&ga=GA1.1.1304291997.1700318015&semt=ais"/>
                                  </div>
                                  <div>
                                      <div className="physiological">
                                          <h2>The effects of cold stress on metabolic and physiological adaptations———</h2>
                                          <ul style={{ listStyleType: 'disc' }} id="physiological">
                                                    {a.map((item, index) => (
                                                      <li key={index} className="list">{item}</li>
                                                    ))}
                                          </ul>
                                      </div>
                                      <div className="effects">
                                          <h2>Protective measures to prevent the effect of cold stress: ————</h2>
                                          <ul id="physiological">
                                              {b.map((item, index) => (
                                                <li key={index} className="list">{item}</li>
                                              ))}
                                          </ul>
                                      </div>
                                      <div>
                                      <h2 className="tip">Winter feeding tips</h2>
                                      <div className="redudena">
                                      <ul id="physiological">
                                            {g.map((item, index) => (
                                              <li key={index} className="list">{item}</li>
                                            ))}
                                      </ul>
                                     </div>
                                     </div>
                                     <div className="insulation">
                            <ul id="physiological">
                                {f.map((item, index) => (
                                  <li key={index} className="list">{item}</li>
                                ))}
                                <div className="Defense">
                            <h2>Defense against cold: �—————–</h2>
                            <div>Insulation ——-</div>
                            <ul id="physiological">
                                {e.map((item, index) => (
                                  <li key={index} className="list">{item}</li>
                                ))}
                            </ul>
                          </div>
                            </ul>
                       </div>
                                  </div>
                        <div>
                              </div>
                          </div>
                        </div>
                      </div>
                        <div className="Protective">
                            <h2>Protective measures:————–</h2>
                            <div>Protective measures include warm water bath, warm air or heat lamps and warm blankets.</div>
                            <ul id="physiological">
                                {d.map((item, index) => (
                                  <li key={index} className="list">{item}</li>
                                ))}
                            </ul>
                        </div>
      
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}
export default Season;