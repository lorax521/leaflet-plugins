L.mapbox.accessToken = 'pk.eyJ1IjoibG9yYXg1MjEiLCJhIjoiY2owaW1uYXBiMDBlZDJxbzM4d2M1a3N6diJ9.jr45mw3pKka1dCwFfC4aOQ';

for (var i = 0; i < hospitals.features.length; i++) {
  hospitals.features[i].properties['marker-color'] = 'DC143C';
  hospitals.featires[i].properties[marker-symbol'] = 'hospital';
  hospitals.features[i].properties['marker-size'] = 'small';
}

for var j = 0; j < libraries.features.length; j++) {
  libraries.features[j].properties['marker-color'] = '#4169E1';
  libraries.features[j].properties['marker-symbol'] = 'library';
  libraries.features[j].properties['marker-size'] = 'small';
}

var map = L.mapbox.map('map', 'mapbox.light')
  .setView([38.05, -84.5], 12);
map.scrollWheelZoom.disable();

var hospitalLayer = L.mapbox.featureLayer(hospitals).addTo(map);
var libraryLayer = L.mapbox.featureLayer(libraries).addTo(map);

map.fitBounds(libraryLayer.getBounds());