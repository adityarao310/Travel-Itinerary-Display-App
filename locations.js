// All the locations. Get from DB database later.

// main location of the office, center of map
var office = {
    lat: 12.9354823,
    lng: 77.6302228
};

var locations = [{
        title: 'Office',
        airport: false,
        location: office,
        link: "https://www.google.co.in/search?q=",
        description: "A look this time at the Taj will keep you indulged with thoughts superimposing your sight and would make you feel the presence of Shah Jahan, the Maker and Mumtaz Mahal, the Reason, as though walking along with you. Whence its breathtaking splendour makes you wonder breathlessly and you tend to pause for a while but to continue staring at The Taj, you would sense them standing beside you!",
        day: 'Start from office',
        image1: "https://pbs.twimg.com/media/DF5XaN8WsAQp4ou.jpg",
        image2: "http://www.telegraph.co.uk/content/dam/news/2016/08/29/78466248_India_Taj_Mahal_FOREIGN_trans_NvBQzQNjv4BqJOyrcvZlMzOKKEe_A9usGgTeeh881_2Zx4Udouoez5k.jpg?imwidth=450",
        image3: "https://lonelyplanetimages.imgix.net/mastheads/283389.jpg?auto=enhance&w=770&h=430&fit=crop",
        number: 1,
    },

    {
        title: 'Third Wave Coffee Roasters',
        airport: false,
        day: 'Coffee to kickstart',
        link: "https://www.google.co.in/search?q=",
        description: "A look this time at the Taj will keep you indulged with thoughts superimposing your sight and would make you feel the presence of Shah Jahan, the Maker and Mumtaz Mahal, the Reason, as though walking along with you. Whence its breathtaking splendour makes you wonder breathlessly and you tend to pause for a while but to continue staring at The Taj, you would sense them standing beside you!",
        number: 2,
        image1: "https://pbs.twimg.com/media/DF5XaN8WsAQp4ou.jpg",
        image2: "http://www.telegraph.co.uk/content/dam/news/2016/08/29/78466248_India_Taj_Mahal_FOREIGN_trans_NvBQzQNjv4BqJOyrcvZlMzOKKEe_A9usGgTeeh881_2Zx4Udouoez5k.jpg?imwidth=450",
        image3: "https://lonelyplanetimages.imgix.net/mastheads/283389.jpg?auto=enhance&w=770&h=430&fit=crop",
        location: {
            lat: 12.9348112,
            lng: 77.6274063,
        }
    },
    {
        title: 'Bangalore Airport',
        airport: true,
        description: "A look this time at the Taj will keep you indulged with thoughts superimposing your sight and would make you feel the presence of Shah Jahan, the Maker and Mumtaz Mahal, the Reason, as though walking along with you. Whence its breathtaking splendour makes you wonder breathlessly and you tend to pause for a while but to continue staring at The Taj, you would sense them standing beside you!",
        day: 'Reach airport',
        link: "https://www.google.co.in/search?q=",
        image1: "https://pbs.twimg.com/media/DF5XaN8WsAQp4ou.jpg",
        image2: "http://www.telegraph.co.uk/content/dam/news/2016/08/29/78466248_India_Taj_Mahal_FOREIGN_trans_NvBQzQNjv4BqJOyrcvZlMzOKKEe_A9usGgTeeh881_2Zx4Udouoez5k.jpg?imwidth=450",
        image3: "https://lonelyplanetimages.imgix.net/mastheads/283389.jpg?auto=enhance&w=770&h=430&fit=crop",
        number: 3,
        location: {
            lat: 13.19864,
            lng: 77.7044041,
        }
    },
    {
        title: 'Thate Idli Bidadi',
        airport: false,
        description: "A look this time at the Taj will keep you indulged with thoughts superimposing your sight and would make you feel the presence of Shah Jahan, the Maker and Mumtaz Mahal, the Reason, as though walking along with you. Whence its breathtaking splendour makes you wonder breathlessly and you tend to pause for a while but to continue staring at The Taj, you would sense them standing beside you!",
        day: 'Day 1 and Day 2',
        link: "https://www.google.co.in/search?q=",
        image1: "https://pbs.twimg.com/media/DF5XaN8WsAQp4ou.jpg",
        image2: "http://www.telegraph.co.uk/content/dam/news/2016/08/29/78466248_India_Taj_Mahal_FOREIGN_trans_NvBQzQNjv4BqJOyrcvZlMzOKKEe_A9usGgTeeh881_2Zx4Udouoez5k.jpg?imwidth=450",
        image3: "https://lonelyplanetimages.imgix.net/mastheads/283389.jpg?auto=enhance&w=770&h=430&fit=crop",
        number: 4,
        location: {
            lat: 12.7849804,
            lng: 77.3751219,
        }
    },
    {
        title: 'Manchanabele Camping',
        day: 'Day 3 camping',
        description: "A look this time at the Taj will keep you indulged with thoughts superimposing your sight and would make you feel the presence of Shah Jahan, the Maker and Mumtaz Mahal, the Reason, as though walking along with you. Whence its breathtaking splendour makes you wonder breathlessly and you tend to pause for a while but to continue staring at The Taj, you would sense them standing beside you!",
        airport: false,
        link: "https://www.google.co.in/search?q=",
        image1: "https://pbs.twimg.com/media/DF5XaN8WsAQp4ou.jpg",
        image2: "http://www.telegraph.co.uk/content/dam/news/2016/08/29/78466248_India_Taj_Mahal_FOREIGN_trans_NvBQzQNjv4BqJOyrcvZlMzOKKEe_A9usGgTeeh881_2Zx4Udouoez5k.jpg?imwidth=450",
        image3: "https://lonelyplanetimages.imgix.net/mastheads/283389.jpg?auto=enhance&w=770&h=430&fit=crop",
        number: 5,
        location: {
            lat: 12.8697503,
            lng: 77.3355362,
        }
    },
    {
        title: 'Mylari Benne Dosa',
        day: 'Day 4',
        description: "A look this time at the Taj will keep you indulged with thoughts superimposing your sight and would make you feel the presence of Shah Jahan, the Maker and Mumtaz Mahal, the Reason, as though walking along with you. Whence its breathtaking splendour makes you wonder breathlessly and you tend to pause for a while but to continue staring at The Taj, you would sense them standing beside you!",
        airport: false,
        link: "https://www.google.co.in/search?q=",
        image1: "https://pbs.twimg.com/media/DF5XaN8WsAQp4ou.jpg",
        image2: "http://www.telegraph.co.uk/content/dam/news/2016/08/29/78466248_India_Taj_Mahal_FOREIGN_trans_NvBQzQNjv4BqJOyrcvZlMzOKKEe_A9usGgTeeh881_2Zx4Udouoez5k.jpg?imwidth=450",
        image3: "https://lonelyplanetimages.imgix.net/mastheads/283389.jpg?auto=enhance&w=770&h=430&fit=crop",
        number: 6,
        location: {
            lat: 12.3084519,
            lng: 76.6632816,
        }
    },
    {
        title: 'Ecoscape Wildlife',
        day: 'Day 5 and Day 6 stay',
        description: "A look this time at the Taj will keep you indulged with thoughts superimposing your sight and would make you feel the presence of Shah Jahan, the Maker and Mumtaz Mahal, the Reason, as though walking along with you. Whence its breathtaking splendour makes you wonder breathlessly and you tend to pause for a while but to continue staring at The Taj, you would sense them standing beside you!",
        airport: false,
        link: "https://www.google.co.in/search?q=",
        image1: "https://pbs.twimg.com/media/DF5XaN8WsAQp4ou.jpg",
        image2: "http://www.telegraph.co.uk/content/dam/news/2016/08/29/78466248_India_Taj_Mahal_FOREIGN_trans_NvBQzQNjv4BqJOyrcvZlMzOKKEe_A9usGgTeeh881_2Zx4Udouoez5k.jpg?imwidth=450",
        image3: "https://lonelyplanetimages.imgix.net/mastheads/283389.jpg?auto=enhance&w=770&h=430&fit=crop",
        number: 7,
        location: {
            lat: 11.4626301,
            lng: 76.3597993,
        }
    },
    {
        title: 'Taj Mahal',
        day: 'Leave for Mahal and night',
        description: 'A look this time at the Taj will keep you indulged with thoughts superimposing your sight and would make you feel the presence of Shah Jahan, the Maker and Mumtaz Mahal, the Reason, as though walking along with you. Whence its breathtaking splendour makes you wonder breathlessly and you tend to pause for a while but to continue staring at The Taj, you would sense them standing beside you!',
        airport: false,
        link: "https://www.google.co.in/search?q=",
        image1: "https://pbs.twimg.com/media/DF5XaN8WsAQp4ou.jpg",
        image2: "http://www.telegraph.co.uk/content/dam/news/2016/08/29/78466248_India_Taj_Mahal_FOREIGN_trans_NvBQzQNjv4BqJOyrcvZlMzOKKEe_A9usGgTeeh881_2Zx4Udouoez5k.jpg?imwidth=450",
        image3: "https://lonelyplanetimages.imgix.net/mastheads/283389.jpg?auto=enhance&w=770&h=430&fit=crop",
        number: 8,
        location: {
            lat: 27.1750199,
            lng: 78.0399665,
        }
    },
    {
        title: 'Bishkek Airport',
        day: 'Reach airport',
        description: "A look this time at the Taj will keep you indulged with thoughts superimposing your sight and would make you feel the presence of Shah Jahan, the Maker and Mumtaz Mahal, the Reason, as though walking along with you. Whence its breathtaking splendour makes you wonder breathlessly and you tend to pause for a while but to continue staring at The Taj, you would sense them standing beside you!",
        airport: true,
        link: "https://www.google.co.in/search?q=",
        image1: "https://pbs.twimg.com/media/DF5XaN8WsAQp4ou.jpg",
        image2: "http://www.telegraph.co.uk/content/dam/news/2016/08/29/78466248_India_Taj_Mahal_FOREIGN_trans_NvBQzQNjv4BqJOyrcvZlMzOKKEe_A9usGgTeeh881_2Zx4Udouoez5k.jpg?imwidth=450",
        image3: "https://lonelyplanetimages.imgix.net/mastheads/283389.jpg?auto=enhance&w=770&h=430&fit=crop",
        number: 9,
        location: {
            lat: 12.9941172,
            lng: 80.1686781,
        }
    },
];
