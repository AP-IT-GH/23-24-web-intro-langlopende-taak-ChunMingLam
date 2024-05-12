let map = L.map('apMap').setView([51.21836115152761, 4.404975096015194], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let apMarker = L.marker([51.21836115152761, 4.404975096015194]).addTo(map);
apMarker.bindPopup("<b>Telenet winkel</b>").openPopup();
