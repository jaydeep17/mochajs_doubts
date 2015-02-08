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



    // describe('Delivery ACK route', function() {

    //     it('client1 receives DLVRY_ACK', function(done) {
    //         server.workingUrl(done);
    //     });

    // });



    // describe('Read ACK route', function() {

    //     it('client1 receives READ_ACK', function(done) {
    //         server.workingUrl(done);
    //     });

    // });



    // describe('Registered Contacts routes', function() {

    //     it('receives registered contacts', function(done) {
    //         server.workingUrl(done);
    //     });

    //     it('should store unregistered users', function(done) {
    //         server.workingUrl(done);
    //     });

    // });


    // describe('Forwards typing', function() {

    //     it('receives typing message', function(done) {
    //         server.workingUrl(done);
    //     });

    // });



    // describe('Profile changes', function() {

    //     it('updates name', function(done) {
    //         server.workingUrl(done);
    //     });

    //     it('updates dp', function(done) {
    //         server.workingUrl(done);
    //     });

    //     it('updates status', function(done) {
    //         server.workingUrl(done);
    //     });

    // });


    // describe('Online notification', function() {

    //     it('receives online message', function(done) {
    //         server.workingUrl(done);
    //     });

    // });

    after('close server', function() {
        server.close();
    });
});