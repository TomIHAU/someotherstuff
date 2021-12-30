const userNameF = document.querySelector("#username");
const passwordF = document.querySelector("#password");
const loginFrm = document.querySelector("#loginForm");

const login = async (event) => {
  event.preventDefault();

  const username = userNameF.value.trim();
  const password = passwordF.value.trim();

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
      userName.value = "";
      password.value = "";
      userName.focus();
      return;
    }
  } else {
    alert(`Incorrect username or password, please try again.`);
  }
};

userNameF.focus();

loginFrm.addEventListener("submit", login);
