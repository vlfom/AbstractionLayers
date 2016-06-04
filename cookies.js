module.exports = {};

module.exports.cookies = {};

module.exports.getCookies = function getCookies(cookie) {
  var cookies = {};
  if (cookie) {
    cookie.split(';').forEach(function(item) {
      var parts = item.split('=');
      cookies[(parts[0]).trim()] = (parts[1] || '').trim();
    });
  }
  return cookies;
}