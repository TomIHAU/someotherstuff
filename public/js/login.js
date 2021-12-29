const txtUserName = document.querySelector("#username");
const txtPassword = document.querySelector("#password");
const loginFrm = document.querySelector("#loginForm");

const login = async (event) => {
  event.preventDefault();

  const username = txtUserName.value.trim();
  const password = txtPassword.value.trim();
  console.log(username, password);
  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      location.reload();
      window.location.replace("/");
    } else {
      alert(`Incorrect username or password, please try again.`);
      txtUserName.value = "";
      txtPassword.value = "";
      txtUserName.focus();
      return;
    }
  } else {
    alert(`Incorrect username or password, please try again.`);
  }
};

txtUserName.focus();

loginFrm.addEventListener("submit", login);
