// @flow
// $FlowFixMe - I broke flow modules -.-
import zipWith from 'lodash/zipWith';

import type { Percentage } from './percentages';
import percentages from './percentages';

export default function gradient(parts: Array<string>, proportions?: Array<number>): string {
  const partPercentages = percentages(proportions || Array(parts.length).fill(1));

  return zipWith(
    parts,
    partPercentages,
    (part: string, percentage: Percentage) => {
      const { start, stop } = percentage;

      return `${part} ${start}%, ${part} ${stop}%`;
    },
  ).join(', ');
}
