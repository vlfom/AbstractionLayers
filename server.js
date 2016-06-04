module.exports = {};

module.exports.cache = {};
module.exports.serverListener = function (req, res) {
  cookies = module.exports.httpServices.getCookies(req.headers.cookie);
  module.exports.console.logRequest(req);
  module.exports.httpServices.processRequest(req, res, cookies);
};