// Initialize map centered at Hampi
var map = L.map('map').setView([15.3350, 76.4600], 14);

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Function to add markers
function addMonument(lat, lon, title, description) {
  L.marker([lat, lon])
    .addTo(map)
    .bindPopup(`<b>${title}</b><br>${description}`);
}

// Monuments
addMonument(
  15.3357, 76.4605,
  "Virupaksha Temple",
  "Ancient Shiva temple and active pilgrimage site of Hampi."
);

addMonument(
  15.3350, 76.4730,
  "Vittala Temple",
  "Famous for musical pillars and the iconic Stone Chariot."
);

addMonument(
  15.3319, 76.4693,
  "Lotus Mahal",
  "Indo-Islamic style pavilion used by royal women."
);

addMonument(
  15.3347, 76.4668,
  "Elephant Stables",
  "Royal enclosure used to house ceremonial elephants."
);

addMonument(
  15.3324, 76.4628,
  "Hazara Rama Temple",
  "Temple with Ramayana scenes carved on its walls."
);
