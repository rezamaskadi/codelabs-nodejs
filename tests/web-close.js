describe('Close express server', function () {
    it('Close express server', function (done) {
        global.express_server.close();
        done();
    });
});
