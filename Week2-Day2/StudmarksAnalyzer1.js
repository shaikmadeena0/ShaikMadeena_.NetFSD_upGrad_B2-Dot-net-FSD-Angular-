const studentMarks = [78, 85, 62, 90, 55];
const calculateTotal = (marks) =>
  marks.reduce((total, mark) => total + mark, 0);
const calculateAverage = (marks) => {
  const total = calculateTotal(marks);
  return marks.length ? total / marks.length : 0;
};
const getResult = (average) => (average >= 60 ? "Pass" : "Fail");
const generateReport = (marks) => {
  const total = calculateTotal(marks);
  const average = calculateAverage(marks);
  const result = getResult(average);
  const formattedMarks = marks.map((mark, index) => 
    `Subject ${index + 1}: ${mark}`
  ).join("\n");

  console.log(`
===== Student Marks Report =====
${formattedMarks}

Total Marks   : ${total}
Average Marks : ${average.toFixed(2)}
Result        : ${result}
================================
`);
};
generateReport(studentMarks);
export { calculateTotal, calculateAverage, getResult, generateReport };
