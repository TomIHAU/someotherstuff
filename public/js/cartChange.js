const productContainer = document.getElementById("cartEvent");

const cartChange = async (event) => {
  if (event.target.matches(".change")) {
    if (event.target.getAttribute("data-inc")) {
      const id = event.target.getAttribute("data-inc");
      const itemInc = await fetch("/api/item", {
        method: "PUT",
        body: JSON.stringify({
          change: 1,
          id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      location.reload();
    }

    if (event.target.getAttribute("data-dec")) {
      if (event.target.getAttribute("data-qty") == 1) {
        deleteItem(event.target.getAttribute("data-dec"));
        location.reload();
        return;
      }

      const itemDec = await fetch("/api/item", {
        method: "PUT",
        body: JSON.stringify({
          change: -1,
          id: event.target.getAttribute("data-dec"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      location.reload();
    }
  }
  if (event.target.matches(".closeBtn")) {
    deleteItem(event.target.parentElement.getAttribute("data-id"));
  }
};

const deleteItem = async (id) => {
  await fetch("/api/item", {
    method: "DELETE",
    body: JSON.stringify({ id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  location.reload();
};

productContainer.addEventListener("click", cartChange);
