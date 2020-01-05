
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
                    assert(res.body, [{ "name": "sreekar", "location": "hyderabad", "itemcount": "3", "bill": "32000", "id": 1, "appliances": "Television,Mobiles" }, { "name": "Prakash", "location": "BachPally", "itemcount": "4", "bill": "44000", "id": 3, "appliances": "Telivison,Mobile" }, { "name": "mahesh2", "location": "mahesh", "itemcount": "4", "bill": "600", "id": 4, "appliances": "Television,Mobile,Refridgerator" }, { "name": "somesh", "location": "dubai", "itemcount": "3", "bill": "70000", "id": 6, "appliances": "Television,Mobile,Refridgerator" }, { "name": "mahesh", "location": "suman", "itemcount": "3", "bill": "2000", "id": 7, "appliances": "Television,Mobile,Refridgerator" }, { "name": "kumar", "location": "haa", "itemcount": "3", "bill": "88000", "id": 8, "appliances": "Television,Mobile,Refridgerator" }, { "name": "manoj", "location": "nna", "itemcount": "4", "bill": "9000", "id": 14, "appliances": "Telivison,Mobile" }])

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
                .send({ "name": "sreekar", "location": "hyderabad", "itemcount": "3", "bill": "32000" })
                .end((err, res) => {
                    res.should.have.status(201);
                    assert(res.body.message, 'Successfully created new user.');
                    done();
                });
        });
        it("should delete  a user record", (done) => {
            const id = 15;
            chai.request(app)
                .post(`/users/delete/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    assert(res.body.message, 'Deleted User');
                    done();
                });
        });
    });
});