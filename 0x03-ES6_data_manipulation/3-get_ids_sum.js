export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((previousValue, currentValue) => previousValue + currentValue.id, 0);
  }
  return [];
}

// export default function getStudentIdsSum(students) {
//   if (Array.isArray(students)){

//     const arr =  (students.map((k) => k.id));
//     return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
//   }
//   return [];
// }
