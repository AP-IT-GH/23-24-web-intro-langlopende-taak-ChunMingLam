
let map = L.map('apMap').setView([51.23009, 4.41616], 20);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let apMarker = L.marker([51.23009, 4.41616]).addTo(map);

