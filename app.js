
/**
 * Module dependencies.
 */


var io = require('socket.io-client');

var socket = io.connect('http://localhost:3030/server');

socket.on('button', function (data) {
  if (data.state == 'pressed') {
    socket.emit('buzzing', {'state':true});
  } else if (data.state == 'released') {
    socket.emit('buzzing', {'state':false})
  } 
});