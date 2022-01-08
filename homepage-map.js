<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAl51bxzHfJlGn9--0VhBtEMpDHknYu6sI&callback=initialize" async></script>
{/* <script> */}

// The script tags must be uncommented for T4
function modifyTextBox(type, header, text) {
    $("#POITextBox").show();
    $("#POITextBox h3").html(header);
    $("#POITextBox p").html(text);
    $("#POITextBox").css("padding", "5px 25px 15px 25px");
    if (type == 0) {
        // attractions leisure icon
        $("#POITextBox").css("border-left", "5px solid #088099");
        $("#POITextBox h3").css("color", "#088099");
    } else if (type == 1) {
        // law - business icon
        $("#POITextBox").css("border-left", "5px solid #fdb913");
        $("#POITextBox h3").css("color", "#fdb913");
    } else if (type == 2)  {
        // government government icon
        $("#POITextBox").css("border-left", "5px solid #ef4135");
        $("#POITextBox h3").css("color", "#ef4135");
    } else {
        $("#POITextBox").css("border-left", "5px solid #EF4135");
        $("#POITextBox h3").css("color", "#EF4135");
    }
    var margin = ($("#POITextBox").height() * -1) - 30;
    $("#POITextBox").css("margin", (margin + "px auto 10px auto"));
}

