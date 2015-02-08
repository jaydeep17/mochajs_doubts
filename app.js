'use strict';

var server = require('./server');

server.listen(3000, function() {
    console.log('magic happens on port 3000');
});