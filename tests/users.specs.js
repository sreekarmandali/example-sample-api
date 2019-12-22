
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app.js');
var assert = chai.assert;




chai.use(chaiHttp);
chai.should();
describe("Users", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should get all users record", (done) => {
            chai.request(app)
                .get('/users/')
                .end((err, res) => {
                    res.should.have.status(200);
                    assert(res.body, [{ "name": "sreekar", "location": "hyderabad", "itemcount": "3", "bill": "32000", "id": 1, "appliances": "Television,Mobiles" }, { "name": "espancio", "location": "france", "itemcount": "3", "bill": "64000", "id": 2, "appliances": "Television,Mobiles,Refridgerator" }, { "name": "TOorento", "location": "Dulhousie", "itemcount": "3", "bill": "34000", "id": 3, "appliances": "Television,Mobiles,Refridgerator" }, { "name": "mahesh", "location": "dellak", "itemcount": "2", "bill": "34000", "id": 3, "appliances": "Television,Mobile,Refridgerator" }])

                    done();
                });
        });
        // Test to get single student record
        it("should get a single user appliaces", (done) => {
            const id = 1;
            chai.request(app)
                .get(`/users/appliances/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    assert(res.body, ["Television", "Mobiles"]);
                    done();
                });
        });

        // Test to get single student record
        it("should not get a user student record", (done) => {
            const id = 6;
            chai.request(app)
                .get(`/users/appliances/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
    describe("POST /", () => {
        it("should  add a single user record", (done) => {
            
            chai.request(app)
                .post('/users/addUser/')
                .send({ "name": "sreekar", "location": "hyderabad", "itemcount": "3", "bill": "32000", "id": 4, "appliances": "Television,Mobiles" })
                .end((err, res) => {
                    res.should.have.status(200);
                    assert(res.body, 1);
                    done();
                });
        });
        it("should delete  a user record", (done) => {
            const id = 4;
            chai.request(app)
                .post(`/users/delete/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    assert(res.body, 1);
                    done();
                });
        });
    });
});