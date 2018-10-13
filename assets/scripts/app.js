//ALL COUNTRY ABREVIATIONS AND FULL NAMES
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
//FUNCTION TO CONVERT COUNTRY CODES TO FULL COUNTRY NAME
convertCountryCode = (code) => {
  return isoCountries[code].name;
}

//SATELLITE VARIABLES
//Page will always load ISS first.
let objectID = '25544';
let objectWiki = 'ISS';
let objectName;
let objectLatitude;
let objectLongitude;
let coordinatesString;
let objectAltitude;
let objectVelocityMPH;
let objectVelocityMPS;

//API KEYS
let objectAPIKey = 'HL2GHH-QXV5ZF-U6CVPA-3VMK';
let mapquestAPIKey = 'qIMsoHWGonAkGLA0afmJDHavRdrFNASo';
//URLs
let objectURL = `https://www.n2yo.com/rest/v1/satellite/positions/${objectID}/0/0/0/1/&apiKey=${objectAPIKey}`;
let objectURLorbits = `https://www.n2yo.com/rest/v1/satellite/tle/${objectID}&apiKey=${objectAPIKey}`;

//MAP VARIABLES
let map;
let objectIcon;
let objectIconPlacement;
let maploadedBoolean = false;
let timerloadedBoolean = false;
let timer;
let balloonOpen = false;

//GET OBJECT LATITUDE & LONGITUDE:
function getObjectCoordinates(){
axios.get(objectURL)
  .then(results => {
      //Example (ISS): https://www.n2yo.com/rest/v1/satellite/positions/25544/0/0/0/1/&apiKey=HL2GHH-QXV5ZF-U6CVPA-3VMK
      objectName = results.data.info.satname;
      objectLatitude = results.data.positions[0].satlatitude;
      objectLongitude = results.data.positions[0].satlongitude;
      coordinatesString = `${Math.round(objectLatitude * 100000) / 100000}, ${Math.round(objectLongitude * 100000) / 100000}`;
      objectAltitude = Math.round((results.data.positions[0].sataltitude * 0.621371) * 100) / 100;
      
      //Endpoint doesn't provide the speed of the satellite.
      //It only provides the number of orbits in 24 hours.
      //We need a function to do some math for us.
      calculateObjectSpeed();

      //If the map hasn't been loaded yet then load it!
      if(maploadedBoolean === false){
        maploadedBoolean = true;
        loadMap();
        createIcon();
      }

      //This timer variable is what updates the satellite icon on the map.
      //If it hasn't been started yet then start it!
      if(timerloadedBoolean === false){
        timerloadedBoolean = true;
        //Call update function every 3 seconds.
        timer = setInterval(startUpdates, 3000);
      }
  })
}

//CALCULATE OBJECT SPEED:
function calculateObjectSpeed(){
  axios.get(objectURLorbits)
    .then(results => {
        //Endpoint returns a string of satellite information that we split into an array.
        // Example (geostationary SES1): https://www.n2yo.com/rest/v1/satellite/tle/36516&apiKey=HL2GHH-QXV5ZF-U6CVPA-3VMK
        // Example (ISS): https://www.n2yo.com/rest/v1/satellite/tle/25544&apiKey=HL2GHH-QXV5ZF-U6CVPA-3VMK
        let objectOrbits = results.data.tle.split(' ');
        //The last item in the array is the number Earth orbits in 24 hours.
        let objectOrbitsPerDay = objectOrbits[objectOrbits.length - 1];

        //We want to get the speed of the satellite in MPH.
        //Speed = distance traveld in hour.
        //Our distance will be the circumference of the satellite's orbit.
        //The radius is the Earth's radius (3950 miles) + the satellite's altitude.
        let objectRadius = 3950 + objectAltitude;
        //Circumference = radius * 2 * PI.
        let objectCircum = objectRadius * 2 * Math.PI;
        //Number of orbits in an hour...
        let objectOrbitsPerHour = Number(objectOrbitsPerDay) / 24;
        //Speed of satellite in mph = satellite circumference times number of orbits per hour.
        objectVelocityMPH = Math.round((objectCircum * objectOrbitsPerHour) * 100) / 100;
        //Speed of satellite in mi/s = speed mph divided by 3600.
        objectVelocityMPS = Math.round((objectVelocityMPH / 3600) * 100) / 100;
        //Format numbers to include commas.
        objectVelocityMPH = objectVelocityMPH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        objectVelocityMPS = objectVelocityMPS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    })
  }


