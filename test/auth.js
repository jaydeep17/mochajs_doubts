'use strict';

var server = require('../server'),
    http = require('http');

var port = 3000;

/** Layer 0 */
describe('Authentication', function() {

    before('starts server', function(done) {
        server.listen(port, done);
    });

    it('forbids unauthorized connection', function(done) {
        server.testUrl(done);
    });


    /** Layer 1 */
    describe('Register mode', function() {

        it('allows connection in register mode', function(done) {
            server.testUrl(done);
        });


        /** Layer 2 */
        describe('allowed pub/sub', function() {

            /** Try commenting out this one */
            it('subscribe to registerMe/+', function(done) {
                server.testUrl(done);
            });


            it('rejects subscription to any other topic', function(done) {
                server.testUrl(done);
            });


            /** Layer 3 */
            describe('register mode publish attempts', function() {

                it('some other topic', function(done) {
                    server.testUrl(done);
                });

                it('reject subscriptions to registerMe', function(done) {
                    server.testUrl(done);
                });
            }); // Layer 3 ends


        }); // Layer 2 Ends

    }); // Layer 1 ends


    after('close server', function() {
        server.close();
    });

}); // Layer 0 ends