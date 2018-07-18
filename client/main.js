/**
 * Main entry point for the client application.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Sticky from 'react-stickynode';

import Menu from './components/Menu.component';
import RSVPForm from './components/RSVPForm.component';
import SecretTooltip from './components/SecretTooltip.component';
import TitleBar from './components/TitleBar.component';
import TopicContainer from './components/TopicContainer.component';

const websiteContent = (
  <div>

    <TitleBar id="titlebar">
    </TitleBar>

    <div style={{ height: '200px' }}></div>

    <Sticky enabled={true}>
      <Menu id="menu"
        items={[{ label: 'THE BRIDE & GROOM', href: 'brideandgroom' },
        { label: 'THE WEDDING', href: 'wedding' },
        { label: 'RSVP', href: 'rsvp' },
        { label: 'LOGISTICS', href: 'logistics' },
        { label: 'THINGS TO DO', href: 'thingstodo' },
        { label: 'GIFTS', href: 'gifts' }]}>
      </Menu>
    </Sticky>

    <TopicContainer id="brideandgroom" name="brideandgroom" title="The Bride and Groom">
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <p>
              <a href="img/halloween.jpg"><img className="thumbnail" src="img/halloween.jpg" alt="Halloween" /></a>
              Lizzy, aka 'eliza pink' is a sweet girl who always sees the beauty in people. She is pretty awesome. She hates spiders and vows to always cut my toenails.
            </p>
          </div>

          <div className="one-half column">
            <p>
              <a href="img/allwhite.jpg"><img className="thumbnail" src="img/allwhite.jpg" alt="allwhite" /></a>
              Bill is a burly and impatient Human who loves procrastinating. He moved from his homeland Annapolis to the lovely city of Denver at the young and
              tender age of 25. Bill then found himself in the IT mecca of Colorado and realized after 9 years of the beautiful mountain backdrop
              and serene lakes that he needs to escape to the center of the universe, his pool.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <p>
        <img className="large-image" src="img/burnetts.jpg" alt="Bill Proposing To Liz" />
      </p>

      <h2>OUR STORY</h2>
      <p>
        2 fish and a bottle of Cherry Burnetts. The End.
      </p>
    </TopicContainer>

    <TopicContainer id="wedding" title="Wedding">
      <div className="container">
        <div className="one-half column">
          <h2>CEREMONY</h2>
          <p>4:45 @ Chief Hosa Lodge</p>
          <p>
            <a href="img/hosalodge.jpg"><img className="location-image" src="img/hosalodge.jpg" alt="Chief Hosa Lodge" /></a>
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="https://goo.gl/maps/9X2q5hq1eKF2">Google Maps</a> | <a href="img/Denver-Tourist-Illustrated-map.jpg">Tourist Map</a>
          </p>
          <p>The Chief Hosa Lodge, designed by architect Jules Jacques Benois Benedict became the city’s first mountain lodge opening in 1918. Using timber and stone from the immediate area, Benedict designed the lodge to blend into the hillside. He named the lodge after a Southern Arapaho tribal leader who was given the honorary title ‘Hosa’ by the Ute tribe, which meant ‘peaceful and beautiful’.
          </p>
        </div>
        <div className="one-half column">
          <h2>RECEPTION</h2>
          <p>5:15 @ Chief Hosa Lodge</p>
          <p>
            <a href="img/pool1.jpg"><img className="location-image" src="img/pool1.jpg" alt="Bonj Les Bains Beach Club" /></a>
          </p>
          <p style={{ textAlign: "center" }}>
            <a href="https://goo.gl/maps/MGBa94iBaA42">Google Maps</a> | <a href="img/pool1.jpg">Tourist Map</a>
          </p>
          <p>Probably somewhere really cool. Possibly in golden. Probably will be really fun.
          </p>
        </div>
      </div>

      <hr />

      <h2>ON THE WEDDING DAY</h2>
      <p>The ceremony will start at 4:45 at the Chief Hosa Spot
      </p>
      <p>After the ceremony we will get super drunk and then go to pavs
      </p>
      <p>
        Wedding attire is summer formal. Gentlemen, please wear a light suit with which you will be comfortable with the heat. And ladies,
        you look pretty as you are, in your formal summer dresses :)
      </p>

      <hr />

      <h2>DAY BEFORE THE WEDDING (30 August)</h2>
      <p>Welcome cocktails will be held on the terrace of <a href="img/pool1">our pool</a> from 11:30 to 11:30.
      </p>
      <p>
        Cocktail night attire is casual.
      </p>

      <hr />

      <h2>DAY AFTER THE WEDDING (1 September)</h2>
      <p>PARK DAY at the&nbsp;
         <a href="https://goo.gl/maps/F3mYtfjFqu72">Wash Park</a>.
      </p>
      <p>
        Brunch attire is wear anything you want :)
      </p>
    </TopicContainer>

    <TopicContainer id="rsvp" title="RSVP">
      <RSVPForm>
      </RSVPForm>
    </TopicContainer>

    <TopicContainer id="logistics" title="Logistics">
      <p>We understand that going to a different state to attend a wedding can be a daunting experience. That's why in this section
         we have tried to compile information and links to help make your travel and hotel booking as simple as possible and to give
         you ideas for how to make a complete vacation out of your trip. Please read through it and if you feel you need any additional
         information or help, do not hesitate to contact us.
      </p>

      <hr />

      <h2>GETTING TO DENVER</h2>
      <p>Being a popular summer tourist destination, getting to Colorado is relatively easy. Just fly into DIA and take the train into the city. DIA was build way out in the middle of nowhere so it takes a bit to get into the city, but you can actually take the train all the way out to golden (****include some stuff here) is&nbsp;
         <a href="https://www.rtd-denver.com/app/plan/trip?at=2018-06-29T15%3A55%3A22.900Z&from=place_ChIJ_0T_mCp_bIcRapy1NbQ7WEk&minimize=TIME&to=stop_34241&using=mode_transit&when=depart">SEE THIS LINK</a>
      </p>
      <p>The second closest major airport is in <a href="https://goo.gl/maps/TLC5HeWhNR42">Colorado Springs</a>. It is about 2.5 hours away
         from Denver, but sometimes cheaper.
      </p>

      <hr />

      <p>
        <img className="large-image" src="img/DenverSkyline1.jpg" alt="Hvar town" />
      </p>

      {/* <h2>FERRY TO THE ISLAND OF HVAR</h2>
      <p>The Split airport is located about 25km (16mi) from the harbour from where the ferries leave for Hvar. According to the bus
         company's <a href="http://www.buscroatia.com/airport-split/">website</a> a taxi should cost about 35 EUR/40 USD for 1-3 people
while the bus costs around 4 EUR/5 USD per person. Unless you are in a real hurry to catch a ferry, we recommend taking the
bus. They are big white coaches just a few steps to the left after you exit though the main airport entrance and we found them
to be very comfortable and convenient. They accept both cash and credit card for payment.
      </p>

      <div id="gmap">
        <iframe src="https://www.google.com/maps/d/embed?mid=1QdPbr1DgM7Cgiw2PwAbLgpINiSI"></iframe>
      </div>

      <p>The bus or taxi will drop you off at the Split bus station, which is on the water. The bus drop-off is only 5 minutes walk
         from the ferry ticket kiosk. There you can buy tickets or ask for the terminal from which your ferry leaves if it is unclear
         from the large electronic panel infront of it, listing the departures. The ferry ticket kiosk looks like this:
      </p>
      <p>
        <img className="large-image" src="img/split-ferry-ticket-kiosk.jpg" alt="Ferry tickets kiosk" />
      </p>

      <p>Once you are at the seaport and looking for transportation to the island, please note that there are two landing spots on the
         island - Hvar Town and the Old Town (Stari Grad). The wedding will be in Hvar Town, which is in the south-west end of the island,
         not in the Old Town, which is on the nortern end. Please make sure you are boarding the right ferry, but even if you make a
         mistake, stay calm because there is a very convenient bus between the two. As a rule, the car ferries go to Old Town (Stari Grad)
         and take about 2 hours to travel and the fast passenger ferries (catamaran) go directly to Hvar Town and take 1 hour.
      </p>

      <div id="gmap">
        <iframe src="https://www.google.com/maps/d/embed?mid=1H0mc9QKj_OwW1TZCWtQc_tb3s9k"></iframe>
      </div>

      <p>There are two ferry companies which serve the route from Split to Hvar - Jadrolinija and Kapetan Luka. Below we have information
         for each of them.
      </p>

      <h3><a href="http://www.jadrolinija.hr/en/ferry-croatia">Jadrolinija</a></h3>
      <p>This is a high-speed catamaran service from Split to Hvar Town which takes about 65 min. This is the fastest option and costs
         around 10 EUR/11 USD per person. If you have a car, this site also contains the schedule and pricing for the ferries, which
         transport cars to the island.
      </p>
      <br />

      <h3><a href="http://www.krilo.hr/en/index.html">Kapetan Luka</a></h3>
      <p>This is the regular ferry service which takes about 2.5 hours and should cost around 5-10 EUR/6-11 USD per person.
      </p>
      <br />

      <h3><a href="https://www.atlantis-marine.net/en/croatia-boat-transfers">Chartered Speed Boat</a></h3>
      <p>If you are coming as a group or feel like a one percenter, this site has information for inclusive transportation packages with
         pickup from the airport. The sailing part of the journey takes between 45 min to 1 hour, which is similar to the catamaran service,
         but is a little bit more convenient because it also includes a pickup from the airport. If you choose this option, there is a 5%
         discount using <SecretTooltip fnTooltip={() => { return 'adriaticweddings'; }}>this code</SecretTooltip> (please click on the
'this' in order to show it).
      </p>

      <hr /> */}

      <h2>DRIVING</h2>
      <p>For those Driving from MD, just get on I-70 and Drive 22.3 hours until you see the chief hosa exit.
      </p>

      <p>
        <img className="large-image" src="img/tandem1.jpg" alt="Day car rental" />
      </p>

      <hr />

      <h2>ACCOMMODATIONS</h2>
      <p>Hotel stuff<a href="https://goo.gl/uHTDYn">AirBnB</a>.
      </p>
      {/* <p>From our research we have found that hotels are fairly expensive and there are very nice AirBnB options available, so we highly
         recommend doing that.
      </p>
      <p>For guests wishing to stay in a hotel, the <a href="http://www.suncanihvar.com/">Suncani Hvar</a> chain of hotels offers a 20%
         discount using <SecretTooltip fnTooltip={() => { return 'WEDDKALOIANJOCELYN'; }}>this code</SecretTooltip> (please click on the
         'this' in order to show it). The code must be entered in the <i>"Corporate/Promo Code ?"</i> section for the discounted prices to
apply and is valid for staying 5 days prior and 5 days after the wedding day. While this code indeed reduces the listed prices,
         we have found that booking through <a href="https://goo.gl/2xzaIg">Expedia</a> or <a href="https://goo.gl/z6zsZk">Hotels.com</a>&nbsp;
shows about the same prices or in some cases even cheaper, so please bear that in mind as well.
      </p> */}
    </TopicContainer>

    <TopicContainer id="thingstodo" title="Things to do in Denver">
      <p>Since all of you are coming from different parts of the country, we presume that you would like to make a full vacation out of your
         trip to Denver. In this section we are listing some of the main tourist places to visit and have suggestions for routes to take.

      </p>
      <br />

      {/* <h2><a href="https://www.lonelyplanet.com/croatia/dubrovnik">DUBROVNIK</a></h2>
      <p>
        <img className="large-image" src="img/dubrovnik.jpg" alt="Dubrovnik old city" />
      </p>
      <p>Located in the very south of the country, Dubrovnik was once called the "Pearl of the Adriatic" for its architecture and importance
         in trade. We won't pretend that we know much about its history, but it is a place which must be visited and is also a convenient
         location to fly into and work your way up the coast to Hvar. On top of that, for the 'Game of Thrones' fans, quite a few scenes from
         this show were filmed in Dubrovnik. See&nbsp;
         <a href="http://www.telegraph.co.uk/travel/maps-and-graphics/game-of-thrones-filming-locations-guide/">this article</a> for more
information.
      </p>
      <br />

      <h2><a href="https://www.lonelyplanet.com/croatia/plitvice-lakes-national-park/attractions/plitvice-lakes-national-park/a/poi-sig/1019024/1318903">PLITVICE LAKES</a></h2>
      <p>
        <img className="large-image" src="img/plitvice-lakes.jpg" alt="Plitvice lakes" />
      </p>
      <p>This is a beautiful national park covered with heavy forests and waterfalls. It is in the northern half of the country and is about 2 hours
         drive from Zagreb, the capital of Croatia and 4-5 hours from Split. If you find good flights to Zagreb, Plitvice Lakes can serve as a good
         midway destination to visit while making you way to the south of the country.
      </p>
      <br />

      <h2><a href="https://www.lonelyplanet.com/croatia/dalmatia/hvar-island">HVAR AND THE DALMATIAN ISLANDS</a></h2>
      <p>
        <img className="large-image" src="img/mljet.jpg" alt="Mljet" />
      </p>
      <p>The Dalmatian islands (one of which is Hvar) offer amazing scenery, nice beaches and sailing opportunities. Island hopping, swimming and
         sunbathing is great way to spend a few days or even a week. Of these islands, Hvar is deemed as the 'party island' while&nbsp;
         <a href="https://www.lonelyplanet.com/croatia/dalmatia/mljet-island">Mljet</a> is the most scenic and tranquil. It is located between Hvar
and Dubrovnik.
      </p> */}
    </TopicContainer>

    {/* <TopicContainer id="gifts" title="Gifts">
      <p>Dear family and friends,</p>
      <p>We feel honoured that you are all travelling a long way to come and celebrate our special day with us. For this reason we don't
         want anyone to feel obliged to buy us gifts. Your presence is the biggest gift.
      </p>
      <p>If you do feel that you want to give us a gift please remember that just like you, we will only have a suitcase full of clothes
        so we won't be able to carry any items back.
      </p>
      <p>Thank you in advance!
      </p>
    </TopicContainer> */}

  </div>
);

ReactDOM.render(websiteContent, document.getElementById('content'));
