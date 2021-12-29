module.exports = {
  select_brand: (brand) => {
    return brand === "nike";
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
};
