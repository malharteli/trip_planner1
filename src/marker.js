const mapboxgl = require("mapbox-gl");

let constructor = (markerType, locLngLat)=>{
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  switch(markerType){
    case 'activity':
      markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
    case 'hotel':
      markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png{"
    case 'restaurant':
      markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
  }

  return new mapboxgl.Marker(markerDomEl).setLngLat(locLngLat);
}

module.exports= constructor
