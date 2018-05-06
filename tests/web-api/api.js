/**
 * Created by rakhmatullahyoga on 22/09/17.
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

describe('Express endpoints', function () {
    describe('GET /', function () {
        it('should return success response', function (done) {
            chai.request(global.express_server).get('/').end(function (err, response) {
                if (err) {
                    done(err);
                } else {
                    response.should.have.status(200);
                    response.should.be.an('object');
                    done();
                }
            });
        });
    });

    describe('POST /', function () {
        it('should return failure response', function (done) {
            chai.request(global.express_server).post('/').end(function (err, response) {
                should.exist(err);
                should.exist(response);
                err.status.should.equal(404);
                response.statusCode.should.equal(404);
                done();
            });
        });
    });

    after('close application server', function (done) {
        global.express_server.close();
        done();
    });
});
