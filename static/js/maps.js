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
};