//ALL COUNTRY ABREVIATIONS TO FULL NAME
const isoCountries = {
  'AF' : {
    name: 'Afghanistan',
  },
  'AX' : {
    name: 'Aland Islands',
  },
  'AL' : {
    name: 'Albania',
  },
  'DZ' : {
    name: 'Algeria',
  },
  'AS' : {
    name: 'American Samoa',
  },
  'AD' : {
    name: 'Andorra',
  },
  'AO' : {
    name: 'Angola',
  },
  'AI' : {
    name: 'Anguilla',
  },
  'AQ' : {
    name: 'Antarctica',
  },
  'AG' : {
    name: 'Antigua And Barbuda',
  },
  'AR' : {
    name: 'Argentina',
  },
  'AM' : {
    name: 'Armenia',
  },
  'AW' : {
    name: 'Aruba',
  },
  'AU' : {
    name: 'Australia',
  },
  'AT' : {
    name: 'Austria',
  },
  'AZ' : {
    name: 'Azerbaijan',
  },
  'BS' : {
    name: 'Bahamas',
  },
  'BH' : {
    name: 'Bahrain',
  },
  'BD' : {
    name: 'Bangladesh',
  },
  'BB' : {
    name: 'Barbados',
  },
  'BY' : {
    name: 'Belarus',
  },
  'BE' : {
    name: 'Belgium',
  },
  'BZ' : {
    name: 'Belize',
  },
  'BJ' : {
    name: 'Benin',
  },
  'BM' : {
    name: 'Bermuda',
  },
  'BT' : {
    name: 'Bhutan',
  },
  'BO' : {
    name: 'Bolivia',
  },
  'BA' : {
    name: 'Bosnia And Herzegovina',
  },
  'BW' : {
    name: 'Botswana',
  },
  'BV' : {
    name: 'Bouvet Island',
  },
  'BR' : {
    name: 'Brazil',
  },
  'IO' : {
    name: 'British Indian Ocean Territory',
  },
  'BN' : {
    name: 'Brunei Darussalam',
  },
  'BG' : {
    name: 'Bulgaria',
  },
  'BF' : {
    name: 'Burkina Faso',
  },
  'BI' : {
    name: 'Burundi',
  },
  'KH' : {
    name: 'Cambodia',
  },
  'CM' : {
    name: 'Cameroon',
  },
  'CA' : {
    name: 'Canada',
  },
  'CV' : {
    name: 'Cape Verde',
  },
  'KY' : {
    name: 'Cayman Islands',
  },
  'CF' : {
    name: 'Central African Republic',
  },
  'TD' : {
    name: 'Chad',
  },
  'CL' : {
    name: 'Chile',
  },
  'CN' : {
    name: 'China',
  },
  'CX' : {
    name: 'Christmas Island',
  },
  'CC' : {
    name: 'Cocos (Keeling) Islands',
  },
  'CO' : {
    name: 'Colombia',
  },
  'KM' : {
    name: 'Comoros',
  },
  'CG' : {
    name: 'Congo',
  },
  'CD' : {
    name: 'Congo, Democratic Republic',
  },
  'CK' : {
    name: 'Cook Islands',
  },
  'CR' : {
    name: 'Costa Rica',
  },
  'CI' : {
    name: 'Cote D\'Ivoire',
  },
  'HR' : {
    name: 'Croatia',
  },
  'CU' : {
    name: 'Cuba',
  },
  'CY' : {
    name: 'Cyprus',
  },
  'CZ' : {
    name: 'Czech Republic',
  },
  'DK' : {
    name: 'Denmark',
  },
  'DJ' : {
    name: 'Djibouti',
  },
  'DM' : {
    name: 'Dominica',
  },
  'DO' : {
    name: 'Dominican Republic',
  },
  'EC' : {
    name: 'Ecuador',
  },
  'EG' : {
    name: 'Egypt',
  },
  'SV' : {
    name: 'El Salvador',
  },
  'GQ' : {
    name: 'Equatorial Guinea',
  },
  'ER' : {
    name: 'Eritrea',
  },
  'EE' : {
    name: 'Estonia',
  },
  'ET' : {
    name: 'Ethiopia',
  },
  'FK' : {
    name: 'Falkland Islands (Malvinas)',
  },
  'FO' : {
    name: 'Faroe Islands',
  },
  'FJ' : {
    name: 'Fiji',
  },
  'FI' : {
    name: 'Finland',
  },
  'FR' : {
    name: 'France',
  },
  'GF' : {
    name: 'French Guiana',
  },
  'PF' : {
    name: 'French Polynesia',
  },
  'TF' : {
    name: 'French Southern Territories',
  },
  'GA' : {
    name: 'Gabon',
  },
  'GM' : {
    name: 'Gambia',
  },
  'GE' : {
    name: 'Georgia',
  },
  'DE' : {
    name: 'Germany',
  },
  'GH' : {
    name: 'Ghana',
  },
  'GI' : {
    name: 'Gibraltar',
  },
  'GR' : {
    name: 'Greece',
  },
  'GL' : {
    name: 'Greenland',
  },
  'GD' : {
    name: 'Grenada',
  },
  'GP' : {
    name: 'Guadeloupe',
  },
  'GU' : {
    name: 'Guam',
  },
  'GT' : {
    name: 'Guatemala',
  },
  'GG' : {
    name: 'Guernsey',
  },
  'GN' : {
    name: 'Guinea',
  },
  'GW' : {
    name: 'Guinea-Bissau',
  },
  'GY' : {
    name: 'Guyana',
  },
  'HT' : {
    name: 'Haiti',
  },
  'HM' : {
    name: 'Heard Island & Mcdonald Islands',
  },
  'VA' : {
    name: 'Holy See (Vatican City State)',
  },
  'HN' : {
    name: 'Honduras',
  },
  'HK' : {
    name: 'Hong Kong',
  },
  'HU' : {
    name: 'Hungary',
  },
  'IS' : {
    name: 'Iceland',
  },
  'IN' : {
    name: 'India',
  },
  'ID' : {
    name: 'Indonesia',
  },
  'IR' : {
    name: 'Iran, Islamic Republic Of',
  },
  'IQ' : {
    name: 'Iraq',
  },
  'IE' : {
    name: 'Ireland',
  },
  'IM' : {
    name: 'Isle Of Man',
  },
  'IL' : {
    name: 'Israel',
  },
  'IT' : {
    name: 'Italy',
  },
  'JM' : {
    name: 'Jamaica',
  },
  'JP' : {
    name: 'Japan',
  },
  'JE' : {
    name: 'Jersey',
  },
  'JO' : {
    name: 'Jordan',
  },
  'KZ' : {
    name: 'Kazakhstan',
  },
  'KE' : {
    name: 'Kenya',
  },
  'KI' : {
    name: 'Kiribati',
  },
  'KR' : {
    name: 'South Korea',
  },
  'KP' : {
    name: 'North Korea',
  },
  'KW' : {
    name: 'Kuwait',
  },
  'KG' : {
    name: 'Kyrgyzstan',
  },
  'LA' : {
    name: 'Lao People\'s Democratic Republic',
  },
  'LV' : {
    name: 'Latvia',
  },
  'LB' : {
    name: 'Lebanon',
  },
  'LS' : {
    name: 'Lesotho',
  },
  'LR' : {
    name: 'Liberia',
  },
  'LY' : {
    name: 'Libyan Arab Jamahiriya',
  },
  'LI' : {
    name: 'Liechtenstein',
  },
  'LT' : {
    name: 'Lithuania',
  },
  'LU' : {
    name: 'Luxembourg',
  },
  'MO' : {
    name: 'Macao',
  },
  'MK' : {
    name: 'Macedonia',
  },
  'MG' : {
    name: 'Madagascar',
  },
  'MW' : {
    name: 'Malawi',
  },
  'MY' : {
    name: 'Malaysia',
  },
  'MV' : {
    name: 'Maldives',
  },
  'ML' : {
    name: 'Mali',
  },
  'MT' : {
    name: 'Malta',
  },
  'MH' : {
    name: 'Marshall Islands',
  },
  'MQ' : {
    name: 'Martinique',
  },
  'MR' : {
    name: 'Mauritania',
  },
  'MU' : {
    name: 'Mauritius',
  },
  'YT' : {
    name: 'Mayotte',
  },
  'MX' : {
    name: 'Mexico',
  },
  'FM' : {
    name: 'Micronesia, Federated States Of',
  },
  'MD' : {
    name: 'Moldova',
  },
  'MC' : {
    name: 'Monaco',
  },
  'MN' : {
    name: 'Mongolia',
  },
  'ME' : {
    name: 'Montenegro',
  },
  'MS' : {
    name: 'Montserrat',
  },
  'MA' : {
    name: 'Morocco',
  },
  'MZ' : {
    name: 'Mozambique',
  },
  'MM' : {
    name: 'Myanmar',
  },
  'NA' : {
    name: 'Namibia',
  },
  'NR' : {
    name: 'Nauru',
  },
  'NP' : {
    name: 'Nepal',
  },
  'NL' : {
    name: 'Netherlands',
  },
  'AN' : {
    name: 'Netherlands Antilles',
  },
  'NC' : {
    name: 'New Caledonia',
  },
  'NZ' : {
    name: 'New Zealand',
  },
  'NI' : {
    name: 'Nicaragua',
  },
  'NE' : {
    name: 'Niger',
  },
  'NG' : {
    name: 'Nigeria',
  },
  'NU' : {
    name: 'Niue',
  },
  'NF' : {
    name: 'Norfolk Island',
  },
  'MP' : {
    name: 'Northern Mariana Islands',
  },
  'NO' : {
    name: 'Norway',
  },
  'OM' : {
    name: 'Oman',
  },
  'PK' : {
    name: 'Pakistan',
  },
  'PW' : {
    name: 'Palau',
  },
  'PS' : {
    name: 'Palestinian Territory, Occupied',
  },
  'PA' : {
    name: 'Panama',
  },
  'PG' : {
    name: 'Papua New Guinea',
  },
  'PY' : {
    name: 'Paraguay',
  },
  'PE' : {
    name: 'Peru',
  },
  'PH' : {
    name: 'Philippines',
  },
  'PN' : {
    name: 'Pitcairn',
  },
  'PL' : {
    name: 'Poland',
  },
  'PT' : {
    name: 'Portugal',
  },
  'PR' : {
    name: 'Puerto Rico',
  },
  'QA' : {
    name: 'Qatar',
  },
  'RE' : {
    name: 'Reunion',
  },
  'RO' : {
    name: 'Romania',
  },
  'RU' : {
    name: 'Russian Federation',
  },
  'RW' : {
    name: 'Rwanda',
  },
  'BL' : {
    name: 'Saint Barthelemy',
  },
  'SH' : {
    name: 'Saint Helena',
  },
  'KN' : {
    name: 'Saint Kitts And Nevis',
  },
  'LC' : {
    name: 'Saint Lucia',
  },
  'MF' : {
    name: 'Saint Martin',
  },
  'PM' : {
    name: 'Saint Pierre And Miquelon',
  },
  'VC' : {
    name: 'Saint Vincent And Grenadines',
  },
  'WS' : {
    name: 'Samoa',
  },
  'SM' : {
    name: 'San Marino',
  },
  'ST' : {
    name: 'Sao Tome And Principe',
  },
  'SA' : {
    name: 'Saudi Arabia',
  },
  'SN' : {
    name: 'Senegal',
  },
  'RS' : {
    name: 'Serbia',
  },
  'SC' : {
    name: 'Seychelles',
  },
  'SL' : {
    name: 'Sierra Leone',
  },
  'SG' : {
    name: 'Singapore',
  },
  'SK' : {
    name: 'Slovakia',
  },
  'SI' : {
    name: 'Slovenia',
  },
  'SB' : {
    name: 'Solomon Islands',
  },
  'SO' : {
    name: 'Somalia',
  },
  'ZA' : {
    name: 'South Africa',
  },
  'GS' : {
    name: 'South Georgia And Sandwich Isl.',
  },
  'ES' : {
    name: 'Spain',
  },
  'LK' : {
    name: 'Sri Lanka',
  },
  'SD' : {
    name: 'Sudan',
  },
  'SR' : {
    name: 'Suriname',
  },
  'SJ' : {
    name: 'Svalbard And Jan Mayen',
  },
  'SZ' : {
    name: 'Swaziland',
  },
  'SE' : {
    name: 'Sweden',
  },
  'CH' : {
    name: 'Switzerland',
  },
  'SY' : {
    name: 'Syrian Arab Republic',
  },
  'TW' : {
    name: 'Taiwan',
  },
  'TJ' : {
    name: 'Tajikistan',
  },
  'TZ' : {
    name: 'Tanzania',
  },
  'TH' : {
    name: 'Thailand',
  },
  'TL' : {
    name: 'Timor-Leste',
  },
  'TG' : {
    name: 'Togo',
  },
  'TK' : {
    name: 'Tokelau',
  },
  'TO' : {
    name: 'Tonga',
  },
  'TT' : {
    name: 'Trinidad And Tobago',
  },
  'TN' : {
    name: 'Tunisia',
  },
  'TR' : {
    name: 'Turkey',
  },
  'TM' : {
    name: 'Turkmenistan',
  },
  'TC' : {
    name: 'Turks And Caicos Islands',
  },
  'TV' : {
    name: 'Tuvalu',
  },
  'UG' : {
    name: 'Uganda',
  },
  'UA' : {
    name: 'Ukraine',
  },
  'AE' : {
    name: 'United Arab Emirates',
  },
  'GB' : {
    name: 'United Kingdom',
  },
  'US' : {
    name: 'United States',
  },
  'UM' : {
    name: 'United States Outlying Islands',
  },
  'UY' : {
    name: 'Uruguay',
  },
  'UZ' : {
    name: 'Uzbekistan',
  },
  'VU' : {
    name: 'Vanuatu',
  },
  'VE' : {
    name: 'Venezuela',
  },
  'VN' : {
    name: 'Viet Nam',
  },
  'VG' : {
    name: 'Virgin Islands, British',
  },
  'VI' : {
    name: 'Virgin Islands, U.S.',
  },
  'WF' : {
    name: 'Wallis And Futuna',
  },
  'EH' : {
    name: 'Western Sahara',
  },
  'YE' : {
    name: 'Yemen',
  },
  'ZM' : {
    name: 'Zambia',
  },
  'ZW' : {
    name: 'Zimbabwe'
  },
};
//FUNCTION TO CONVERT CODES
convertCountryCode = (code) => {
  return isoCountries[code].name;
}

