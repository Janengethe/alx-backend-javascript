export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) return (arr.map((k) => k.id));
  return [];
}
