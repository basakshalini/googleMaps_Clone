mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhbGluaS1iYXNhayIsImEiOiJja3MyNXdzYWYwbG1yMm5vNGR6ZnN2OGhrIn0.90uvv5i2MEzJbfSWRXZDFA';
  
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    console.log(position)
    setUpMap([position.coords.longitude, position.coords.latitude])
}
 
function errorLocation() {
    setUpMap([-2.24, 53.48])

}

function setUpMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
      })

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav)

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        // unit: 'metric',
        // profile: 'mapbox/cycling'
    });
    map.addControl(directions, 'top-left');
}