//LOAD MAP:
function loadMap(){
  //Mapquest API https://developer.mapquest.com/documentation/mapquest-js/v1.3/
  //API DOCUMENTATION https://leafletjs.com/reference-1.3.0.html
  // 'map' refers to a <div> element with the ID map
  L.mapquest.key = mapquestAPIKey;
  map = L.mapquest.map('map', {
    center: [objectLatitude, objectLongitude],
    layers: L.mapquest.tileLayer('map'),
    zoom: 2.5
  });
}

//CREATE ICON:
function createIcon(){
    objectIcon = L.icon({
      iconUrl: `assets/images/${objectID}.png`,
      iconSize: [60, 60],
      iconAnchor: [30, 30],
      popupAnchor: [0, -30],
      // shadowUrl: `assets/images/${objectID}.png`,
      // shadowSize: [16, 16],
      // shadowAnchor: [8, 8]
  });
}

//LOAD ICON and BALLOON:
function loadIconAndBalloon(){
  //Place Icon
  objectIconPlacement = L.marker([objectLatitude, objectLongitude], {icon: objectIcon}).addTo(map);
  //Add an event listener to the icon.
  //If it is clicked a boolean switches value.
  //This boolean decides if the balloon will be open or closed.
  objectIconPlacement.addEventListener('click', () => {
    balloonOpen = !balloonOpen;
  })
  
  //Pan map to the icon
  map.panTo([objectLatitude + 5, objectLongitude]);
  
  //Create and Place Balloon:
  //We currently only have the satellite's location in coordinates.
  //We want to get the country name using a reverse geocoding API - https://developer.mapquest.com/documentation/geocoding-api/reverse/get/
  axios.get(`http://www.mapquestapi.com/geocoding/v1/reverse?key=${mapquestAPIKey}&location=${objectLatitude},${objectLongitude}&includeRoadMetadata=true&includeNearestIntersection=true`)
      //If the coordinates correlate with a country the API returns the country's 2 letter code. (example: AE for United Arab Emirates)
      .then(mapresults => {
          //Two letter country code:
          let countryCode = mapresults.data.results[0].locations[0].adminArea1;
          //State name:
          let stateName = mapresults.data.results[0].locations[0].adminArea3;
          //City name:
          let cityName = mapresults.data.results[0].locations[0].adminArea5;

          //Now that we have the country code, we can convert it to the full name using this function and looks through the freaking huge object I copied and pasted to line 2.
          let fullCountName = convertCountryCode(countryCode);

          //Since we know the satellite is above a country, lets create and attach a balloon to the icon with the following information...
          //Flags API example: https://www.countryflags.io/et/shiny/64.png    uses   https://countryflags.io/

          let popup = L.popup({closeButton: false})
            .setContent(`
            <div class="row d-none d-md-block">
              <div class="col-lg-12">
                <div class="balloon">
                  <h3><a class="text-warning" href="https://en.wikipedia.org/wiki/${objectWiki}" target="_blank">${objectName}</a></h3>
                  <small>(click to view satellite info)</small>
                  <p><strong>Over:</strong> <em>${cityName} ${stateName}, ${fullCountName}</em></p>
                  <a href="https://en.wikipedia.org/wiki/${fullCountName}" target="_blank"><img src="https://www.countryflags.io/${countryCode.toLowerCase()}/shiny/64.png"></img></a><br>
                  <small>(click to view country info)</small>
                  <p><strong>COORDINATES:</strong> <em>${coordinatesString}</em></p>
                  <p><strong>VELOCITY:</strong> <em>${objectVelocityMPH} mph</em> <em>(${objectVelocityMPS} mi/sec</em>)</p>
                  <p><strong>ALTITUDE:</strong> <em>${objectAltitude.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} miles above ${fullCountName}.</em></p>
                </div>
              </div>
            </div>

            <div class="d-none d-sm-block d-md-none">
              <small><b>${objectName}</b></small><br>
              <small>Coordinates: ${coordinatesString}</small><br>
              <small>${objectVelocityMPH} mph (${objectVelocityMPS} mi/sec</em>)</small><br>
              <small>${objectAltitude.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} miles above ${fullCountName}.</small>
            </div>

            <div class="d-block d-sm-none">
              <small><b>${objectName}</b></small><br>
              <small>Coordinates: ${coordinatesString}</small><br>
              <small>${objectVelocityMPH} mph (${objectVelocityMPS} mi/sec</em>)</small><br>
              <small>${objectAltitude.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} miles above ${fullCountName}.</small>
            </div>         
            `);

          objectIconPlacement.bindPopup(popup);
          
          //If boolean is true, this balloon will be displayed.
          if(balloonOpen === true){
            objectIconPlacement.openPopup();
          }
      })

      //If the coordinates do not correlate with a country the API returns an error.
      .catch(mapresults => {
          //Lets than create and attach a balloon to the icon with the following information...

          let popup = L.popup({closeButton: false})
          .setContent(`
          <div class="row d-none d-md-block">
          <div class="col-lg-12">
          <div class="balloon">
            <h3><a class="text-warning" href="https://en.wikipedia.org/wiki/${objectWiki}" target="_blank">${objectName}</a></h3>
            <small>(click to view satellite info)</small>
            <p><strong>COORDINATES:</strong> <em>${coordinatesString}</em></p>
            <p><strong>VELOCITY:</strong> <em>${objectVelocityMPH} mph</em> <em>(${objectVelocityMPS} mi/sec</em>)</p>
            <p><strong>ALTITUDE:</strong> <em>${objectAltitude.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} miles above the Earth.</em></p>
          </div>
          </div>
          </div>

          <div class="d-none d-sm-block d-md-none">
            <small><b>${objectName}</b></small><br>
            <small>Coordinates: ${coordinatesString}</small><br>
            <small>${objectVelocityMPH} mph (${objectVelocityMPS} mi/sec</em>)</small><br>
            <small>${objectAltitude.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} miles above the Earth.</small>
          </div>

          <div class="d-block d-sm-none">
            <small><b>${objectName}</b></small><br>
            <small>Coordinates: ${coordinatesString}</small><br>
            <small>${objectVelocityMPH} mph (${objectVelocityMPS} mi/sec</em>)</small><br>
            <small>${objectAltitude.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} miles above the Earth.</small>
          </div>
          `);

          objectIconPlacement.bindPopup(popup);

          //If boolean is true, this balloon will be displayed.
          if(balloonOpen === true){
            objectIconPlacement.openPopup();
          }
      })
}


