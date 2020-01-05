
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app.js');
var assert = chai.assert;




chai.use(chaiHttp);
chai.should();
describe("Devices", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should get all devices record", (done) => {
            chai.request(app)
                .get('/devices/')
                .end((err, res) => {
                    res.should.have.status(200);
                    assert(res.body.length,4);
                    done();
                });
        });
    });
});

      
       

       
