module.exports.reviewsCreate = function (req, res) {
sendJsonResponse(res, 200, {"status" : "read create review"} );
};
module.exports.reviewsReadOne = function (req, res) {
sendJsonResponse(res, 200, {"status" : "read one review"} );
};
module.exports.reviewsUpdateOne = function (req, res) {
sendJsonResponse(res, 200, {"status" : "read update review"} );
};
module.exports.reviewsDeleteOne = function (req, res) {
sendJsonResponse(res, 200, {"status" : "read delete review"} );
};
var sendJsonResponse = function(res, status, content) {
res.status(status);
res.json(content);
};
