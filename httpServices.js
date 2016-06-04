module.exports = {};

module.exports.sendResponse = function sendResponse(res, data) {
  res.end('' + data);
};

module.exports.logError = function logError(res) {
  res.end('404 error\nPath not found');
};

module.exports.getCookies = function getCookies(cookie) {
  var cookies = {};
  if (cookie) {
    cookie.split(';').forEach(function(item) {
      var parts = item.split('=');
      module.exports.cookies.cookies[(parts[0]).trim()] = (parts[1] || '').trim();
    });
  }
  return cookies;
};

module.exports.processRequest = function processRequest(req, res, cookies) {
  var cachedResponse = module.exports.cache.cache[req.method][req.url];
  if (cachedResponse) {
    module.exports.sendResponse(res, cachedResponse);
  }
  else {
  	routing = module.exports.routing.routing;
    if (req.method in routing && req.url in routing[req.method]) {
      var responseData = routing[req.method][req.url](req, res);
      module.exports.sendResponse(res, responseData);
      module.exports.cache.cacheRequest(req, responseData);
    }
    else {
      module.exports.logError(res);
    }
  }
};