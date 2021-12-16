const userRouted = async (event) => {
  event.preventDefault();
  console.log("hello");
  window.location.replace("/login");
};

document.querySelector("#userIcon").addEventListener("click", userRouted);
