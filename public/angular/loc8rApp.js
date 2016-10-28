
	var locationListCtrl = function ($scope, loc8rData, geolocation) {
		$scope.message = "Checking your location";
		$scope.getData = function (position) {
			 var lat = position.coords.latitude,
                 lng = position.coords.longitude;
			$scope.message = "Searching for nearby places";
			console.log('lat:'+lat);
			console.log('lng:'+lng);
			loc8rData.locationByCoords(lat, lng)
			.success(function(data) {
				$scope.message = data.length > 0 ? "" : "No locations found";
				$scope.data = { locations: data };
			})
			.error(function (e) {
				$scope.message = "Sorry, something's gone wrong";
			});
		};
		$scope.showError = function (error) {
			$scope.$apply(function() {
				$scope.message = error.message;
			});
		};
		$scope.noGeo = function () {
			$scope.$apply(function() {
				$scope.message = "Geolocation not supported by this browser.";
			});
		};
		geolocation.getPosition($scope.getData,$scope.showError,$scope.noGeo);
	};
	
	var _isNumeric = function (n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	var formatDistance = function () {
		return function (distance) {
			var numDistance, unit;
			if (distance && _isNumeric(distance)) {
				if (distance > 1) {
					numDistance = parseFloat(distance).toFixed(1);
					unit = 'km';
				} else {
					numDistance = parseInt(distance * 1000,10);
					unit = 'm';
				}
				return numDistance + unit;
			} else {
				return "?";
			}
		};
	};
	var ratingStars = function () {
		return {
			scope: {
				thisRating : '=rating'
			},
			templateUrl: '/angular/rating-stars.html'
		};
	};

	var loc8rData = function ($http) {
		var locationByCoords = function (lat, lng) {
			  console.log('/api/locations?lng=' + lng + '&lat=' + lat + '&maxdist=1000');
			return $http.get('/api/locations?lng=' + lng + '&lat=' + lat +			'&maxdist=1000');
			//return $http.get('/api/locations?lng=-0.9690884&lat=61.4550412&maxdist=1000');
		};
		return {
			locationByCoords : locationByCoords
		};
	};
	var geolocation = function () {
		var getPosition = function (cbSuccess, cbError, cbNoGeo) {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
			}
			else {
				cbNoGeo();
			}
		};

		return {
				getPosition : getPosition
		};
	};
	angular
	.module('loc8rApp', [])
	.controller('locationListCtrl', locationListCtrl)
	.filter('formatDistance', formatDistance)
	.directive('ratingStars', ratingStars)
	.service('loc8rData', loc8rData )
	.service('geolocation', geolocation);









	var loc8rDataHardCode = function () {
		return [{
			name: 'Burger Queen',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '0.296456',
			_id: '5370a35f2536f6785f8dfb6a'
		},{
			name: 'Donald Raigon',
			address: '190 Small Street, Writing, HM6 3PS',
			rating: 2,
			facilities: ['Coffee', 'Food', 'Low wifi'],
			distance: '0.297556',
			_id: '5370a35f2536f6785f8dfb6b'
		},{
			name: 'Maikl Cristmas',
			address: '9 Ally Boulevard, Smoking, H8N 2P7',
			rating: 4,
			facilities: ['Hot drinks', 'Food', 'Cabel video'],
			distance: '0.2988',
			_id: '5370a35f2536f6785f8dfb6c'
		},{
			name: 'Hallowing',
			address: '1209 Scared street, Scaring, N1M 3KL',
			rating: 5,
			facilities: ['Beaverage', 'Meat food', 'Premium TV channels'],
			distance: '0.286456',
			_id: '5370a35f2536f6785f8dfb6d'
		},{
			name: 'Page Jaune',
			address: '16 Place du Commerce, Information, h7n n1h',
			rating: 5,
			facilities: ['Any information', 'Internet and Support', 'Free domain name'],
			distance: '0.289556',
			_id: '5370a35f2536f6785f8dfb6e'
		},{
			name: 'Costy cuccursale',
			address: '8780 Small Bulevard, Reading, UI8 2KW',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Alcoholic drinks'],
			distance: '0.8865456',
			_id: '5370a35f2536f6785f8dfb6f'
		}];
	}; 