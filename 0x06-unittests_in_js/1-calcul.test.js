const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('0. SUM positive float', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    assert.equal(result, 6);
  });

  it('1. SUM negative float', () => {
    const result = calculateNumber('SUM', -1.4, -4.5);
    assert.equal(result, -5);
  });

  it('2. SUM negative&positive float', () => {
    const result = calculateNumber('SUM', -1.4, 4.5);
    assert.equal(result, 4);
  });

  it('3. SUM positive&negative float', () => {
    const result = calculateNumber('SUM', 1.4, -4.5);
    assert.equal(result, -3);
  });

  it('4. SUM positive longfloat', () => {
    const result = calculateNumber('SUM', 11111111.5, 44444444.2);
    assert.equal(result, 55555556);
  });

  it('5. SUM negative longint', () => {
    const result = calculateNumber('SUM', -11111111.5, -44444444.2);
    assert.equal(result, -55555555);
  });

  it('6. SUM positive int', () => {
    const result = calculateNumber('SUM', 1, 4);
    assert.equal(result, 5);
  });

  it('7. SUM negative int', () => {
    const result = calculateNumber('SUM', -1, -4);
    assert.equal(result, -5);
  });

  it('8. SUM positive&negative int', () => {
    const result = calculateNumber('SUM', 1, -4);
    assert.equal(result, -3);
  });

  it('9. SUM negative&positive int', () => {
    const result = calculateNumber('SUM', -1, 4);
    assert.equal(result, 3);
  });

  it('10. SUM positive longint', () => {
    const result = calculateNumber('SUM', 11111111, 44444444);
    assert.equal(result, 55555555);
  });

  it('11. SUM negative longint', () => {
    const result = calculateNumber('SUM', -11111111, -44444444);
    assert.equal(result, -55555555);
  });

  it('12. SUM positive float', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    assert.equal(result, 6);
  });

  it('13. SUBTRACT negative float', () => {
    const result = calculateNumber('SUBTRACT', -1.4, -4.5);
    assert.equal(result, 3);
  });

  it('14. SUBTRACT negative&positive float', () => {
    const result = calculateNumber('SUBTRACT', -1.4, 4.5);
    assert.equal(result, -6);
  });

  it('15. SUBTRACT positive&negative float', () => {
    const result = calculateNumber('SUBTRACT', 1.4, -4.5);
    assert.equal(result, 5);
  });

  it('16. SUBTRACT positive longfloat', () => {
    const result = calculateNumber('SUBTRACT', 11111111.5, 44444444.2);
    assert.equal(result, -33333332);
  });

  it('17. SUBTRACT negative longint', () => {
    const result = calculateNumber('SUBTRACT', -11111111.5, -44444444.2);
    assert.equal(result, 33333333);
  });

  it('18. SUBTRACT positive int', () => {
    const result = calculateNumber('SUBTRACT', 1, 4);
    assert.equal(result, -3);
  });

  it('19. SUBTRACT negative int', () => {
    const result = calculateNumber('SUBTRACT', -1, -4);
    assert.equal(result, 3);
  });

  it('20. SUBTRACT positive&negative int', () => {
    const result = calculateNumber('SUBTRACT', 1, -4);
    assert.equal(result, 5);
  });

  it('21. SUBTRACT negative&positive int', () => {
    const result = calculateNumber('SUBTRACT', -1, 4);
    assert.equal(result, -5);
  });

  it('22. SUBTRACT positive longint', () => {
    const result = calculateNumber('SUBTRACT', 11111111, 44444444);
    assert.equal(result, -33333333);
  });

  it('23. SUBTRACT negative longint', () => {
    const result = calculateNumber('SUBTRACT', -11111111, -44444444);
    assert.equal(result, 33333333);
  });

  it('24.', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    assert.equal(result, -4);
  });

  it('25.', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    assert.equal(result, 0.2);
  });

  it('26.', () => {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    assert.equal(result, 'Error');
  });

  it('27.', () => {
    const result = calculateNumber('MULTIPLY', 1.4, 0);
    assert.equal(result, undefined);
  });
});