//UPDATE OBJECT POSITION:
//This update function is called every 3 seconds when active.
function startUpdates(){
  //It first removes the icon and it's balloon from the map if there is one...
  if(objectIconPlacement !== undefined){
    objectIconPlacement.remove(map);
  }
  //Retrieves updated information from the API...
  getObjectCoordinates();
  //And creates a new icon and balloon and adds it to the map.
  loadIconAndBalloon();
}

//When this function is called it stops the above timer function.
function stopUpdates() {
  clearInterval(timer);
}


//EVENT LISTENERS FOR BUTTONS:
//Create an array like object to keep track of anything with a .space-button class.
let buttons = document.querySelectorAll(".space-button");
//Add an event listener to each item in the array like object.
buttons.forEach(el => {
  //If the button is clicked...
  el.addEventListener('click', (e) => {
    //Stop the update timer...
    stopUpdates();
    timerloadedBoolean = false;
    //This Variable is for the wikipedia link in the icon's balloon.
    objectWiki = e.target.name;
    //Create the satellite id using the target's value.
    objectID = e.target.value;
    //Use the specific satellite's endpoint.
    objectURL = `https://www.n2yo.com/rest/v1/satellite/positions/${objectID}/0/0/0/1/&apiKey=${objectAPIKey}`;
    objectURLorbits = `https://www.n2yo.com/rest/v1/satellite/tle/${objectID}&apiKey=${objectAPIKey}`;
    //Create icon...
    createIcon();
    //Get the satellite's information and add the icon and balloon to map...
    getObjectCoordinates();
  })
})

//BEGIN! This is the first function called.
getObjectCoordinates();