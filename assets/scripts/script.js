//ALL COUNTRY CODES - FULL NAME
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
      name: 'Korea',
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

//ISS API
const ISSURL = 'https://api.wheretheiss.at/v1/satellites/25544';
let issLat;
let issLon;
let issAlt;
let issVel;

axios.get(ISSURL)
    .then(results => {
        //GET ISS COORDINATES
        issLat = results.data.latitude;
        issLon = results.data.longitude;
        issAlt = results.data.altitude;
        issVel = results.data.velocity;
        issTime = results.data.timestamp;
        
        //LOAD MAP WITH ISS COORDINATES using Mapquest https://developer.mapquest.com/documentation/mapquest-js/v1.3/
        L.mapquest.key = 'qIMsoHWGonAkGLA0afmJDHavRdrFNASo';

        // 'map' refers to a <div> element with the ID map
        let map = L.mapquest.map('map', {
          center: [issLat, issLon],
          layers: L.mapquest.tileLayer('map'),
          zoom: 4
        });

        let issIcon = L.icon({
            iconUrl: 'assets/images/iss-icon.png',
            iconSize: [50, 50],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
            shadowUrl: 'assets/images/iss-icon.png',
            shadowSize: [10, 10],
            shadowAnchor: [22, 94]
        });
        let marker = L.marker([issLat, issLon], {icon: issIcon}).addTo(map);
        marker.bindPopup('Hello World!').closePopup();

        


        //GET COUNTRY NAME using https://developer.mapquest.com/documentation/geocoding-api/reverse/get/
        axios.get(`http://www.mapquestapi.com/geocoding/v1/reverse?key=qIMsoHWGonAkGLA0afmJDHavRdrFNASo&location=${issLat},${issLon}&includeRoadMetadata=true&includeNearestIntersection=true`)
            .then(mapresults => {
                //RETURNS COUNTRY AS 2 LETTER CODE
                let countCode = mapresults.data.results[0].locations[0].adminArea1;
                let stateName = mapresults.data.results[0].locations[0].adminArea3;
                let cityName = mapresults.data.results[0].locations[0].adminArea5;
                //CONVERTS CODE TO FULL COUNTRY NAME
                console.log(cityName, stateName, convertCountryCode(countCode));
                //USE CODE TO GET FLAG using https://countryflags.io/
                document.getElementById('iss-info').innerHTML = `
                <img src="https://www.countryflags.io/${countCode.toLowerCase()}/shiny/64.png"></img>
                <ul>
                    <li>LOCATION: Over ${cityName} ${stateName} ${convertCountryCode(countCode)}</li>
                    <li>COORDINATES: ${issLat}, ${issLon}</li>
                    <li>SPEED: ${Math.round((issVel * 0.621371) * 100) / 100} mph</li>
                    <li>ALTITUDE: ${Math.round((issAlt * 0.621371) * 100) / 100} miles above the Earth</li>
                </ul>
                `;
            })
            //IF ISS ISN'T OVER A COUNTRY
            .catch(mapresults => {
                console.log("The ISS is not over land.")
                //MAKE FLAG IMAGE OF WAVES
                document.getElementById('iss-info').innerHTML = `
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_the_World_Ocean_%28Proposal%29.PNG" width="100"></img>
                <ul>
                    <li>LOCATION: Over the ocean.</li>
                    <li>COORDINATES: ${issLat}, ${issLon}</li>
                    <li>SPEED: ${Math.round((issVel * 0.621371) * 100) / 100} mph</li>
                    <li>ALTITUDE: ${Math.round((issAlt * 0.621371) * 100) / 100} miles above the Earth</li>
                </ul>
                `;
            })
    })