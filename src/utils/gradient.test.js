import gradient from './gradient';

describe('gradient()', () => {
  it('should return an empty string given an empty array', () => {
    expect(gradient([])).toBe('');
  });

  it('should compute as expected', () => {
    const oneThird = (1 / 3) * 100;
    const twoThirds = (2 / 3) * 100;

    const actual = gradient(['foo', 'bar', 'baz']);
    const expected = `foo 0%, foo ${oneThird}%, bar ${oneThird}%, bar ${twoThirds}%, baz ${twoThirds}%, baz 100%`;

    expect(actual).toBe(expected);
  });

  it('should compute with proportions', () => {
    const actual = gradient(['foo', 'bar', 'baz'], [1, 1, 2]);
    const expected = 'foo 0%, foo 25%, bar 25%, bar 50%, baz 50%, baz 100%';

    expect(actual).toBe(expected);
  });
});
