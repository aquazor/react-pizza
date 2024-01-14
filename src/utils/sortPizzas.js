export const sortPizzas = (pizzas, sortValue) => {
  if (sortValue === 0) {
    return pizzas.sort((a, b) => b.rating - a.rating);
  }

  if (sortValue === 1) {
    return pizzas.sort((a, b) => a.price - b.price);
  }

  if (sortValue === 2) {
    return pizzas.sort((a, b) => a.title.localeCompare(b.title, 'ru'));
  }

  return pizzas;
};
