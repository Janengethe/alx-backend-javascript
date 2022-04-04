export default function appendToEachArrayValue (array, appendString) {
  const appendList = [];
  for (const value of array) {
    appendList.push(`${appendString}${value}`);
  }
  return array;
}
