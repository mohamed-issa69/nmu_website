const attendanceForm = document.getElementById('attendanceForm');
const attendanceTable = document.getElementById('attendanceTable');

attendanceForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const studentName = event.target.elements.studentName.value;
  const studentID = event.target.elements.studentID.value;
  const attendanceStatus = event.target.elements.attendanceStatus.value;
  const comments = event.target.elements.comments.value;

  const currentDate = new Date().toLocaleDateString();

  
  const newRow = attendanceTable.insertRow();

  
  newRow.insertCell().textContent = currentDate;
  newRow.insertCell().textContent = studentName;
  newRow.insertCell().textContent = studentID;
  newRow.insertCell().textContent = attendanceStatus;
  newRow.insertCell().textContent = comments;

  
  event.target.elements.studentName.value = '';
  event.target.elements.studentID.value = '';
  event.target.elements.attendanceStatus.value = '';
  event.target.elements.comments.value
})
