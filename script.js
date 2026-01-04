var map = L.map('map').setView([15.3350, 76.4600], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

function addMonument(lat, lon, name, desc) {
  L.marker([lat, lon])
    .addTo(map)
    .bindPopup(`<b>${name}</b><br>${desc}`);
}

/* Temples */
addMonument(15.3357,76.4605,"Virupaksha Temple","Oldest active Shiva temple.");
addMonument(15.3350,76.4730,"Vittala Temple","Stone Chariot & musical pillars.");
addMonument(15.3335,76.4691,"Achyutaraya Temple","Grand Vijayanagara temple.");
addMonument(15.3324,76.4628,"Hazara Rama Temple","Ramayana carvings.");
addMonument(15.3312,76.4660,"Krishna Temple","Victory temple of Vijayanagara.");
addMonument(15.3341,76.4621,"Badavi Linga","Large monolithic Shiva linga.");
addMonument(15.3329,76.4634,"Sasivekalu Ganesha","Monolithic Ganesha statue.");
addMonument(15.3346,76.4639,"Kadalekalu Ganesha","Huge Ganesha sculpture.");
addMonument(15.3317,76.4649,"Patabhirama Temple","Royal temple complex.");
addMonument(15.3360,76.4590,"Chandrasekhara Temple","Small shrine near Virupaksha.");

/* Royal Enclosures */
addMonument(15.3319,76.4693,"Lotus Mahal","Indo-Islamic pavilion.");
addMonument(15.3347,76.4668,"Elephant Stables","Royal elephant shelter.");
addMonument(15.3314,76.4705,"Queen's Bath","Ornate bathing structure.");
addMonument(15.3311,76.4683,"Mahanavami Dibba","Ceremonial platform.");
addMonument(15.3305,76.4670,"Royal Enclosure","Administrative zone.");

/* Markets */
addMonument(15.3361,76.4603,"Hampi Bazaar","Ancient trading street.");
addMonument(15.3359,76.4609,"Virupaksha Bazaar","Market near temple.");
addMonument(15.3313,76.4663,"Krishna Bazaar","Temple-centered market.");
addMonument(15.3300,76.4650,"Sule Bazaar","Royal market street.");

/* Hills & Water */
addMonument(15.3390,76.4660,"Matanga Hill","Panoramic viewpoint.");
addMonument(15.3342,76.4623,"Hemakuta Hill","Sacred hill temples.");
addMonument(15.3535,76.4740,"Anjanadri Hill","Birthplace of Hanuman.");
addMonument(15.3368,76.4582,"Tungabhadra River","Lifeline of Hampi.");
addMonument(15.3320,76.4699,"Stepped Tank","Ancient water reservoir.");
addMonument(15.3331,76.4702,"Pushkarani","Temple water tank.");
addMonument(15.3338,76.4711,"Ancient Aqueducts","Water management system.");

/* Others */
addMonument(15.3327,76.4698,"Underground Shiva Temple","Pralaya Kaal Temple.");
addMonument(15.3310,76.4709,"Zenana Enclosure","Royal women quarters.");
addMonument(15.3308,76.4689,"Watch Towers","Defense structures.");
addMonument(15.3315,76.4700,"Octagonal Bath","Royal bathing area.");
