'use strict';
// alert('maps.js is connected!');

let map;

function initMap() {
    // const initialCoords = {
    //     lat: 52.511225, 
    //     lng: 13.442983
    // };

    const map = new google.maps.Map(
        document.querySelector('#map'), {
            center: {
                lat: 52.511225, 
                lng: 13.442983
            },
            zoom: 13
        });

    document.querySelector('#geocode-address').addEventListener(
        'click', () => {
            const userAddress = prompt('Enter a location');
            console.log(userAddress);

            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({address: userAddress}, (results, status) => {
                if (status === 'OK') {
                    const userLocation = results[0].geometry.location;
                    console.log(userLocation);

                    map.setCenter(userLocation);
                    map.setZoom(16);
                }
                else {
                    alert(`Geocode was unsuccessful for the following 
                    reason: ${status}`);
                };
            });
        });
};