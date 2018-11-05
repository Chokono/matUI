const getUser = require('./getUser');
module.exports = function setUser(req, res) {
	getUser(req, res);
}