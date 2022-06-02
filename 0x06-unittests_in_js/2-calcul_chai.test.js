const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('0. SUM positive float', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('1. SUM negative float', () => {
    expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
  });

  it('2. SUM negative&positive float', () => {
    expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(4);
  });

  it('3. SUM positive&negative float', () => {
    expect(calculateNumber('SUM', 1.4, -4.5)).to.equal(-3);
  });

  it('4. SUM positive longfloat', () => {
    expect(calculateNumber('SUM', 11111111.5, 44444444.2)).to.equal(55555556);
  });

  it('5. SUM negative longint', () => {
    expect(calculateNumber('SUM', -11111111.5, -44444444.2)).to.equal(-55555555);
  });

  it('6. SUM positive int', () => {
    expect(calculateNumber('SUM', 1, 4)).to.equal(5);
  });

  it('7. SUM negative int', () => {
    expect(calculateNumber('SUM', -1, -4)).to.equal(-5);
  });

  it('8. SUM positive&negative int', () => {
    expect(calculateNumber('SUM', 1, -4)).to.equal(-3);
  });

  it('9. SUM negative&positive int', () => {
    expect(calculateNumber('SUM', -1, 4)).to.equal(3);
  });

  it('10. SUM positive longint', () => {
    expect(calculateNumber('SUM', 11111111, 44444444)).to.equal(55555555);
  });

  it('11. SUM negative longint', () => {
    expect(calculateNumber('SUM', -11111111, -44444444)).to.equal(-55555555);
  });

  it('12. SUM positive float', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('13. SUBTRACT negative float', () => {
    expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
  });

  it('14. SUBTRACT negative&positive float', () => {
    expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
  });

  it('15. SUBTRACT positive&negative float', () => {
    expect(calculateNumber('SUBTRACT', 1.4, -4.5)).to.equal(5);
  });

  it('16. SUBTRACT positive longfloat', () => {
    expect(calculateNumber('SUBTRACT', 11111111.5, 44444444.2)).to.equal(-33333332);
  });

  it('17. SUBTRACT negative longint', () => {
    expect(calculateNumber('SUBTRACT', -11111111.5, -44444444.2)).to.equal(33333333);
  });

  it('18. SUBTRACT positive int', () => {
    expect(calculateNumber('SUBTRACT', 1, 4)).to.equal(-3);
  });

  it('19. SUBTRACT negative int', () => {
    expect(calculateNumber('SUBTRACT', -1, -4)).to.equal(3);
  });

  it('20. SUBTRACT positive&negative int', () => {
    expect(calculateNumber('SUBTRACT', 1, -4)).to.equal(5);
  });

  it('21. SUBTRACT negative&positive int', () => {
    expect(calculateNumber('SUBTRACT', -1, 4)).to.equal(-5);
  });

  it('22. SUBTRACT positive longint', () => {
    expect(calculateNumber('SUBTRACT', 11111111, 44444444)).to.equal(-33333333);
  });

  it('23. SUBTRACT negative longint', () => {
    expect(calculateNumber('SUBTRACT', -11111111, -44444444)).to.equal(33333333);
  });

  it('24.', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('25.', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('26.', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('27.', () => {
    expect(calculateNumber('MULTIPLY', 1.4, 0)).to.equal(undefined);
  });
});
