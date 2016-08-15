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

        ]

    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', {title: 'location info'});
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', {title: 'Add review'});
};
