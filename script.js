function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Registered successfully!");
    })
    .catch((error) => {
      alert("Registration error: " + error.message);
    });
}
