'use strict';
alert('maps.js is connected!');


function initMap() {
    const initialCoords = {
        lat: 52.511225, 
        lng: 13.442983
    };

    const map = new google.maps.Map(
        document.querySelector('#map'), {
            center: initialCoords,
            zoom: 13
        });

    // Create new Google Maps Marker instance and configure
    // configuration must have "postion" and "map" values
    const initialMarker = new google.maps.Marker({
        position: initialCoords,
        icon: {
            url: '/static/img/map-marker.png',
            scaledSize: {
                width: 55,
                height: 55
            }
        },
        map: map
    }); 

    document.querySelector('#search-nyc-button').addEventListener('click', evt => {
        evt.preventDefault();
      
        const formInputs = {
          text: document.querySelector('#search_nyc_address').value,
        };
    
        console.log(formInputs);
      
        // Calling fetch directly to NYC Geosearch API results in CORS request blocking
        fetch("/api/search_address", {
          method: 'POST',
          body: JSON.stringify(formInputs),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => response.json())
          .then(responseText => {
    
            const searchedCoords = responseText;
            console.log(searchedCoords);
            // map.setCenter(searchedCoords);

          });

        // $.get('/api/bears', bears => {
        //     for (const bear of bears) {

        //     }     
        // });

      });


};