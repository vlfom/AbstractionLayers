module.exports = {};

module.exports.cache = {
  'GET': {},
  'POST': {}
};

module.exports.cacheRequest = function cacheRequest(req, data) {
  module.exports.cache[req.method][req.url] = data;
};