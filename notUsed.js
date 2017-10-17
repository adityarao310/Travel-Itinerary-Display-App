// TEXT BELOW GOES INTO initMap

/*
// event listeners when the hide, show buttons are clicked
document.getElementById('show-listings').addEventListener('click', showListings);
document.getElementById('hide-listings').addEventListener('click', hideListings);
document.getElementById('show-routes').addEventListener('click', showRoutes);
document.getElementById('hide-routes').addEventListener('click', hideRoutes);

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
}
showListings();
*/


/*
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
*/

// UNUSED FROM HTML, show buttons
/*
<!-- Buttons to interact with map
<input class="button-primary" type="button" value="show listings" id="show-listings">
<input class="button-primary" type="button" value="hide listings" id="hide-listings">
<input class="button-primary" type="button" value="show routes" id="show-routes">
<input class="button-primary" type="button" value="hide routes" id="hide-routes"> -->
</div>
*/
