// @flow

export type Percentage = {
  start: number,
  stop: number,
};

type ReduceState = {
  pieces: Array<Percentage>,
  tally: number,
};

export default function percentages(parts: Array<number>): Array<Percentage> {
  const sum = parts.reduce((x, y) => (x + y), 0);

  return parts.reduce(
    (result: ReduceState, part: number): ReduceState => {
      const { pieces, tally: oldTally } = result;
      const tally = oldTally + part;

      return {
        pieces: [
          ...pieces,
          {
            start: (oldTally / sum) * 100,
            stop: (tally / sum) * 100,
          },
        ],
        tally,
      };
    },
    {
      pieces: [],
      tally: 0,
    },
  ).pieces;
}
