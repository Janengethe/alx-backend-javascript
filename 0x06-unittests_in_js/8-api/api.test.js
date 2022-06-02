const { expect } = require('chai');
const request = require('request');

describe('basic Integration testing', () => {
  describe('gET /', () => {
    it('correct status Code: 200', () => new Promise((done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    }));
  });
});
