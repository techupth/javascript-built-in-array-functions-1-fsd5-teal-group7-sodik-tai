const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];
//console.log(students[1].score)
function getAverageStudentScore(students) {
  // Start coding here
  return students.reduce(function (a,b) {return a+b.score },0)
  / students.length
}


getAverageStudentScore(students); // Output: 87.5
console.log(getAverageStudentScore(students))
