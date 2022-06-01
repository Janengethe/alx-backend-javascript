const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('0. positive int (1 + 3 = 4)', () => {
    const result = calculateNumber(1, 3);
    assert.equal(result, 4);
  });

  it('1. positive&negative int (1 + -3 = -2)', () => {
    const result = calculateNumber(1, -3);
    assert.equal(result, -2);
  });

  it('2. negative&positive int (-1 + 3 = 2)', () => {
    const result = calculateNumber(-1, 3);
    assert.equal(result, 2);
  });

  it('3. negative int (-1 + -3 = -4)', () => {
    const result = calculateNumber(-1, -3);
    assert.equal(result, -4);
  });

  it('4. Positive int&float (1 + 3.7 = 5)', () => {
    const result = calculateNumber(1, 3.7);
    assert.equal(result, 5);
  });

  it('5. Negative int&float (-1 + -3.7 = -5)', () => {
    const result = calculateNumber(-1, -3.7);
    assert.equal(result, -5);
  });

  it('6. positive float (1.2 + 3.7 = 5)', () => {
    const result = calculateNumber(1.2, 3.7);
    assert.equal(result, 5);
  });

  it('7. negative float (-1.2 + -3.7 = -5)', () => {
    const result = calculateNumber(-1.2, -3.7);
    assert.equal(result, -5);
  });

  it('8. positive float (1.5 + 3.7 = 6)', () => {
    const result = calculateNumber(1.5, 3.7);
    assert.equal(result, 6);
  });

  it('9. positive longint (2581254874857485 + 8754837875526845226356 = 8.75484045678172e+21)', () => {
    const result = calculateNumber(2581254874857485, 8754837875526845226356);
    assert.equal(result, 8.75484045678172e+21);
  });

  it('10. negative longint (-2581254874857485 + -8754837875526845226356 = -8.75484045678172e+21)', () => {
    const result = calculateNumber(-2581254874857485, -8754837875526845226356);
    assert.equal(result, -8.75484045678172e+21);
  });

  it('11. positive longfloat (2581.254874857485 + 875483.7875526845226356 = 878065)', () => {
    const result = calculateNumber(2581.254874857485, 875483.7875526845226356);
    assert.equal(result, 878065);
  });

  it('12. negative longfloat (-2581.254874857485 + -875483.7875526845226356 = -878065)', () => {
    const result = calculateNumber(-2581.254874857485, -875483.7875526845226356);
    assert.equal(result, -878065);
  });
});
