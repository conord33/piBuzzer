
/**
 * Module dependencies.
 */


var io = require('socket.io-client');
var gpio = require('gpio');
var gpio17 = gpio.export(17);

var socket = io.connect('http://localhost:3030/server');

socket.on('button', function (data) {
  if (data.state == 'pressed') {
    socket.emit('buzzing', {'state':true});
    gpio17.set();
  } else if (data.state == 'released') {
    socket.emit('buzzing', {'state':false})
    gpio17.set(0);
  } 
});