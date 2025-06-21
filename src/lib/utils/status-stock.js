export const getStockStatus = (stock) => {
  if (stock > 100) return { text: "In Stock", color: "success" };
  if (stock > 20) return { text: "Limited Stock", color: "warning" };
  return { text: "Low Stock", color: "error" };
};

export const buttonText = (stock) => {
  return stock <= 0 ? "Out Of Stock" : "Add to cart";
};
