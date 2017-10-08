var map;
// custom marker icon in the map.
var markerImage = 'images/marker.png';

// empty markers list to be used later
var markers = [];

// Create a styles array to use with the map.
// taken from http://www.mapstylr.com/style/bentley/
var styles = [{
        elementType: 'geometry',
        stylers: [{
            color: '#ebe3cd'
        }]
    },
    {
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#523735'
        }]
    },
    {
        elementType: 'labels.text.stroke',
        stylers: [{
            color: '#f5f1e6'
        }]
    },
    {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{
            color: '#c9b2a6'
        }]
    },
    {
        featureType: 'administrative.land_parcel',
        elementType: 'geometry.stroke',
        stylers: [{
            color: '#dcd2be'
        }]
    },
    {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#ae9e90'
        }]
    },
    {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{
            color: '#dfd2ae'
        }]
    },
    {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{
            color: '#dfd2ae'
        }]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#93817c'
        }]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [{
            color: '#a5b076'
        }]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#447530'
        }]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
            color: '#f5f1e6'
        }]
    },
    {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{
            color: '#fdfcf8'
        }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
            color: '#f8c967'
        }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
            color: '#e9bc62'
        }]
    },
    {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [{
            color: '#e98d58'
        }]
    },
    {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [{
            color: '#db8555'
        }]
    },
    {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#806b63'
        }]
    },
    {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{
            color: '#dfd2ae'
        }]
    },
    {
        featureType: 'transit.line',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#8f7d77'
        }]
    },
    {
        featureType: 'transit.line',
        elementType: 'labels.text.stroke',
        stylers: [{
            color: '#ebe3cd'
        }]
    },
    {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{
            color: '#dfd2ae'
        }]
    },
    {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{
            color: '#b9d3c2'
        }]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
            color: '#92998d'
        }]
    }
];

// main map function
function initMap() {

    // main location of the office, center of map
    var office = {
        lat: 12.9354823,
        lng: 77.6302228
    };

    // create the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: office,
        zoom: 7,
        styles: styles,
        mapTypeControl: false,
    });

    // All the locations. Get from DB database later.
    var locations = [{
            title: 'Office',
            location: office
        },

        {
            title: 'Third Wave Coffee Roasters',
            location: {
                lat: 12.9348112,
                lng: 77.6274063
            }
        },
        {
            title: 'Thate Idli Bidadi',
            location: {
                lat: 12.7849804,
                lng: 77.3751219
            }
        },
        {
            title: 'Manchanabele Camping',
            location: {
                lat: 12.8697503,
                lng: 77.3355362
            }
        },
        {
            title: 'Mylari Benne Dosa',
            location: {
                lat: 12.3084519,
                lng: 76.6632816
            }
        },
        {
            title: 'Ecoscape Wildlife',
            location: {
                lat: 11.4626301,
                lng: 76.3597993
            }
        },
    ];

    var mainInfowindow = new google.maps.InfoWindow({
        maxWidth: 400,
    });

    // Create an array of markers on starting up by looping
    for (var i = 0; i < locations.length; i++) {
        // get position and title from DB
        var position = locations[i].location;
        var title = locations[i].title;
        // create a marker for every location
        var marker = new google.maps.Marker({
            position: position,
            // map: map, element to be inserted on button click, not needed here
            title: title,
            animation: google.maps.Animation.DROP,
            icon: markerImage,
            id: i
        });
        // push each marker into the empty array for use later
        markers.push(marker);
        // open main info window on click
        marker.addListener('click', function() {
            populateInfoWindow(this, mainInfowindow);
        });
    };

    // event listeners when the hide, show buttons are clicked
    document.getElementById('show-listings').addEventListener('click', showListings);
    document.getElementById('hide-listings').addEventListener('click', hideListings);
}

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
    // Extend the boundaries of the map for each marker and display the marker
    // northeast <> southwest of map
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
        bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
}

// This function will loop through the listings and hide them all.
function hideListings() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
}
