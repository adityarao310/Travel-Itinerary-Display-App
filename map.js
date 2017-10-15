// custom marker icon in the map var markerImage = 'images/marker.png';
// global arrays and variables to be used later
var markers = [];
var airports = [];
var ODPairList = [];
var flightLine, map, mainInfowindow;
var directionsService, directionsDisplay;

// constructor function to create new O.D.Pair object for routes
function ODPairCreation(originPosition, destinationPosition) {
    this.originPosition = originPosition;
    this.destinationPosition = destinationPosition;
}

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
        var day = locations[i].day;
        var link = locations[i].link;
        var description = locations[i].description;
        var image1 = locations[i].image1;
        var image2 = locations[i].image2;
        var image3 = locations[i].image3;
        // create diff icons for airprot and location
        if (locations[i].airport === false) {

            // each location's position > create new O.D.Pair object
            var newODPair = new ODPairCreation(locations[i].location, locations[i + 1].location);
            ODPairList.push(newODPair); // store it in empty list
            // list becomes [{origin, destination},{origin, destination}]
            // = [{marker0position, marker1position}, {marker1position, marker2position}]


            // create a marker for every location
            var marker = new google.maps.Marker({
                position: position,
                day: day,
                link: link,
                description: description,
                image1: image1,
                image2: image2,
                image3: image3,
                map: map,
                title: title,
                animation: google.maps.Animation.DROP,
                id: i + 1,
                label: locations[i].number.toString(),
            });

            // push each marker into the empty array for use later
            markers.push(marker);
            // open main info window on click
            marker.addListener('click', function() {
                populateInfoWindow(this, mainInfowindow); // called from infoWindow.js
            });
        } else if (locations[i].airport === true) {
            var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
            var airport = new google.maps.Marker({
                position: position,
                map: map,
                title: title,
                day: day,
                image1: image1,
                image2: image2,
                image3: image3,
                link: link,
                description: description,
                animation: google.maps.Animation.DROP,
                id: i + 1,
                label: locations[i].number.toString(),
                icon: image,
            });
            // push each airport into the empty array for use later
            airports.push(airport);
            // open main info window on click
            airport.addListener('click', function() {
                populateInfoWindow(this, mainInfowindow); // called from infoWindow.js
            });
        };
    };

    // flight line design and create new geodesic polyline
    flightLine = new google.maps.Polyline({
        strokeColor: '#CC0099',
        strokeOpacity: 1.0,
        strokeWeight: 3,
        map: map,
        geodesic: true,
    });
    // path definition @ origin and destination of flight
    var path = [airports[0].getPosition(), airports[1].getPosition()];
    flightLine.setPath(path);

    // show routes between locations
    showRoutes(directionsService, directionsDisplay);
};
