module.exports = {};

module.exports.logRequest = function logRequest(req) {
  var date = new Date().toISOString();
  console.log([date, req.method, req.url].join('  '));
};