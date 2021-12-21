
let i = 0;
let text = "Full Stack Developer";
function typewriter() 
{
    
    if (i < text.length) 
    {
        document.getElementById("txt").innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, 100);
    }
}
typewriter();


//  map 
mapboxgl.accessToken = 'pk.eyJ1Ijoic3Vrcml0aS1rdWlsYSIsImEiOiJja3g5dzN6ZWUwdWZpMzFxYzU0aDF6ZzZoIn0.RbqFAInhDNLlYTVA2ayzLw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [88.3639, 22.5726],
    zoom: 18
});

