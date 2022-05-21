const { assert, expect } = require("chai")
const { should, expect } = require("chai-http")
const { app } = require("../src/server")

describe('Return JSON from body', () => {
    it('Should return status code 200', (done) => {
        chai.request(app)
            .get('/rgbToHex')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});