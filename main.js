module.exports = {};

var http = require('http'),
	fs = require('fs'),
	server = require('./server'),
	person = require('./person'),
	httpServices = require('./httpServices'),
	console = require('./console'),
	cookies = require('./cookies'),
	cache = require('./cache'),
	routing = require('./routing');

server.httpServices = httpServices;
server.console = console;

httpServices.cookies = cookies;
httpServices.cache = cache;
httpServices.routing = routing;

http.createServer(server.serverListener).listen(80);