export function formatNumberCompact(num: number): string {
  if (num < 1_000) return num.toString();
  if (num < 1_000_000) return (num / 1_000).toFixed(1) + ' K';
  if (num < 1_000_000_000) return (num / 1_000_000).toFixed(1) + ' M';
  if (num < 1_000_000_000_000) return (num / 1_000_000_000).toFixed(1) + ' B';
  return (num / 1_000_000_000_000).toFixed(1) + ' T';
}

export function formatChartDataWithSuffix(values: number[])  {
  const maxValue = Math.max(...values);
  let divisor = 1;
  let suffix = '';

  if (maxValue >= 1_000_000_000) {
    divisor = 1_000_000_000;
    suffix = ' B';
  } else if (maxValue >= 1_000_000) {
    divisor = 1_000_000;
    suffix = ' M';
  } else if (maxValue >= 1_000) {
    divisor = 1_000;
    suffix = ' K';
  }

  const formattedData = values.map((v) => Number((v / divisor).toFixed(2)));
  return { formattedData, suffix };
};