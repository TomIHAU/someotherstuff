const productContainer = document.getElementById("displayProducts");

const addToCart = (event) => {
  let count = parseInt(event.target.getAttribute("data-id"));

  if (event.target.matches(".cardBtn")) {
    console.log(count);
  }
};

productContainer.addEventListener("click", addToCart);
