export default function updateUniqueItems(map1) {
  if (!(map1 instanceof Map)) throw new TypeError('Cannot process');
  map1.forEach((x, y) => {
    if (x === 1) map1.set(y, 100);
  });

  return map1;
}
