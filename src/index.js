const mapboxgl = require("mapbox-gl");
const customMarker = require("./marker")

console.log("is this working?")

mapboxgl.accessToken = "pk.eyJ1IjoibWFsaGFydGVsaSIsImEiOiJjanQ0ajZtcTAwMTIxNDRvMTA0ZHd0aXF1In0.dR5-x8zS2JlRsZgjhTM1Yw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

customMarker('hotel', [-74.009, 40.705]).addTo(map)

// new mapboxgl.Marker(customMarker('hotel')).setLngLat([-74.009, 40.705]).addTo(map);
