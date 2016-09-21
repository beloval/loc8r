module.exports.locationsListByDistance = function (req, res) {
sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.locationsCreate = function (req, res) {
sendJsonResponse(res, 200, {"status" : "success create"});
};
module.exports.locationsReadOne = function (req, res) {
sendJsonResponse(res, 200, {"status" : "read one"});
};

module.exports.locationsUpdateOne = function (req, res) {
sendJsonResponse(res, 200, {"status" : "Update one"});
};
module.exports.locationsDeleteOne = function (req, res) {
sendJsonResponse(res, 200, {"status" : "delete one"});
};
var sendJsonResponse = function(res, status, content) {
res.status(status);
res.json(content);
};

