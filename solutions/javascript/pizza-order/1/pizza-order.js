export function pizzaPrice(pizza, ...extras) {
  let harga = {
    "Margherita": 7,
    "Caprese": 9,
    "Formaggio": 10,
    "ExtraSauce": 1,
    "ExtraToppings": 2,
  };
  if (extras.length > 0) {
    return harga[pizza] + pizzaPrice(...extras)
  }else {
    return harga[pizza]
  }

}

export function orderPrice(pizzaOrders) {
  let total = 0;
  for (let order of pizzaOrders) {
    total += pizzaPrice(order.pizza, ...order.extras)
  }
  return total
}
