/* GET HOME PAGE */

module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a  place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work  with  wifi  new you!'
        },
        locations: [{
                name: 'Startcups',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 4,
                facilities: ['Hot drinks', 'Food', 'Premium Wifi'],
                distance: '100m'
            },
            {
                name: 'Cafe Hero',
                address: '125 High Street, Reading, RG6 8PK',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premium Wifi'],
                distance: '300m'
            },
            {
                name: 'Resto Cafe',
                address: '101 Low Street, Reading, RG9 4YO',
                rating: 2,
                facilities: ['Hot drinks', 'Food', 'Premium Wifi'],
                distance: '400m'
            },
            {
                name: 'Best choice',
                address: '12 Manhetten Street, Writing, BGN 2P7',
                rating: 1,
                facilities: ['Cold drinks', 'Shots', 'Cable internet'],
                distance: '500m'
            }

        ],
        sidebar : "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for."

    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', {title: 'location info',
        headername : 'Starcups',
        location :{
            name: 'Startcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium Wifi'],
            distance: '100m'
        },
       openHoures : ['Monday - Friday 7:00am - 7:00pm',
                     'Saturday 8:00am - 5:00pm',
                     'Sunday closed'],
       openHouresHeader : "Open houres:",
        facilitiesHeader : 'facilities',
        facilities: ['Hot drinks', 'Food', 'Premium Wifi'],

    });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', {title: 'Add review'});
};
