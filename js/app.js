

$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });

// MapBox 
mapboxgl.accessToken = 'pk.eyJ1IjoiZW1tYW51ZWxmYWJpYW5pIiwiYSI6ImNrcHh3YjY4MTA0c3QycW51cGdpYjB5NG8ifQ.UFPrVZw_3eIxRjWh0Hcu3w';
let map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center:[-3.22028, 55.95349,],
zoom: 14,
});
// MapBox $