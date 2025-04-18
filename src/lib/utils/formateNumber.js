export function formatNumber(value) {
  if (value % 1 !== 0) {
    return value.toFixed(2);
  }
  return value;
}
