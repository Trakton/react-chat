'use strict';

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var exports = module.exports = {};

app.get('/', function(req, res){
  res.send('<p>The React chat server</p>');
});

io.on('connection', function(socket){
  socket.on('client:message', function(msg){
    socket.broadcast.emit('server:message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on '+exports.api);
});

exports.api = 'http://localhost:3000';
