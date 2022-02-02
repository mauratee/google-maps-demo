'use strict';
// alert('maps.js is connected!');


function initMap() {
    const initialCoords = {
        lat: 52.511225, 
        lng: 13.442983
    };

    console.log(initialCoords);

    // Object { lat: 52.511225, lng: 13.442983 }
    // Object { lat: -73.926447, lng: 40.700852 }

    const map = new google.maps.Map(
        document.querySelector('#map'), {
            center: initialCoords,
            zoom: 13
        });

    console.log(map);

    // Create new Google Maps Marker instance and configure
    // configuration must have "postion" and "map" values
    // const initialMarker = new google.maps.Marker({
    //     position: initialCoords,
    //     icon: {
    //         url: '/static/img/map-marker.png',
    //         scaledSize: {
    //             width: 55,
    //             height: 55
    //         }
    //     },
    //     map: map
    // }); 

    // document.querySelector('#geocode-address').addEventListener(
    //     'click', () => {
    //         const userAddress = prompt('Enter a location');
    //         console.log(userAddress);

    //         const geocoder = new google.maps.Geocoder();
    //         geocoder.geocode({address: userAddress}, (results, status) => {
    //             if (status === 'OK') {
    //                 const userLocation = results[0].geometry.location;
    //                 console.log(userLocation);

    //                 // Result of console.log(userLocation)
                    
    //                 // Object { lat: lat(), lng: lng()
    //                 // }
    //                 // ​
    //                 // lat: function lat()​
    //                 // lng: function lng()​
    //                 // <prototype>: Object { toString: toString(), toJSON: toJSON(), equals: equals(a), … }

    //                 // construct custom Marker
    //                 const userLocationMarker = new google.maps.Marker({
    //                     position: userLocation,
    //                     icon: {
    //                         url: '/static/img/map-marker.png',
    //                         scaledSize: {
    //                             width: 55,
    //                             height: 55
    //                         }
    //                     },
    //                     map: map
    //                 });
                    
    //                 // reset map with new userLocation info
    //                 map.setCenter(userLocation);
    //                 map.setZoom(16);
    //             }
    //             else {
    //                 alert(`Geocode was unsuccessful for the following 
    //                 reason: ${status}`);
    //             };
    //         });
    //     });
};