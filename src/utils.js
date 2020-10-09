export const formatPrice = (x, currency) => {
  switch (currency) {
    case "Kshs":
      return x.toFixed(2).replace(".", ",");
    default:
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