//Page will always load ISS first.
let objectID = '25544';

//API VARIABLES
let objectAPIKey = 'HL2GHH-QXV5ZF-U6CVPA-3VMK';
let mapquestAPIKey = 'qIMsoHWGonAkGLA0afmJDHavRdrFNASo';
let objectURL = `https://www.n2yo.com/rest/v1/satellite/positions/${objectID}/0/0/0/1/&apiKey=${objectAPIKey}`;
let objectURLorbits = `https://www.n2yo.com/rest/v1/satellite/tle/${objectID}&apiKey=${objectAPIKey}`;

//SAT POSITION VARIABLES
let objectName;
let objectLatitude;
let objectLongitude;
let coordinatesString;
let objectAltitude;
let objectVelocityMPH;

//MAP VARIABLES
let map;
let objectIcon;
let objectIconPlacement;
let maploadedBoolean = false;
let timerloadedBoolean = false;
let timer;


//FUNCTION TO GET OBJECT LAT & LNG...
function getObjectCoordinates(){
axios.get(objectURL)
  .then(results => {
      //GET OBJECT COORDINATES
      objectName = results.data.info.satname;
      objectLatitude = results.data.positions[0].satlatitude;
      objectLongitude = results.data.positions[0].satlongitude;
      coordinatesString = `${Math.round(objectLatitude * 100000) / 100000}, ${Math.round(objectLongitude * 100000) / 100000}`;
      objectAltitude = Math.round((results.data.positions[0].sataltitude * 0.621371) * 100) / 100;
      calculateObjectSpeed();

      //If the map has been loaded, don't load it again.
      if(maploadedBoolean === false){
        maploadedBoolean = true;
        loadMap();
        loadIcon();
        updateIconAndBalloon();
      }
      if(timerloadedBoolean === false){
        timerloadedBoolean = true;
        //Call update function every 3 seconds.
        timer = setInterval(startUpdates, 3000);
      }
  })
}

