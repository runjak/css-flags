import percentages from './percentages';

describe('percentages()', () => {
  it('should return an empty array given an empty array', () => {
    expect(percentages([])).toEqual([]);
  });

  it('should calculate percentages evenly', () => {
    const actual = percentages([1, 1, 1]);
    const expected = [
      { start: 0, stop: (1 / 3) * 100 },
      { start: (1 / 3) * 100, stop: (2 / 3) * 100 },
      { start: (2 / 3) * 100, stop: 100 },
    ];

    expect(actual).toEqual(expected);
  });

  it('should correctly distribute percentages', () => {
    const actual = percentages([1, 2, 3]);
    const expected = [
      { start: 0, stop: (1 / 6) * 100 },
      { start: (1 / 6) * 100, stop: (3 / 6) * 100 },
      { start: (3 / 6) * 100, stop: 100 },
    ];

    expect(actual).toEqual(expected);
  });
});
