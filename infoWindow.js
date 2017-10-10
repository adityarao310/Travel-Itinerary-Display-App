// function to populate info window of marker
function populateInfoWindow(marker, infowindow) {
    // main content of window stored here
    var contentToAdd = '<div id="content">' +
        '<h1 id="firstHeading" class="firstHeading">' + marker.title + '</h1>' +
        '<h2 id="dayHeading" class="dayHeading">' + marker.day + '</h2>' +
        '<div id="bodyContent">' +
        '<p id="description">' + marker.description + '</p>' +
        '<a href=' + marker.link + '>Read more</a>' +
        '<div class="galleryContainer">' +
        '<div class="row">' +
        '<div class="column">' +
        '<img src=' + marker.image1 + '>' +
        '<img src=' + marker.image2 + '>' +
        '<img src=' + marker.image3 + '>' +
        '</div>' + '</div>' + '</div>'
    '</div>' +
    '</div>';


    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent(contentToAdd);
        infowindow.open(map, marker);
        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick', function() {
            infowindow.setMarker = null;
        });
    }
}
