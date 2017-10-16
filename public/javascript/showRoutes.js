// display the routes for flight and road
function showRoutes(directionsService, directionsDisplay) {
    flightLine.setMap(map); // show flight route

    directionsService = new google.maps.DirectionsService();
    var rendererDesign = {
        suppressMarkers: true // default A,B markers are placed by service API
    };
    directionsDisplay = new google.maps.DirectionsRenderer(rendererDesign);

    // generate route for every O.D.Pair in the list create before
    for (i = 0; i < ODPairList.length; i++) {
        var routeBetween = {
            origin: ODPairList[i].originPosition,
            destination: ODPairList[i].destinationPosition,
            travelMode: 'DRIVING'
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
};
