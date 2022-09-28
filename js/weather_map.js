"use strict";

/*
 Creator: Deshawn Marquis, Williams,
 GitHub Profile: https://github.com/MarquisTheCoder,
 Date Created: 9/26/22,
 Time Created: 10:20 AM,
 File Name: weather_map.js,
 File Description: 
 */


$(function(){
     
     const DEFAULT_CITY = 'San Antonio, TX'
     const MAP_CONTAINER = $('#map-container')
     const WEATHER_INFO_CONTAINER = $('#weather-info-container')
     const SEARCH_BUTTON = $('#search-location-btn')
     
     updateScreen(DEFAULT_CITY, MAPBOX_API_KEY);
     // $('#current-city').text(`${DEFAULT_CITY}`)
     // let currentCity = DEFAULT_CITY
     
     
     
     //generating card to display map data
     let generateCards = function(
          date, temp, description, humidity, wind, pressure, icon){
          let cardTemplate = `
            <div class="card m-2 card-main" style="width: 18rem; background-color: #091A1F33">
                <div class="card-body d-flex-column text-center">
                     <h5 class="card-title text text-center" id="date"style="background-color: #12242933">${date}</h5>
                     <h6 class="card-subtitle mb-2 text-white text-center mt-3">${parseInt(1.8*(parseInt(temp)-273) + 32)}&#8457;</h6>
                     <img src="http://openweathermap.org/img/w/${icon}.png" alt="">
                     <hr>
                     <p class="card-text text-center data">Description - ${description}</p><hr>
                     <p class="card-text text-center data">Humidity - ${humidity}</p><hr>
                     <p class="card-text text-center data">Wind - ${wind}</p><hr>
                     <p class="card-text text-center data">Pressure - ${pressure}</p>
                </div>
            </div>`
          WEATHER_INFO_CONTAINER.append(cardTemplate)
            
     }
     
     //generating the latitude loingtitude form the 
     // map box api 
     function reverseGeocodeRestaurant(latitude, longitude, api_key){
                    let apiUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
                    return fetch(`${apiUrl}${longitude},${latitude}.json?access_token=${api_key}`)
                         .then((response) => response.json())
                         .then((responseData) => responseData.features[0].place_name)
               }
               
     function updateScreen(address, api_key) {
           
          geocodeRestaurant(address, api_key)
          .then(mapCoordinates => {
               
               
               let longitude = mapCoordinates[0]
               let latitude = mapCoordinates[1]
               
               
               reverseGeocodeRestaurant(latitude, longitude, api_key)
                    .then(placeName => $('#current-city').html(`${placeName.split(',')[1]}`))
               
               let apiCallUrl = 'https://api.openweathermap.org/data/2.5/' +
                    `forecast?lat=${latitude}&lon=${longitude}&` +
                    `appid=${WEATHERMAP_API_KEY}`
              
               
               //reinitializing the map per
               //request
              $('#map-container').html('')
               mapboxgl.accessToken = MAPBOX_API_KEY;
               let map = new mapboxgl.Map({
                                               container: 'map-container',
                                               style: 'mapbox://styles/mapbox/outdoors-v11',
                                               center: [-98.4916, 29.4252]
                                          })
               
               $.get(apiCallUrl).done(response => {
                    
                    //as the object array for the weather data in forecast is an
                    //array of 40 to get a 5 day forecast I had to filter by each 8th value
                    //and generate a card for each returned data set
                    response.list.filter((_e, index) => index % 8 === 0)
                         .forEach((weatherMapObject, index) => {
                         generateCards(
                              epochDateConversion(weatherMapObject.dt),
                              weatherMapObject.main.temp,
                              weatherMapObject.weather[0].description,
                              weatherMapObject.main.humidity,
                              weatherMapObject.wind.speed,
                              weatherMapObject.main.pressure,
                              weatherMapObject.weather[0].icon,
                         )
                    
                         // console.log(weatherMapObject)
                         // console.log(weatherMapObject.weather[0].main)
                    })
                    
                    map.setCenter(mapCoordinates)
                    map.setZoom(14)
                    
                    //setting marker
                    let marker = new mapboxgl.Marker({draggable: true})
                         .setLngLat(mapCoordinates)
                         .addTo(map)
                    
                   
                   //when marker is dragged it gets the place
                    //value of the coordinates with reverse geo code then
                    //updates the screen with that place value
                    marker.on('dragend', () => {
                         reverseGeocodeRestaurant(marker.getLngLat().lat, marker.getLngLat().lng, api_key)
                              .then(place =>{ 
                                   $('#weather-info-container').html('')
                                   updateScreen(place, api_key)
                              })
                    })
               })
          
          
          })
     }
    
     //converting the given unix time in miliseconds into
     //a human readable format
     function epochDateConversion(milliseconds){
          let date = new Date(milliseconds * 1000)
          return (`${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`)
     } 
     
     //getting long/lat coordinaties for a specific address
     function geocodeRestaurant(address, accessToken){
          let apiUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
          return fetch(`${apiUrl}${encodeURIComponent(address)}.json?access_token=${accessToken}`)
          .then((response) => response.json())
          .then((responseData) => responseData.features[0].center);
     }
     
    //on search button click updates information and map based
    // on input in #search-location input container 
     SEARCH_BUTTON.on('click',()=> {
          WEATHER_INFO_CONTAINER.html('')
          updateScreen($('#search-location').val(), MAPBOX_API_KEY)
          
          //deleting input text after search just a pet peeve
          $('#search-location').val('')
     })
     
     
})