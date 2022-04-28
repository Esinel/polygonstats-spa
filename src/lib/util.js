
export function scientificNotationToNumber(scNum) {
  const normalNumber = scNum.toLocaleString('fullwide', {useGrouping: true});
  return normalNumber;
}

export function getPercentageDifference(numb1, numb2) {
  const percentage = ((numb1 - numb2) / numb1 * 100);
  return percentage.toFixed(2);
}

export function openLink(link) {
  window.open(link, '_blank');
}
