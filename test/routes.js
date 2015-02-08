'use strict';

var server = require('../server');

var port = 3000;

/** Layer 0 */
describe('routes', function() {

    before('starts server', function(done) {
        server.listen(port, done);
    });

    /** Layer 1 */
    describe('Message sending route', function() {


        it('client2 receives client1s msg', function(done) {
            server.workingUrl(done);
        });


        it('client1 receives MSG_ACK', function(done) {
            server.workingUrl(done);
        });

    }); // end `Message route` describe

    after('close server', function() {
        server.close();
    });
});