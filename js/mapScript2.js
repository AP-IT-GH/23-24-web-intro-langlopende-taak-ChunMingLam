let map = L.map('apMap').setView([51.23421800710595, 4.459873869103817], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let apMarker = L.marker([51.23421800710595, 4.459873869103817]).addTo(map);
apMarker.bindPopup("<b>IT support</b>").openPopup();