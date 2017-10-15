// function to populate info window of marker
function populateInfoWindow(marker, infowindow) {
    // main content of window stored here
    var contentToAdd = '<div id="infowindowContainer" class="infowindowContainer">' +
        '<h1>' + marker.title + '</h1>' +
        '<h2>' + marker.day + '</h2>' +
        '<div id="bodyContent">' +
        '<p id="description">' + marker.description + '</p>' +
        '<a target="_blank" href=' + marker.link + encodeURI(marker.title) + '>Read more</a>' +
        '<br>' + '<br>' +
        '<div class="galleryContainer">' +
        '<div class="row">' +
        '<div class="one-third column">' +
        '<img src=' + marker.image1 + '>' +
        '</div>' +
        '<div class="one-third column">' +
        '<img src=' + marker.image2 + '>' +
        '</div>' +
        '<div class="one-third column">' +
        '<img src=' + marker.image3 + '>' +
        '</div>' +
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
