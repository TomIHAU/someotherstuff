const productContainer = document.getElementById("displayProducts");

const addToCart = async (event) => {
  let product_id = parseInt(event.target.getAttribute("data-id"));

  if (event.target.matches(".cardBtn")) {
    const userCart = await fetch("/api/item", {
      method: "POST",
      body: JSON.stringify({ product_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

productContainer.addEventListener("click", addToCart);
