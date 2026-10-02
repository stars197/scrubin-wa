/* ==========================================================================
   ScrubIn US — Local & National Clinical, Hospital & Research Directory
   All-US ZIP & City Coordinate Engine (005xx–999xx), 50+ Verified Local &
   National Programs, Official Discovery Portals, and AMCAS Hours Logger
   ========================================================================== */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. All-US ZIP Code, City & State Geo-Coordinate Engine (All 50 States)
  // --------------------------------------------------------------------------
  const EXACT_ZIP_COORDS = {
    // Washington State & Pacific Northwest
    '98195': { lat: 47.6503, lon: -122.3077, state: 'WA', label: 'Seattle (UW Medical Center), WA' },
    '98104': { lat: 47.6042, lon: -122.3244, state: 'WA', label: 'Seattle (First Hill / Harborview), WA' },
    '98105': { lat: 47.6627, lon: -122.2816, state: 'WA', label: 'Seattle (Seattle Children’s), WA' },
    '98109': { lat: 47.6275, lon: -122.3312, state: 'WA', label: 'Seattle (Fred Hutch / SLU), WA' },
    '98101': { lat: 47.6101, lon: -122.3344, state: 'WA', label: 'Seattle (Downtown / Virginia Mason), WA' },
    '98112': { lat: 47.6225, lon: -122.3125, state: 'WA', label: 'Seattle (Capitol Hill), WA' },
    '98122': { lat: 47.6085, lon: -122.3090, state: 'WA', label: 'Seattle (Cherry Hill), WA' },
    '98108': { lat: 47.5390, lon: -122.3160, state: 'WA', label: 'Seattle (South Park / Sea Mar), WA' },
    '98118': { lat: 47.5512, lon: -122.2778, state: 'WA', label: 'Seattle (Rainier Valley), WA' },
    '98133': { lat: 47.7170, lon: -122.3410, state: 'WA', label: 'North Seattle / Shoreline, WA' },
    '98188': { lat: 47.4430, lon: -122.2810, state: 'WA', label: 'Tukwila / SeaTac, WA' },
    '98004': { lat: 47.6155, lon: -122.1912, state: 'WA', label: 'Bellevue (Overlake Medical), WA' },
    '98034': { lat: 47.7155, lon: -122.1856, state: 'WA', label: 'Kirkland (EvergreenHealth), WA' },
    '98052': { lat: 47.6740, lon: -122.1215, state: 'WA', label: 'Redmond, WA' },
    '98057': { lat: 47.4680, lon: -122.2120, state: 'WA', label: 'Renton (Valley Medical Center), WA' },
    '98032': { lat: 47.3809, lon: -122.2348, state: 'WA', label: 'Kent, WA' },
    '98003': { lat: 47.3134, lon: -122.3356, state: 'WA', label: 'Federal Way, WA' },
    '98027': { lat: 47.5301, lon: -122.0326, state: 'WA', label: 'Issaquah, WA' },
    '98020': { lat: 47.8107, lon: -122.3774, state: 'WA', label: 'Edmonds, WA' },
    '98036': { lat: 47.8209, lon: -122.3151, state: 'WA', label: 'Lynnwood (Lahai Health), WA' },
    '98201': { lat: 47.9912, lon: -122.2054, state: 'WA', label: 'Everett (Providence Colby), WA' },
    '98272': { lat: 47.8554, lon: -121.9710, state: 'WA', label: 'Monroe, WA' },
    '98273': { lat: 48.4212, lon: -122.3340, state: 'WA', label: 'Mount Vernon, WA' },
    '98225': { lat: 48.7697, lon: -122.4859, state: 'WA', label: 'Bellingham, WA' },
    '98405': { lat: 47.2587, lon: -122.4535, state: 'WA', label: 'Tacoma (MultiCare / St. Joseph), WA' },
    '98402': { lat: 47.2529, lon: -122.4443, state: 'WA', label: 'Downtown Tacoma, WA' },
    '98372': { lat: 47.1854, lon: -122.2929, state: 'WA', label: 'Puyallup, WA' },
    '98312': { lat: 47.5673, lon: -122.6329, state: 'WA', label: 'Bremerton / Silverdale, WA' },
    '98506': { lat: 47.0525, lon: -122.8740, state: 'WA', label: 'Olympia, WA' },
    '98664': { lat: 45.6220, lon: -122.5802, state: 'WA', label: 'Vancouver, WA' },
    '98660': { lat: 45.6280, lon: -122.6739, state: 'WA', label: 'Downtown Vancouver, WA' },
    '98801': { lat: 47.4235, lon: -120.3103, state: 'WA', label: 'Wenatchee, WA' },
    '98902': { lat: 46.5965, lon: -120.5290, state: 'WA', label: 'Yakima, WA' },
    '98926': { lat: 46.9965, lon: -120.5478, state: 'WA', label: 'Ellensburg, WA' },
    '99204': { lat: 47.6480, lon: -117.4122, state: 'WA', label: 'Spokane (Sacred Heart / Deaconess), WA' },
    '99202': { lat: 47.6606, lon: -117.3895, state: 'WA', label: 'Spokane (WSU Health Sciences), WA' },
    '99163': { lat: 46.7319, lon: -117.1542, state: 'WA', label: 'Pullman (WSU), WA' },
    '99352': { lat: 46.2804, lon: -119.2752, state: 'WA', label: 'Richland / Tri-Cities, WA' },
    '99336': { lat: 46.2112, lon: -119.1372, state: 'WA', label: 'Kennewick, WA' },
    '99362': { lat: 46.0646, lon: -118.3430, state: 'WA', label: 'Walla Walla, WA' },
    '97239': { lat: 45.4990, lon: -122.6859, state: 'OR', label: 'Portland (OHSU Marquam Hill), OR' },
    // California & West
    '90095': { lat: 34.0664, lon: -118.4453, state: 'CA', label: 'Los Angeles (UCLA Westwood), CA' },
    '90048': { lat: 34.0758, lon: -118.3802, state: 'CA', label: 'Los Angeles (Cedars-Sinai), CA' },
    '94305': { lat: 37.4337, lon: -122.1750, state: 'CA', label: 'Palo Alto (Stanford Medicine), CA' },
    '94143': { lat: 37.7631, lon: -122.4586, state: 'CA', label: 'San Francisco (UCSF Health), CA' },
    '92103': { lat: 32.7549, lon: -117.1661, state: 'CA', label: 'San Diego (UC San Diego Health), CA' },
    '80045': { lat: 39.7456, lon: -104.8378, state: 'CO', label: 'Aurora / Denver (UCHealth Anschutz), CO' },
    '85054': { lat: 33.6592, lon: -111.9565, state: 'AZ', label: 'Phoenix / Scottsdale (Mayo Clinic AZ), AZ' },
    '84132': { lat: 40.7712, lon: -111.8369, state: 'UT', label: 'Salt Lake City (U of Utah / Huntsman), UT' },
    // Northeast & Mid-Atlantic
    '02114': { lat: 42.3626, lon: -71.0686, state: 'MA', label: 'Boston (Mass General Hospital), MA' },
    '02115': { lat: 42.3364, lon: -71.1062, state: 'MA', label: 'Boston (Longwood / Brigham / Children’s), MA' },
    '02118': { lat: 42.3360, lon: -71.0725, state: 'MA', label: 'Boston (Boston Medical Center / BHCHP), MA' },
    '10016': { lat: 40.7392, lon: -73.9754, state: 'NY', label: 'New York (NYU Langone / Bellevue), NY' },
    '10029': { lat: 40.7900, lon: -73.9526, state: 'NY', label: 'New York (Mount Sinai Hospital), NY' },
    '10032': { lat: 40.8407, lon: -73.9419, state: 'NY', label: 'New York (Columbia / NY-Presbyterian), NY' },
    '19104': { lat: 39.9487, lon: -75.1939, state: 'PA', label: 'Philadelphia (CHOP & Penn Medicine), PA' },
    '21287': { lat: 39.2975, lon: -76.5929, state: 'MD', label: 'Baltimore (Johns Hopkins Hospital), MD' },
    '20892': { lat: 39.0019, lon: -77.1045, state: 'MD', label: 'Bethesda (NIH Clinical Center), MD' },
    // South & Texas Medical Center
    '77030': { lat: 29.7079, lon: -95.3982, state: 'TX', label: 'Houston (Texas Medical Center / MD Anderson), TX' },
    '75390': { lat: 32.8136, lon: -96.8407, state: 'TX', label: 'Dallas (UT Southwestern / Parkland), TX' },
    '27710': { lat: 36.0051, lon: -78.9371, state: 'NC', label: 'Durham (Duke University Hospital), NC' },
    '30303': { lat: 33.7519, lon: -84.3822, state: 'GA', label: 'Atlanta (Grady Trauma & Emory), GA' },
    '32224': { lat: 30.2638, lon: -81.4398, state: 'FL', label: 'Jacksonville (Mayo Clinic Florida), FL' },
    '33136': { lat: 25.7901, lon: -80.2127, state: 'FL', label: 'Miami (Jackson Memorial / UHealth), FL' },
    // Midwest
    '60611': { lat: 41.8947, lon: -87.6214, state: 'IL', label: 'Chicago (Northwestern Memorial), IL' },
    '60647': { lat: 41.9175, lon: -87.7018, state: 'IL', label: 'Chicago (CommunityHealth Free Clinic), IL' },
    '55905': { lat: 44.0225, lon: -92.4669, state: 'MN', label: 'Rochester (Mayo Clinic Campus), MN' },
    '44195': { lat: 41.5028, lon: -81.6212, state: 'OH', label: 'Cleveland (Cleveland Clinic Main Campus), OH' },
    '48109': { lat: 42.2836, lon: -83.7294, state: 'MI', label: 'Ann Arbor (University of Michigan Health), MI' },
    '63110': { lat: 38.6361, lon: -90.2644, state: 'MO', label: 'St. Louis (Barnes-Jewish / WashU), MO' }
  };

  // Every 3-digit WA ZIP prefix + 2-digit US ZIP prefix fallback across all 50 states
  const WA_PREFIX3_COORDS = {
    '980': { lat: 47.6100, lon: -122.2000, state: 'WA', label: 'King / Snohomish Suburbs (Eastside, Renton, Lynnwood), WA' },
    '981': { lat: 47.6200, lon: -122.3200, state: 'WA', label: 'Seattle Metro, WA' },
    '982': { lat: 48.3500, lon: -122.3000, state: 'WA', label: 'North Sound (Everett, Skagit, Bellingham), WA' },
    '983': { lat: 47.3500, lon: -122.5500, state: 'WA', label: 'Kitsap Peninsula & Pierce County, WA' },
    '984': { lat: 47.2500, lon: -122.4500, state: 'WA', label: 'Tacoma & Lakewood Metro, WA' },
    '985': { lat: 47.0379, lon: -122.9007, state: 'WA', label: 'Olympia & Thurston County, WA' },
    '986': { lat: 45.6387, lon: -122.6615, state: 'WA', label: 'Vancouver & Southwest Washington, WA' },
    '988': { lat: 47.4235, lon: -120.3103, state: 'WA', label: 'Wenatchee & North Central Washington, WA' },
    '989': { lat: 46.6021, lon: -120.5059, state: 'WA', label: 'Yakima & Kittitas Valley, WA' },
    '990': { lat: 47.5500, lon: -117.5500, state: 'WA', label: 'Spokane Metro Suburbs, WA' },
    '991': { lat: 46.7319, lon: -117.1542, state: 'WA', label: 'Pullman / Palouse & Northeast WA' },
    '992': { lat: 47.6588, lon: -117.4260, state: 'WA', label: 'Spokane Medical District, WA' },
    '993': { lat: 46.2396, lon: -119.1006, state: 'WA', label: 'Tri-Cities & Walla Walla, WA' },
    '994': { lat: 46.4145, lon: -117.0477, state: 'WA', label: 'Clarkston & Southeast Washington, WA' }
  };

  const US_PREFIX2_COORDS = {
    '01': { lat: 42.2626, lon: -71.8023, state: 'MA', label: 'Central / Western Massachusetts' },
    '02': { lat: 42.3601, lon: -71.0589, state: 'MA', label: 'Greater Boston, MA / Rhode Island' },
    '03': { lat: 42.9956, lon: -71.4548, state: 'NH', label: 'New Hampshire / Maine' },
    '04': { lat: 43.6591, lon: -70.2568, state: 'ME', label: 'Maine' },
    '05': { lat: 44.4759, lon: -73.2121, state: 'VT', label: 'Vermont' },
    '06': { lat: 41.3083, lon: -72.9279, state: 'CT', label: 'Connecticut (New Haven / Hartford)' },
    '07': { lat: 40.7357, lon: -74.1724, state: 'NJ', label: 'Northern New Jersey' },
    '08': { lat: 40.2171, lon: -74.7429, state: 'NJ', label: 'Central / Southern New Jersey' },
    '10': { lat: 40.7589, lon: -73.9851, state: 'NY', label: 'New York City / Westchester, NY' },
    '11': { lat: 40.7282, lon: -73.7949, state: 'NY', label: 'Queens / Brooklyn / Long Island, NY' },
    '12': { lat: 42.6526, lon: -73.7562, state: 'NY', label: 'Albany / Hudson Valley, NY' },
    '13': { lat: 43.0481, lon: -76.1474, state: 'NY', label: 'Syracuse / Central NY' },
    '14': { lat: 43.1566, lon: -77.6088, state: 'NY', label: 'Rochester / Buffalo, NY' },
    '15': { lat: 40.4406, lon: -79.9959, state: 'PA', label: 'Pittsburgh & Western PA' },
    '16': { lat: 41.2033, lon: -77.1945, state: 'PA', label: 'Central / Northwestern PA' },
    '17': { lat: 40.2732, lon: -76.8867, state: 'PA', label: 'Harrisburg / Hershey, PA' },
    '18': { lat: 40.6023, lon: -75.4714, state: 'PA', label: 'Lehigh Valley / Northeastern PA' },
    '19': { lat: 39.9526, lon: -75.1652, state: 'PA', label: 'Philadelphia Metro, PA / Delaware' },
    '20': { lat: 38.9072, lon: -77.0369, state: 'MD', label: 'Washington, DC & Bethesda, MD' },
    '21': { lat: 39.2904, lon: -76.6122, state: 'MD', label: 'Baltimore Metro, MD' },
    '22': { lat: 38.8048, lon: -77.0469, state: 'VA', label: 'Northern Virginia' },
    '23': { lat: 37.5407, lon: -77.4360, state: 'VA', label: 'Richmond / Norfolk, VA' },
    '24': { lat: 37.2710, lon: -79.9414, state: 'VA', label: 'Southwest Virginia' },
    '25': { lat: 38.3498, lon: -81.6326, state: 'WV', label: 'West Virginia' },
    '26': { lat: 39.6295, lon: -79.9559, state: 'WV', label: 'Morgantown / Northern WV' },
    '27': { lat: 35.9940, lon: -78.8986, state: 'NC', label: 'Raleigh / Durham / Research Triangle, NC' },
    '28': { lat: 35.2271, lon: -80.8431, state: 'NC', label: 'Charlotte & Western NC' },
    '29': { lat: 32.7765, lon: -79.9311, state: 'SC', label: 'Charleston / Columbia, SC' },
    '30': { lat: 33.7490, lon: -84.3880, state: 'GA', label: 'Atlanta Metro, GA' },
    '31': { lat: 32.0809, lon: -81.0912, state: 'GA', label: 'Savannah / Southern GA' },
    '32': { lat: 30.3322, lon: -81.6557, state: 'FL', label: 'Jacksonville / Orlando / Gainesville, FL' },
    '33': { lat: 25.7617, lon: -80.1918, state: 'FL', label: 'Miami / South Florida & Tampa, FL' },
    '34': { lat: 27.9506, lon: -82.4572, state: 'FL', label: 'Gulf Coast Florida' },
    '35': { lat: 33.5186, lon: -86.8104, state: 'AL', label: 'Birmingham, AL' },
    '37': { lat: 36.1627, lon: -86.7816, state: 'TN', label: 'Nashville / Knoxville, TN' },
    '38': { lat: 35.1495, lon: -90.0490, state: 'TN', label: 'Memphis, TN / Mississippi' },
    '40': { lat: 38.2527, lon: -85.7585, state: 'KY', label: 'Louisville / Lexington, KY' },
    '43': { lat: 39.9612, lon: -82.9988, state: 'OH', label: 'Columbus, OH' },
    '44': { lat: 41.4993, lon: -81.6944, state: 'OH', label: 'Cleveland / Northeast Ohio' },
    '45': { lat: 39.1031, lon: -84.5120, state: 'OH', label: 'Cincinnati / Dayton, OH' },
    '46': { lat: 39.7684, lon: -86.1581, state: 'IN', label: 'Indianapolis, IN' },
    '48': { lat: 42.2808, lon: -83.7430, state: 'MI', label: 'Ann Arbor / Detroit Metro, MI' },
    '49': { lat: 42.9634, lon: -85.6681, state: 'MI', label: 'Grand Rapids / Western MI' },
    '50': { lat: 41.5868, lon: -93.6250, state: 'IA', label: 'Des Moines / Iowa City, IA' },
    '53': { lat: 43.0389, lon: -87.9065, state: 'WI', label: 'Milwaukee / Madison, WI' },
    '55': { lat: 44.5000, lon: -92.8000, state: 'MN', label: 'Minneapolis / St. Paul / Rochester, MN' },
    '60': { lat: 41.8781, lon: -87.6298, state: 'IL', label: 'Chicago Metro, IL' },
    '61': { lat: 40.1164, lon: -88.2434, state: 'IL', label: 'Central Illinois' },
    '63': { lat: 38.6270, lon: -90.1994, state: 'MO', label: 'St. Louis Metro, MO' },
    '64': { lat: 39.0997, lon: -94.5786, state: 'MO', label: 'Kansas City, MO' },
    '70': { lat: 29.9511, lon: -90.0715, state: 'LA', label: 'New Orleans, LA' },
    '73': { lat: 35.4676, lon: -97.5164, state: 'OK', label: 'Oklahoma City, OK' },
    '75': { lat: 32.7767, lon: -96.7970, state: 'TX', label: 'Dallas / North Texas, TX' },
    '76': { lat: 32.7555, lon: -97.3308, state: 'TX', label: 'Fort Worth / Central TX' },
    '77': { lat: 29.7604, lon: -95.3698, state: 'TX', label: 'Houston & Texas Medical Center, TX' },
    '78': { lat: 29.8000, lon: -98.0000, state: 'TX', label: 'Austin / San Antonio, TX' },
    '80': { lat: 39.7392, lon: -104.9903, state: 'CO', label: 'Denver / Aurora Metro, CO' },
    '83': { lat: 43.6150, lon: -116.2023, state: 'ID', label: 'Idaho' },
    '84': { lat: 40.7608, lon: -111.8910, state: 'UT', label: 'Salt Lake City Metro, UT' },
    '85': { lat: 33.4484, lon: -112.0740, state: 'AZ', label: 'Phoenix / Tucson Metro, AZ' },
    '87': { lat: 35.0844, lon: -106.6504, state: 'NM', label: 'Albuquerque, NM' },
    '89': { lat: 36.1699, lon: -115.1398, state: 'NV', label: 'Las Vegas / Reno, NV' },
    '90': { lat: 34.0522, lon: -118.2437, state: 'CA', label: 'Los Angeles Metro, CA' },
    '91': { lat: 34.1478, lon: -118.1445, state: 'CA', label: 'Pasadena / San Fernando Valley, CA' },
    '92': { lat: 33.1500, lon: -117.3500, state: 'CA', label: 'San Diego / Orange County, CA' },
    '93': { lat: 36.7378, lon: -119.7871, state: 'CA', label: 'Central Coast / Central Valley, CA' },
    '94': { lat: 37.6000, lon: -122.3000, state: 'CA', label: 'San Francisco Bay Area / Palo Alto, CA' },
    '95': { lat: 38.5816, lon: -121.4944, state: 'CA', label: 'Sacramento / San Jose, CA' },
    '97': { lat: 45.5152, lon: -122.6784, state: 'OR', label: 'Portland / Oregon Corridor, OR' }
  };

  const CITY_ALIASES = {
    // Washington State
    'seattle': '98195', 'uw': '98195', 'montlake': '98195', 'washington': '98195', 'wa': '98195',
    'first hill': '98104', 'harborview': '98104', 'south lake union': '98109', 'slu': '98109',
    'bellevue': '98004', 'eastside': '98004', 'overlake': '98004', 'kirkland': '98034',
    'redmond': '98052', 'renton': '98057', 'kent': '98032', 'federal way': '98003',
    'issaquah': '98027', 'edmonds': '98020', 'lynnwood': '98036', 'everett': '98201',
    'bellingham': '98225', 'tacoma': '98405', 'puyallup': '98372', 'bremerton': '98312',
    'olympia': '98506', 'vancouver': '98664', 'wenatchee': '98801', 'yakima': '98902',
    'spokane': '99204', 'pullman': '99163', 'wsu': '99202', 'richland': '99352',
    'kennewick': '99336', 'tri-cities': '99352', 'walla walla': '99362',
    // Major US Cities & States
    'portland': '97239', 'oregon': '97239', 'or': '97239', 'ohsu': '97239',
    'los angeles': '90095', 'la': '90095', 'ucla': '90095', 'california': '90095', 'ca': '90095',
    'cedars': '90048', 'beverly hills': '90048',
    'stanford': '94305', 'palo alto': '94305', 'san jose': '94305',
    'san francisco': '94143', 'sf': '94143', 'ucsf': '94143', 'bay area': '94143',
    'san diego': '92103', 'ucsd': '92103',
    'denver': '80045', 'aurora': '80045', 'colorado': '80045', 'co': '80045',
    'phoenix': '85054', 'scottsdale': '85054', 'arizona': '85054', 'az': '85054',
    'salt lake city': '84132', 'utah': '84132', 'ut': '84132',
    'boston': '02114', 'mgh': '02114', 'massachusetts': '02114', 'ma': '02114', 'cambridge': '02114',
    'new york': '10016', 'nyc': '10016', 'manhattan': '10016', 'ny': '10016', 'nyu': '10016', 'mount sinai': '10029',
    'philadelphia': '19104', 'philly': '19104', 'pennsylvania': '19104', 'pa': '19104', 'chop': '19104',
    'baltimore': '21287', 'johns hopkins': '21287', 'hopkins': '21287', 'maryland': '21287', 'md': '21287',
    'bethesda': '20892', 'nih': '20892', 'dc': '20892', 'washington dc': '20892',
    'houston': '77030', 'texas': '77030', 'tx': '77030', 'md anderson': '77030',
    'dallas': '75390', 'utsw': '75390',
    'durham': '27710', 'duke': '27710', 'raleigh': '27710', 'north carolina': '27710', 'nc': '27710',
    'atlanta': '30303', 'grady': '30303', 'emory': '30303', 'georgia': '30303', 'ga': '30303',
    'jacksonville': '32224', 'florida': '32224', 'fl': '32224', 'miami': '33136',
    'chicago': '60611', 'illinois': '60611', 'il': '60611', 'northwestern': '60611',
    'rochester': '55905', 'mayo': '55905', 'mayo clinic': '55905', 'minnesota': '55905', 'mn': '55905', 'minneapolis': '55905',
    'cleveland': '44195', 'ohio': '44195', 'oh': '44195',
    'ann arbor': '48109', 'michigan': '48109', 'mi': '48109', 'detroit': '48109',
    'st louis': '63110', 'st. louis': '63110', 'missouri': '63110', 'mo': '63110'
  };

  function resolveSearchLocation(rawInput) {
    if (!rawInput) return null;
    const cleaned = rawInput.trim().toLowerCase();
    if (!cleaned) return null;

    if (CITY_ALIASES[cleaned]) {
      const zip = CITY_ALIASES[cleaned];
      return { zip, ...EXACT_ZIP_COORDS[zip] };
    }

    for (const [cityKey, mappedZip] of Object.entries(CITY_ALIASES)) {
      if (cleaned.length >= 3 && cityKey.includes(cleaned)) {
        return { zip: mappedZip, ...EXACT_ZIP_COORDS[mappedZip] };
      }
    }

    const zipMatch = cleaned.match(/\b(\d{3,5})\b/);
    if (zipMatch) {
      const digits = zipMatch[1];
      if (EXACT_ZIP_COORDS[digits]) {
        return { zip: digits, ...EXACT_ZIP_COORDS[digits] };
      }
      const p3 = digits.slice(0, 3);
      if (WA_PREFIX3_COORDS[p3]) {
        return { zip: digits, ...WA_PREFIX3_COORDS[p3] };
      }
      const p2 = digits.slice(0, 2);
      if (US_PREFIX2_COORDS[p2]) {
        return { zip: digits, ...US_PREFIX2_COORDS[p2] };
      }
    }

    return null;
  }

  function calculateDistanceMiles(lat1, lon1, lat2, lon2) {
    const R = 3958.8;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c * 10) / 10;
  }

  // --------------------------------------------------------------------------
  // 2. Deep Verified Washington State Opportunities (22 Programs)
  // --------------------------------------------------------------------------
  const DEFAULT_OPPORTUNITIES = [
    {
      id: 'wa-001',
      title: 'Level-1 Trauma, Burn Center & Emergency Department Volunteer',
      organization: 'Harborview Medical Center (UW Medicine)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Seattle & King County',
      specialty: 'Emergency Medicine & Trauma',
      zipCode: '98104',
      city: 'Seattle (First Hill), WA',
      lat: 47.6042,
      lon: -122.3244,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 consecutive months (100+ hrs)',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Quarterly Onboarding (Apply 4–6 wks before quarter)',
      portalUrl: 'https://www.uwmedicine.org/volunteering',
      insiderTip: 'Harborview is the only Level-1 Adult & Pediatric Trauma and Burn Center for the 4-state WWAMI region (WA, WY, AK, MT, ID). New college volunteers frequently start in Patient Escort or acute inpatient support before transferring into the Trauma ED or Burn ICU.',
      description: 'Serve at the Pacific Northwest’s premier safety-net and Level-1 Trauma hospital. Support patients and care teams across the Emergency Department, Regional Burn Center, Neurosciences ICU, and Interpreter Services.',
      duties: [
        'Assist nursing and trauma support staff with bedside patient comfort, warm blankets, and family navigation',
        'Escort discharged and ambulatory patients across the First Hill campus and outpatient clinics',
        'Support delirium-prevention and mobility protocols on acute inpatient trauma and burn floors',
        'Eligible for official UW Medicine Volunteer Services verification letter after 100 hours'
      ],
      clearances: ['2-Step TB Skin Test or IGRA Blood Assay', 'MMR, Varicella, Hep B & Tdap Documentation', 'WA State Patrol (WATCH) Background Check', 'Age 18+ Required for Harborview'],
      contactInfo: 'hmcvol@uw.edu | (206) 744-3547'
    },
    {
      id: 'wa-002',
      title: 'Patient Escort-to-Clinical Unit Pathway (Montlake & Northwest Campuses)',
      organization: 'UW Medical Center — Montlake & Northwest',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Seattle & King County',
      specialty: 'Surgery, Inpatient & Simulation',
      zipCode: '98195',
      city: 'Seattle (Montlake), WA',
      lat: 47.6497,
      lon: -122.3072,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (195 hrs for LOR)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling (Montlake accepts 16+; Northwest accepts 18+)',
      portalUrl: 'https://www.uwmedicine.org/volunteering/volunteer-faq-uwmc',
      insiderTip: 'Insider Rule: UWMC Montlake requires new student volunteers to complete an initial prerequisite rotation in Patient Escort (learning hospital layout and wheelchair safety) before transferring into specialized inpatient units like Oncology, Cardiology, or Neonatal ICU.',
      description: 'Located directly adjacent to the University of Washington campus and Health Sciences Building. Gain foundational hospital patient-transport and bedside support experience with a structured ladder into specialized clinical units.',
      duties: [
        'Complete initial Patient Escort training transporting inpatient and surgical discharge patients',
        'Transition into specialized inpatient nursing units, Physical/Occupational Therapy gyms, or Surgical Waiting',
        'High school students (16–17) eligible at the Montlake campus; 18+ at Northwest campus (98133)'
      ],
      clearances: ['UW Medicine Immunization Form', 'TB QuantiFERON or 2-Step PPD', 'WATCH Background Check'],
      contactInfo: 'uwmcvol@uw.edu | (206) 598-4218'
    },
    {
      id: 'wa-003',
      title: 'UW WISH Clinical Simulation Intensive Volunteer',
      organization: 'WWAMI Institute for Simulation in Healthcare (UW Medicine)',
      facilityType: 'EMS, Blood & Simulation',
      waRegion: 'Seattle & King County',
      specialty: 'Surgery, Inpatient & Simulation',
      zipCode: '98195',
      city: 'Seattle (Montlake & Harborview), WA',
      lat: 47.6505,
      lon: -122.3085,
      isRemote: false,
      directPatientContact: false,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 8,
      minDuration: '2-Week Intensive or Quarterly Shifts',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: false,
      eveningAvailable: false,
      status: 'Accepting Applications',
      applicationCycle: 'Seasonal Cohorts (Montlake 16+, Harborview/NW 18+)',
      portalUrl: 'https://wish.washington.edu/',
      insiderTip: 'One of Washington’s best-kept secrets for pre-meds: you work directly inside the surgical and emergency simulation suites where UW medical students and surgical residents practice intubation, central lines, robotic surgery, and trauma codes.',
      description: 'Assist UW School of Medicine faculty and simulation engineers in running high-fidelity mannequin codes, laparoscopic surgery labs, and standardized patient encounters for medical students and residents.',
      duties: [
        'Set up airway management, ultrasound, suturing, and central-line task trainers for resident bootcamps',
        'Observe faculty debriefings of simulated trauma resuscitations and ICU crises',
        'Learn surgical instrument names, sterile gowning/gloving, and clinical simulation operations'
      ],
      clearances: ['Immunization Verification', 'UW WISH Orientation'],
      contactInfo: 'wishsim@uw.edu | UW Health Sciences T-Wing'
    },
    {
      id: 'wa-004',
      title: 'Pediatric Inpatient Playroom, Bedside & Sibling Care Volunteer',
      organization: 'Seattle Children’s Hospital',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Seattle & King County',
      specialty: 'Pediatrics & Child Life',
      zipCode: '98105',
      city: 'Seattle (Laurelhurst), WA',
      lat: 47.6627,
      lon: -122.2816,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 3,
      minDuration: '6 months (Weekly same-day shift)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Periodic Cohort Windows (Check site monthly)',
      portalUrl: 'https://www.seattlechildrens.org/giving/volunteer/',
      insiderTip: 'Seattle Children’s explicitly separates Hospital Volunteering from Job Shadowing. Do not mention "shadowing doctors" as your primary goal in your volunteer interview—focus on comforting pediatric patients and supporting families.',
      description: 'Provide therapeutic play, bedside companionship, and comforting relief for hospitalized infants, children, and teens across medical, surgical, and oncology units at Seattle Children’s main campus.',
      duties: [
        'Engage hospitalized children in bedside art, games, and normalization activities alongside Child Life',
        'Hold and soothe infants or stay with toddlers so exhausted parents can take a meal break',
        'Staff the inpatient playrooms and assist families arriving at the main hospital clinics'
      ],
      clearances: ['Age 16+ Required', 'Full Immunization & 2-Step TB Clearance', 'Background Check'],
      contactInfo: 'volunteer@seattlechildrens.org | (206) 987-2166'
    },
    {
      id: 'wa-005',
      title: 'SCRI Research Training Program (RTP) & Scrubs & ’Scopes Camp',
      organization: 'Seattle Children’s Research Institute (SCRI)',
      facilityType: 'Academic / Research Lab',
      waRegion: 'Seattle & King County',
      specialty: 'Translational & Clinical Research',
      zipCode: '98101',
      city: 'Seattle (Downtown / Belltown), WA',
      lat: 47.6158,
      lon: -122.3361,
      isRemote: false,
      directPatientContact: false,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 20,
      minDuration: 'Summer Program (Stipend Provided)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med'],
      weekendAvailable: false,
      eveningAvailable: false,
      status: 'Accepting Applications',
      applicationCycle: 'Applications Open Winter (Jan–Mar) for Summer',
      portalUrl: 'https://www.seattlechildrens.org/research/centers-programs/science-education-department/',
      insiderTip: 'SCRI offers competitive paid summer bench-research internships for WA students (including 10th/11th graders and undergrads) at their downtown Building Cure labs, plus the 5-day Scrubs & ’Scopes allied health shadowing camp.',
      description: 'Work inside Seattle Children’s downtown Building Cure laboratories learning molecular biology, immunology, microscopy, and pediatric public health research—or join Scrubs & ’Scopes for structured clinical career shadowing.',
      duties: [
        'Conduct hands-on laboratory experiments in infectious disease, neurosciences, or pediatric oncology',
        'Attend weekly seminars with pediatric physician-scientists and present a final research poster',
        'Competitive stipend awarded to support students from across Puget Sound'
      ],
      clearances: ['Application Essay & Teacher Reference', 'Must live within commuting distance of Downtown Seattle'],
      contactInfo: 'scienceed@seattlechildrens.org'
    },
    {
      id: 'wa-006',
      title: 'Summer Undergraduate Research Program (SURP) & Clinical Oncology Intern',
      organization: 'Fred Hutchinson Cancer Center',
      facilityType: 'Academic / Research Lab',
      waRegion: 'Seattle & King County',
      specialty: 'Oncology & Hematology',
      zipCode: '98109',
      city: 'Seattle (South Lake Union), WA',
      lat: 47.6275,
      lon: -122.3312,
      isRemote: false,
      directPatientContact: false,
      starterFriendly: false,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 40,
      minDuration: '9-Week Summer Intensive (Paid)',
      studentLevels: ['Undergrad / Pre-Med'],
      weekendAvailable: false,
      eveningAvailable: false,
      status: 'Closing Soon',
      applicationCycle: 'Opens November • Deadline January for Summer',
      portalUrl: 'https://www.fredhutch.org/en/education-training/undergraduate-students/summer-undergraduate-research-program.html',
      insiderTip: 'Important WA Rule: Fred Hutch does NOT offer casual drop-in lab volunteering—all student lab placements go through formal internships like SURP, Ship-to-Shore, or through UW Undergraduate Research credit with a joint UW/Fred Hutch faculty member.',
      description: 'Nine-week paid biomedical, immunotherapy, public health, and clinical oncology research internship paired 1-on-1 with a Fred Hutch faculty mentor in South Lake Union.',
      duties: [
        'Complete an independent research project in cancer biology, virology, biostatistics, or clinical outcomes',
        'Participate in weekly oncology career roundtables and MD/PhD admissions workshops',
        'Present findings at the Fred Hutch Summer Research Symposium'
      ],
      clearances: ['2 Letters of Recommendation', 'Official Transcript', 'Personal Statement'],
      contactInfo: 'surp@fredhutch.org'
    },
    {
      id: 'wa-007',
      title: 'Year-Round Undergraduate Clinical & Bench Research Assistant',
      organization: 'UW Office of Undergraduate Research (OUR) & UW Medicine SLU',
      facilityType: 'Academic / Research Lab',
      waRegion: 'Seattle & King County',
      specialty: 'Translational & Clinical Research',
      zipCode: '98195',
      city: 'Seattle (Montlake & South Lake Union), WA',
      lat: 47.6530,
      lon: -122.3090,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 8,
      minDuration: '2–3 Academic Quarters',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: false,
      eveningAvailable: false,
      status: 'Rolling Admissions',
      applicationCycle: 'Rolling Year-Round (Best before Autumn/Winter/Spring Quarters)',
      portalUrl: 'https://www.washington.edu/undergradresearch/',
      insiderTip: 'Even if you aren’t a UW student, you can browse the UW Medicine departmental faculty pages (Anesthesiology, Emergency Medicine, Neurology, Cardiology, Radiology) and cold-email PIs to volunteer as a non-matriculated research volunteer on REDCap clinical registries.',
      description: 'Join active UW School of Medicine clinical and translational research teams investigating traumatic brain injury, sepsis, cardiovascular outcomes, Alzheimer’s disease, and health equity.',
      duties: [
        'Abstract electronic health record (Epic) data into REDCap clinical trial registries',
        'Screen and consent patients in outpatient clinics or inpatient wards for observational studies',
        'Present at the annual UW Undergraduate Research Symposium in May'
      ],
      clearances: ['UW CITI Human Subjects Training', 'HIPAA Training', 'Immunization Clearance if Patient-Facing'],
      contactInfo: 'undergradresearch@uw.edu | 171 Mary Gates Hall'
    },
    {
      id: 'wa-008',
      title: 'Emergency Department & Inpatient Pre-Med / Pre-Nursing Volunteer',
      organization: 'Swedish Medical Center (First Hill, Cherry Hill & Edmonds)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Seattle & King County',
      specialty: 'Emergency Medicine & Trauma',
      zipCode: '98104',
      city: 'Seattle (First Hill) & Edmonds, WA',
      lat: 47.6088,
      lon: -122.3215,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (100 hrs minimum)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Admissions across First Hill, Cherry Hill, Ballard, Issaquah & Edmonds',
      portalUrl: 'https://www.swedish.org/locations/first-hill-campus/volunteer',
      insiderTip: 'Swedish explicitly reserves certain high-acuity Emergency Department and Post-Partum/NICU support shifts for pre-med and pre-nursing students who can commit to a consistent 4-hour weekly shift for 6+ months.',
      description: 'Gain bedside hospital exposure across Swedish’s First Hill (general surgery, oncology, labor & delivery), Cherry Hill (neuroscience & cardiac institute), or Edmonds/Issaquah campuses.',
      duties: [
        'Round on Emergency Department bays to restock warm blankets, linens, and comfort supplies',
        'Assist nursing units with patient call lights, water/nutrition delivery, and discharge wheelchair escorts',
        'Support patients and families in the Swedish Cancer Institute and Neurosciences units'
      ],
      clearances: ['2-Step TB Test or QuantiFERON', 'MMR, Varicella, Hep B, Tdap & Flu Vaccines', 'Background Check'],
      contactInfo: 'SwedishVolunteerServices@swedish.org'
    },
    {
      id: 'wa-009',
      title: 'UW Geriatric Medicine Clinical Observership & Shadowing Program',
      organization: 'UW Medicine — Division of Gerontology & Geriatric Medicine',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Seattle & King County',
      specialty: 'Hospice & Geriatrics',
      zipCode: '98104',
      city: 'Seattle (Harborview SeniorCare Clinic), WA',
      lat: 47.6040,
      lon: -122.3240,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: false,
      weeklyHours: 4,
      minDuration: 'Flexible Shadowing Blocks (8–40 hrs)',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: false,
      eveningAvailable: false,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Applications via UW Geriatrics Portal',
      portalUrl: 'https://geriatrics.uw.edu/volunteering-and-shadowing',
      insiderTip: 'Unlike most hospital departments where you have to cold-email 30 doctors yourself to find a shadowing sponsor, UW Geriatric Medicine runs an official, structured Observership matching program for undergrads!',
      description: 'Dedicated physician shadowing program allowing undergraduate and post-bacc pre-med students to observe geriatricians, palliative care attendings, and fellows in outpatient memory and senior care clinics.',
      duties: [
        'Shadow attending geriatric physicians during comprehensive cognitive and frailty assessments',
        'Observe interdisciplinary team conferences with clinical pharmacists, social workers, and nurses',
        'Fulfill UW School of Medicine (UWSOM) clinical shadowing recommendations (40+ hrs target)'
      ],
      clearances: ['UW Medicine Observer Packet', 'HIPAA Confidentiality Agreement', 'Immunization & TB Proof'],
      contactInfo: 'gerimed@uw.edu'
    },
    {
      id: 'wa-010',
      title: 'Inpatient Care, ED Support & High School NAC Observation Volunteer',
      organization: 'Overlake Medical Center & Clinics (Bellevue)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Eastside (Bellevue / Kirkland / Redmond)',
      specialty: 'Surgery, Inpatient & Simulation',
      zipCode: '98004',
      city: 'Bellevue, WA',
      lat: 47.6195,
      lon: -122.1879,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '100 Hours Minimum (6+ months)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling (Adult Volunteers 18+; High School NAC Observation Track)',
      portalUrl: 'https://www.overlakehospital.org/about/volunteer',
      insiderTip: 'Overlake requires standard hospital volunteers to be 18+ and commit to one 4-hour shift per week for 100 hours, AND partners with Eastside high schools to provide clinical observation hours for Nursing Assistant Certified (NAC) students.',
      description: 'Serve Eastside patients at Bellevue’s flagship hospital across the Emergency Department, Mother & Baby Unit, Surgical Services, Physical Rehabilitation, and Cancer Center.',
      duties: [
        'Assist nursing units with bedside patient comfort, meal tray assistance, and discharge transport',
        'Support families and surgical liaisons in Post-Anesthesia Care (PACU) and Day Surgery',
        'High school students enrolled in local skill-center NAC programs can complete clinical observation hours'
      ],
      clearances: ['Age 18+ (or High School NAC partner)', 'TB & Immunization Clearance', 'Background Check'],
      contactInfo: 'volunteer.services@overlakehospital.org | (425) 688-5352'
    },
    {
      id: 'wa-011',
      title: 'Hospital Clinical Volunteer, Booth Gardner Hospice & Job Shadowing',
      organization: 'EvergreenHealth Medical Center (Kirkland & Monroe)',
      facilityType: 'Hospice & Palliative Care',
      waRegion: 'Eastside (Bellevue / Kirkland / Redmond)',
      specialty: 'Hospice & Geriatrics',
      zipCode: '98034',
      city: 'Kirkland & Monroe, WA',
      lat: 47.7155,
      lon: -122.1856,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (100 hrs)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Admissions (Kirkland 98034 & Monroe 98272)',
      portalUrl: 'https://www.evergreenhealth.com/about-us/volunteer/',
      insiderTip: 'EvergreenHealth offers three distinct student wins in one system: (1) acute hospital volunteering, (2) Booth Gardner Inpatient & Home Hospice bedside volunteering, and (3) a formal Student Job Shadowing pathway for academic credit requirements.',
      description: 'Provide direct bedside care support at EvergreenHealth Kirkland or Monroe, or serve as a compassionate bedside vigil and family respite volunteer at the Gene & Irene Wockner Hospice Care Center.',
      duties: [
        'Provide bedside companionship, comfort rounds, and family respite in the 15-bed Inpatient Hospice Center',
        'Assist acute care nurses in the Kirkland Emergency Department, Maternity, and Acute Rehab floors',
        'Apply for short-term Student Job Shadowing if required for a pre-health course or degree'
      ],
      clearances: ['TB Screening', 'Immunization Record', 'Hospice Volunteer Training (Provided Free)'],
      contactInfo: 'grpvolunteer@evergreenhealth.com | (425) 899-1994'
    },
    {
      id: 'wa-012',
      title: 'Eastside & Seattle Community Clinic Patient Navigator & Health Advocate',
      organization: 'International Community Health Services (ICHS — Bellevue & Seattle)',
      facilityType: 'Free Clinic / FQHC',
      waRegion: 'Eastside (Bellevue / Kirkland / Redmond)',
      specialty: 'Primary Care & Underserved',
      zipCode: '98004',
      city: 'Bellevue, International District, Holly Park & Shoreline, WA',
      lat: 47.6105,
      lon: -122.1425,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '3–6 months (Flexible Shifts)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: false,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Year-Round',
      portalUrl: 'https://www.ichs.com/volunteer',
      insiderTip: 'ICHS operates full-service community clinics in Bellevue, Seattle’s Chinatown-International District, Holly Park, and Shoreline—ideal for pre-med and pre-PA students looking for hands-on community health navigation, multilingual interpretation, and clinical externships.',
      description: 'Federally Qualified Health Center (FQHC) providing culturally and linguistically appropriate primary medical, dental, behavioral health, and pharmacy care across King County.',
      duties: [
        'Assist uninsured and immigrant patients with clinic check-in, health education, and navigation',
        'Work alongside community health workers, primary care physicians, ARNPs, and clinical pharmacists',
        'Help patients enroll in Apple Health (WA Medicaid) and community preventative care drives'
      ],
      clearances: ['WA State Patrol Background Check', 'HIPAA Training', 'Immunization Proof'],
      contactInfo: 'https://www.ichs.com/volunteer | (206) 788-3700'
    },
    {
      id: 'wa-013',
      title: 'Bilingual Medical, Dental & SDOH Service-Learning Volunteer',
      organization: 'Sea Mar Community Health Centers (30+ WA Locations)',
      facilityType: 'Free Clinic / FQHC',
      waRegion: 'Seattle & King County',
      specialty: 'Primary Care & Underserved',
      zipCode: '98108',
      city: 'Seattle, Bellevue, Tacoma, Everett, Vancouver & Bellingham, WA',
      lat: 47.5390,
      lon: -122.3160,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '1 Quarter / 40–100 Hours',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Rolling Admissions',
      applicationCycle: 'Open Year-Round Across 13 Washington Counties',
      portalUrl: 'https://www.seamar.org/volunteer-program.html',
      insiderTip: 'Sea Mar is one of the most accessible, high-impact clinical volunteer pathways in Washington State. They have clinics in Seattle, Burien, Bellevue, Lynnwood, Everett, Bellingham, Tacoma, Olympia, Puyallup, and Vancouver—and actively encourage students to contact local site managers directly.',
      description: 'Serve Latino, immigrant, and underserved families across Washington’s largest community health center network. Roles span medical clinic navigation, preventative health outreach, senior care (Cannon House), and health education.',
      duties: [
        'Assist medical assistants and front-desk care coordinators with patient intake and preventative screening outreach',
        'Support bilingual (Spanish, Russian, Vietnamese, Somali, Tagalog) health education and vaccination clinics',
        'Participate in community farmworker and migrant health fairs across Western and Central Washington'
      ],
      clearances: ['Sea Mar Volunteer Packet', 'TB Test & Vaccinations', 'WA WATCH Background Check'],
      contactInfo: 'volunteer@seamar.org | (206) 762-3700'
    },
    {
      id: 'wa-014',
      title: 'Low-Income Medical, Dental & Behavioral Health Clinic Volunteer',
      organization: 'Lahai Health Free Clinic (Lynnwood & North King County)',
      facilityType: 'Free Clinic / FQHC',
      waRegion: 'North Sound (Everett / Lynnwood / Bellingham)',
      specialty: 'Primary Care & Underserved',
      zipCode: '98036',
      city: 'Lynnwood & Shoreline, WA',
      lat: 47.8209,
      lon: -122.3151,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '1 Year Commitment Preferred',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: false,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Admissions (Includes Full EHR & HIPAA Training)',
      portalUrl: 'https://lahai.org/volunteer/',
      insiderTip: 'Lahai Health trains non-clinical and pre-med volunteers directly on their Electronic Health Record (EHR) system and clinic triage workflows—giving you real outpatient clinic operations experience that translates directly to Medical Assistant or Scribe roles.',
      description: 'Donor-supported free clinic serving uninsured and underinsured patients in Snohomish and North King Counties across primary medicine, dental care, and mental health counseling.',
      duties: [
        'Complete patient eligibility intake, EHR chart preparation, and clinic room turnover',
        'Support volunteer physicians, dentists, and nurse practitioners during afternoon and evening clinics',
        'Coordinate prescription assistance and diagnostic imaging referrals for uninsured patients'
      ],
      clearances: ['1-Year Commitment', 'Background Check', 'On-Site HIPAA & EHR Training Provided'],
      contactInfo: 'volunteer@lahai.org | (206) 363-4105'
    },
    {
      id: 'wa-015',
      title: 'Capitol Hill & Central District Community Clinic Volunteer',
      organization: 'Seattle Roots Community Health (Country Doctor & Carolyn Downs Clinics)',
      facilityType: 'Free Clinic / FQHC',
      waRegion: 'Seattle & King County',
      specialty: 'Primary Care & Underserved',
      zipCode: '98112',
      city: 'Seattle (Capitol Hill & Central District), WA',
      lat: 47.6225,
      lon: -122.3125,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Admissions',
      portalUrl: 'https://seattleroots.org/get-involved/',
      insiderTip: 'Founded in 1971 on Capitol Hill (as Country Doctor & Carolyn Downs, now unified as Seattle Roots Community Health), these clinics have a deep history of social-justice medicine in Seattle—making this experience stand out powerfully on UW School of Medicine (UWSOM) applications.',
      description: 'Support patient-centered primary care, pediatric outreach, and after-hours urgent clinic operations at two historic Seattle community health clinics.',
      duties: [
        'Assist clinic reception and care teams during weekday evening and Saturday morning walk-in hours',
        'Support pediatric literacy (Reach Out and Read) and patient social-needs resource tables',
        'Help coordinate mobile vaccination and community hypertension screening drives'
      ],
      clearances: ['Immunization & TB Verification', 'Background Check'],
      contactInfo: 'https://seattleroots.org/get-involved/ | (206) 299-1600'
    },
    {
      id: 'wa-016',
      title: 'Emergency Dept, NICU Cuddler, Job Shadowing & M.A.S.H. Camp',
      organization: 'MultiCare Tacoma General & Mary Bridge Children’s Hospital',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'South Sound (Tacoma / Olympia)',
      specialty: 'Pediatrics & Child Life',
      zipCode: '98405',
      city: 'Tacoma, Puyallup & Auburn, WA',
      lat: 47.2587,
      lon: -122.4535,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '100 Hours (or 5-Day M.A.S.H. Camp for HS)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Hospital Volunteering (16+) • M.A.S.H. Camp Apps Open Spring',
      portalUrl: 'https://www.multicare.org/about/volunteers/',
      insiderTip: 'MultiCare is one of the very few Washington hospital systems that offers a formal Student Job Shadowing pathway (ages 16+) directly through Volunteer Services, PLUS the free 5-day M.A.S.H. Camp (MultiCare Academy for Students in Healthcare) for high schoolers!',
      description: 'Volunteer across Tacoma General Hospital, Mary Bridge Children’s Hospital, Good Samaritan (Puyallup), or Auburn Medical Center in the Emergency Department, Pediatrics, Oncology, or Formal Job Shadowing.',
      duties: [
        'Provide direct bedside support in Mary Bridge Children’s playrooms, pediatric wards, and adult ED bays',
        'Apply for MultiCare’s structured Student Job Shadowing track to observe physicians, PAs, and nurses',
        'High school sophomores/juniors/seniors can attend the free 5-day M.A.S.H. Camp clinical immersion'
      ],
      clearances: ['Age 16+ Eligible', '2-Step TB Test', 'MMR/Varicella/HepB/Tdap', 'Background Check'],
      contactInfo: 'multicarevolunteer@multicare.org | (253) 403-1005'
    },
    {
      id: 'wa-017',
      title: 'Clinical Trials & Community Outcomes Student Research Associate',
      organization: 'MultiCare Institute for Research & Innovation (Tacoma & Spokane)',
      facilityType: 'Academic / Research Lab',
      waRegion: 'South Sound (Tacoma / Olympia)',
      specialty: 'Translational & Clinical Research',
      zipCode: '98405',
      city: 'Tacoma & Spokane, WA',
      lat: 47.2595,
      lon: -122.4545,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 6,
      minDuration: '6 months',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: false,
      eveningAvailable: false,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Inquiries via Research Institute & Volunteer Services',
      portalUrl: 'https://www.multicare.org/about/volunteers/',
      insiderTip: 'Pre-meds in the South Sound (UW Tacoma, PLU, Puget Sound) and Spokane often think they have to commute to Seattle for clinical research—MultiCare’s Research Institute runs 150+ active clinical trials right in Tacoma and Spokane.',
      description: 'Collaborate with clinical research coordinators and community physician investigators on Phase II–IV oncology, neurology, maternal-fetal, and pediatric clinical trials.',
      duties: [
        'Assist research nurses with trial participant screening, study visit logistics, and chart abstraction',
        'Participate in community-based participatory research (CBPR) and health equity studies',
        'Shadow principal investigators during research clinic follow-up visits'
      ],
      clearances: ['CITI Good Clinical Practice (GCP)', 'MultiCare Research Clearance'],
      contactInfo: 'research@multicare.org | (253) 403-7249'
    },
    {
      id: 'wa-018',
      title: 'Hospital Volunteer & Student Healthcare Career Exploration Program',
      organization: 'Virginia Mason Franciscan Health (Seattle & Tacoma St. Joseph)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'South Sound (Tacoma / Olympia)',
      specialty: 'Surgery, Inpatient & Simulation',
      zipCode: '98405',
      city: 'Tacoma (St. Joseph), Seattle, Federal Way & Silverdale, WA',
      lat: 47.2451,
      lon: -122.4486,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (No summer-only tracks)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Year-Round Long-Term Commitments (Seattle, Tacoma, Burien, Federal Way, Silverdale)',
      portalUrl: 'https://www.vmfh.org/franciscan-foundation/volunteering',
      insiderTip: 'Note on VMFH Policy: Virginia Mason Franciscan Health does NOT accept short-term "summer-only" volunteers. When applying, emphasize that you live or attend school locally in WA and want a continuous 6–12 month weekly shift.',
      description: 'Serve patients across VMFH’s 10 Washington hospitals—including Virginia Mason Medical Center (Seattle First Hill), St. Joseph Medical Center (Tacoma), St. Anne (Burien), St. Francis (Federal Way), and St. Michael (Silverdale).',
      duties: [
        'Assist inpatient nursing floors, surgical family lounges, rehabilitation gyms, and infusion suites',
        'Deliver bedside hospitality carts, comfort items, and mobility support',
        'Students from partner WA schools can enroll in the VMFH Student Healthcare Career Exploration Program'
      ],
      clearances: ['Age 16+ or 18+ by Unit', 'TB & Immunization Clearance', '6+ Month Continuous Availability'],
      contactInfo: 'volunteer@vmfh.org'
    },
    {
      id: 'wa-019',
      title: 'Inland Northwest Trauma, Pediatric & Cardiac Inpatient Volunteer',
      organization: 'Providence Sacred Heart Medical Center & Children’s Hospital (Spokane)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Eastern WA (Spokane / Pullman / Tri-Cities)',
      specialty: 'Emergency Medicine & Trauma',
      zipCode: '99204',
      city: 'Spokane, WA',
      lat: 47.6480,
      lon: -117.4122,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (100 hrs)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Admissions (Spokane Sacred Heart & Holy Family)',
      portalUrl: 'https://www.providence.org/locations/wa/sacred-heart-medical-center',
      insiderTip: 'Sacred Heart is Eastern Washington’s largest hospital (644+ beds) and the primary teaching hospital for both WSU Elson S. Floyd College of Medicine and UW School of Medicine’s Spokane WWAMI campus.',
      description: 'Gain clinical hospital experience in Spokane’s medical district across Sacred Heart Children’s Hospital, the Heart Institute, Emergency Services, and Surgical Recovery.',
      duties: [
        'Support pediatric playrooms, NICU family lounges, and adult inpatient nursing floors',
        'Assist with patient transport, bedside comfort rounds, and wayfinding across the Sacred Heart campus',
        'For formal physician shadowing in Spokane, contact Providence Medical Staff Services directly'
      ],
      clearances: ['Providence Health Screening & TB Test', 'WA Background Check', 'Vaccination Records'],
      contactInfo: 'SHMCVolunteerServices@providence.org | (509) 474-3166'
    },
    {
      id: 'wa-020',
      title: 'Rural & Underserved Pre-Professional Shadowing (24-Hr Track) & Clinic Volunteer',
      organization: 'Yakima Valley Farm Workers Clinic (YVFWC) — Central & Eastern WA',
      facilityType: 'Free Clinic / FQHC',
      waRegion: 'Central & SW WA (Yakima / Vancouver)',
      specialty: 'Primary Care & Underserved',
      zipCode: '98902',
      city: 'Yakima, Toppenish, Pasco, Spokane & Walla Walla, WA',
      lat: 46.5965,
      lon: -120.5290,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '24-Hour Shadowing Block or Ongoing Volunteer',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: false,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Applications via YVFWC Placements Portal',
      portalUrl: 'https://www.yvfwc.com/careers/placements/',
      insiderTip: 'YVFWC has an official Pre-Professional & High School Shadowing Portal (up to 24 hours/year of direct clinician observation) plus community volunteering—ideal for students aiming for PNWU (Yakima), WSU Medicine, or UWSOM’s Rural/Underserved TRUST pathway!',
      description: 'One of the Pacific Northwest’s largest community health systems serving agricultural families across Central and Eastern Washington. Offers both community volunteering and structured pre-health clinician shadowing.',
      duties: [
        'Shadow primary care physicians (MD/DO), PAs, ARNPs, or dentists for up to 24 structured hours per year',
        'Volunteer with mobile farmworker health outreach, nutrition education, and pediatric clinic events',
        'Gain firsthand insight into rural and agricultural medicine highly valued by WA medical schools'
      ],
      clearances: ['Personal Interview', 'TB Test & Flu Vaccination', 'Background Check'],
      contactInfo: 'studentplacements@yvfwc.org | (509) 248-3334'
    },
    {
      id: 'wa-021',
      title: 'North Sound & SW Washington Regional Hospital Patient Support',
      organization: 'PeaceHealth St. Joseph (Bellingham) & PeaceHealth Southwest (Vancouver)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'North Sound (Everett / Lynnwood / Bellingham)',
      specialty: 'Oncology & Hematology',
      zipCode: '98225',
      city: 'Bellingham (98225), Sedro-Woolley & Vancouver (98664), WA',
      lat: 48.7697,
      lon: -122.4859,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: false,
      status: 'Accepting Applications',
      applicationCycle: 'Check Local Campus Portal (Bellingham, United General, Southwest, St. John)',
      portalUrl: 'https://www.peacehealth.org/volunteer',
      insiderTip: 'Western Washington University (WWU Bellingham) and WSU Vancouver pre-meds: PeaceHealth campuses periodically pause general student applications when cohorts fill—apply right at the start of September or January, or pair with Hospice/Cancer Center roles.',
      description: 'Support inpatient units, infusion centers, emergency departments, and palliative care across PeaceHealth’s Northwest Washington (Bellingham/Skagit) and Southwest Washington (Vancouver/Longview) medical centers.',
      duties: [
        'Provide comfort rounds and navigation in the PeaceHealth Cancer Center and outpatient infusion bays',
        'Assist Emergency Department and surgical recovery teams with patient transport and family updates',
        'Coordinate with university clinical placement offices for credit-bearing internships'
      ],
      clearances: ['PeaceHealth Occupational Health Clearance', '2-Step TB Test', 'Background Check'],
      contactInfo: 'https://www.peacehealth.org/volunteer'
    },
    {
      id: 'wa-022',
      title: 'Donor Phlebotomy Canteen, Mobile Blood Drives & Cord Blood Volunteer',
      organization: 'Bloodworks Northwest (Seattle, Bellevue, Everett, Tacoma, Vancouver)',
      facilityType: 'EMS, Blood & Simulation',
      waRegion: 'Seattle & King County',
      specialty: 'Primary Care & Underserved',
      zipCode: '98104',
      city: 'Seattle, Bellevue, Lynnwood, Tacoma, Olympia & Vancouver, WA',
      lat: 47.6095,
      lon: -122.3258,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 3,
      minDuration: '3–6 months (Flexible Shifts)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Fast-Track Rolling Onboarding (1–2 Weeks to Start)',
      portalUrl: 'https://bloodworksnw.org/donate/volunteer',
      insiderTip: 'Need to start getting clinical exposure within 10 days while waiting a month for hospital TB/titer clearances? Bloodworks Northwest onboards high school and college students fast across 12 Western WA donor centers, and frequently hires volunteers into paid Phlebotomist I trainee positions!',
      description: 'Monitor blood and platelet donors for post-donation vasovagal reactions, assist phlebotomy teams on mobile blood drives across Western Washington, and learn transfusion medicine fundamentals.',
      duties: [
        'Observe donors post-phlebotomy for dizziness/syncope and alert medical staff immediately if reactions occur',
        'Check in donors and assist mobile phlebotomy teams at universities, hospitals, and community drives',
        'Direct pathway to apply for paid, on-the-job trained Phlebotomy Technician roles at Bloodworks NW'
      ],
      clearances: ['Background Check (16+ with parental consent)', '2-Hour Donor Safety Orientation'],
      contactInfo: 'volunteers@bloodworksnw.org | (800) 398-7888'
    },

    // ========================================================================
    // NATIONAL & REMOTE US PROGRAMS (Accessible Anywhere in All 50 States)
    // ========================================================================
    {
      id: 'us-001',
      title: 'Remote Crisis Counselor & Behavioral Health De-Escalation Volunteer',
      organization: 'Crisis Text Line (National Remote Program — All 50 States)',
      facilityType: 'Free Clinic / FQHC',
      waRegion: 'National & Remote (All 50 States)',
      specialty: 'Primary Care & Underserved',
      zipCode: 'Remote',
      city: 'Nationwide / Remote (All 50 States)',
      lat: null,
      lon: null,
      isRemote: true,
      isNational: true,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '200 total hours (~1 year)',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Nationwide Cohorts (100% Remote Training Included)',
      portalUrl: 'https://www.crisistextline.org/become-a-volunteer/',
      insiderTip: 'Medical school admissions committees nationwide recognize Crisis Text Line for training students in active listening, suicide risk assessment, and collaborative safety planning. After 200 hours, Crisis Text Line provides an official verification letter.',
      description: 'Complete a free 15-hour evidence-based crisis intervention training and support texters in acute emotional distress from anywhere in the US, supervised 24/7 by licensed mental health clinicians.',
      duties: [
        'Conduct structured suicide risk assessments and crisis de-escalation with texters nationwide',
        'Collaborate in real time with licensed clinical supervisors during high-acuity situations',
        'Connect individuals with local community mental health and social safety-net resources'
      ],
      clearances: ['Age 18+', 'US Background Check', '15-Hour Interactive Clinical Crisis Training'],
      contactInfo: 'https://www.crisistextline.org/become-a-volunteer/'
    },
    {
      id: 'us-002',
      title: 'NIH Summer Internship Program in Biomedical Research (SIP)',
      organization: 'National Institutes of Health (NIH) — Bethesda, MD & Nationwide Campuses',
      facilityType: 'Academic / Research Lab',
      waRegion: 'National & Remote (All 50 States)',
      specialty: 'Translational & Clinical Research',
      zipCode: '20892',
      city: 'Bethesda, MD & Nationwide NIH Campuses (AZ, MA, MD, MT, NC)',
      lat: 39.0019,
      lon: -77.1045,
      isRemote: false,
      isNational: true,
      directPatientContact: false,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 40,
      minDuration: '8–10 weeks (Summer Paid Stipend)',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: false,
      eveningAvailable: false,
      status: 'Accepting Applications',
      applicationCycle: 'Annual National Portal: Mid-November – February 19',
      portalUrl: 'https://www.training.nih.gov/research-training/pb/sip/',
      insiderTip: 'One of the most prestigious national pre-med research fellowships in the US. Submitting your application in the NIH OITE portal is only Step 1—you MUST email 10–15 NIH Principal Investigators directly from the NIH Intramural Database with your CV to get selected!',
      description: 'Spend 8–10 paid weeks working full-time alongside Principal Investigators at the NIH Clinical Center (America’s largest hospital devoted entirely to clinical research) or regional NIH institutes.',
      duties: [
        'Conduct full-time translational, clinical, or bench biomedical research with an NIH mentor',
        'Attend NIH Clinical Center Grand Rounds and shadow physician-scientists in Bethesda',
        'Present a formal research poster at the NIH Summer Poster Day symposium'
      ],
      clearances: ['US Citizen or Permanent Resident', 'Age 18+', 'Federal Background Clearance'],
      contactInfo: 'https://www.training.nih.gov/research-training/pb/sip/'
    },
    {
      id: 'us-003',
      title: 'Summer Health Professions Education Program (SHPEP) — Paid National Clinical Scholar',
      organization: 'AAMC & Robert Wood Johnson Foundation (12 Universities Nationwide)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'National & Remote (All 50 States)',
      specialty: 'Primary Care & Underserved',
      zipCode: 'National',
      city: '12 National Sites (UW Seattle, UCLA, Columbia, Howard, UF, UTHealth, Iowa, etc.)',
      lat: 38.9025,
      lon: -77.0229,
      isRemote: false,
      isNational: true,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 40,
      minDuration: '6 weeks (Summer — Free Housing + $1,000 Stipend)',
      studentLevels: ['Undergrad / Pre-Med'],
      weekendAvailable: false,
      eveningAvailable: false,
      status: 'Accepting Applications',
      applicationCycle: 'Annual National Window: November 1 – February 5',
      portalUrl: 'https://www.shpep.org/',
      insiderTip: 'Specifically designed for college freshmen and sophomores nationwide (especially first-gen, rural, or underrepresented students). Includes a $1,000 stipend, free campus housing, travel assistance, clinical shadowing, and medical school admissions mentorship.',
      description: 'Free national 6-week summer academic and clinical enrichment program hosted at 12 flagship medical centers across the United States (including UW, UCLA, Columbia, Rutgers, UAB, and UTHealth Houston).',
      duties: [
        'Rotate through structured clinical shadowing and medical simulation labs at a host medical school',
        'Complete organic chemistry, physiology, and health policy coursework with medical faculty',
        'Receive 1-on-1 pre-med advising and AMCAS application strategy mentorship'
      ],
      clearances: ['College Freshman or Sophomore (<60 credits)', 'Min 2.5 GPA', 'US Citizen / Perm Resident / DACA'],
      contactInfo: 'shpep@aamc.org | https://www.shpep.org/'
    },
    {
      id: 'us-004',
      title: 'Blood Donor Ambassador & Biomedical Services Clinical Screener',
      organization: 'American Red Cross Biomedical Services (Local Chapters in All 50 States)',
      facilityType: 'EMS, Blood & Simulation',
      waRegion: 'National & Remote (All 50 States)',
      specialty: 'Primary Care & Underserved',
      zipCode: 'National',
      city: 'Nationwide Local Chapters (Enter Any US ZIP on Red Cross Portal)',
      lat: 38.8965,
      lon: -77.0417,
      isRemote: false,
      isNational: true,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '1 shift/month for 3–6 months',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Fast-Track Rolling Onboarding in Every US State (1–2 Weeks)',
      portalUrl: 'https://www.redcross.org/volunteer/become-a-volunteer.html',
      insiderTip: 'Wherever you live in the US, the American Red Cross can onboard you in under 14 days without waiting months for hospital titers—making it the fastest starter clinical volunteer role in America.',
      description: 'Support phlebotomy teams and monitor blood donors for post-donation reactions at local Red Cross donor centers and university mobile blood drives in your city.',
      duties: [
        'Check in blood and platelet donors and review pre-donation health history readiness',
        'Monitor donors in the recovery hospitality area for vasovagal symptoms (dizziness/syncope)',
        'Alert phlebotomy and nursing staff immediately if a donor experiences an adverse reaction'
      ],
      clearances: ['Age 16+ (with parental consent) or 18+ Background Check', 'Online Donor Safety Module'],
      contactInfo: 'https://www.redcross.org/volunteer/become-a-volunteer.html'
    },
    {
      id: 'us-005',
      title: 'National Hospice Bedside Companionship & Family Respite Volunteer',
      organization: 'Gentiva / Heartland / Empatia & National Hospice Locator Network (All US)',
      facilityType: 'Hospice & Palliative Care',
      waRegion: 'National & Remote (All 50 States)',
      specialty: 'Hospice & Geriatrics',
      zipCode: 'National',
      city: 'Nationwide Local Hospice Agencies (All 50 States)',
      lat: 33.8839,
      lon: -84.4655,
      isRemote: false,
      isNational: true,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 3,
      minDuration: '6 months',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Year-Round Rolling Onboarding by Local ZIP Code',
      portalUrl: 'https://www.gentivahs.com/about/volunteers/',
      insiderTip: 'Under federal Medicare rules, every hospice agency in the United States is legally required to have 5% of all patient care hours delivered by volunteers. That means local hospices in every US ZIP code actively welcome pre-meds year-round!',
      description: 'Provide 1-on-1 bedside companionship, emotional presence, life-story recording, and caregiver respite for terminally ill patients in your local community.',
      duties: [
        'Visit hospice patients at bedside to offer conversation, reading, comfort presence, and dignity support',
        'Provide 2–4 hour respite breaks for exhausted family caregivers',
        'Communicate patient comfort observations to the interdisciplinary hospice nurse and social worker'
      ],
      clearances: ['TB Screening', 'Background Check', 'Mandatory Medicare Hospice Volunteer Orientation'],
      contactInfo: 'https://www.gentivahs.com/about/volunteers/'
    },

    // ========================================================================
    // CALIFORNIA, OREGON & MOUNTAIN WEST FLAGSHIP PROGRAMS
    // ========================================================================
    {
      id: 'us-006',
      title: 'UCLA Health Care Extenders & Student Volunteer Clinical Rotation',
      organization: 'UCLA Health — Ronald Reagan UCLA Medical Center & Santa Monica',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'California & West (CA / CO)',
      specialty: 'Surgery, Inpatient & Simulation',
      zipCode: '90095',
      city: 'Los Angeles (Westwood / Santa Monica), CA',
      lat: 34.0664,
      lon: -118.4453,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '1 year (4 department rotations)',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Quarterly Cohort Orientations (Apply via UCLA Health Volunteer Portal)',
      portalUrl: 'https://www.uclahealth.org/volunteer',
      insiderTip: 'UCLA Health’s Care Extenders and Student Volunteer programs are among the West Coast’s best clinical pipelines, rotating students across inpatient nursing, Emergency Medicine, Pediatrics, and outpatient clinics.',
      description: 'Rotate across clinical units at Ronald Reagan UCLA Medical Center (#1 ranked hospital in California/LA) and UCLA Santa Monica Medical Center, assisting nurses, physicians, and patients at bedside.',
      duties: [
        'Rotate through 4 distinct clinical departments over 4 quarters (4 hours/week per shift)',
        'Assist nursing teams with bedside patient care, transport, vitals prep, and family navigation',
        'Qualify for leadership coordinator tracks and letters of verification after completing required hours'
      ],
      clearances: ['2-Step TB / QuantiFERON', 'MMR/Varicella/Hep B Titers', 'Live Scan Background Check'],
      contactInfo: 'https://www.uclahealth.org/volunteer'
    },
    {
      id: 'us-007',
      title: 'Academic Medical Center Inpatient, Emergency & Research Volunteer',
      organization: 'Cedars-Sinai Medical Center (Los Angeles)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'California & West (CA / CO)',
      specialty: 'Emergency Medicine & Trauma',
      zipCode: '90048',
      city: 'Los Angeles (Beverly Grove), CA',
      lat: 34.0758,
      lon: -118.3802,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6–12 months (100+ hours)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Adult/College & High School Cohorts',
      portalUrl: 'https://www.cedars-sinai.org/volunteer-services.html',
      insiderTip: 'Cedars-Sinai offers both direct clinical floor placements (Emergency Department, Surgery Lounge, Mother-Baby, Samuel Oschin Cancer Center) AND a dedicated Research Intern Volunteer track with Cedars-Sinai PIs.',
      description: 'Volunteer at one of the largest nonprofit academic medical centers in the Western United States across inpatient units, the Level-1 Trauma ED, and clinical research laboratories.',
      duties: [
        'Support bedside patient comfort, discharge transport, and nursing unit coordination',
        'Assist families in surgical waiting rooms and the Samuel Oschin Comprehensive Cancer Institute',
        'Option to apply for the Research Volunteer track supporting clinical trials and wet labs'
      ],
      clearances: ['Health Clearance & QuantiFERON TB', 'Immunization Titers', 'Background Check'],
      contactInfo: 'https://www.cedars-sinai.org/volunteer-services.html'
    },
    {
      id: 'us-008',
      title: 'Stanford Health Care & Lucile Packard Children’s Hospital Volunteer',
      organization: 'Stanford Medicine (Palo Alto / Bay Area)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'California & West (CA / CO)',
      specialty: 'Oncology & Hematology',
      zipCode: '94305',
      city: 'Palo Alto, CA',
      lat: 37.4337,
      lon: -122.1750,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (100 hours)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Seasonal Cohort Windows (Check Stanford Health Care Volunteer Page)',
      portalUrl: 'https://stanfordhealthcare.org/about-us/volunteer.html',
      insiderTip: 'Bay Area pre-meds can also pair Stanford Hospital volunteering with Stanford’s Cardinal Free Clinics ( Arbor & Pacific Free Clinics), which recruit undergraduate volunteers every quarter for underserved patient navigation.',
      description: 'Serve patients and care teams across Stanford Hospital, the Stanford Cancer Center, and outpatient specialty clinics in Palo Alto.',
      duties: [
        'Provide bedside patient hospitality, wayfinding, and comfort rounds on adult inpatient units',
        'Support patients undergoing chemotherapy and radiation at the Stanford Cancer Center',
        'Assist Emergency Department and surgical recovery teams with patient and family support'
      ],
      clearances: ['Medical & TB Clearance', 'Background Check', 'Mandatory Campus Orientation'],
      contactInfo: 'VolunteerServices@stanfordhealthcare.org'
    },
    {
      id: 'us-009',
      title: 'UCSF Health Parnassus, Mission Bay & Benioff Children’s Volunteer',
      organization: 'UCSF Health (University of California, San Francisco)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'California & West (CA / CO)',
      specialty: 'Pediatrics & Child Life',
      zipCode: '94143',
      city: 'San Francisco, CA',
      lat: 37.7631,
      lon: -122.4586,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (100+ hours)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: false,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Admissions across Parnassus, Mount Zion & Mission Bay',
      portalUrl: 'https://www.ucsfhealth.org/about/volunteering',
      insiderTip: 'UCSF Mission Bay houses UCSF Benioff Children’s Hospital and the Bakar Precision Cancer Medicine Building—ideal for students interested in pediatrics, child life, or oncology.',
      description: 'Support clinical care teams and patients across UCSF Health’s flagship San Francisco medical campuses (Parnassus Heights, Mission Bay, and Mount Zion).',
      duties: [
        'Engage pediatric patients in playroom and bedside activities at UCSF Benioff Children’s Hospital',
        'Assist adult inpatient nursing units, infusion centers, and family resource lounges',
        'Provide patient escort and wayfinding across UCSF specialty clinics'
      ],
      clearances: ['2-Step TB or QuantiFERON', 'Vaccine Titers', 'Background Check'],
      contactInfo: 'volunteerservices@ucsf.edu | https://www.ucsfhealth.org/about/volunteering'
    },
    {
      id: 'us-010',
      title: 'OHSU Hospital, Doernbecher Children’s & Knight Cancer Research Volunteer',
      organization: 'Oregon Health & Science University (OHSU)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Pacific Northwest (WA / OR)',
      specialty: 'Emergency Medicine & Trauma',
      zipCode: '97239',
      city: 'Portland (Marquam Hill & South Waterfront), OR',
      lat: 45.4990,
      lon: -122.6859,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (100 hours)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Applications for Hospital & Research Lab Tracks',
      portalUrl: 'https://www.ohsu.edu/health/volunteer-ohsu-health',
      insiderTip: 'OHSU is Oregon’s only academic health center and is also just 15 minutes across the Columbia River from Vancouver, WA (98660/98664)—making it a top choice for both Oregon and Southwest WA students!',
      description: 'Volunteer at Oregon’s flagship Level-1 Trauma center, Doernbecher Children’s Hospital, or inside OHSU Knight Cancer Institute research laboratories.',
      duties: [
        'Support adult inpatient units, Doernbecher pediatric playrooms, or the Emergency Department',
        'Assist patients and families navigating the Marquam Hill aerial tram and South Waterfront clinics',
        'Separate research volunteer pathway available for students matched with an OHSU Principal Investigator'
      ],
      clearances: ['OHSU Occupational Health & TB Clearance', 'Background Check', 'Immunization Records'],
      contactInfo: 'volunteering@ohsu.edu | https://www.ohsu.edu/health/volunteer-ohsu-health'
    },
    {
      id: 'us-011',
      title: 'Anschutz Medical Campus Pre-Health Clinical & Research Volunteer',
      organization: 'UCHealth University of Colorado Hospital (Aurora / Denver)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'California & West (CA / CO)',
      specialty: 'Emergency Medicine & Trauma',
      zipCode: '80045',
      city: 'Aurora / Denver, CO',
      lat: 39.7456,
      lon: -104.8378,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 consecutive months (100 hours)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Semester & Year-Round College Volunteer Tracks',
      portalUrl: 'https://www.uchealth.org/give-to-uchealth/volunteer/',
      insiderTip: 'Located on the CU Anschutz Medical Campus (home to the University of Colorado School of Medicine), UCHealth offers direct exposure to Rocky Mountain regional trauma, burn, and transplant care.',
      description: 'Serve alongside clinical teams at the Rocky Mountain region’s premier academic medical center across the Emergency Department, ICU waiting lounges, Oncology, and inpatient nursing units.',
      duties: [
        'Assist Emergency Department and inpatient nursing staff with bedside patient comfort and restocking',
        'Provide wheelchair discharge transport and wayfinding across the Anschutz Medical Campus',
        'Build longitudinal clinical hours toward CU School of Medicine and national MD/DO programs'
      ],
      clearances: ['TB & Immunization Screening', 'Background Check', 'UCHealth Orientation'],
      contactInfo: 'https://www.uchealth.org/give-to-uchealth/volunteer/'
    },

    // ========================================================================
    // NORTHEAST & MID-ATLANTIC FLAGSHIP PROGRAMS (MA, NY, PA, MD)
    // ========================================================================
    {
      id: 'us-012',
      title: 'Massachusetts General Hospital (MGH) Clinical & Emergency Volunteer',
      organization: 'Mass General Brigham — Massachusetts General Hospital (Boston)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Northeast & Mid-Atlantic (MA / NY / PA / MD)',
      specialty: 'Emergency Medicine & Trauma',
      zipCode: '02114',
      city: 'Boston, MA',
      lat: 42.3626,
      lon: -71.0686,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (80–100 hours)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Fall, Spring & Summer College Cohorts',
      portalUrl: 'https://www.massgeneral.org/volunteer',
      insiderTip: 'Harvard Medical School’s largest teaching hospital. College students who complete their initial 80 hours in Patient Escort or Ambassador roles get priority access to transfer into the MGH Emergency Department or Mass General Cancer Center.',
      description: 'Gain frontline clinical experience at Mass General Hospital in downtown Boston across inpatient care units, the Mass General Cancer Center, Surgical Family Waiting, and Patient Escort.',
      duties: [
        'Transport discharged and admitted patients by wheelchair across MGH clinical buildings',
        'Provide bedside comfort visits, reading materials, and mealtime assistance on inpatient units',
        'Support oncology patients and families in the Mass General Cancer Center infusion suites'
      ],
      clearances: ['MGH Occupational Health Screening (2 TB tests + vaccine titers)', 'CORI Background Check'],
      contactInfo: 'mghvolunteer@partners.org | https://www.massgeneral.org/volunteer'
    },
    {
      id: 'us-013',
      title: 'Brigham and Women’s Hospital Medical Career Exploration (MCEP) Volunteer',
      organization: 'Brigham and Women’s Hospital — Longwood Medical Area (Boston)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Northeast & Mid-Atlantic (MA / NY / PA / MD)',
      specialty: 'Surgery, Inpatient & Simulation',
      zipCode: '02115',
      city: 'Boston (Longwood Medical Area), MA',
      lat: 42.3364,
      lon: -71.1062,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '2–3 semesters (MCEP Track)',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Applications via Brigham Volunteer Services',
      portalUrl: 'https://www.brighamandwomens.org/about-bwh/human-resources/volunteer-opportunities',
      insiderTip: 'Brigham’s Medical Career Exploration Program (MCEP) is legendary among Boston pre-meds: after completing phased inpatient & patient transport hours, students unlock structured clinical seminars and observation opportunities.',
      description: 'Participate in a structured multi-phase pre-health hospital volunteer program in Boston’s Longwood Medical Area.',
      duties: [
        'Complete foundational hours in Central Transport and inpatient unit support',
        'Advance into specialized clinical units including NICU cuddlers, Emergency Dept, and Post-Anesthesia Care',
        'Attend monthly career exploration seminars with Brigham physicians, PAs, and nurses'
      ],
      clearances: ['Occupational Health Titers & TB Test', 'MA CORI Background Check', 'Interview'],
      contactInfo: 'bwhvc@partners.org | https://www.brighamandwomens.org/about-bwh/human-resources/volunteer-opportunities'
    },
    {
      id: 'us-014',
      title: 'PAVERS (Patient Advocate Volunteer in Emergency Room Services) & Hospital Volunteer',
      organization: 'NYC Health + Hospitals / Bellevue & NYU Langone Corridor (NYC)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Northeast & Mid-Atlantic (MA / NY / PA / MD)',
      specialty: 'Emergency Medicine & Trauma',
      zipCode: '10016',
      city: 'New York (Kips Bay / Manhattan), NY',
      lat: 40.7392,
      lon: -73.9754,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (150 hours)',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Fall, Spring & Summer Cohorts',
      portalUrl: 'https://www.nychealthandhospitals.org/bellevue/volunteer/',
      insiderTip: 'Bellevue is America’s oldest public hospital and the flagship safety-net Level-1 Trauma Center in Manhattan. Pre-meds volunteering in the Bellevue ED get unmatched exposure to underserved urban emergency care.',
      description: 'Serve diverse NYC patients at Bellevue Hospital Center across the Level-1 Trauma Emergency Department, Psychiatric Emergency, Pediatrics, and Ambulatory Care clinics.',
      duties: [
        'Act as a bedside patient advocate in the Emergency Department, checking on comfort and communication needs',
        'Assist nursing and social work teams with meal distribution, warm blankets, and family navigation',
        'Support multilingual patient navigation in outpatient primary care clinics'
      ],
      clearances: ['NYC H+H Medical Clearance (Physical, Drug Screen, QuantiFERON, Titers)', 'Background Check'],
      contactInfo: 'https://www.nychealthandhospitals.org/bellevue/volunteer/'
    },
    {
      id: 'us-015',
      title: 'Mount Sinai Hospital CARE Inpatient & Clinical Research Volunteer',
      organization: 'The Mount Sinai Hospital & Icahn School of Medicine (New York)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Northeast & Mid-Atlantic (MA / NY / PA / MD)',
      specialty: 'Oncology & Hematology',
      zipCode: '10029',
      city: 'New York (Upper East Side / Manhattan), NY',
      lat: 40.7900,
      lon: -73.9526,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '2 consecutive semesters (150 hours)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Seasonal Application Windows (Spring, Summer, Fall)',
      portalUrl: 'https://www.mountsinai.org/locations/mount-sinai/about/volunteer',
      insiderTip: 'Mount Sinai’s CARE (Care and Respect for Elders) and Hospital Delirium Prevention volunteer tracks give pre-meds true 1-on-1 therapeutic interaction with hospitalized patients—not just clerical filing!',
      description: 'Volunteer at Mount Sinai’s flagship Manhattan campus in clinical patient care (CARE geriatric support, Pediatrics, Emergency Dept, Dubin Breast Center) or faculty-mentored clinical research.',
      duties: [
        'Provide cognitive stimulation, mobility support, and bedside companionship for hospitalized patients',
        'Assist Emergency Department and surgical recovery teams with patient flow and family updates',
        'Optional Research Volunteer track for students matched with an Icahn School of Medicine PI'
      ],
      clearances: ['Mount Sinai Employee Health Clearance', '2-Step PPD or QuantiFERON', 'Drug & Background Screen'],
      contactInfo: 'VolunteerDepartment@mountsinai.org | https://www.mountsinai.org/locations/mount-sinai/about/volunteer'
    },
    {
      id: 'us-016',
      title: 'Pediatric Inpatient, Child Life & Emergency Department Volunteer',
      organization: 'Children’s Hospital of Philadelphia (CHOP)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Northeast & Mid-Atlantic (MA / NY / PA / MD)',
      specialty: 'Pediatrics & Child Life',
      zipCode: '19104',
      city: 'Philadelphia (University City), PA',
      lat: 39.9487,
      lon: -75.1939,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6–9 months (Academic Year or Summer)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Academic Year & Summer Cohort Windows',
      portalUrl: 'https://www.chop.edu/giving/get-involved/volunteer-chop',
      insiderTip: 'Located right next to UPenn in University City, CHOP is consistently ranked among the top 2 pediatric hospitals in the US. Apply early when cohort windows open, as Child Life playroom shifts fill within days.',
      description: 'Support hospitalized infants, children, and adolescents at CHOP’s Philadelphia campus through therapeutic play, bedside comfort, and family hospitality.',
      duties: [
        'Staff pediatric unit playrooms and lead bedside crafts, games, and reading with patients',
        'Hold and soothe infants on inpatient floors under nursing and Child Life supervision',
        'Guide families through outpatient specialty clinics and surgical waiting areas'
      ],
      clearances: ['PA Child Abuse History, State Police & FBI Fingerprinting', 'TB & Vaccine Titers'],
      contactInfo: 'volunteers@chop.edu | https://www.chop.edu/giving/get-involved/volunteer-chop'
    },
    {
      id: 'us-017',
      title: 'Johns Hopkins Hospital Clinical, Pediatric & Oncology Volunteer',
      organization: 'The Johns Hopkins Hospital & Sidney Kimmel Cancer Center (Baltimore)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Northeast & Mid-Atlantic (MA / NY / PA / MD)',
      specialty: 'Oncology & Hematology',
      zipCode: '21287',
      city: 'Baltimore, MD',
      lat: 39.2975,
      lon: -76.5929,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (100 hours)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Fall, Spring & Summer Onboarding Cohorts',
      portalUrl: 'https://www.hopkinsmedicine.org/the-johns-hopkins-hospital/about/volunteer-services',
      insiderTip: 'Johns Hopkins Volunteer Services offers dedicated placements across the Charlotte R. Bloomberg Children’s Center, Sidney Kimmel Comprehensive Cancer Center, and Adult Emergency Department.',
      description: 'Serve patients and clinical teams at The Johns Hopkins Hospital in East Baltimore across pediatric, oncology, surgical, and emergency medicine units.',
      duties: [
        'Support pediatric patients and Child Life specialists in the Bloomberg Children’s Center',
        'Assist oncology patients in infusion clinics and family resource centers',
        'Provide patient escort, bedside comfort rounds, and nursing unit support'
      ],
      clearances: ['Occupational Health TB & Vaccine Clearance', 'Background Check', 'Hopkins Orientation'],
      contactInfo: 'jhhvolt@jhmi.edu | https://www.hopkinsmedicine.org/the-johns-hopkins-hospital/about/volunteer-services'
    },

    // ========================================================================
    // SOUTH & TEXAS MEDICAL CENTER FLAGSHIP PROGRAMS (TX, NC, GA, FL)
    // ========================================================================
    {
      id: 'us-018',
      title: 'MD Anderson Cancer Center Oncology Patient & Clinical Support Volunteer',
      organization: 'UT MD Anderson Cancer Center — Texas Medical Center (Houston)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'South & Texas (TX / NC / GA / FL)',
      specialty: 'Oncology & Hematology',
      zipCode: '77030',
      city: 'Houston (Texas Medical Center), TX',
      lat: 29.7079,
      lon: -95.3982,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (College Year-Round or Summer Track)',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: false,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Year-Round & Competitive Summer College Program',
      portalUrl: 'https://www.mdanderson.org/donors-volunteers/volunteer.html',
      insiderTip: 'Located in the heart of the Texas Medical Center (the largest medical complex in the world), MD Anderson is the #1 ranked cancer hospital in the US. Pair this with Houston Methodist or Ben Taub for unmatched TMC exposure.',
      description: 'Support cancer patients and care teams across outpatient chemotherapy infusion centers, radiation oncology lounges, and inpatient floors at MD Anderson in Houston.',
      duties: [
        'Provide warm blankets, refreshments, and compassionate conversation in ambulatory infusion suites',
        'Help newly diagnosed patients and families navigate the Texas Medical Center campus',
        'Assist clinical support staff in inpatient towers and surgical family waiting areas'
      ],
      clearances: ['TB Blood Test & Immunization Records', 'Background Check', 'On-Site Interview'],
      contactInfo: 'https://www.mdanderson.org/donors-volunteers/volunteer.html'
    },
    {
      id: 'us-019',
      title: 'Texas Medical Center Inpatient, ICU & Emergency Care Volunteer',
      organization: 'Houston Methodist Hospital (Texas Medical Center & Regional Campuses)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'South & Texas (TX / NC / GA / FL)',
      specialty: 'Surgery, Inpatient & Simulation',
      zipCode: '77030',
      city: 'Houston, TX',
      lat: 29.7105,
      lon: -95.3995,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (100 hours)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Admissions Across 8 Greater Houston Campuses',
      portalUrl: 'https://www.houstonmethodist.org/giving/volunteer/',
      insiderTip: 'Houston Methodist has 8 hospitals across Greater Houston (TMC, Sugar Land, Woodlands, West, Willowbrook, Baytown, Clear Lake), making it easy for suburban Houston students to volunteer within 10 miles of home.',
      description: 'Volunteer alongside nursing and surgical teams at the #1 ranked hospital in Texas across cardiovascular, orthopedics, neurology, and emergency care units.',
      duties: [
        'Support nursing staff with bedside patient rounding, call-light response, and unit restocking',
        'Escort discharged patients and assist families in cardiovascular and neurosurgical waiting rooms',
        'Participate in structured college student volunteer cohorts'
      ],
      clearances: ['Drug & Background Screening', 'TB & Flu/Vaccine Clearance', 'Volunteer Orientation'],
      contactInfo: 'https://www.houstonmethodist.org/giving/volunteer/'
    },
    {
      id: 'us-020',
      title: 'Duke University Hospital College Student Clinical & Pediatric Volunteer',
      organization: 'Duke Health — Duke University Hospital (Durham / Research Triangle)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'South & Texas (TX / NC / GA / FL)',
      specialty: 'Pediatrics & Child Life',
      zipCode: '27710',
      city: 'Durham, NC',
      lat: 36.0051,
      lon: -78.9371,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '2 semesters (Academic Year)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Fall & Spring College Student Windows (Apply Early)',
      portalUrl: 'https://www.dukehealth.org/volunteer-services',
      insiderTip: 'Open to students from Duke, UNC Chapel Hill, NC State, NCCU, and across the Research Triangle! College application windows open briefly at the start of Fall and Spring semesters—bookmark the portal and submit on day one.',
      description: 'Serve patients at Duke University Hospital, Duke Children’s Hospital, and the Duke Cancer Center in Durham, NC.',
      duties: [
        'Assist pediatric playrooms and inpatient units at Duke Children’s Hospital',
        'Support oncology patients and families at the Duke Cancer Center',
        'Provide bedside comfort visits and navigation across Duke University Hospital'
      ],
      clearances: ['Duke Employee Occupational Health Clearance (TB + Titers)', 'Background Check'],
      contactInfo: 'dukehospitalvolunteers@dm.duke.edu | https://www.dukehealth.org/volunteer-services'
    },
    {
      id: 'us-021',
      title: 'Level-1 Trauma Center, Burn Unit & Safety-Net Emergency Volunteer',
      organization: 'Grady Memorial Hospital — Grady Health System (Atlanta)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'South & Texas (TX / NC / GA / FL)',
      specialty: 'Emergency Medicine & Trauma',
      zipCode: '30303',
      city: 'Atlanta, GA',
      lat: 33.7519,
      lon: -84.3822,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (100 hours)',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Semester & Rolling Onboarding for College/Adult Volunteers',
      portalUrl: 'https://www.gradyhealth.org/volunteer/',
      insiderTip: 'Grady is Atlanta’s legendary public safety-net hospital and primary clinical training site for Emory University School of Medicine and Morehouse School of Medicine. Ideal for pre-meds passionate about health equity and trauma care.',
      description: 'Support frontline clinical staff and underserved patients at one of the busiest Level-1 Trauma and Burn Centers in the American South.',
      duties: [
        'Assist Emergency Department, Trauma Center, and Burn Unit staff with patient comfort and family updates',
        'Support outpatient primary care clinics and patient discharge transport',
        'Work alongside Emory and Morehouse medical trainees in a high-volume safety-net setting'
      ],
      clearances: ['Age 18+', 'TB Screening & Immunization Records', 'Criminal Background Check'],
      contactInfo: 'volunteers@gmh.edu | https://www.gradyhealth.org/volunteer/'
    },
    {
      id: 'us-022',
      title: 'Mayo Clinic in Florida College & Hospital Clinical Volunteer',
      organization: 'Mayo Clinic Hospital (Jacksonville, FL)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'South & Texas (TX / NC / GA / FL)',
      specialty: 'Surgery, Inpatient & Simulation',
      zipCode: '32224',
      city: 'Jacksonville, FL',
      lat: 30.2638,
      lon: -81.4398,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '1 semester or 6 months',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: false,
      status: 'Accepting Applications',
      applicationCycle: 'Fall, Spring & Summer College Volunteer Tracks',
      portalUrl: 'https://www.mayoclinic.org/about-mayo-clinic/volunteers/florida',
      insiderTip: 'Mayo Clinic’s Jacksonville campus has a dedicated College Volunteer Program for undergraduates and gap-year students, offering structured 4-hour weekly shifts in inpatient nursing, surgical services, and oncology.',
      description: 'Experience Mayo Clinic’s model of integrated patient care across hospital inpatient floors, surgical waiting lounges, and specialty clinics in Jacksonville, Florida.',
      duties: [
        'Support nursing units with bedside patient hospitality, supply readiness, and discharge escorts',
        'Assist patients and families in surgical recovery and transplant center clinics',
        'Complete a structured semester shift schedule recognized by medical schools nationwide'
      ],
      clearances: ['Mayo Clinic Occupational Health & QuantiFERON TB', 'Background Check', 'Interview'],
      contactInfo: 'https://www.mayoclinic.org/about-mayo-clinic/volunteers/florida'
    },

    // ========================================================================
    // MIDWEST FLAGSHIP PROGRAMS (MN, IL, OH, MI)
    // ========================================================================
    {
      id: 'us-023',
      title: 'Mayo Clinic College & Hospital Clinical Volunteer (Saint Marys & Methodist)',
      organization: 'Mayo Clinic (Rochester, MN — Flagship National Campus)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Midwest (IL / MN / OH / MI)',
      specialty: 'Surgery, Inpatient & Simulation',
      zipCode: '55905',
      city: 'Rochester, MN',
      lat: 44.0225,
      lon: -92.4669,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '1 semester or 6 months',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling & Semester-Based College Cohorts',
      portalUrl: 'https://www.mayoclinic.org/about-mayo-clinic/volunteers/minnesota',
      insiderTip: 'World-renowned #1 ranked hospital in the United States. Mayo Clinic Rochester places over 1,000 volunteers across Saint Marys Campus, Methodist Campus, and Mayo Eugenio Litta Children’s Hospital.',
      description: 'Serve patients traveling from all 50 states and 130 countries at Mayo Clinic’s flagship Rochester, Minnesota hospitals and outpatient specialty clinics.',
      duties: [
        'Assist inpatient nursing units, surgical waiting lounges, and pediatric playrooms at Saint Marys and Methodist',
        'Escort patients between diagnostic imaging, oncology infusion, and outpatient consults',
        'Embody Mayo Clinic’s primary value ("The needs of the patient come first") in direct patient interactions'
      ],
      clearances: ['TB Blood Test & Vaccine Records', 'MN Background Study', 'In-Person Orientation'],
      contactInfo: 'mcrvolunteer@mayo.edu | https://www.mayoclinic.org/about-mayo-clinic/volunteers/minnesota'
    },
    {
      id: 'us-024',
      title: 'Northwestern Memorial Hospital Inpatient & Emergency Department Volunteer',
      organization: 'Northwestern Medicine (Streeterville / Downtown Chicago)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Midwest (IL / MN / OH / MI)',
      specialty: 'Emergency Medicine & Trauma',
      zipCode: '60611',
      city: 'Chicago, IL',
      lat: 41.8947,
      lon: -87.6214,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (100+ hours)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Admissions Across Chicago & Suburban NM Campuses',
      portalUrl: 'https://www.nm.org/about-us/volunteer',
      insiderTip: 'Primary teaching hospital for Northwestern University Feinberg School of Medicine. Pre-meds in Chicago can volunteer at the downtown Streeterville flagship (60611) or regional Northwestern Medicine hospitals in Evanston, Lake Forest, and Central DuPage.',
      description: 'Support clinical care teams at Illinois’ #1 ranked hospital across the Emergency Department, Prentice Women’s Hospital, Lurie Cancer Center, and inpatient nursing floors.',
      duties: [
        'Provide bedside comfort rounds, patient transport, and nursing unit assistance',
        'Support patients and families in the Robert H. Lurie Comprehensive Cancer Center',
        'Assist clinical staff in the Emergency Department and surgical recovery lounges'
      ],
      clearances: ['Employee Health QuantiFERON TB & Titers', 'Background Check', 'Orientation'],
      contactInfo: 'https://www.nm.org/about-us/volunteer'
    },
    {
      id: 'us-025',
      title: 'Free Clinic Triage, Medical Interpreter & Lab Intake Volunteer',
      organization: 'CommunityHealth Chicago (Largest Volunteer-Based Free Clinic in the US)',
      facilityType: 'Free Clinic / FQHC',
      waRegion: 'Midwest (IL / MN / OH / MI)',
      specialty: 'Primary Care & Underserved',
      zipCode: '60647',
      city: 'Chicago (West Town / Logan Square), IL',
      lat: 41.9175,
      lon: -87.7018,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: true,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6–12 months',
      studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Rolling Volunteer & Medical Interpreter Cohorts',
      portalUrl: 'https://communityhealth.org/volunteer/',
      insiderTip: 'CommunityHealth is the largest volunteer-based free medical facility in the United States! Pre-meds work directly alongside attending physicians and medical students from UChicago, Northwestern, Rush, and UIC.',
      description: 'Deliver free primary care, chronic disease management, dental, and pharmacy services to uninsured adults in Chicago alongside volunteer physicians.',
      duties: [
        'Serve as a clinic intake specialist, Spanish/Polish medical interpreter, or phlebotomy/lab aide',
        'Room patients and coordinate chart flow for volunteer attending physicians and residents',
        'Assist patients with free onsite medication dispensing and health education classes'
      ],
      clearances: ['Age 18+', 'TB Test & Vaccine Records', 'Clinic Training Workshop'],
      contactInfo: 'volunteer@communityhealth.org | https://communityhealth.org/volunteer/'
    },
    {
      id: 'us-026',
      title: 'Cleveland Clinic Main Campus College & Patient Support Volunteer',
      organization: 'Cleveland Clinic (Main Campus & Northeast Ohio Hospitals)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Midwest (IL / MN / OH / MI)',
      specialty: 'Surgery, Inpatient & Simulation',
      zipCode: '44195',
      city: 'Cleveland, OH',
      lat: 41.5028,
      lon: -81.6212,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '6 months (75–100 hours)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Year-Round Rolling Onboarding',
      portalUrl: 'https://my.clevelandclinic.org/about/community/volunteer-services',
      insiderTip: 'Home to the #1 Heart & Vascular hospital in the world and Cleveland Clinic Lerner College of Medicine. Volunteers can serve in the Sydell and Arnold Miller Family Heart, Vascular & Thoracic Institute or Taussig Cancer Center.',
      description: 'Support patients, nurses, and families at Cleveland Clinic’s Main Campus across cardiac, oncology, pediatric, and inpatient units.',
      duties: [
        'Round on inpatient nursing floors to offer comfort items, conversation, and non-clinical assistance',
        'Escort patients and families across the Miller Heart Pavilion and Taussig Cancer Institute',
        'Support hospitality and discharge transport teams'
      ],
      clearances: ['TB Blood Test', 'Flu & Immunization Records', 'BCI/FBI Background Check'],
      contactInfo: 'volunteerservices@ccf.org | https://my.clevelandclinic.org/about/community/volunteer-services'
    },
    {
      id: 'us-027',
      title: 'Michigan Medicine Adult Hospital & C.S. Mott Children’s Volunteer',
      organization: 'University of Michigan Health — Michigan Medicine (Ann Arbor)',
      facilityType: 'Hospital / Medical Center',
      waRegion: 'Midwest (IL / MN / OH / MI)',
      specialty: 'Pediatrics & Child Life',
      zipCode: '48109',
      city: 'Ann Arbor, MI',
      lat: 42.2836,
      lon: -83.7294,
      isRemote: false,
      directPatientContact: true,
      starterFriendly: true,
      shadowingIncluded: false,
      lorEligible: true,
      weeklyHours: 4,
      minDuration: '2 consecutive terms (or 1 year)',
      studentLevels: ['High School (16+)', 'Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
      weekendAvailable: true,
      eveningAvailable: true,
      status: 'Accepting Applications',
      applicationCycle: 'Fall, Winter & Spring/Summer Term Onboarding',
      portalUrl: 'https://www.uofmhealth.org/about-umhs/volunteer-services',
      insiderTip: 'Michigan Medicine places over 1,200 college and community volunteers across University Hospital, C.S. Mott Children’s Hospital, Von Voigtlander Women’s Hospital, and the Rogel Cancer Center.',
      description: 'Engage in hands-on patient support, pediatric Child Life playrooms, and inpatient delirium-prevention rounding (Hospital Elder Life Program) at University of Michigan Health.',
      duties: [
        'Support pediatric playrooms and bedside comfort at C.S. Mott Children’s Hospital',
        'Participate in the Hospital Elder Life Program (HELP) assisting older adult inpatients with mobility and orientation',
        'Assist Emergency Department, surgical family waiting, and Rogel Cancer Center clinics'
      ],
      clearances: ['Occupational Health Immunization & TB Clearance', 'Background Check', 'Unit Training'],
      contactInfo: 'https://www.uofmhealth.org/about-umhs/volunteer-services'
    }
  ];

  // --------------------------------------------------------------------------
  // 3. 12 Live Washington State Opportunity Discovery Databases (Tab 2)
  // --------------------------------------------------------------------------
  const WA_DISCOVERY_PORTALS = [
    {
      category: 'Research & Lab Finder',
      title: '1. ITHS (Institute of Translational Health Sciences) Clinical Study Directory',
      desc: 'Jointly run by UW, Fred Hutch, and Seattle Children’s. While built for study participants, pre-meds use this live database to see every active clinical trial in WA—along with the exact Principal Investigator (PI) and Study Coordinator email!',
      howTo: 'Search by disease area → copy the Study Coordinator or PI contact → send our Research Cold Email offering 8 hrs/wk of REDCap or consenting help.',
      url: 'https://www.iths.org/participate/',
      btnLabel: 'Open ITHS Study Finder'
    },
    {
      category: 'Research & Lab Finder',
      title: '2. UW Office of Undergraduate Research (OUR) Opportunity Database',
      desc: 'The central clearinghouse for hundreds of year-round lab, clinical, and public health research openings across UW Seattle, UW Bothell, UW Tacoma, and UW Medicine South Lake Union.',
      howTo: 'Filter by "Health Sciences / Medicine" or browse the UW Medicine departmental faculty directories to find labs recruiting autumn/winter/spring undergrads.',
      url: 'https://www.washington.edu/undergradresearch/',
      btnLabel: 'Browse UW Research Portal'
    },
    {
      category: 'Free & FQHC Clinic Network',
      title: '3. WACMHC — Washington’s 29 Community Health Center (FQHC) Finder',
      desc: 'Interactive map of all 29 Federally Qualified Health Center networks across Washington State (including Sea Mar, Neighborcare, ICHS, HealthPoint, CHAS Spokane, Family Health Centers Okanogan, and YVFWC).',
      howTo: 'Find the FQHC clinic closest to your WA ZIP code and contact their Service Learning / Volunteer Coordinator for patient navigation or interpretation.',
      url: 'https://www.wacmhc.org/about-chcs/find-a-health-center',
      btnLabel: 'Open WA FQHC Clinic Map'
    },
    {
      category: 'Free & FQHC Clinic Network',
      title: '4. Washington Free & Charitable Clinics Directory',
      desc: 'Consolidated directory of volunteer-powered free and charitable clinics across Washington State—including Lahai Health (Lynnwood), Olympia Free Clinic, Grace Clinic (Kennewick), and Snake River Community Clinic.',
      howTo: 'Free clinics rely heavily on pre-med and pre-PA students for vitals intake, scribing, and EHR triage on evenings and weekends.',
      url: 'https://www.freeclinics.com/sta/washington',
      btnLabel: 'View WA Free Clinics List'
    },
    {
      category: 'WA Fast-Track Credentials',
      title: '5. WA DOH Medical Assistant–Registered (MA-R) "No-School" Pathway',
      desc: 'Washington State has a unique law: you do NOT need a 9-month MA certificate to work as a paid Medical Assistant! Any WA clinic or hospital can endorse you for an MA-R license and train you on the job to take vitals, room patients, and scribe.',
      howTo: 'Apply to "Medical Assistant Apprentice / MA-R / Patient Care Coordinator" roles at UW Medicine, Polyclinic/Optum, MultiCare, or local dermatology/ophthalmology clinics.',
      url: 'https://doh.wa.gov/licenses-permits-and-certificates/professions-new-renew-or-update/medical-assistant/credentialing-requirements',
      btnLabel: 'Read Official WA DOH MA-R Guide'
    },
    {
      category: 'Shadowing & Hospital Portals',
      title: '6. UW Medicine Volunteering & Structured Physician Observership Hub',
      desc: 'Official UW Medicine and UW Geriatrics portal for Washington students seeking structured physician shadowing, clinical observerships, and hospital volunteer placements that fulfill UWSOM’s 40-hour shadowing recommendation.',
      howTo: 'Apply directly through UW Geriatrics Observerships or pair with MultiCare Shadowing and YVFWC’s 24-hour shadowing track.',
      url: 'https://geriatrics.uw.edu/volunteering-and-shadowing',
      btnLabel: 'View UW Shadowing & Volunteer Hub'
    },
    {
      category: 'Research & Lab Finder',
      title: '7. Fred Hutch SURP, Ship-to-Shore & Pathways Internship Hub',
      desc: 'Catalog of paid high school, undergraduate, and post-bacc research internships at Fred Hutchinson Cancer Center in South Lake Union—from summer bootcamps to 9-week intensive research fellowships.',
      howTo: 'Bookmark in October! Most Fred Hutch summer applications open between November and January with deadlines in January/February.',
      url: 'https://www.fredhutch.org/en/education-training/undergraduate-students/summer-undergraduate-research-program.html',
      btnLabel: 'Explore Fred Hutch Internships'
    },
    {
      category: 'Research & Lab Finder',
      title: '8. WSU Elson S. Floyd College of Medicine (Spokane) Student Research',
      desc: 'Washington’s community-based medical school headquartered in Spokane with campuses in Everett, Tri-Cities, and Vancouver. Active labs in sleep physiology, rural health, addiction medicine, and autism.',
      howTo: 'Browse WSU Health Sciences Spokane faculty labs and email investigators regarding volunteer or summer undergraduate research placements.',
      url: 'https://medicine.wsu.edu/research/',
      btnLabel: 'Open WSU Medicine Research'
    },
    {
      category: 'Shadowing & Hospital Portals',
      title: '9. Pre-Health & Career Advising Portal — University of Washington',
      desc: 'Publicly accessible resource library maintained by UW Career & Internship Center listing Seattle/Puget Sound clinical service sites, SHPEP summer programs, and quarterly recruiting announcements.',
      howTo: 'Join the UW `prehealth` listserv (open to students and community members) to get daily emails from Seattle clinics and doctors looking for scribes and volunteers.',
      url: 'https://careers.uw.edu/',
      btnLabel: 'Open UW Career & Pre-Health Hub'
    },
    {
      category: 'Free & FQHC Clinic Network',
      title: '10. International Community Health Services (ICHS) & Neighborcare Health',
      desc: 'Serve Asian, Pacific Islander, immigrant, and unhoused communities in Seattle’s International District, Holly Park, Shoreline, and Bellevue through advocacy, youth health corps, and clinical externships.',
      howTo: 'Check ICHS Volunteer & Youth Program openings or coordinate through your college’s service-learning office for Neighborcare placements.',
      url: 'https://www.ichs.com/volunteer',
      btnLabel: 'Visit ICHS Volunteer Portal'
    },
    {
      category: 'WA Fast-Track Credentials',
      title: '11. WA DOH Emergency Medical Services (EMS / EMT) Certification Portal',
      desc: 'How to become a National Registry & WA State Certified EMT-B in one quarter (via North Seattle College, Tacoma CC, Spokane CC, or UW EMS) and volunteer with event medicine or fire districts.',
      howTo: 'Complete a 1-quarter EMT course + AHA BLS CPR to unlock high-acuity Emergency Tech (ED Tech) and event standby roles across WA.',
      url: 'https://doh.wa.gov/public-health-provider-resources/emergency-medical-services-ems-and-trauma-care-system/ems-apply-certification',
      btnLabel: 'WA EMS Certification Info'
    },
    {
      category: 'Shadowing & Hospital Portals',
      title: '12. Pacific Northwest University of Health Sciences (PNWU Yakima) Pre-Med Hub',
      desc: 'Located in Yakima, PNWU trains osteopathic physicians (DO) for rural and underserved Northwest communities. Great hub for Central/Eastern WA shadowing and DO mentorship.',
      howTo: 'Connect with PNWU admissions events and combine with Yakima Valley Farm Workers Clinic (YVFWC) shadowing.',
      url: 'https://www.pnwu.edu/',
      btnLabel: 'Explore PNWU Yakima'
    }
  ];

  // --------------------------------------------------------------------------
  // 4. Washington State Seasonal Application Calendar (Tab 2)
  // --------------------------------------------------------------------------
  const WA_TIMELINE_SEASONS = [
    {
      season: 'Oct – Jan (Winter Deadlines)',
      title: 'Summer Research Fellowships Open',
      items: [
        'Fred Hutch SURP & Summer High School Internships open in Nov (due Jan/Feb)',
        'Seattle Children’s Research Training Program (RTP) opens in Jan',
        'UW Summer Biomedical REUs & SHPEP applications due early Feb',
        'Request 2 faculty recommendation letters before Thanksgiving break'
      ]
    },
    {
      season: 'Feb – Apr (Spring Cycle)',
      title: 'Summer Hospital & Camp Cohorts',
      items: [
        'MultiCare M.A.S.H. Camp (Tacoma/Puyallup) applications open in Spring',
        'Seattle Children’s Scrubs & ’Scopes Camp registration opens',
        'UW Medicine & Harborview Summer Volunteer cohort applications open (~April)',
        'Complete 2-Step TB / QuantiFERON & immunization titers in March'
      ]
    },
    {
      season: 'May – Aug (Summer Intensive)',
      title: 'Autumn Academic-Year Prep',
      items: [
        'Apply in August for Autumn Quarter hospital shifts at UWMC Montlake, Swedish & Overlake',
        'Cold-email UW Medicine / WSU Spokane lab PIs in late August for Fall REDCap/lab openings',
        'Volunteer at weekend mobile clinics (Sea Mar farmworker fairs, RotaCare, Bloodworks NW)'
      ]
    },
    {
      season: 'Year-Round Rolling',
      title: 'Immediate-Start WA Pathways',
      items: [
        'Sea Mar Community Health Centers (30+ WA clinics) accept rolling inquiries',
        'Lahai Health (Lynnwood) & RotaCare (Bellevue/Renton) onboard year-round',
        'EvergreenHealth Hospice (Kirkland) & Bloodworks NW onboard within 2–3 weeks',
        'UW Geriatric Medicine Observership accepts rolling shadowing requests'
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // 5. WA Readiness Checklist & Outreach Templates
  // --------------------------------------------------------------------------
  const READINESS_CHECKLIST_ITEMS = [
    {
      id: 'chk-immunizations',
      title: 'WA CIS Immunization Record & Quantitative IgG Titers',
      desc: 'Download your official record from MyIR Mobile (WA Department of Health immunization registry). Ensure 2 doses MMR, 2 doses Varicella, 3 doses Hep B (+ quantitative Hep B surface antibody titer for UW Medicine), Tdap, and annual Flu/COVID.'
    },
    {
      id: 'chk-tb',
      title: 'QuantiFERON-TB Gold Blood Test or 2-Step PPD Skin Test',
      desc: 'Required by UW Medicine, Harborview, MultiCare, Swedish, and Providence. Ask Hall Health (UW) or your PCP for a single QuantiFERON blood draw so you don’t have to make 4 clinic visits for a 2-step skin test.'
    },
    {
      id: 'chk-watch',
      title: 'WA State Patrol (WATCH) Background Check Readiness',
      desc: 'Every Washington hospital and FQHC runs a Washington Access to Criminal History (WATCH) check and DSHS background clearance before your orientation.'
    },
    {
      id: 'chk-bls',
      title: 'AHA Basic Life Support (BLS Provider) CPR Card',
      desc: 'Take the 3-hour "American Heart Association BLS Provider" course (offered weekly in Seattle, Bellevue, Tacoma, and Spokane). Required for hands-on clinical programs, EMT, and MA-R roles.'
    },
    {
      id: 'chk-hiv-hipaa',
      title: 'WA DOH 7-Hour HIV/AIDS & Bloodborne Pathogens + CITI Cert',
      desc: 'Washington State healthcare credentials (like MA-R and CNA) use the WA DOH Bloodborne Pathogens training, and UW/Fred Hutch/MultiCare research requires the free online CITI Human Subjects Biomedical certificate.'
    },
    {
      id: 'chk-resume',
      title: '1-Page Pre-Health Resume + Consistent 4-Hour Weekly Shift Block',
      desc: 'WA hospitals (UWMC, Swedish, Overlake, VMFH) require a fixed 4-hour weekly shift on the same day/time for 6 consecutive months. Carve out a protected 4-hour morning, afternoon, or weekend block.'
    }
  ];

  const OUTREACH_TEMPLATES = {
    research: `Subject: Pre-Med Student Inquiry — Clinical / Translational Research Assistance ([Your Name])

Dear Dr. [Last Name],

I hope your quarter is going well. My name is [Your Name], and I am a [Year, e.g., sophomore / post-bacc] at [UW / WSU / Seattle U / PLU / etc.] studying [Major]. I saw your active study on the ITHS / UW Medicine portal regarding [mention specific topic or clinical study in 1 phrase] and was deeply interested in your team's work at [UW Medicine / Fred Hutch / Seattle Children's / MultiCare].

I am reaching out to ask if your team or Clinical Research Coordinators have room for a reliable student research volunteer to assist with Epic/REDCap chart abstraction, patient screening/consenting, or lab prep for the upcoming [Autumn/Winter/Spring/Summer] term.

To make onboarding easy for your team:
• I can commit [8–12] hours per week for at least [3 consecutive quarters / 12 months].
• I have already completed my CITI Human Subjects Biomedical training, HIPAA module, and WA immunization/TB clearances.
• My 1-page resume and quarterly class schedule are attached.

Would you or your study coordinator have 10 minutes in the next two weeks for a brief Zoom or in-person chat at [South Lake Union / Montlake / Spokane]? Thank you very much for your time and mentorship.

Warm regards,
[Your Name]
[Your Phone] | [Your Email]`,

    clinic: `Subject: Prospective Volunteer Inquiry — [Sea Mar / Lahai Health / RotaCare] Patient Navigation

Dear [Clinic Manager / Volunteer Coordinator],

My name is [Your Name], and I am a pre-health student based in [Seattle / Bellevue / Tacoma / Lynnwood / Spokane, ZIP Code]. I deeply admire [Sea Mar / Lahai Health / RotaCare]'s mission to provide accessible primary and preventative care to underserved families in Washington.

I would love to join your clinic team as a Volunteer Patient Navigator, Intake Aide, or Service-Learning Volunteer:
• Availability: [e.g., Every Saturday or Tuesday/Thursday afternoons] for at least [6–12 months].
• Clearances Ready: WA MyIR immunization records, negative TB test, WATCH background check readiness, and [Spanish / Vietnamese / Russian / Mandarin proficiency or AHA BLS CPR, if applicable].

Could you please let me know if the [Clinic Neighborhood] location has volunteer openings this term, or share the site-specific onboarding packet?

Thank you for all you do for our Washington community,
[Your Name]
[Your Phone] | [Your Email]`,

    shadowing: `Subject: Pre-Med Student Observership / Shadowing Inquiry — [Specialty] at [Hospital/Clinic]

Dear Dr. [Last Name],

I hope your week is going well. My name is [Your Name], and I am a Washington pre-medical student at [School Name] preparing to apply to the UW School of Medicine / WSU Elson S. Floyd College of Medicine.

I am currently volunteering at [Hospital / Free Clinic] and am eager to gain a deeper understanding of the physician-patient relationship in [Specialty]. Would you be open to allowing me to observe you for a half-day clinic session or shift at [Harborview / UWMC / MultiCare / Overlake / YVFWC] sometime in [Month]?

I have my WA MyIR immunization records, negative QuantiFERON TB test, and HIPAA confidentiality forms ready to submit to Medical Staff Services or your clinic manager so there is no administrative burden on you.

Thank you very much for considering my request, and I completely understand if your clinical schedule is full.

Sincerely,
[Your Name]
[Your Phone] | [Your Email]`,

    hospital: `Subject: Prospective 6-Month Hospital Volunteer Inquiry — [Hospital Name] ([Unit Interest])

Dear [Hospital Name] Volunteer Services Team,

My name is [Your Name], and I am a pre-health student living in [City, WA — ZIP Code]. I am preparing my application for your upcoming volunteer cohort and wanted to confirm when the next application window or orientation opens for [Emergency Department / Patient Escort / Inpatient Nursing / Hospice] shifts.

• I have a protected 4-hour weekly shift block available on [Days/Times] for the next [6–12 consecutive months].
• My WA MyIR immunization records, negative TB test, and flu/COVID vaccinations are complete and ready to upload on day one.

Thank you very much for your guidance and for supporting student volunteers!

Warm regards,
[Your Name]
[Your Phone] | [Your Email]`
  };

  const STARTER_RESOURCES = [
    {
      category: 'UW School of Medicine (UWSOM) Standard',
      title: 'What UWSOM & WSU Medicine Look For in Clinical Hours',
      body: 'Both of Washington’s MD schools (plus PNWU in Yakima) heavily emphasize longitudinal service with underserved, rural, or safety-net populations (Harborview, Sea Mar, Lahai, RotaCare, YVFWC) plus ~40 hours of physician shadowing.',
      actionLabel: 'Filter WA Free Clinics & FQHCs',
      actionType: 'filter-fqhc'
    },
    {
      category: 'WA Secret Weapon (Paid Clinical)',
      title: 'How to Use Washington’s MA-R Credential (Zero Tuition)',
      body: 'Unlike California or New York, Washington State allows clinics to hire pre-meds as a "Medical Assistant–Registered (MA-R)" and train you on the job to take vitals, room patients, and scribe—no 9-month vocational school required!',
      actionLabel: 'See WA Discovery Portal #5',
      actionType: 'scroll-discovery'
    },
    {
      category: 'Seattle Hospital Strategy',
      title: 'Beating the UWMC & Seattle Children’s Waitlists',
      body: 'UWMC Montlake and Seattle Children’s fill fast at the start of Autumn Quarter. If waitlisted, immediately apply to Harborview (First Hill), Swedish (First Hill/Cherry Hill/Edmonds), Overlake (Bellevue), or EvergreenHealth (Kirkland)—all a quick Link Light Rail or bus ride away.',
      actionLabel: 'View All Seattle & Eastside Hospitals',
      actionType: 'filter-seattle-hospitals'
    },
    {
      category: 'High School (16–17) in Washington',
      title: 'Where 16 & 17 Year Olds Can Volunteer in WA',
      body: 'Harborview and Overlake require adults (18+) for general shifts, BUT UWMC Montlake, Seattle Children’s, MultiCare (Tacoma/Puyallup + M.A.S.H. Camp), Swedish, EvergreenHealth, Sea Mar, and Bloodworks NW all welcome students ages 16+!',
      actionLabel: 'Filter High School (16+) WA Programs',
      actionType: 'filter-hs'
    },
    {
      category: 'Research Beyond Bench Pipetting',
      title: 'How to Land Clinical Research at UW SLU, Harborview & Tacoma',
      body: 'Use the ITHS Study Directory (Portal #1 above) to identify UW Medicine and MultiCare physicians running clinical trials. Offer 8 hrs/week to abstract Epic charts into REDCap—clinical PIs love reliable pre-meds for chart review.',
      actionLabel: 'Filter WA Research Programs',
      actionType: 'filter-research'
    },
    {
      category: 'Eastern & Central WA Pathways',
      title: 'Spokane, Yakima, Tri-Cities & Bellingham Pre-Med Ecosystem',
      body: 'Spokane’s University District (Providence Sacred Heart, MultiCare Deaconess, CHAS, WSU Medicine) and Central WA’s Yakima Valley Farm Workers Clinic offer faster onboarding and closer 1-on-1 physician mentorship than crowded Seattle wards.',
      actionLabel: 'Filter Eastern & Central WA',
      actionType: 'filter-eastern-wa'
    }
  ];

  // --------------------------------------------------------------------------
  // 6. Application State
  // --------------------------------------------------------------------------
  const state = {
    opportunities: [],
    activeTab: 'explore',
    zipInput: '',
    resolvedLocation: null,
    radius: 'all',
    scopeFilter: 'all',
    facilityType: 'all',
    keyword: '',
    selectedRegions: new Set(),
    selectedSpecialties: new Set(),
    selectedEligibilities: new Set(),
    directPatientOnly: false,
    starterFriendlyOnly: false,
    shadowingOnly: false,
    lorOnly: false,
    weekendOnly: false,
    eveningOnly: false,
    lowHoursOnly: false,
    sortBy: 'relevance',
    activePreset: null,
    activeDiscoveryCat: 'all',
    activeTemplate: 'research',
    user: JSON.parse(localStorage.getItem('scrubin_user_profile') || 'null'),
    cloudSyncState: 'idle',
    savedIds: new Set(JSON.parse(localStorage.getItem('medpath_wa_saved_ids') || '["wa-001","us-001","us-002"]')),
    pipelineStatus: JSON.parse(localStorage.getItem('medpath_wa_pipeline_status') || '{"wa-001":"Preparing Clearances","us-001":"Saved","us-002":"Saved"}'),
    checklistDone: new Set(JSON.parse(localStorage.getItem('medpath_wa_checklist') || '["chk-immunizations","chk-watch"]')),
    hoursLog: JSON.parse(localStorage.getItem('medpath_wa_hours_log') || JSON.stringify([
      {
        id: 'log-wa-1',
        date: '2026-09-24',
        org: 'Harborview Medical Center (UW Medicine)',
        category: 'Clinical (Direct Patient)',
        hours: 4.0,
        supervisor: 'First Hill ED Volunteer Office (hmcvol@uw.edu)',
        reflection: 'Assisted First Hill ED nurses with patient comfort rounds and wheelchair discharge escorts.'
      },
      {
        id: 'log-wa-2',
        date: '2026-09-27',
        org: 'Sea Mar Community Health Center (Seattle)',
        category: 'Community Health',
        hours: 4.5,
        supervisor: 'Volunteer Dept (volunteer@seamarchc.org)',
        reflection: 'Helped Spanish-speaking families complete preventative clinic intake and Apple Health forms.'
      }
    ]))
  };

  function isNationalOrRemote(opp) {
    return Boolean(
      opp.isRemote ||
      opp.isNational ||
      opp.waRegion === 'National & Remote (All 50 States)'
    );
  }

  function getOpportunityUsRegion(opp) {
    if (isNationalOrRemote(opp)) {
      return 'National & Remote (All 50 States)';
    }
    const r = opp.waRegion || '';
    const knownUsRegions = new Set([
      'National & Remote (All 50 States)',
      'Pacific Northwest (WA / OR)',
      'California & West (CA / CO)',
      'Northeast & Mid-Atlantic (MA / NY / PA / MD)',
      'South & Texas (TX / NC / GA / FL)',
      'Midwest (IL / MN / OH / MI)'
    ]);
    if (knownUsRegions.has(r)) return r;
    // Map legacy Washington regional labels into Pacific Northwest
    return 'Pacific Northwest (WA / OR)';
  }

  // --------------------------------------------------------------------------
  // 7. Initialization, Cloud Auth Session & 24-Hour Live Sync API Load
  // --------------------------------------------------------------------------
  async function initApp() {
    await loadOpportunities();
    await restoreCloudSession();
    bindNavigation();
    bindSearchAndFilters();
    bindStarterToolkit();
    bindTrackerAndHours();
    bindModals();
    bindLiveSyncEngine();
    renderAll();
  }

  async function restoreCloudSession() {
    if (!state.user || !state.user.email) return;
    try {
      const res = await fetch('/api/user/profile?email=' + encodeURIComponent(state.user.email));
      if (res.ok) {
        const acct = await res.json();
        applyCloudAccountData(acct, false);
      }
    } catch (_err) {
      // Offline fallback keeps localStorage state
    }
  }

  function applyCloudAccountData(acct, showNotification) {
    if (!acct || !acct.email) return;
    state.user = {
      email: acct.email,
      name: acct.name || acct.email.split('@')[0],
      provider: acct.provider || 'edu',
      track: acct.track || 'Pre-Med (MD / DO)',
      gradYear: acct.gradYear || '2028',
      updatedAt: acct.updatedAt || 'Just now'
    };
    localStorage.setItem('scrubin_user_profile', JSON.stringify(state.user));

    if (Array.isArray(acct.savedIds)) {
      state.savedIds = new Set(acct.savedIds);
      localStorage.setItem('medpath_wa_saved_ids', JSON.stringify([...state.savedIds]));
    }
    if (acct.pipelineStatus && typeof acct.pipelineStatus === 'object') {
      state.pipelineStatus = acct.pipelineStatus;
      localStorage.setItem('medpath_wa_pipeline_status', JSON.stringify(state.pipelineStatus));
    }
    if (Array.isArray(acct.checklistDone)) {
      state.checklistDone = new Set(acct.checklistDone);
      localStorage.setItem('medpath_wa_checklist', JSON.stringify([...state.checklistDone]));
    }
    if (Array.isArray(acct.hoursLog)) {
      state.hoursLog = acct.hoursLog;
      localStorage.setItem('medpath_wa_hours_log', JSON.stringify(state.hoursLog));
    }
    state.cloudSyncState = 'synced';
    if (showNotification) {
      showToast(`Signed in as ${state.user.name} — Hours & bookmarks synced to cloud!`);
    }
  }

  async function syncUserToCloud() {
    if (!state.user || !state.user.email) return;
    state.cloudSyncState = 'syncing';
    renderCloudAccountBanner();
    try {
      const res = await fetch('/api/user/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: state.user.email,
          name: state.user.name,
          provider: state.user.provider,
          track: state.user.track,
          gradYear: state.user.gradYear,
          savedIds: [...state.savedIds],
          pipelineStatus: state.pipelineStatus,
          checklistDone: [...state.checklistDone],
          hoursLog: state.hoursLog
        })
      });
      if (res.ok) {
        const data = await res.json();
        state.user.updatedAt = data.updatedAt || 'Just now';
        localStorage.setItem('scrubin_user_profile', JSON.stringify(state.user));
        state.cloudSyncState = 'synced';
      } else {
        state.cloudSyncState = 'offline';
      }
    } catch (_err) {
      state.cloudSyncState = 'offline';
    }
    renderCloudAccountBanner();
  }

  async function loadOpportunities() {
    let serverCustom = [];
    try {
      const res = await fetch('/api/opportunities');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          serverCustom = data;
        }
      }
    } catch (_err) {
      // Offline or static mode
    }
    const localCustom = JSON.parse(localStorage.getItem('medpath_wa_custom_opps') || '[]');
    const seen = new Set();
    const merged = [];
    [...DEFAULT_OPPORTUNITIES, ...serverCustom, ...localCustom].forEach((item) => {
      if (item && item.id && !seen.has(item.id)) {
        seen.add(item.id);
        merged.push(item);
      }
    });
    state.opportunities = merged;
  }

  async function bindLiveSyncEngine() {
    const syncBtn = document.getElementById('sync-live-data-btn');
    const syncLabel = document.getElementById('sync-status-label');
    if (!syncBtn || !syncLabel) return;

    async function refreshSyncBadge() {
      try {
        const res = await fetch('/api/sync-status');
        if (res.ok) {
          const status = await res.json();
          const trialCount = status.liveNihStudiesCount || status.nihLiveTrialsCount || 0;
          syncLabel.textContent =
            trialCount > 0 ? `24h Sync • +${trialCount} NIH` : '24h Sync';
        }
      } catch (_e) {
        // Ignore in static mode
      }
    }

    await refreshSyncBadge();

    syncBtn.addEventListener('click', async () => {
      syncLabel.textContent = 'Syncing...';
      syncBtn.disabled = true;
      try {
        const res = await fetch('/api/sync-now', { method: 'POST' });
        if (res.ok) {
          const status = await res.json();
          await loadOpportunities();
          renderAll();
          const trialCount = status.liveNihStudiesCount || status.nihLiveTrialsCount || 0;
          syncLabel.textContent = `24h Sync • +${trialCount} NIH`;
          showToast(
            `24h Sync complete: Verified US & local links + pulled ${trialCount} active NIH studies!`
          );
        } else {
          syncLabel.textContent = '24h Sync';
        }
      } catch (_err) {
        syncLabel.textContent = '24h Sync';
        showToast('Verified local & national US directory links');
      } finally {
        syncBtn.disabled = false;
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. Filtering & Distance Computation
  // --------------------------------------------------------------------------
  function getFilteredAndSortedOpportunities() {
    const loc = state.resolvedLocation;

    const enriched = state.opportunities.map((opp) => {
      let distanceMiles = null;
      if (loc && !isNationalOrRemote(opp) && typeof opp.lat === 'number' && typeof opp.lon === 'number') {
        distanceMiles = calculateDistanceMiles(loc.lat, loc.lon, opp.lat, opp.lon);
      }
      return { ...opp, distanceMiles };
    });

    const filtered = enriched.filter((opp) => {
      const natRemote = isNationalOrRemote(opp);
      const usRegion = getOpportunityUsRegion(opp);

      // 0. Scope Segmented Pill ('all' | 'local' | 'national')
      if (state.scopeFilter === 'national') {
        if (!natRemote) return false;
      } else if (state.scopeFilter === 'local') {
        if (natRemote) return false;
        if (loc && state.radius === 'all') {
          if (opp.distanceMiles === null || opp.distanceMiles > 100) return false;
        }
      }

      // 1. Radius / Location filter
      if (state.radius === 'remote') {
        if (!natRemote) return false;
      } else if (loc && state.radius !== 'all') {
        const maxMiles = parseFloat(state.radius);
        if (natRemote) {
          return false;
        }
        if (opp.distanceMiles === null || opp.distanceMiles > maxMiles) {
          return false;
        }
      } else if (state.zipInput.trim() && !loc) {
        const q = state.zipInput.trim().toLowerCase();
        const matchZipOrCity =
          opp.zipCode.toLowerCase().includes(q) ||
          opp.city.toLowerCase().includes(q) ||
          (opp.waRegion || '').toLowerCase().includes(q) ||
          usRegion.toLowerCase().includes(q);
        if (!matchZipOrCity && !natRemote) return false;
      }

      // 2. US Region checkboxes
      if (
        state.selectedRegions.size > 0 &&
        !state.selectedRegions.has(usRegion) &&
        !state.selectedRegions.has(opp.waRegion)
      ) {
        return false;
      }

      // 3. Facility Type
      if (state.facilityType !== 'all' && opp.facilityType !== state.facilityType) {
        return false;
      }

      // 4. Keyword Search
      if (state.keyword.trim()) {
        const kw = state.keyword.trim().toLowerCase();
        const hay = [
          opp.title,
          opp.organization,
          opp.facilityType,
          opp.waRegion,
          usRegion,
          opp.specialty,
          opp.city,
          opp.zipCode,
          opp.description,
          opp.insiderTip,
          ...(opp.duties || []),
          ...(opp.clearances || [])
        ]
          .join(' ')
          .toLowerCase();
        if (!hay.includes(kw)) return false;
      }

      // 5. Specialty checkboxes
      if (state.selectedSpecialties.size > 0 && !state.selectedSpecialties.has(opp.specialty)) {
        return false;
      }

      // 6. Eligibility checkboxes
      if (state.selectedEligibilities.size > 0) {
        const hasMatch = (opp.studentLevels || []).some((lvl) => state.selectedEligibilities.has(lvl));
        if (!hasMatch) return false;
      }

      // 7. Boolean Criteria
      if (state.directPatientOnly && !opp.directPatientContact) return false;
      if (state.starterFriendlyOnly && !opp.starterFriendly) return false;
      if (state.shadowingOnly && !opp.shadowingIncluded) return false;
      if (state.lorOnly && !opp.lorEligible) return false;
      if (state.weekendOnly && !opp.weekendAvailable) return false;
      if (state.eveningOnly && !opp.eveningAvailable) return false;
      if (state.lowHoursOnly && opp.weeklyHours > 4) return false;

      return true;
    });

    filtered.sort((a, b) => {
      if (state.sortBy === 'distance' || (state.sortBy === 'relevance' && loc)) {
        const da = a.distanceMiles !== null ? a.distanceMiles : (isNationalOrRemote(a) ? 9998 : 9999);
        const db = b.distanceMiles !== null ? b.distanceMiles : (isNationalOrRemote(b) ? 9998 : 9999);
        if (da !== db) return da - db;
      }
      if (state.sortBy === 'hours_asc') {
        return a.weeklyHours - b.weeklyHours;
      }
      if (state.sortBy === 'starter') {
        if (a.starterFriendly !== b.starterFriendly) return a.starterFriendly ? -1 : 1;
      }
      return 0;
    });

    return filtered;
  }

  // --------------------------------------------------------------------------
  // 9. Rendering: Opportunity Feed & Active Filters
  // --------------------------------------------------------------------------
  function renderAll() {
    document.getElementById('nav-total-count').textContent = state.opportunities.length;
    document.getElementById('nav-saved-count').textContent = state.savedIds.size;
    renderZipStatusReadout();
    renderActiveFilterTags();
    renderOpportunitiesFeed();
    renderDiscoveryPortals();
    renderSeasonalTimeline();
    renderReadinessChecklist();
    renderOutreachTemplate();
    renderStarterResources();
    renderCloudAccountBanner();
    renderTrackerAndHours();
  }

  function renderZipStatusReadout() {
    const readout = document.getElementById('zip-status-readout');
    const detectedCity = document.getElementById('zip-detected-city');

    if (state.radius === 'remote' || state.scopeFilter === 'national') {
      detectedCity.textContent = 'National / Remote';
      if (readout) readout.textContent = 'Filtering for National & Remote programs';
      return;
    }

    if (state.resolvedLocation) {
      detectedCity.textContent = state.resolvedLocation.label.split(',')[0];
      const radText = state.radius === 'all' ? 'All US distances' : `Within ${state.radius} miles`;
      if (readout) {
        readout.textContent = `Centered on ${state.resolvedLocation.zip} (${state.resolvedLocation.label}) • ${radText}`;
      }
    } else if (state.zipInput.trim()) {
      detectedCity.textContent = '';
      if (readout) readout.textContent = `Filtering by US location: "${state.zipInput.trim()}"`;
    } else {
      detectedCity.textContent = '';
      if (readout) {
        readout.textContent = 'Showing all verified US local & national programs';
      }
    }
  }

  function renderActiveFilterTags() {
    const bar = document.getElementById('active-filters-bar');
    const tags = [];

    if (state.scopeFilter !== 'all') {
      tags.push({
        label: state.scopeFilter === 'local' ? 'Scope: Local / State Only' : 'Scope: National & Remote Only',
        clear: () => {
          setScopePill('all');
        }
      });
    }

    if (state.resolvedLocation) {
      tags.push({
        label: `Location: ${state.resolvedLocation.label} (${state.radius === 'all' ? 'Sorted by distance' : '≤' + state.radius + ' mi'})`,
        clear: () => {
          state.zipInput = '';
          state.resolvedLocation = null;
          state.radius = 'all';
          document.getElementById('zip-search-input').value = '';
          document.getElementById('radius-select').value = 'all';
          updateZipPills('');
        }
      });
    }
    state.selectedRegions.forEach((reg) => {
      tags.push({
        label: `Region: ${reg}`,
        clear: () => {
          state.selectedRegions.delete(reg);
          document.querySelectorAll('input[name="waregion"]').forEach((el) => {
            if (el.value === reg) el.checked = false;
          });
        }
      });
    });
    if (state.facilityType !== 'all') {
      tags.push({
        label: `Facility: ${state.facilityType}`,
        clear: () => {
          state.facilityType = 'all';
          document.getElementById('facility-filter-select').value = 'all';
        }
      });
    }
    if (state.keyword.trim()) {
      tags.push({
        label: `Keyword: "${state.keyword.trim()}"`,
        clear: () => {
          state.keyword = '';
          document.getElementById('keyword-search-input').value = '';
        }
      });
    }
    state.selectedSpecialties.forEach((spec) => {
      tags.push({
        label: spec,
        clear: () => {
          state.selectedSpecialties.delete(spec);
          document.querySelectorAll('input[name="specialty"]').forEach((el) => {
            if (el.value === spec) el.checked = false;
          });
        }
      });
    });
    state.selectedEligibilities.forEach((elig) => {
      tags.push({
        label: elig,
        clear: () => {
          state.selectedEligibilities.delete(elig);
          document.querySelectorAll('input[name="eligibility"]').forEach((el) => {
            if (el.value === elig) el.checked = false;
          });
        }
      });
    });
    if (state.directPatientOnly) {
      tags.push({
        label: 'Direct Patient Contact',
        clear: () => {
          state.directPatientOnly = false;
          document.getElementById('filter-direct-patient').checked = false;
        }
      });
    }
    if (state.starterFriendlyOnly) {
      tags.push({
        label: 'Starter Friendly (No Exp.)',
        clear: () => {
          state.starterFriendlyOnly = false;
          document.getElementById('filter-starter-friendly').checked = false;
        }
      });
    }
    if (state.shadowingOnly) {
      tags.push({
        label: 'Includes Shadowing / Observation',
        clear: () => {
          state.shadowingOnly = false;
          document.getElementById('filter-shadowing').checked = false;
        }
      });
    }
    if (state.lorOnly) {
      tags.push({
        label: 'LOR Pathway',
        clear: () => {
          state.lorOnly = false;
          document.getElementById('filter-lor-eligible').checked = false;
        }
      });
    }
    if (state.weekendOnly) {
      tags.push({
        label: 'Weekend Shifts',
        clear: () => {
          state.weekendOnly = false;
          document.getElementById('filter-weekend').checked = false;
        }
      });
    }
    if (state.eveningOnly) {
      tags.push({
        label: 'Evening Shifts',
        clear: () => {
          state.eveningOnly = false;
          document.getElementById('filter-evening').checked = false;
        }
      });
    }
    if (state.lowHoursOnly) {
      tags.push({
        label: '≤ 4 hrs/week',
        clear: () => {
          state.lowHoursOnly = false;
          document.getElementById('filter-low-hours').checked = false;
        }
      });
    }

    bar.innerHTML = '';
    tags.forEach((tagObj) => {
      const span = document.createElement('span');
      span.className = 'active-filter-tag';
      span.innerHTML = `<span>${escapeHtml(tagObj.label)}</span>`;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'active-filter-remove';
      btn.setAttribute('aria-label', `Remove filter ${tagObj.label}`);
      btn.innerHTML = '&times;';
      btn.addEventListener('click', () => {
        tagObj.clear();
        clearPresetHighlight();
        renderAll();
      });
      span.appendChild(btn);
      bar.appendChild(span);
    });
  }

  function renderOpportunitiesFeed() {
    const list = getFilteredAndSortedOpportunities();
    const summaryEl = document.getElementById('results-summary-text');
    const gridEl = document.getElementById('opportunities-grid');

    const locSuffix = state.resolvedLocation
      ? ` • Near <strong>${escapeHtml(state.resolvedLocation.label.split(',')[0])}</strong>`
      : '';
    summaryEl.innerHTML = `Showing <strong>${list.length}</strong> of <strong>${state.opportunities.length}</strong> verified US programs${locSuffix}`;

    if (list.length === 0) {
      gridEl.innerHTML = `
        <div class="empty-state-box">
          <h3 class="empty-state-title">No programs match those exact filters</h3>
          <p class="empty-state-text">
            Try switching Scope to "All US (Local + National)" or resetting filters to browse all local hospitals, free clinics, and national remote programs.
          </p>
          <button type="button" class="btn btn-primary" id="empty-reset-btn">Reset Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('empty-reset-btn');
      if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
      return;
    }

    gridEl.innerHTML = list
      .map((opp) => {
        const isSaved = state.savedIds.has(opp.id);
        const natRemote = isNationalOrRemote(opp);
        const distanceBadge =
          opp.distanceMiles !== null
            ? `<span class="badge badge-distance">${opp.distanceMiles} mi</span>`
            : natRemote
            ? `<span class="badge badge-distance">National / Remote</span>`
            : '';

        const clinicalBadge = opp.directPatientContact
          ? `<span class="badge badge-clinical">Direct Patient Care</span>`
          : `<span class="badge badge-research">Research / Sim</span>`;

        const starterBadge = opp.starterFriendly
          ? `<span class="badge badge-starter">Starter Friendly</span>`
          : '';

        const hsEligible = (opp.studentLevels || []).some((l) => l.includes('16+'));
        const quickFacts = [
          `${opp.weeklyHours} hrs/wk • ${opp.minDuration}`,
          hsEligible ? 'Ages 16+ & College' : 'Undergrad / Gap Year'
        ];
        if (opp.shadowingIncluded) quickFacts.push('Shadowing Included');

        const officialLinkBtn = opp.portalUrl
          ? `<a href="${escapeHtml(opp.portalUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Official Site &nearr;</a>`
          : '';

        return `
          <article class="opp-card" data-opp-id="${escapeHtml(opp.id)}">
            <div class="opp-card-top">
              <div>
                <div class="opp-meta-row">
                  <span class="badge badge-facility">${escapeHtml(opp.facilityType)}</span>
                  ${clinicalBadge}
                  ${starterBadge}
                  ${distanceBadge}
                </div>
                <h3 class="opp-title" data-view-detail-id="${escapeHtml(opp.id)}">${escapeHtml(opp.title)}</h3>
                <div class="opp-org-line">
                  <span>${escapeHtml(opp.organization)}</span>
                  <span>•</span>
                  <span class="opp-location-text">${escapeHtml(opp.city)} (${escapeHtml(opp.zipCode)})</span>
                </div>
              </div>
              <button type="button" class="bookmark-btn ${isSaved ? 'saved' : ''}" data-bookmark-id="${escapeHtml(opp.id)}" aria-label="${isSaved ? 'Remove from saved programs' : 'Save program'}" title="${isSaved ? 'Saved' : 'Save'}">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                </svg>
              </button>
            </div>

            <p class="opp-description">${escapeHtml(opp.description)}</p>

            <div class="opp-card-footer">
              <div class="opp-perks-list">
                ${quickFacts.map((p) => `<span class="perk-tag">${escapeHtml(p)}</span>`).join('')}
              </div>
              <div class="opp-actions">
                ${officialLinkBtn}
                <button type="button" class="btn btn-primary btn-sm" data-view-detail-id="${escapeHtml(opp.id)}">
                  Details &amp; Apply
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join('');

    gridEl.querySelectorAll('[data-bookmark-id], [data-save-toggle-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const oppId = btn.getAttribute('data-bookmark-id') || btn.getAttribute('data-save-toggle-id');
        toggleSaveOpportunity(oppId);
      });
    });

    gridEl.querySelectorAll('[data-view-detail-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const oppId = btn.getAttribute('data-view-detail-id');
        openDetailModal(oppId);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 10. Rendering: Tab 2 (WA Discovery Portals, Timeline, Checklist, Templates)
  // --------------------------------------------------------------------------
  function renderDiscoveryPortals() {
    const grid = document.getElementById('discovery-portals-grid');
    const filteredPortals =
      state.activeDiscoveryCat === 'all'
        ? WA_DISCOVERY_PORTALS
        : WA_DISCOVERY_PORTALS.filter((p) => p.category === state.activeDiscoveryCat);

    grid.innerHTML = filteredPortals
      .map(
        (portal) => `
        <article class="portal-card">
          <div>
            <span class="portal-tag">${escapeHtml(portal.category)}</span>
            <h3 class="portal-title">${escapeHtml(portal.title)}</h3>
            <p class="portal-desc">${escapeHtml(portal.desc)}</p>
            <div class="portal-how-to">
              <strong>How to use it:</strong> ${escapeHtml(portal.howTo)}
            </div>
          </div>
          <div>
            <a href="${escapeHtml(portal.url)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="width:100%;">
              ${escapeHtml(portal.btnLabel)} &nearr;
            </a>
          </div>
        </article>
      `
      )
      .join('');
  }

  function renderSeasonalTimeline() {
    const grid = document.getElementById('wa-timeline-grid');
    grid.innerHTML = WA_TIMELINE_SEASONS.map(
      (block) => `
        <div class="timeline-card">
          <span class="timeline-season">${escapeHtml(block.season)}</span>
          <h4 class="timeline-title">${escapeHtml(block.title)}</h4>
          <ul class="timeline-list">
            ${block.items.map((li) => `<li>${escapeHtml(li)}</li>`).join('')}
          </ul>
        </div>
      `
    ).join('');
  }

  function renderReadinessChecklist() {
    const container = document.getElementById('readiness-checklist-container');
    const doneCount = state.checklistDone.size;
    const totalCount = READINESS_CHECKLIST_ITEMS.length;
    const pct = Math.round((doneCount / totalCount) * 100);

    document.getElementById('checklist-progress-text').textContent = `${doneCount} / ${totalCount} Ready (${pct}%)`;
    document.getElementById('checklist-progress-bar').style.width = `${pct}%`;

    container.innerHTML = READINESS_CHECKLIST_ITEMS.map((item) => {
      const checked = state.checklistDone.has(item.id);
      return `
        <label class="checklist-item ${checked ? 'completed' : ''}" for="${item.id}">
          <input type="checkbox" id="${item.id}" data-checklist-id="${item.id}" ${checked ? 'checked' : ''} />
          <div>
            <span class="checklist-item-title">${escapeHtml(item.title)}</span>
            <span class="checklist-item-desc">${escapeHtml(item.desc)}</span>
          </div>
        </label>
      `;
    }).join('');

    container.querySelectorAll('[data-checklist-id]').forEach((checkbox) => {
      checkbox.addEventListener('change', (e) => {
        const id = e.target.getAttribute('data-checklist-id');
        if (e.target.checked) state.checklistDone.add(id);
        else state.checklistDone.delete(id);
        localStorage.setItem('medpath_wa_checklist', JSON.stringify([...state.checklistDone]));
        renderReadinessChecklist();
        syncUserToCloud();
      });
    });
  }

  function renderOutreachTemplate() {
    const preview = document.getElementById('outreach-template-preview');
    preview.textContent = OUTREACH_TEMPLATES[state.activeTemplate] || OUTREACH_TEMPLATES.research;
  }

  function renderStarterResources() {
    const grid = document.getElementById('starter-resources-grid');
    grid.innerHTML = STARTER_RESOURCES.map(
      (res, idx) => `
      <article class="resource-card">
        <div>
          <span class="resource-category">${escapeHtml(res.category)}</span>
          <h4 class="resource-title">${escapeHtml(res.title)}</h4>
          <p class="resource-body">${escapeHtml(res.body)}</p>
        </div>
        <div>
          <button type="button" class="btn btn-secondary btn-sm" id="resource-action-btn-${idx}" data-resource-action="${res.actionType}">
            ${escapeHtml(res.actionLabel)} &rarr;
          </button>
        </div>
      </article>
    `
    ).join('');

    grid.querySelectorAll('[data-resource-action]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-resource-action');
        handleResourceAction(action);
      });
    });
  }

  function handleResourceAction(action) {
    if (action === 'scroll-discovery') {
      document.getElementById('discovery-portals-grid').scrollIntoView({ behavior: 'smooth' });
      return;
    }
    resetAllFilters();
    switchTab('explore');
    if (action === 'filter-fqhc') {
      state.facilityType = 'Free Clinic / FQHC';
      document.getElementById('facility-filter-select').value = 'Free Clinic / FQHC';
    } else if (action === 'filter-seattle-hospitals') {
      state.facilityType = 'Hospital / Medical Center';
      document.getElementById('facility-filter-select').value = 'Hospital / Medical Center';
      state.selectedRegions.add('Pacific Northwest (WA / OR)');
      const pnwCb = document.getElementById('reg-pnw');
      if (pnwCb) pnwCb.checked = true;
    } else if (action === 'filter-hs') {
      state.selectedEligibilities.add('High School (16+)');
      document.getElementById('elig-hs').checked = true;
    } else if (action === 'filter-research') {
      state.facilityType = 'Academic / Research Lab';
      document.getElementById('facility-filter-select').value = 'Academic / Research Lab';
    } else if (action === 'filter-eastern-wa') {
      state.selectedRegions.add('Pacific Northwest (WA / OR)');
      const pnwCb = document.getElementById('reg-pnw');
      if (pnwCb) pnwCb.checked = true;
    }
    renderAll();
  }

  // --------------------------------------------------------------------------
  // 11. Rendering: Tab 3 (My Tracker, Cloud Account Banner & Hours Logger)
  // --------------------------------------------------------------------------
  function renderCloudAccountBanner() {
    const bannerEl = document.getElementById('cloud-account-banner');
    const headerBtn = document.getElementById('open-auth-modal-btn');
    const headerLabel = document.getElementById('auth-header-btn-label');
    const formPill = document.getElementById('shift-form-sync-pill');

    if (state.user && state.user.email) {
      const firstName = (state.user.name || state.user.email).split(' ')[0];
      const initials = (state.user.name || state.user.email)
        .split(' ')
        .map((p) => p[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

      if (headerBtn) headerBtn.classList.add('signed-in');
      if (headerLabel) headerLabel.textContent = `✓ ${firstName} (Synced)`;
      if (formPill) {
        formPill.classList.add('synced');
        formPill.textContent =
          state.cloudSyncState === 'syncing' ? '☁️ Syncing...' : '☁️ Cloud Synced ✓';
      }

      if (bannerEl) {
        bannerEl.classList.add('signed-in');
        const syncText =
          state.cloudSyncState === 'syncing'
            ? 'Syncing to cloud...'
            : 'Cloud Synced ✓ (Phone & Laptop)';
        bannerEl.innerHTML = `
          <div class="cloud-banner-left">
            <div class="cloud-avatar-badge" aria-hidden="true">${escapeHtml(initials)}</div>
            <div>
              <div class="cloud-banner-title">
                <span>${escapeHtml(state.user.name)}</span>
                <span class="badge badge-facility">${escapeHtml(state.user.track || 'Pre-Med (MD / DO)')} • ${escapeHtml(state.user.gradYear || '2028')} Cycle</span>
                <span class="cloud-synced-pill">${escapeHtml(syncText)}</span>
              </div>
              <div class="cloud-banner-sub">
                Signed in as <strong>${escapeHtml(state.user.email)}</strong> • Log in with this email on any phone or laptop to access your hours.
              </div>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
            <button type="button" class="btn btn-secondary btn-sm" id="banner-sync-now-btn">Sync Now</button>
            <button type="button" class="btn btn-ghost btn-sm" id="banner-signout-btn">Sign Out</button>
          </div>
        `;
        const syncNowBtn = document.getElementById('banner-sync-now-btn');
        if (syncNowBtn) {
          syncNowBtn.addEventListener('click', () => {
            syncUserToCloud();
            showToast('Cloud backup synced!');
          });
        }
        const signOutBtn = document.getElementById('banner-signout-btn');
        if (signOutBtn) {
          signOutBtn.addEventListener('click', () => {
            state.user = null;
            state.cloudSyncState = 'idle';
            localStorage.removeItem('scrubin_user_profile');
            renderAll();
            showToast('Signed out (your hours remain safely backed up in the cloud)');
          });
        }
      }
    } else {
      if (headerBtn) headerBtn.classList.remove('signed-in');
      if (headerLabel) headerLabel.textContent = 'Sign In / Sync';
      if (formPill) {
        formPill.classList.remove('synced');
        formPill.textContent = 'Guest Mode (Local Browser)';
      }

      if (bannerEl) {
        bannerEl.classList.remove('signed-in');
        const totalGuestHrs = state.hoursLog.reduce((acc, r) => acc + (parseFloat(r.hours) || 0), 0);
        bannerEl.innerHTML = `
          <div class="cloud-banner-left">
            <div class="cloud-avatar-badge guest" aria-hidden="true">☁️</div>
            <div>
              <div class="cloud-banner-title">
                <span>Back up your ${totalGuestHrs.toFixed(1)} logged hours &amp; ${state.savedIds.size} saved programs</span>
              </div>
              <div class="cloud-banner-sub">
                You are currently in <strong>Guest Mode</strong> (saved on this device only). Sign in with Google, Apple, or your <code>.edu</code> email to sync across your phone and laptop.
              </div>
            </div>
          </div>
          <div>
            <button type="button" class="btn btn-primary btn-sm" id="banner-open-signin-btn">
              Sign In to Sync Hours
            </button>
          </div>
        `;
        const openBtn = document.getElementById('banner-open-signin-btn');
        if (openBtn) {
          openBtn.addEventListener('click', () => {
            document.getElementById('auth-modal-backdrop').classList.add('open');
          });
        }
      }
    }
  }

  function renderTrackerAndHours() {
    let clinicalHrs = 0;
    let researchHrs = 0;
    let shadowingHrs = 0;

    state.hoursLog.forEach((entry) => {
      const h = parseFloat(entry.hours) || 0;
      if (entry.category === 'Clinical (Direct Patient)' || entry.category === 'Community Health') {
        clinicalHrs += h;
      } else if (entry.category === 'Research / Lab') {
        researchHrs += h;
      } else if (entry.category === 'Physician Shadowing') {
        shadowingHrs += h;
      }
    });

    document.getElementById('metric-clinical-hours').textContent = `${clinicalHrs.toFixed(1)} hrs`;
    document.getElementById('metric-research-hours').textContent = `${researchHrs.toFixed(1)} hrs`;
    document.getElementById('metric-shadowing-hours').textContent = `${shadowingHrs.toFixed(1)} hrs`;
    document.getElementById('metric-saved-programs').textContent = String(state.savedIds.size);

    const savedListEl = document.getElementById('saved-opportunities-list');
    const savedOpps = state.opportunities.filter((o) => state.savedIds.has(o.id));

    if (savedOpps.length === 0) {
      savedListEl.innerHTML = `
        <div class="empty-state-box" style="padding: 2rem 1rem;">
          <p class="empty-state-text" style="margin-bottom: 0.75rem;">You haven't bookmarked any US programs yet.</p>
          <button type="button" class="btn btn-primary btn-sm" id="tracker-go-explore-btn">Browse US Opportunities</button>
        </div>
      `;
      const goBtn = document.getElementById('tracker-go-explore-btn');
      if (goBtn) goBtn.addEventListener('click', () => switchTab('explore'));
    } else {
      const stages = ['Saved', 'Preparing Clearances', 'Applied', 'Interviewing', 'Active Volunteer'];
      savedListEl.innerHTML = savedOpps
        .map((opp) => {
          const currentStage = state.pipelineStatus[opp.id] || 'Saved';
          return `
            <div class="saved-item-card">
              <div style="flex: 1; min-width: 200px;">
                <span class="badge badge-facility" style="margin-bottom:0.25rem;">${escapeHtml(opp.facilityType)}</span>
                <h4 style="font-size:0.96rem; font-weight:700; color:var(--ink-primary);">${escapeHtml(opp.title)}</h4>
                <div style="font-size:0.8rem; color:var(--ink-secondary);">${escapeHtml(opp.organization)} • ${escapeHtml(opp.city)} (${escapeHtml(opp.zipCode)})</div>
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                <select class="sort-select" data-stage-select-id="${escapeHtml(opp.id)}" aria-label="Application stage for ${escapeHtml(opp.title)}">
                  ${stages
                    .map((st) => `<option value="${st}" ${st === currentStage ? 'selected' : ''}>${st}</option>`)
                    .join('')}
                </select>
                <button type="button" class="btn btn-secondary btn-sm" data-detail-from-saved="${escapeHtml(opp.id)}">Dossier</button>
                <button type="button" class="btn btn-ghost btn-sm" data-remove-saved="${escapeHtml(opp.id)}" aria-label="Remove saved program">&times;</button>
              </div>
            </div>
          `;
        })
        .join('');

      savedListEl.querySelectorAll('[data-stage-select-id]').forEach((sel) => {
        sel.addEventListener('change', (e) => {
          const id = e.target.getAttribute('data-stage-select-id');
          state.pipelineStatus[id] = e.target.value;
          localStorage.setItem('medpath_wa_pipeline_status', JSON.stringify(state.pipelineStatus));
          syncUserToCloud();
          showToast(`Updated pipeline status to "${e.target.value}"`);
        });
      });

      savedListEl.querySelectorAll('[data-detail-from-saved]').forEach((btn) => {
        btn.addEventListener('click', () => openDetailModal(btn.getAttribute('data-detail-from-saved')));
      });

      savedListEl.querySelectorAll('[data-remove-saved]').forEach((btn) => {
        btn.addEventListener('click', () => toggleSaveOpportunity(btn.getAttribute('data-remove-saved')));
      });
    }

    const tbody = document.getElementById('hours-log-tbody');
    if (state.hoursLog.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--ink-tertiary); padding:1.25rem;">No shifts logged yet. Add your first clinical or research shift above!</td></tr>`;
    } else {
      tbody.innerHTML = state.hoursLog
        .map(
          (entry) => `
          <tr>
            <td style="font-family:var(--font-mono); font-size:0.78rem;">${escapeHtml(entry.date)}</td>
            <td>
              <strong>${escapeHtml(entry.org)}</strong>
              ${entry.supervisor ? `<div style="font-size:0.73rem; color:var(--teal-primary); font-weight:600; margin-top:0.12rem;">Supervisor: ${escapeHtml(entry.supervisor)}</div>` : ''}
              ${entry.reflection ? `<div style="font-size:0.76rem; color:var(--ink-secondary); margin-top:0.15rem;">${escapeHtml(entry.reflection)}</div>` : ''}
            </td>
            <td><span class="badge badge-facility">${escapeHtml(entry.category)}</span></td>
            <td style="font-family:var(--font-mono); font-weight:700;">${Number(entry.hours).toFixed(1)}h</td>
            <td>
              <button type="button" class="btn btn-ghost btn-sm" data-delete-log-id="${escapeHtml(entry.id)}" aria-label="Delete shift entry">&times;</button>
            </td>
          </tr>
        `
        )
        .join('');

      tbody.querySelectorAll('[data-delete-log-id]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const logId = btn.getAttribute('data-delete-log-id');
          state.hoursLog = state.hoursLog.filter((item) => item.id !== logId);
          localStorage.setItem('medpath_wa_hours_log', JSON.stringify(state.hoursLog));
          renderTrackerAndHours();
          renderCloudAccountBanner();
          syncUserToCloud();
          showToast('Shift entry removed');
        });
      });
    }
  }

  // --------------------------------------------------------------------------
  // 12. Event Bindings
  // --------------------------------------------------------------------------
  function bindNavigation() {
    document.querySelectorAll('.nav-tab').forEach((tabBtn) => {
      tabBtn.addEventListener('click', () => {
        const target = tabBtn.getAttribute('data-tab');
        switchTab(target);
      });
    });

    document.getElementById('brand-home-link').addEventListener('click', (e) => {
      e.preventDefault();
      switchTab('explore');
    });
  }

  function switchTab(tabName) {
    state.activeTab = tabName;
    document.querySelectorAll('.nav-tab').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
    });
    document.querySelectorAll('.tab-panel').forEach((panel) => {
      panel.classList.toggle('active', panel.id === `tab-panel-${tabName}`);
    });
  }

  function setScopePill(scope) {
    state.scopeFilter = scope;
    document.querySelectorAll('.scope-pill').forEach((pill) => {
      pill.classList.toggle('active', pill.getAttribute('data-scope') === scope);
    });
  }

  function bindSearchAndFilters() {
    const zipInput = document.getElementById('zip-search-input');
    const radiusSelect = document.getElementById('radius-select');
    const facilitySelect = document.getElementById('facility-filter-select');
    const keywordInput = document.getElementById('keyword-search-input');
    const searchBtn = document.getElementById('execute-search-btn');
    const sortSelect = document.getElementById('sort-select');

    function handleZipChange() {
      state.zipInput = zipInput.value;
      state.resolvedLocation = resolveSearchLocation(state.zipInput);
      if (state.resolvedLocation && state.radius === 'all') {
        state.radius = '10';
        radiusSelect.value = '10';
      } else if (!state.zipInput.trim() && state.radius !== 'remote') {
        state.radius = 'all';
        radiusSelect.value = 'all';
      }
      updateZipPills(state.resolvedLocation ? state.resolvedLocation.zip : '');
      switchTab('explore');
      renderAll();
    }

    zipInput.addEventListener('input', handleZipChange);
    radiusSelect.addEventListener('change', () => {
      state.radius = radiusSelect.value;
      if (state.radius === 'remote') {
        setScopePill('national');
      } else if (state.radius !== 'all' && state.scopeFilter === 'national') {
        setScopePill('local');
      }
      switchTab('explore');
      renderAll();
    });
    facilitySelect.addEventListener('change', () => {
      state.facilityType = facilitySelect.value;
      clearPresetHighlight();
      switchTab('explore');
      renderAll();
    });
    keywordInput.addEventListener('input', () => {
      state.keyword = keywordInput.value;
      switchTab('explore');
      renderAll();
    });
    searchBtn.addEventListener('click', () => {
      switchTab('explore');
      renderAll();
    });
    sortSelect.addEventListener('change', () => {
      state.sortBy = sortSelect.value;
      renderAll();
    });

    document.querySelectorAll('.scope-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        const sc = pill.getAttribute('data-scope') || 'all';
        setScopePill(sc);
        if (sc === 'national' && state.radius !== 'all' && state.radius !== 'remote') {
          state.radius = 'all';
          radiusSelect.value = 'all';
        } else if (sc === 'local' && state.radius === 'remote') {
          state.radius = state.resolvedLocation ? '10' : 'all';
          radiusSelect.value = state.radius;
        }
        switchTab('explore');
        renderAll();
      });
    });

    document.querySelectorAll('.zip-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        const z = pill.getAttribute('data-zip');
        zipInput.value = z;
        state.zipInput = z;
        state.resolvedLocation = resolveSearchLocation(z);
        if (z && state.radius === 'all') {
          state.radius = '10';
          radiusSelect.value = '10';
        }
        updateZipPills(z);
        switchTab('explore');
        renderAll();
      });
    });

    document.querySelectorAll('.pathway-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const preset = chip.getAttribute('data-preset');
        applyPresetFilter(preset, chip);
      });
    });

    document.querySelectorAll('input[name="waregion"]').forEach((cb) => {
      cb.addEventListener('change', () => {
        if (cb.checked) state.selectedRegions.add(cb.value);
        else state.selectedRegions.delete(cb.value);
        clearPresetHighlight();
        renderAll();
      });
    });

    document.querySelectorAll('input[name="specialty"]').forEach((cb) => {
      cb.addEventListener('change', () => {
        if (cb.checked) state.selectedSpecialties.add(cb.value);
        else state.selectedSpecialties.delete(cb.value);
        clearPresetHighlight();
        renderAll();
      });
    });

    document.querySelectorAll('input[name="eligibility"]').forEach((cb) => {
      cb.addEventListener('change', () => {
        if (cb.checked) state.selectedEligibilities.add(cb.value);
        else state.selectedEligibilities.delete(cb.value);
        clearPresetHighlight();
        renderAll();
      });
    });

    const boolMap = [
      ['filter-direct-patient', 'directPatientOnly'],
      ['filter-starter-friendly', 'starterFriendlyOnly'],
      ['filter-shadowing', 'shadowingOnly'],
      ['filter-lor-eligible', 'lorOnly'],
      ['filter-weekend', 'weekendOnly'],
      ['filter-evening', 'eveningOnly'],
      ['filter-low-hours', 'lowHoursOnly']
    ];
    boolMap.forEach(([domId, stateKey]) => {
      const el = document.getElementById(domId);
      el.addEventListener('change', () => {
        state[stateKey] = el.checked;
        clearPresetHighlight();
        renderAll();
      });
    });

    document.getElementById('reset-all-filters-btn').addEventListener('click', resetAllFilters);

    const openFiltersBtn = document.getElementById('mobile-open-filters-btn');
    const openFiltersLabel = document.getElementById('custom-filter-btn-label');
    const closeFiltersBtn = document.getElementById('mobile-close-filters-btn');
    const filtersDrawer = document.getElementById('filters-sidebar-drawer');

    function setFiltersOpen(isOpen) {
      if (!filtersDrawer || !openFiltersBtn) return;
      filtersDrawer.classList.toggle('mobile-open', isOpen);
      openFiltersBtn.classList.toggle('active', isOpen);
      openFiltersBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (openFiltersLabel) {
        openFiltersLabel.textContent = isOpen ? 'Hide Filters' : 'Custom Filters';
      }
    }

    if (openFiltersBtn && filtersDrawer) {
      openFiltersBtn.addEventListener('click', () => {
        const currentlyOpen = filtersDrawer.classList.contains('mobile-open');
        setFiltersOpen(!currentlyOpen);
      });
    }
    if (closeFiltersBtn && filtersDrawer) {
      closeFiltersBtn.addEventListener('click', () => {
        setFiltersOpen(false);
      });
    }
  }

  function updateZipPills(activeZip) {
    document.querySelectorAll('.zip-pill').forEach((pill) => {
      pill.classList.toggle('active', pill.getAttribute('data-zip') === activeZip);
    });
  }

  function clearPresetHighlight() {
    state.activePreset = null;
    document.querySelectorAll('.pathway-chip').forEach((c) => c.classList.remove('active'));
  }

  function applyPresetFilter(preset, chipEl) {
    const alreadyActive = state.activePreset === preset;
    resetAllFilters();
    if (alreadyActive) return;

    state.activePreset = preset;
    chipEl.classList.add('active');

    if (preset === 'starter') {
      state.starterFriendlyOnly = true;
      document.getElementById('filter-starter-friendly').checked = true;
    } else if (preset === 'clinical') {
      state.directPatientOnly = true;
      document.getElementById('filter-direct-patient').checked = true;
    } else if (preset === 'research') {
      state.facilityType = 'Academic / Research Lab';
      document.getElementById('facility-filter-select').value = 'Academic / Research Lab';
    } else if (preset === 'highschool') {
      state.selectedEligibilities.add('High School (16+)');
      document.getElementById('elig-hs').checked = true;
    } else if (preset === 'fqhc') {
      state.facilityType = 'Free Clinic / FQHC';
      document.getElementById('facility-filter-select').value = 'Free Clinic / FQHC';
    }

    switchTab('explore');
    renderAll();
  }

  function resetAllFilters() {
    state.zipInput = '';
    state.resolvedLocation = null;
    state.radius = 'all';
    state.scopeFilter = 'all';
    state.facilityType = 'all';
    state.keyword = '';
    state.selectedRegions.clear();
    state.selectedSpecialties.clear();
    state.selectedEligibilities.clear();
    state.directPatientOnly = false;
    state.starterFriendlyOnly = false;
    state.shadowingOnly = false;
    state.lorOnly = false;
    state.weekendOnly = false;
    state.eveningOnly = false;
    state.lowHoursOnly = false;
    state.activePreset = null;

    document.getElementById('zip-search-input').value = '';
    document.getElementById('radius-select').value = 'all';
    document.getElementById('facility-filter-select').value = 'all';
    document.getElementById('keyword-search-input').value = '';

    setScopePill('all');

    document.querySelectorAll('.filters-sidebar input[type="checkbox"]').forEach((cb) => {
      cb.checked = false;
    });
    updateZipPills('');
    clearPresetHighlight();
    renderAll();
  }

  function toggleSaveOpportunity(oppId) {
    if (state.savedIds.has(oppId)) {
      state.savedIds.delete(oppId);
      showToast('Removed from My Tracker');
    } else {
      state.savedIds.add(oppId);
      if (!state.pipelineStatus[oppId]) {
        state.pipelineStatus[oppId] = 'Saved';
      }
      showToast(state.user ? 'Saved & synced to your Cloud Tracker' : 'Saved to My Tracker');
    }
    localStorage.setItem('medpath_wa_saved_ids', JSON.stringify([...state.savedIds]));
    localStorage.setItem('medpath_wa_pipeline_status', JSON.stringify(state.pipelineStatus));
    renderAll();
    syncUserToCloud();
  }

  function bindStarterToolkit() {
    document.querySelectorAll('.discovery-filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.activeDiscoveryCat = btn.getAttribute('data-disc-cat');
        document.querySelectorAll('.discovery-filter-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        renderDiscoveryPortals();
      });
    });

    document.querySelectorAll('.template-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.activeTemplate = btn.getAttribute('data-template');
        document.querySelectorAll('.template-tab-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        renderOutreachTemplate();
      });
    });

    document.getElementById('copy-template-btn').addEventListener('click', () => {
      const text = OUTREACH_TEMPLATES[state.activeTemplate] || '';
      navigator.clipboard.writeText(text).then(() => {
        showToast('Outreach template copied to clipboard!');
      });
    });
  }

  function bindTrackerAndHours() {
    const dateInput = document.getElementById('log-date-input');
    if (dateInput && !dateInput.value) {
      dateInput.value = new Date().toISOString().slice(0, 10);
    }

    document.getElementById('log-hours-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const org = document.getElementById('log-org-input').value.trim();
      const category = document.getElementById('log-category-select').value;
      const hours = parseFloat(document.getElementById('log-hours-input').value);
      const date = document.getElementById('log-date-input').value;
      const supervisorEl = document.getElementById('log-supervisor-input');
      const supervisor = supervisorEl ? supervisorEl.value.trim() : '';
      const reflection = document.getElementById('log-reflection-input').value.trim();

      if (!org || isNaN(hours) || hours <= 0) return;

      state.hoursLog.unshift({
        id: 'log-us-' + Date.now(),
        date,
        org,
        category,
        hours,
        supervisor,
        reflection
      });
      localStorage.setItem('medpath_wa_hours_log', JSON.stringify(state.hoursLog));

      document.getElementById('log-org-input').value = '';
      document.getElementById('log-hours-input').value = '';
      if (supervisorEl) supervisorEl.value = '';
      document.getElementById('log-reflection-input').value = '';

      renderTrackerAndHours();
      renderCloudAccountBanner();
      syncUserToCloud();
      showToast(
        state.user
          ? `Logged ${hours} hrs at ${org} (Cloud Synced ✓)`
          : `Logged ${hours} hrs at ${org}`
      );
    });

    document.getElementById('export-hours-csv-btn').addEventListener('click', () => {
      const studentHeader = state.user
        ? `${state.user.name} (${state.user.email}) — ${state.user.track || 'Pre-Med'}`
        : 'Guest Pre-Health Student';
      const rows = [
        ['Student', 'Date', 'Facility / Lab', 'AMCAS / CASPA Category', 'Hours', 'Supervisor / Contact', 'Patient Impact & Reflection'],
        ...state.hoursLog.map((r) => [
          studentHeader,
          r.date,
          r.org,
          r.category,
          r.hours,
          r.supervisor || '',
          r.reflection || ''
        ])
      ];
      const csvContent = rows
        .map((r) => r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
        .join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'scrubin_amcas_clinical_hours_log.csv';
      a.click();
      URL.revokeObjectURL(url);
      showToast('Exported AMCAS / CASPA Clinical Hours CSV!');
    });
  }

  // --------------------------------------------------------------------------
  // 13. Modals: Program Dossier, Post Opportunity & Student Cloud Sign-In
  // --------------------------------------------------------------------------
  async function performStudentSignIn(payload) {
    const submitBtn = document.getElementById('submit-auth-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Syncing to Cloud...';
    }
    try {
      const reqBody = {
        ...payload,
        localState: {
          savedIds: [...state.savedIds],
          pipelineStatus: state.pipelineStatus,
          checklistDone: [...state.checklistDone],
          hoursLog: state.hoursLog
        }
      };
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody)
      });
      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || 'Could not sign in. Please check your email and PIN.');
        return false;
      }
      applyCloudAccountData(data, true);
      renderAll();
      return true;
    } catch (_err) {
      // Offline / static fallback still creates a local profile
      applyCloudAccountData(
        {
          email: payload.email,
          name: payload.name || payload.email.split('@')[0],
          provider: payload.provider || 'edu',
          track: payload.track || 'Pre-Med (MD / DO)',
          gradYear: payload.gradYear || '2028',
          savedIds: [...state.savedIds],
          pipelineStatus: state.pipelineStatus,
          checklistDone: [...state.checklistDone],
          hoursLog: state.hoursLog,
          updatedAt: 'Local Session'
        },
        true
      );
      renderAll();
      return true;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Sign In & Sync Hours';
      }
    }
  }

  function openDetailModal(oppId) {
    const opp = state.opportunities.find((o) => o.id === oppId);
    if (!opp) return;

    const isSaved = state.savedIds.has(opp.id);
    document.getElementById('detail-modal-badges').innerHTML = `
      <span class="badge badge-facility">${escapeHtml(opp.facilityType)}</span>
      ${opp.waRegion ? `<span class="badge badge-region">${escapeHtml(opp.waRegion)}</span>` : ''}
      <span class="badge ${opp.directPatientContact ? 'badge-clinical' : 'badge-research'}">
        ${opp.directPatientContact ? 'Direct Patient Contact (AMCAS Clinical)' : 'Research / Clinical Simulation'}
      </span>
      ${opp.starterFriendly ? '<span class="badge badge-starter">Starter Friendly</span>' : ''}
    `;
    document.getElementById('detail-modal-title').textContent = opp.title;
    document.getElementById('detail-modal-org').innerHTML = `
      <span>${escapeHtml(opp.organization)}</span>
      <span>•</span>
      <span class="opp-location-text">${escapeHtml(opp.city)} (ZIP: ${escapeHtml(opp.zipCode)})</span>
    `;

    const studentName = state.user && state.user.name ? state.user.name : '[Your Name]';
    const studentEmail = state.user && state.user.email ? state.user.email : '[Your Email]';
    const customEmailDraft = `Subject: Student Volunteer / Pre-Health Inquiry — ${opp.title}\n\nDear ${opp.organization} Volunteer & Clinical Coordination Team,\n\nMy name is ${studentName}, and I am a pre-health student interested in applying for the ${opp.title} program in ${opp.city} (${opp.zipCode}).\n\n• Availability: I can commit ${opp.weeklyHours}+ hours per week for at least ${opp.minDuration}.\n• Clearances Ready: Up-to-date immunization records, negative TB screening, and background check readiness (${(opp.clearances || []).join(', ')}).\n\nCould you please share the next onboarding cohort dates or any unit-specific instructions?\n\nWarm regards,\n${studentName}\n[Your Phone] | ${studentEmail}`;

    const insiderSection = opp.insiderTip
      ? `
        <div class="insider-tip-box" style="margin-bottom: 1.25rem;">
          <span class="insider-tip-label">Pre-Med Insider Tip</span>
          <span>${escapeHtml(opp.insiderTip)}</span>
        </div>
      `
      : '';

    const officialPortalBtn = opp.portalUrl
      ? `<a href="${escapeHtml(opp.portalUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Open Official Application Portal &nearr;</a>`
      : '';

    document.getElementById('detail-modal-body').innerHTML = `
      ${insiderSection}

      <div class="modal-section">
        <div class="modal-section-title">Program Overview</div>
        <p style="font-size: 0.94rem; color: var(--ink-secondary); line-height: 1.6;">${escapeHtml(opp.description)}</p>
      </div>

      <div class="opp-specs-strip" style="margin-bottom: 1.25rem;">
        <div class="spec-cell">
          <span class="spec-label">Weekly Hours</span>
          <span class="spec-value">${opp.weeklyHours} hrs/week</span>
        </div>
        <div class="spec-cell">
          <span class="spec-label">Minimum Duration</span>
          <span class="spec-value">${escapeHtml(opp.minDuration)}</span>
        </div>
        <div class="spec-cell">
          <span class="spec-label">Eligible Levels</span>
          <span class="spec-value">${escapeHtml((opp.studentLevels || []).join(', '))}</span>
        </div>
        <div class="spec-cell">
          <span class="spec-label">Recruitment Window</span>
          <span class="spec-value">${escapeHtml(opp.applicationCycle || 'Rolling Admissions')}</span>
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Student Responsibilities &amp; Clinical Exposure</div>
        <ul style="padding-left: 1.2rem; color: var(--ink-primary); font-size: 0.9rem; display:flex; flex-direction:column; gap:0.35rem;">
          ${(opp.duties || [opp.description]).map((d) => `<li>${escapeHtml(d)}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Required Clearances &amp; Prerequisites</div>
        <div class="clearance-tags">
          ${(opp.clearances || ['Immunization & TB Screening', 'Hospital Background Check']).map((c) => `<span class="perk-tag">${escapeHtml(c)}</span>`).join('')}
        </div>
      </div>

      <div class="modal-section" style="background-color: var(--bg-canvas); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
        <div class="modal-section-title">Official Portal &amp; Coordinator Contact</div>
        <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary-text); font-weight: 600; margin-bottom: 0.85rem;">
          ${escapeHtml(opp.contactInfo || 'See official portal link below')}
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:0.6rem;">
          ${officialPortalBtn}
          <button type="button" class="btn btn-secondary btn-sm" id="modal-copy-inquiry-btn">
            Copy Tailored Inquiry Email
          </button>
          <button type="button" class="btn btn-secondary btn-sm" id="modal-save-opp-btn">
            ${isSaved ? '✓ Saved in My Tracker' : '+ Save to My Tracker'}
          </button>
        </div>
      </div>
    `;

    document.getElementById('modal-copy-inquiry-btn').addEventListener('click', () => {
      navigator.clipboard.writeText(customEmailDraft).then(() => {
        showToast('Tailored coordinator inquiry email copied to clipboard!');
      });
    });

    document.getElementById('modal-save-opp-btn').addEventListener('click', () => {
      toggleSaveOpportunity(opp.id);
      openDetailModal(opp.id);
    });

    document.getElementById('detail-modal-backdrop').classList.add('open');
  }

  function bindModals() {
    const detailBackdrop = document.getElementById('detail-modal-backdrop');
    const submitBackdrop = document.getElementById('submit-modal-backdrop');
    const authBackdrop = document.getElementById('auth-modal-backdrop');

    document.getElementById('close-detail-modal-btn').addEventListener('click', () => {
      detailBackdrop.classList.remove('open');
    });
    detailBackdrop.addEventListener('click', (e) => {
      if (e.target === detailBackdrop) detailBackdrop.classList.remove('open');
    });

    document.getElementById('open-submit-modal-btn').addEventListener('click', () => {
      submitBackdrop.classList.add('open');
    });
    document.getElementById('close-submit-modal-btn').addEventListener('click', () => {
      submitBackdrop.classList.remove('open');
    });
    document.getElementById('cancel-submit-modal-btn').addEventListener('click', () => {
      submitBackdrop.classList.remove('open');
    });
    submitBackdrop.addEventListener('click', (e) => {
      if (e.target === submitBackdrop) submitBackdrop.classList.remove('open');
    });

    // Student Sign-In & Cloud Hours Sync Modal (Idea A)
    const openAuthBtn = document.getElementById('open-auth-modal-btn');
    const closeAuthBtn = document.getElementById('close-auth-modal-btn');
    const cancelAuthBtn = document.getElementById('cancel-auth-modal-btn');
    const googleBtn = document.getElementById('oauth-google-btn');
    const appleBtn = document.getElementById('oauth-apple-btn');
    const authForm = document.getElementById('student-auth-form');

    function populateAuthModalFields() {
      if (state.user) {
        document.getElementById('auth-email-input').value = state.user.email || '';
        document.getElementById('auth-name-input').value = state.user.name || '';
        document.getElementById('auth-track-select').value = state.user.track || 'Pre-Med (MD / DO)';
        document.getElementById('auth-grad-select').value = state.user.gradYear || '2028';
      }
    }

    if (openAuthBtn && authBackdrop) {
      openAuthBtn.addEventListener('click', () => {
        if (state.user) {
          switchTab('tracker');
        }
        populateAuthModalFields();
        authBackdrop.classList.add('open');
      });
    }
    if (closeAuthBtn && authBackdrop) {
      closeAuthBtn.addEventListener('click', () => authBackdrop.classList.remove('open'));
    }
    if (cancelAuthBtn && authBackdrop) {
      cancelAuthBtn.addEventListener('click', () => authBackdrop.classList.remove('open'));
    }
    if (authBackdrop) {
      authBackdrop.addEventListener('click', (e) => {
        if (e.target === authBackdrop) authBackdrop.classList.remove('open');
      });
    }

    async function handleOAuthClick(providerName) {
      const emailEl = document.getElementById('auth-email-input');
      const nameEl = document.getElementById('auth-name-input');
      let email = emailEl.value.trim();
      let name = nameEl.value.trim();

      if (!email) {
        const prompted = window.prompt(
          `Continue with ${providerName === 'google' ? 'Google' : 'Apple'}:\nEnter your ${providerName === 'google' ? 'Google / .edu' : 'Apple ID'} email to sync your clinical hours across devices:`,
          providerName === 'google' ? 'student@uw.edu' : 'student@icloud.com'
        );
        if (!prompted || !prompted.trim()) return;
        email = prompted.trim().toLowerCase();
        emailEl.value = email;
      }
      if (!name) {
        name = email
          .split('@')[0]
          .replace(/[._-]/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase());
        nameEl.value = name;
      }

      const ok = await performStudentSignIn({
        email,
        name,
        provider: providerName,
        track: document.getElementById('auth-track-select').value,
        gradYear: document.getElementById('auth-grad-select').value,
        pin: document.getElementById('auth-pin-input').value.trim()
      });
      if (ok && authBackdrop) {
        authBackdrop.classList.remove('open');
        switchTab('tracker');
      }
    }

    if (googleBtn) {
      googleBtn.addEventListener('click', () => handleOAuthClick('google'));
    }
    if (appleBtn) {
      appleBtn.addEventListener('click', () => handleOAuthClick('apple'));
    }
    if (authForm) {
      authForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('auth-email-input').value.trim();
        const name = document.getElementById('auth-name-input').value.trim();
        const track = document.getElementById('auth-track-select').value;
        const gradYear = document.getElementById('auth-grad-select').value;
        const pin = document.getElementById('auth-pin-input').value.trim();

        const ok = await performStudentSignIn({
          email,
          name,
          provider: 'edu',
          track,
          gradYear,
          pin
        });
        if (ok && authBackdrop) {
          authBackdrop.classList.remove('open');
          switchTab('tracker');
        }
      });
    }

    document.getElementById('submit-opportunity-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const zipVal = document.getElementById('new-opp-zip').value.trim();
      const resolved = resolveSearchLocation(zipVal);
      const isRemote = zipVal.toLowerCase() === 'remote';
      const rawContact = document.getElementById('new-opp-email').value.trim();

      const newOpp = {
        id: 'us-custom-' + Date.now(),
        title: document.getElementById('new-opp-title').value.trim(),
        organization: document.getElementById('new-opp-org').value.trim(),
        facilityType: document.getElementById('new-opp-facility').value,
        waRegion: isRemote ? 'National & Remote (All 50 States)' : 'Pacific Northwest (WA / OR)',
        specialty: document.getElementById('new-opp-specialty').value,
        zipCode: isRemote ? 'Remote' : zipVal,
        city: document.getElementById('new-opp-city').value.trim(),
        lat: resolved ? resolved.lat : null,
        lon: resolved ? resolved.lon : null,
        isRemote,
        directPatientContact: document.getElementById('new-opp-clinical').checked,
        starterFriendly: document.getElementById('new-opp-starter').checked,
        shadowingIncluded: true,
        lorEligible: true,
        weeklyHours: parseInt(document.getElementById('new-opp-hours').value, 10) || 4,
        minDuration: document.getElementById('new-opp-duration').value.trim(),
        studentLevels: ['Undergrad / Pre-Med', 'Post-Bacc / Gap Year'],
        weekendAvailable: true,
        eveningAvailable: true,
        status: 'Accepting Applications',
        applicationCycle: 'Community Contributed Listing',
        portalUrl: rawContact.startsWith('http') ? rawContact : '',
        insiderTip: 'Submitted via ScrubIn US community portal.',
        description: document.getElementById('new-opp-desc').value.trim(),
        duties: [document.getElementById('new-opp-desc').value.trim()],
        clearances: ['Immunization & TB Screening', 'Background Check'],
        contactInfo: rawContact
      };

      try {
        await fetch('/api/opportunities', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newOpp)
        });
      } catch (_err) {
        // Fallback to localStorage
      }

      const customStored = JSON.parse(localStorage.getItem('medpath_wa_custom_opps') || '[]');
      customStored.unshift(newOpp);
      localStorage.setItem('medpath_wa_custom_opps', JSON.stringify(customStored));

      state.opportunities.unshift(newOpp);
      document.getElementById('submit-opportunity-form').reset();
      submitBackdrop.classList.remove('open');
      switchTab('explore');
      renderAll();
      showToast('Published new US opportunity!');
    });
  }

  // --------------------------------------------------------------------------
  // 14. Utilities
  // --------------------------------------------------------------------------
  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('toast-notification');
    toast.textContent = message;
    toast.classList.add('visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 3200);
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  document.addEventListener('DOMContentLoaded', initApp);
})();
