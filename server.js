'use strict';

var app = require('express')(),
    http = require('http'),
    server = http.createServer(app);

/**
 * The the working route
 */
app.get('/', function(req, res) {
    res.send('hello world\n');
});


/**
 * Fire up the server
 * @param {int} port - the port on which the server should listen
 * @param {Function} callback - called after the server is ready
 */
exports.listen = function(port, callback) {
    app._port = port;
    server.listen(port, callback);
};


/**
 * Shuts the server down
 */
exports.close = function() {
    server.close();
};


/**
 * Sends a request to the root URL and calls done
 * on response
 * @param {Function} done - the `done()` callback from mocha
 */
exports.testUrl = function(done) {
    http.get('http://localhost:' + app._port, function(res) {
        done();
    }).on('error', function(e) {
        done();
    });
};