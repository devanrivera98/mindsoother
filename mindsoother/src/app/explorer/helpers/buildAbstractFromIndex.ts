interface ReverseIndexInterface {
  [key: string]: number[];
}

export default function buildAbstractFromIndex(
  reverseIndex: ReverseIndexInterface,
) {
  if (!reverseIndex) {
    return "The abstract is not available for this article at the moment. Some articles don't include abstracts, so please refer to the full text for more details.";
  }
  const valuesArr = Object.values(reverseIndex).flat();
  const maxValue = Math.max(...valuesArr);
  let indexArr: any = Array.from({ length: maxValue });
  for (let key in reverseIndex) {
    reverseIndex[key].forEach((index) => {
      indexArr[index] = key;
    });
  }
  indexArr = indexArr.join(" ");
  return indexArr;
}