//CALCULATE OBJECT SPEED...
function calculateObjectSpeed(){
  axios.get(objectURLorbits)
    .then(results => {
        //GET OBJECT ORBITS
        let objectOrbits = results.data.tle.split(' ');
        let objectOrbitsPerDay = objectOrbits[objectOrbits.length - 1];
        let objectRadius = 3950 + objectAltitude;
        let objectCircum = objectRadius * 2 * Math.PI;
        let objectOrbitsPerHour = Number(objectOrbitsPerDay) / 24;
        objectVelocityMPH = Math.round((objectCircum * objectOrbitsPerHour) * 100) / 100;
        objectVelocityMPH = objectVelocityMPH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //Format number to include commas.
    })
  }

function loadMap(){
  //LOAD MAP WITH OBJECT COORDINATES using Mapquest https://developer.mapquest.com/documentation/mapquest-js/v1.3/
  //API DOCUMENTATION https://leafletjs.com/reference-1.3.0.html
  // 'map' refers to a <div> element with the ID map
  L.mapquest.key = mapquestAPIKey;
  map = L.mapquest.map('map', {
    center: [objectLatitude + 2, objectLongitude],
    layers: L.mapquest.tileLayer('map'),
    zoom: 5
  });
}

function loadIcon(){
    //ICON
    objectIcon = L.icon({
      iconUrl: `assets/images/${objectID}.png`,
      iconSize: [60, 60],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowUrl: `assets/images/${objectID}.png`,
      shadowSize: [15, 15],
      shadowAnchor: [15, 15]
  });
}

