"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 9/24/22,
 Time Created: 8:00 PM,
 File Name: mapbox_maps_api.js,
 File Description:
 main mapbox api request and functionality
 */
$(function() {
     
     
     let mapboxCount = 0;
     const MAPBOX_API_KEY = 'pk.eyJ1IjoibWFycXVpc3RoZWNvZGVyIiwiYSI6ImNsOGRrbWV6dDA1c3Qzb28weGN0bzltN2sifQ.0PeijQIaMTLSdpeT4we68Q';
     function addRestaurantMap(address, accessToken, name){
          
          //creates and up to date mapbox container id
          let mapboxId = `mapbox-container-${mapboxCount}`;
          
          //generating bootstrap html for map title and description
          let mapAndDescriptionSection = `
          <section class="border">
           
            <section class="row w-100 justify-content-center section-title">
                <h3>${name}</h3>
            </section>
            
            <section class="row">
                <section class="col-6">
                <div id=${mapboxId} style="width: 30vw; height: 10vh"></div>
            </section>
          
            <section class="col-6" id="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi debitis, esse, est excepturi
                texercitationem inventore, iure laudantium nam nostrum similique vel voluptatibus! Adipisci, facere.
            </section> 
            
          </section>
          `
          mapboxCount += 1;
          
          //pushing generated html to #main-container
          $('#main-container').append(mapAndDescriptionSection);
          
          //generating mapbox after html is generated
          mapboxgl.accessToken = accessToken;
          let map = new mapboxgl.Map({
                                     container: mapboxId,
                                     style: 'mapbox://styles/mapbox/streets-v9',
                                     zoom: 10,
                                     center: [-98.4916, 29.4252]
                                })
          geocodeRestaurant(address, accessToken)
               .then(coordinates)
     }
     addRestaurantMap('sdf', MAPBOX_API_KEY, 'asasdasd');
     addRestaurantMap('sdf', MAPBOX_API_KEY, 'asasdasd');
     
     
     //generates latitude/longitude array for address
     function geocodeRestaurant(address, accessToken) {
          var apiUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
          return fetch(`${apiUrl}${encodeURIComponent(adress)}.json?access_token=${accessToken}`)
          .then((response) => response.json())
          .then((responseData) => responseData.features[0].center);
     }
     
     
     
})
// let lng_lat = geocode('102 Navarro St, San Antonio, TX 78205', MAPBOX_API_KEY);
// console.log(lng_lat)
