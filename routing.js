module.exports = {};

var person = {
  name: 'Vova',
  age: 19,
  sex: 'male'
};

module.exports.routing = {
  'GET': {
    '/': function(req, res) {
        res.writeHead(200, {
          'Set-Cookie': 'mycookie=test',
          'Content-Type': 'text/html'
        });
        var ip = req.connection.remoteAddress;
        res.write('<h1>Welcome to Laboratory task 4!</h1><br>Your IP is: ' + ip);
        res.end('<pre>' + JSON.stringify(cookies) + '</pre>');
    },
    '/user': function(req, res) { return JSON.stringify(person); },
    '/user/name': function(req, res) { return person.name; },
    '/user/age': function(req, res) { return person.age; },
    '/user/sex': function(req, res) { return person.sex; }
  },
  'POST': {
    'person': function(req, res) {
      var body = [];
        req.on('data', function(chunk) {
          body.push(chunk);
        }).on('end', function() {
          var data = Buffer.concat(body).toString();
          var obj = JSON.parse(data);
          if (obj.name)
          	obj.name = obj.name.trim();
          data = JSON.stringify(obj);
          cache[req.url] = data;
          fs.writeFile('./person.json', data, function(err) {
            if (!err) {
              res.writeHead(200);
              res.end('File saved');
            } else {
              res.writeHead(500);
              res.end('Write error');
            }
          });
        });
    }
  }
};