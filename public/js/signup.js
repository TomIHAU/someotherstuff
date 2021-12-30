const usernameF = document.querySelector("#username");
const emailF = document.querySelector("#email");
const passwordF = document.querySelector("#password");
const passwordRSUF = document.querySelector("#passwordR");
const signupForm = document.querySelector("#signUpForm");

const signup = async (event) => {
  event.preventDefault();
  const username = usernameF.value.trim();
  const email = emailF.value.trim();
  const password = passwordF.value.trim();
  const passwordRSU = passwordRSUF.value.trim();

  await console.log(username, email, password, passwordRSU);
  if (!username || !email || !password || !passwordRSU) {
    alert(`All details not filled out. Please try again.`);
    console.log(response.status);
    return;
  }
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (!data) {
    return;
  }

  const walletResponse = await fetch("/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (walletResponse.ok) {
    location.reload();
    window.location.replace("/dashboard");
  } else {
    alert(`Username already exist. Please try again.`);
    username.value = "";
    password.value = "";
    passwordRSU.value = "";

    return;
  }
};

signupForm.addEventListener("submit", signup);
