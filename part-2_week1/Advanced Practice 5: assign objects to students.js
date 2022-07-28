/* Advanced Practice 5 */

/**
 * Advanced Practice 5: assign objects to students
 */

function practice_5(input) {
  // your code here
}

const students = [
  { student_id: 1, name: "Arthur" },
  { student_id: 2, name: "Peter" },
  { student_id: 3, name: "Molly" },
];

const students_objects = [
  { student_id: 1, Object: "pen" },
  { student_id: 2, Object: "pen" },
  { student_id: 3, Object: "book" },
  { student_id: 1, Object: "book" },
  { student_id: 3, Object: "phone" },
];

// expected output:
// [
//   { student_id: 1, name: "Arthur", objects: ["pen", "book"] },
//   { student_id: 2, name: "Peter", objects: ["pen"] },
//   { student_id: 3, name: "Molly", objects: ["book", "phone"] },
// ];

console.log(practice_5(students, student_objects));
