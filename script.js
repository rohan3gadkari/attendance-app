// Login
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => alert("Login Error: " + error.message));
}

// Register
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => alert("Registered Successfully"))
    .catch(error => alert("Registration Error: " + error.message));
}

// Save Attendance
function submitAttendance() {
  const db = firebase.firestore();
  const date = new Date().toISOString().split("T")[0];

  const data = {
    date: date,
    Ravi: document.querySelector('input[name="ravi"]:checked')?.value || "Not Marked",
    Sita: document.querySelector('input[name="sita"]:checked')?.value || "Not Marked"
  };

  db.collection("attendance").add(data)
    .then(() => alert("Attendance Saved"))
    .catch(error => alert("Error: " + error));
}
