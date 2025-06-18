// sample student data
const students = [
  ["Ayesha", 123, "ayesha@gmail.com", "03001234567", "2002-03-01", "pass123", 85],
  ["Ali", 124, "ali@gmail.com", "03011234567", "2001-06-04", "secure456", 90],
  ["Zainab", 125, "zainab@gmail.com", "03021234567", "2000-11-20", "mypwd789", 78],
  ["Ahmed", 126, "ahmed@gmail.com", "03031234567", "2002-01-15", "hello321", 88],
  ["Sara", 127, "sara@gmail.com", "03041234567", "2001-12-07", "12345678", 92],
  ["Umer", 128, "umer@gmail.com", "03051234567", "2000-09-30", "qwerty12", 81],
  ["Fatima", 129, "fatima@gmail.com", "03061234567", "2002-07-09", "pass987", 95],
  ["Bilal", 130, "bilal@gmail.com", "03071234567", "2001-08-22", "asdf1234", 76],
  ["Hina", 131, "hina@gmail.com", "03081234567", "2000-05-18", "abc12345", 89],
  ["Taha", 132, "taha@gmail.com", "03091234567", "2002-04-02", "hello999", 83]
];

// Select table body element
const tableBody = document.getElementById("tableBody");

// to create and insert table rows
function createTable() {
  students.forEach(student => {
    const row = document.createElement("tr");

    student.forEach(data => {
      const cell = document.createElement("td");
      cell.textContent = data;
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
}

// to calculate average marks
function calculateAverage() {
  let total = 0;
  students.forEach(student => {
    total += student[6]; // index 6 = Marks
  });

  const avg = (total / students.length).toFixed(2);

  // remove previous average row if it exists
  const prev = document.getElementById("averageRow");
  if (prev) prev.remove();

  const avgRow = document.createElement("tr");
  avgRow.id = "averageRow";

  // empty cells for first 6 columns
  for (let i = 0; i < 6; i++) {
    const emptyCell = document.createElement("td");
    emptyCell.textContent = "";
    avgRow.appendChild(emptyCell);
  }

  // last cell for displaying average
  const avgCell = document.createElement("td");
  avgCell.textContent = `Average: ${avg}`;
  avgRow.appendChild(avgCell);

  tableBody.appendChild(avgRow);
}

// load the table when page runs
createTable();
