module.exports = {
  select_brand: (brand, match) => {
    return brand === match;
  },
  format_amount: (amount) => {
    return parseInt(amount).toLocaleString();
  },
  item_total: (cost, qty) => {
    return cost * qty;
  },
  calc_total_cost: () => {
    return;
  },
};
