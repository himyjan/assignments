/* Advanced Practice 5 */

/**
 * Advanced Practice 5: assign objects to students
 */

function practice_5(students, student_objects) {
  // your code here

  for (let i = 0; i < student_objects.length; i++) {
    for (let j = 0; j < students.length; j++) {
      if (students[j].student_id == student_objects[i].student_id) {
        Array.isArray(students[j]["Object"])
          ? students[j]["Object"].push(student_objects[i].Object)
          : (students[j]["Object"] = [student_objects[i].Object]);
      }
    }
  }
  return students;
}

const students = [
  { student_id: 1, name: "Arthur" },
  { student_id: 2, name: "Peter" },
  { student_id: 3, name: "Molly" },
];

const student_objects = [
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

console.log("Advanced Practice 5: assign objects to students");
console.log(practice_5(students, student_objects));
