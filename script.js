// LOGIN
function login() {
  console.log("Login function called");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("Login successful");
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      console.error("Login Error:", error.message);
      alert("Login Error: " + error.message);
    });
}

// REGISTER
function register() {
  console.log("Register function called");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Registered successfully!");
    })
    .catch(error => alert("Registration Error: " + error.message));
}
