function validateRegistration() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    sessionStorage.setItem("user", JSON.stringify({ username, email, password }));
    alert(`${username || "User"} registration successful!`);
    return false;
  }

  function validateLogin() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (user && email === user.email && password === user.password) {
      alert(`${user.username} login successful!`);
      return false;
    }
    alert("Invalid credentials! Please register first.");
    return false;
  }
