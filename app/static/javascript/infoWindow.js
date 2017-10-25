// function to populate info window of marker
function populateInfoWindow(marker, infowindow) {
    // main content of window stored here
    var contentToAdd = '<div id="infowindowContainer" class="infowindowContainer">' +
        '<h1 id ="infowindowTitle">' + marker.title + '</h1>' +
        '<div id="bodyContent">' +
        '<p id="infowindowDay">' + marker.day + '</p>' +
        '<p id="infoWindowdescription">' + marker.description + " " +
        '<a target="_blank" href=' + marker.link + encodeURI(marker.title) + '>Find out more</a>' +
        '<br>' + '<br>' + '</p>' +
        '<div class="galleryContainer">' +
        '<div class="row">' +
        '<div class="one-third column">' +
        '<img id = "object-fit_contain" src=' + marker.image1 + '>' +
        '</div>' +
        '<div class="one-third column">' +
        '<img id = "object-fit_contain" src=' + marker.image2 + '>' +
        '</div>' +
        '<div class="one-third column">' +
        '<img id = "object-fit_contain" src=' + marker.image3 + '>' +
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
