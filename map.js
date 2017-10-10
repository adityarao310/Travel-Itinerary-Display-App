// custom marker icon in the map var markerImage = 'images/marker.png';
// global arrays and variables to be used later
var markers = [];
var airports = [];
var flightLine, map, mainInfowindow;
var directionsService, directionsDisplay;

// main map function loaded
function initMap() {
    // create the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: office,
        zoom: 7,
        styles: styles, // coming from styles.js
        mapTypeControl: false,
    });

    // initialise InfoWindow
    mainInfowindow = new google.maps.InfoWindow({
        maxWidth: 400,
    });

    // Store markers and airpots in map from locations.js
    for (var i = 0; i < locations.length; i++) {
        // create location markers, not airport
        // get position and title from DB later
        var position = locations[i].location;
        var title = locations[i].title;
        // create diff icons for airprot and location
        if (locations[i].airport === false) {
            // create a marker for every location
            var marker = new google.maps.Marker({
                position: position,
                // map: map, // element to be inserted on click, not needed here
                title: title,
                animation: google.maps.Animation.DROP,
                id: i,
                label: locations[i].number.toString(),
            });
            // push each marker into the empty array for use later
            markers.push(marker);
            // open main info window on click
            marker.addListener('click', function() {
                populateInfoWindow(this, mainInfowindow);
            });
        } else if (locations[i].airport === true) {
            var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
            var airport = new google.maps.Marker({
                position: position,
                // map: map, // element to be inserted on click, not needed here
                title: title,
                animation: google.maps.Animation.DROP,
                id: i,
                label: locations[i].number.toString(),
                icon: image,
            });
            // push each airport into the empty array for use later
            airports.push(airport);
            // open main info window on click
            airport.addListener('click', function() {
                populateInfoWindow(this, mainInfowindow);
            });
        };
    };

    // flight line design and create new geodesic polyline
    flightLine = new google.maps.Polyline({
        strokeColor: '#CC0099',
        strokeOpacity: 1.0,
        strokeWeight: 3,
        // map: map,
        geodesic: true,
    });

    // path definition @ origin and destination
    var path = [airports[0].getPosition(), airports[1].getPosition()];
    flightLine.setPath(path);

    // event listeners when the hide, show buttons are clicked
    document.getElementById('show-listings').addEventListener('click', showListings);
    document.getElementById('hide-listings').addEventListener('click', hideListings);
    document.getElementById('show-routes').addEventListener('click', showRoutes);
    document.getElementById('hide-routes').addEventListener('click', hideRoutes);
};

// function to populate info window of marker
function populateInfoWindow(marker, infowindow) {
    // main content of window stored here
    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">' + marker.title + '</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the ' +
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
        'south west of the nearest large town, Alice Springs; 450&#160;km ' +
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
        'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
        'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
        'Aboriginal people of the area. It has many springs, waterholes, ' +
        'rock caves and ancient paintings. Uluru is listed as a World ' +
        'Heritage Site.</p>' +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
        '(last visited June 22, 2009).</p>' +
        '</div>' +
        '</div>';

    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent(contentString);
        infowindow.open(map, marker);
        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick', function() {
            infowindow.setMarker = null;
        });
    }
}

// This function will loop through the markers array and display them all.
function showListings() {
    var bounds = new google.maps.LatLngBounds();
    // Extend the boundaries NE <> SW of map and display markers
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        bounds.extend(markers[i].position);
    }
    for (var i = 0; i < airports.length; i++) {
        airports[i].setMap(map);
        bounds.extend(airports[i].position);
    }
    map.fitBounds(bounds);
    flightLine.setMap(map); // show flightline
}

// This function will loop through the listings and hide them all.
function hideListings() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    for (var i = 0; i < airports.length; i++) {
        airports[i].setMap(null);
    }
    flightLine.setMap(null);
}

// display the routes and paths
function showRoutes(directionsService, directionsDisplay) {
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();

    var routeBetween = {
        origin: markers[2].position,
        destination: markers[3].position,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    }

    directionsService.route(routeBetween, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            directionsDisplay.setMap(map);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
};

// display the routes and paths
function hideRoutes(directionsService, directionsDisplay) {
    directionsDisplay.setMap(null);
};