function initialize() {
    var seattleu = {
        lat: 47.609165,
        lng: -122.318685
    }
    var map = new google.maps.Map(document.getElementById('SeattlePOIMap'), {
        center: seattleu,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        zoom: 15,
        //Map style from Snazzy Maps (Blue Water) start
        styles: [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#444444"
            }],
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#E4EFDB"
            }],
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }],
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }],
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }],
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }],
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }],
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#ECF7F8"
            }, {
                "visibility": "on"
            }],
        }],
    });


    //Map style end
    //Map markers start
    //Map marker url list start
    var icons = {
        seattleUIcon: {
            icon: 'https://cms.seattleu.edu/media/graduate-admissions/images/graduate-viewbook/sulogo.png'
        },
        leisureIcon: {
            icon: 'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_outline_v4-2-medium.png,assets/icons/poi/tactile/pinlet_v4-2-medium.png,assets/icons/poi/quantum/pinlet/dot_pinlet-2-medium.png&highlight=06667a,088099,ffffff?scale=1'
        },
        businessIcon: {
            icon: 'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_outline_v4-2-medium.png,assets/icons/poi/tactile/pinlet_v4-2-medium.png,assets/icons/poi/quantum/pinlet/dot_pinlet-2-medium.png&highlight=e3a611,fdb913,ffffff?scale=1'
        },
        governmentIcon: {
            icon: 'https://www.google.com/maps/vt/icon/name=assets/icons/poi/tactile/pinlet_outline_v4-2-medium.png,assets/icons/poi/tactile/pinlet_v4-2-medium.png,assets/icons/poi/quantum/pinlet/dot_pinlet-2-medium.png&highlight=e3a611,ef4135,ffffff?scale=1'
        }
    }

    // Store all marker information in dict
    var markers = [{
            title: "Seattle University",
            position: seattleu,
            icon: icons['seattleUIcon'].icon,
            optimized: false,
            zIndex: 100,
            _listener: {
                type: -1,
                text: "Seattle University, founded in 1891, is a Jesuit Catholic university located on 50 acres in Seattle's Capitol Hill neighborhood."
            }
        }, {
            title: "Sullivan Hall",
            position: {
                lat: 47.609624,
                lng: -122.317480
            },
            icon: icons['businessIcon'].icon,
            _listener: {
                type: 1,
                text: "Seattle University School of Law or Seattle Law School, or SU Law is a professional graduate school affiliated with Seattle University, the Northwest's largest independent university. The School is accredited by the American Bar Association and is a member of the Association of American Law Schools."
            }
        },
        // Business Markers start, alphabetized
        {
            title: "Alaska Airlines",
            position: {
                lat: 47.626038,
                lng: -122.334933
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Nearly 13,000 employees and Highest Customer Satisfaction as ranked by J.D. Power and Associates for ten consecutive years. <a href='http://alaskaair.jobs/' title='Career page' target='_blank'>Career page.</a>"
            }
        }, {
            title: "Amazon.com",
            position: {
                lat: 47.62293267253664,
                lng: -122.33680979475935
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "The largest internet-based retailer in the world and fourth most valuable public company. <a href='http://amazon.jobs/' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Bill & Melinda Gates Foundation",
            position: {
                lat: 47.62334211727529,
                lng: -122.3465826939411
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "The largest transparently operated private foundation in the world with an endowment of more than $44 billion. <a href='http://gatesfoundation.org/jobs/' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Bluetooth SIG",
            position: {
                lat: 47.654121,
                lng: -122.204875
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Manages the popular wireless technology for data exchanges over short distances. <a href='https://www.bluetooth.com/careers' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Boeing",
            position: {
                lat: 47.535826,
                lng: -122.314193
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "While no longer headquartered in Seattle, it’s still a major employer, recently opening a $1 billion factory. <a href='http://boeing.com/careers' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Costco",
            position: {
                lat: 47.548608,
                lng: -122.050324
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "America’s largest membership-only warehouse club also hires in bulk. <a href='http://costco.com/jobs.html' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Eddie Bauer",
            position: {
                lat: 47.616560,
                lng: -122.201533
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "The brand that scaled Mt. Everest and defined a lifestyle category is still a major force in fashion and retail with a thriving online store and 370 locations worldwide. <a href='http://careers.eddiebauer.com' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Expedia",
            position: {
                lat: 47.627682,
                lng: -122.374251
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Owns and operates more than 200 travels sites in more than 75 countries including Hotels.com, Hotwire.com, trivago, Orbitz and Travelocity. <a href='http://lifeatexpedia.com' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "F5",
            position: {
                lat: 47.60541655907867,
                lng: -122.3308068654024
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "If you know about application delivery networking, then you know about F5 Networks and its products like BIG-IP and BIG-IQ. <a href='http://f5.com/careers' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Fred Hutchinson Cancer Research Center",
            position: {
                lat: 47.627104,
                lng: -122.331497
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Known locally as The Hutch, the renowned center’s main campus consists of 13 buildings on 15 acres in Seattle’s South Lake Union neighborhood.  <a href='http://fredhutch.org/careers' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Microsoft",
            position: {
                lat: 47.639142,
                lng: -122.128362
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Microsoft is one of the world’s most valuable companies and the global leader in software. It also owns Skype and LinkedIn. <a href='http://careers.microsoft.com' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Nintendo",
            position: {
                lat: 47.650908,
                lng: -122.139175
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "One of the world’s largest video game companies and creator of some of the best-known game franchises, such as Mario and Pokémon. <a href='http://nintendo.com/corp/jobs.jsp' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Nordstrom",
            position: {
                lat: 47.612358,
                lng: -122.336652
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "The luxury retailer was founded in Seattle in 1901 and today employees more than 72,000 people. It’s flagship store and headquarters is a Seattle landmark. <a href='http://about.nordstrom.com/careers' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "PACCAR",
            position: {
                lat: 47.616604,
                lng: -122.199735
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "PACCAR is one of the world’s largest manufacturers of medium- and heavy-duty trucks and was awarded the National Medal of Technology at the White House in 2006 for its work on reduced fuel consumption. <a href='http://paccar.com/careers' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "PATH",
            position: {
                lat: 47.618238,
                lng: -122.339349
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "PATH is an innovative, nonprofit health organization with 1,600 employees in more than 70 offices around the world. <a href='http://path.org/jobs' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Port of Seattle",
            position: {
                lat: 47.613718,
                lng: -122.355091
            },
            icon: icons['governmentIcon'].icon,
            _listener: {
                type: 2,
                text: "Referred to simply as the Port, this government agency runs Seattle’s seaport and airport, generating more than 200,000 jobs and $20 billion in business revenue. <a href='http://portseattle.org/jobs' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "REI",
            position: {
                lat: 47.62035357329306,
                lng: -122.3297526784556
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "One of only four REI flagship stores in the U.S., and a must-go destination for outdoor and recreational enthusiasts. <a href='http://rei.jobs' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Russell Investments",
            position: {
                lat: 47.608211,
                lng: -122.338025
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Founded in 1936, this global asset management firm has nearly $244 billion in assets under management. <a href='http://russellinvestments.com/careers' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Starbucks",
            position: {
                lat: 47.580903,
                lng: -122.335374
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "No other company is as synonymous with Seattle or coffee like Starbucks, which has nearly 24,000 locations worldwide. <a href='http://starbucks.com/careers/corporate-careers' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Tableau",
            position: {
                lat: 47.647837,
                lng: -122.338009
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Founded in 2003, this cutting-edge software company produces interactive data visualization products focused on business intelligence. <a href='http://careers.tableau.com' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "T-Mobile",
            position: {
                lat: 47.578615,
                lng: -122.165567
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "The third largest wireless carrier in the U.S. with 72.6 million customers. It also owns MetroPCS. <a href='http://tmobile.com/careers' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Valve",
            position: {
                lat: 47.614063,
                lng: -122.194635
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Valve is the video game developer behind critically acclaimed titles like <i>Half-Life</i>, and the creator of the popular distribution platform Steam. At one time, it was the most profitable company per employee in the United States. <a href='http://valvesoftware.com/jobs' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Weyerhaeuser",
            position: {
                lat: 47.600221,
                lng: -122.332870
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Pronounced 'warehouser,' this Seattle giant is one of the world’s largest private owners or timberlands, growing and harvesting trees in renewable cycles.  <a href='http://weyerhaeuser.com/careers' title='Career Page' target='_blank'>Career Page</a>"
            }
        }, {
            title: "Zillow",
            position: {
                lat: 47.607375,
                lng: -122.337348
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Created by former Microsoft execs and Expedia founders, Zillow is part of the largest real-estate advertising network on the web. <a href='http://zillow.com/jobs' title='Career Page' target='_blank'>Career Page</a>"
            }
        },
        // Markers for Leisure start, alphabetized
        {
            title: "CenturyLink Field",
            position: {
                lat: 47.595043,
                lng: -122.331596
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Home of the Seattle Seahawks and Seattle Sounders. It has incredible views of Downtown Seattle and has twice held the Guinness World Record for loudest crowd roar at an outdoor stadium."
            }
        }, {
            title: "Chinatown-International District",
            position: {
                lat: 47.597814,
                lng: -122.323777
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Also known as 'the CID,' this district is the center of Seattle’s Asian-American community, and one of eight historic neighborhoods recognized by the city. Seattle just wouldn’t be Seattle without its art, cuisine, and festivals."
            }
        }, {
            title: "Elliott Bay Book Company",
            position: {
                lat: 47.614700325273624,
                lng: -122.31961886370313
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "'Now <i>this</i> is a book store.' That’s what people have been thinking for more than four decades as they browse the cedar shelves of this Capitol Hill landmark."
            }
        }, {
            title: "Key Arena",
            osition: {
                lat: 47.621977,
                lng: -122.353977
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Located in the Seattle Center entertainment complex, 'the Key' hosts concerts, hockey, basketball, roller derby, and is home to the Seattle Storm and our very own Seattle Redhawks."
            }
        }, {
            title: "Lake Union Park",
            osition: {
                lat: 47.639657,
                lng: -122.333527
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "This twelve-acre park is a haven for people who love to walk, run, sail and more. Check out the model boat pond, Great Lawn and history trail."
            }
        }, {
            title: "Lake Washington",
            position: {
                lat: 47.615099,
                lng: -122.260031
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "This freshwater lake provides plenty of opportunities for sport fishing thanks to its abundance of Rainbow Trout, Largemouth Bass, Yellow Perch and more."
            }
        }, {
            title: "Pike Place Market",
            position: {
                lat: 47.60966167864134,
                lng: -122.34215175466264
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Just look for the famous Public Market Center sign and you’ll find a dynamic neighborhood of farmers, craftspeople, small businesses, and residents. It’s a Seattle institution."
            }
        }, {
            title: "Pioneer Square",
            position: {
                lat: 47.601709,
                lng: -122.331693
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Seattle’s founders settled here in 1852, making this downtown neighborhood the heart of the city. Today, it’s a hub of Seattle’s nightlife and home to great cafés, bookstores and tech companies."
            }
        }, {
            title: "Safeco Field",
            position: {
                lat: 47.591282,
                lng: -122.332327
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Home of the Seattle Mariners. Its unique 'retractable umbrella' roof allows the team to play outdoor baseball even when it’s raining. It’s named for Seattle-based Safeco Insurance."
            }
        }, {
            title: "Seattle Art Museum",
            position: {
                lat: 47.607164,
                lng: -122.338176
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Locals call it, SAM. But tourists call it, Wow! With nearly 25,000 pieces in its collection, SAM also operates the Seattle Asian Art Museum and the Olympic Sculpture Park."
            }
        }, {
            title: "Space Needle",
            position: {
                lat: 47.62051644456711,
                lng: -122.34927241589827
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Originally built for the 1962 World’s Fair and just as world famous today, Seattle Center is home of the Space Needle, one of the most iconic structures on the planet. Aptly named, it’s the city’s center for art, education and entertainment."
            }
        }, {
            title: "Seattle Ferries",
            position: {
                lat: 47.602362,
                lng: -122.338161
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Ferry routes are so integral to Seattle commuting that they’re a designated part of the state highway system. There are ten routes serving twenty terminals and more than 24 million passengers a year."
            }
        }, {
            title: "Volunteer Park",
            position: {
                lat: 47.630245,
                lng: -122.315328
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Highlighted by the Seattle Asian Art Museum (a designated landmark), this beautiful space also features a conservatory, a water tower with observation deck, and an extensive dahlia garden in season."
            }
        }, {
            title: "Washington Park Arboretum",
            position: {
                lat: 47.639815,
                lng: -122.315328
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "If you love plant life and verdant scenery, then you’ll want to visit the Arboretum just off the shores of Lake Washington. Here, you’ll find 230 acres of plants, many of which are found nowhere else in the region."
            }
        },

        // Markers for Law start
        {
            title: "Kilpatrick Townsend & Stockton, LLP",
            position: {
                lat: 47.610832411471996,
                lng: -122.33467179989323
            },
            icon: icons['businessIcon'].icon,
            _listener: {
                type: 1,
                text: "Kilpatrick Townsend & Stockton, LLP"
            }
        }, {
            title: "Miller Nash LLP",
            position: {
                lat: 47.61479537333885,
                lng: -122.35494277256925
            },
            icon: icons['businessIcon'].icon,
            _listener: {
                type: 1,
                text: "Miller Nash LLP"
            }
        }, {
            title: "Perkins Coie LLP",
            position: {
                lat: 47.607281861324104,
                lng: -122.33574408441389
            },
            icon: icons['businessIcon'].icon,
            _listener: {
                type: 1,
                text: "Perkins Coie LLP"
            }
        }, {
            title: "Foster Garvey PC",
            position: {
                lat: 47.60654029747484,
                lng: -122.33536574772079
            },
            icon: icons['businessIcon'].icon,
            _listener: {
                type: 1,
                text: "Foster Garvey PC"
            }
        }, {
            title: "K&L Gates LLP",
            position: {
                lat: 47.60585017139619,
                lng: -122.33292859897965
            },
            icon: icons['businessIcon'].icon,
            _listener: {
                type: 1,
                text: "K&L Gates LLP"
            }
        }, {
            title: "Davis Wright Tremaine LLP",
            position: {
                lat: 47.6064282594055,
                lng: -122.33127829094107
            },
            icon: icons['businessIcon'].icon,
            _listener: {
                type: 1,
                text: "Davis Wright Tremaine LLP"
            }
        },

        // Markers for Government start
        {
            title: "U.S. District Court",
            position: {
                lat: 47.61485768515088,
                lng: -122.33634848604706
            },
            icon: icons['governmentIcon'].icon,
            _listener: {
                type: 2,
                text: "U.S. District Court"
            }
        }, {
            title: "U.S. Attorneys Office",
            position: {
                lat: 47.61499820459141,
                lng: -122.3364219371591
            },
            icon: icons['governmentIcon'].icon,
            _listener: {
                type: 2,
                text: "U.S. Attorneys Office"
            }
        }, {
            title: "U.S. Appeals Court",
            position: {
                lat: 47.60732566451988,
                lng: -122.33121577059535
            },
            icon: icons['governmentIcon'].icon,
            _listener: {
                type: 2,
                text: "U.S. Appeals Court"
            }
        }, {
            title: "WA Attorney General",
            position: {
                lat: 47.605782811814045,
                lng: -122.33020904474388
            },
            icon: icons['governmentIcon'].icon,
            _listener: {
                type: 2,
                text: "WA Attorney General"
            }
        }, {
            title: "Seattle City Attorney",
            position: {
                lat: 47.60468433307673,
                lng: -122.33046658810142
            },
            icon: icons['governmentIcon'].icon,
            _listener: {
                type: 2,
                text: "Seattle City Attorney"
            }
        }, {
            title: "Municipal Court of Seattle",
            position: {
                lat: 47.60402414833061,
                lng: -122.32918549503297
            },
            icon: icons['governmentIcon'].icon,
            _listener: {
                type: 2,
                text: "Municipal Court of Seattle"
            }
        }, {
            title: "King County Superior Court",
            position: {
                lat: 47.60244940185411,
                lng: -122.33091150089022
            },
            icon: icons['governmentIcon'].icon,
            _listener: {
                type: 2,
                text: "King County Superior Court"
            }
        }, {
            title: "King County Prosecuting Attorney",
            position: {
                lat: 47.60281160991659,
                lng: -122.33012270887335
            },
            icon: icons['governmentIcon'].icon,
            _listener: {
                type: 2,
                text: "King County Prosecuting Attorney"
            }
        },

        // New Attractions
        {
            title: "Museum of Pop Culture (MoPOP)",
            position: {
                lat: 47.62149511793311,
                lng: -122.34812595749383
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Museum of Pop Culture (MoPOP)"
            }
        }, {
            title: "Olympic Sculpture Park",
            position: {
                lat: 47.61661452437855,
                lng: -122.35532373162121
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Olympic Sculpture Park"
            }
        }, {
            title: "The Seattle Great Wheel",
            position: {
                lat: 47.606144927577965,
                lng: -122.34252492460529
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "The Seattle Great Wheel"
            }
        }, {
            title: "Paramount Theatre",
            position: {
                lat: 47.613479629443376,
                lng: -122.33171800466893
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Paramount Theatre"
            }
        }, {
            title: "Washington State Convention Center",
            position: {
                lat: 47.61182281794571,
                lng: -122.3314233962692
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Washington State Convention Center"
            }
        }, {
            title: "The 5th Avenue Theatre",
            position: {
                lat: 47.60941685466707,
                lng: -122.33384550179656
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "The 5th Avenue Theatre"
            }
        }, {
            title: "Seattle Public Library",
            position: {
                lat: 47.60670928319733,
                lng: -122.33250449226306
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Seattle Public Library"
            }
        }, {
            title: "Seattle City Hall",
            position: {
                lat: 47.60390694582192,
                lng: -122.32984872272466
            },
            icon: icons['governmentIcon'].icon,
            _listener: {
                type: 2,
                text: "Seattle City Hall"
            }
        }, {
            title: "Cal Anderson Park",
            position: {
                lat: 47.61703047280376,
                lng: -122.31913976705523
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Cal Anderson Park"
            }
        }, {
            title: "Caffé Vita",
            position: {
                lat: 47.61399278718919,
                lng: -122.31904268926019
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Caffé Vita"
            }
        }, {
            title: "Garage Bowling & Billiards",
            position: {
                lat: 47.61225130971746,
                lng: -122.32048938626008
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Garage Bowling & Billiards"
            }
        }, {
            title: "Whole Foods Market",
            position: {
                lat: 47.61144081846337,
                lng: -122.32134711744843
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Whole Foods Market"
            }
        }, {
            title: "Elysian Capitol Hill Brewery",
            position: {
                lat: 47.613950374046986,
                lng: -122.31589537874025
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Elysian Capitol Hill Brewery"
            }
        }, {
            title: "Skillet Diner",
            position: {
                lat: 47.61313093694759,
                lng: -122.31389887377334
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Skillet Diner"
            }
        }, {
            title: "Trader Joe's",
            position: {
                lat: 47.61601799387743,
                lng: -122.30971394623907
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Trader Joe's"
            }
        }, {
            title: "Zobel Ethiopian Cuisine",
            position: {
                lat: 47.60610291656786,
                lng: -122.31596365022605
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Zobel Ethiopian Cuisine"
            }
        }, {
            title: "Batch Baking Company",
            position: {
                lat: 47.60959797675196,
                lng: -122.31653336857984
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Batch Baking Company"
            }
        }, {
            title: "Boon Boona Coffee",
            position: {
                lat: 47.607555630706074,
                lng: -122.31657614913652
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "Boon Boona Coffee"
            }
        }, {
            title: "HoneyHole Sandwiches",
            position: {
                lat: 47.60609257890519,
                lng: -122.31505842502327
            },
            icon: icons['leisureIcon'].icon,
            _listener: {
                type: 0,
                text: "HoneyHole Sandwiches"
            }
        }
    ]


    // // Pop up handling
    map.addListener('click', () => $("#POITextBox").hide())

    // Add markers and event listeners to map
    for (let marker of markers) {
        var obj = new google.maps.Marker({
            ...marker,
            map
        })
        obj.addListener('mouseover', () => modifyTextBox(marker._listener.type, marker.title, ""))
        obj.addListener('click', () => modifyTextBox(marker._listener.type, marker.title, marker._listener.text))
        obj.addListener('mouseout', () => {
            if (document.querySelector("#POITextBox > p").innerHTML === "") {
                $("#POITextBox").hide()
            }
        })
    }



    // Bounds required for overlay using Madronna and Mann neighborhoods
    let bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(47.61413511565072, -122.28931024694381),
        new google.maps.LatLng(47.60926626487299, -122.29954475716657)
    );


    // Overlay class
    class SULawOverlay extends google.maps.OverlayView {
        bounds;
        div;
        constructor(bounds) {
            super();
            this.bounds = bounds;
        }
    }
}
{/* </script> */}