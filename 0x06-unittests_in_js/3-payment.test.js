const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  const utlSpy = sinon.spy(Utils, 'calculateNumber');

  it('0.', () => {
    sendPaymentRequestToApi(100, 20);
    expect(utlSpy.calledOnce).to.be.true;
    expect(utlSpy.calledOnceWith('SUM', 100, 20)).to.be.true;
    utlSpy.restore();
  });
});