function updateIconAndBalloon(){
  //Add Marker
  objectIconPlacement = L.marker([objectLatitude, objectLongitude], {icon: objectIcon}).addTo(map);
  map.panTo([objectLatitude + 2, objectLongitude]);
  //Add Balloon
  //GET COUNTRY NAME using REVERSE GEOCODING API - https://developer.mapquest.com/documentation/geocoding-api/reverse/get/
  axios.get(`http://www.mapquestapi.com/geocoding/v1/reverse?key=${mapquestAPIKey}&location=${objectLatitude},${objectLongitude}&includeRoadMetadata=true&includeNearestIntersection=true`)
      
      //IF OBJECT IS OVER A COUNTRY
      .then(mapresults => {
          //RETURNS COUNTRY AS 2 LETTER CODE
          let countryCode = mapresults.data.results[0].locations[0].adminArea1;
          let stateName = mapresults.data.results[0].locations[0].adminArea3;
          let cityName = mapresults.data.results[0].locations[0].adminArea5;
          //CONVERTS ABBREVIATION TO FULL COUNTRY NAME
          let fullCountName = convertCountryCode(countryCode);
          
          objectIconPlacement.bindPopup(`
          <div class="balloon">
            <h3>${objectName}</h3>
            <h4>Over ${cityName} ${stateName} ${fullCountName}</h4>
            <img src="https://www.countryflags.io/${countryCode.toLowerCase()}/shiny/64.png"></img>
            <p><strong>COORDINATES:</strong> ${coordinatesString}</p>
            <p><strong>SPEED:</strong> ${objectVelocityMPH} mph</p>
            <p><strong>ALTITUDE:</strong> ${objectAltitude.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} miles above ${fullCountName}.</p>
          </div>
          `).openPopup();
      })

      //IF OBJECT ISN'T OVER A COUNTRY
      .catch(mapresults => {
          objectIconPlacement.bindPopup(`
          <div class="balloon">
            <h3>${objectName}</h3>
            <h4>Not currently over a country.</h4>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_the_World_Ocean_%28Proposal%29.PNG" width="100"></img>
            <p><strong>COORDINATES:</strong> ${coordinatesString}</p>
            <p><strong>SPEED:</strong> ${objectVelocityMPH} mph</p>
            <p><strong>ALTITUDE:</strong> ${objectAltitude.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} miles above the Earth.</p>
          </div>
          `).openPopup();
      })
}



//START UPDATE PROCESS
function startUpdates(){
  if(objectIconPlacement !== undefined){
    objectIconPlacement.remove(map);
  }
  updateIconAndBalloon();
  getObjectCoordinates();
}

//STOP UPDATE PROCESS
function stopUpdates() {
  clearInterval(timer);
}


//ADD EVENT LISTENERS TO OBJECT BUTTONS
let buttons = document.querySelectorAll(".space-button");
buttons.forEach(el => {
  el.addEventListener('click', (e) => {
    stopUpdates();
    timerloadedBoolean = false;
    objectID = e.target.value;
    objectURL = `https://www.n2yo.com/rest/v1/satellite/positions/${objectID}/0/0/0/1/&apiKey=${objectAPIKey}`;
    getObjectCoordinates();
    loadIcon();
  })
})


//BEGIN!! First function called here.
getObjectCoordinates();