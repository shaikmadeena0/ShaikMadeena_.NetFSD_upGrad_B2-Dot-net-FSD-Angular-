export const calculateTotal = (cart) =>
  cart.reduce((total, product) => total + product.price * product.quantity, 0);
export const formatInvoice = (cart) =>
  cart
    .map(
      ({ name, price, quantity }) =>
        `${name} | Price: $${price} | Qty: ${quantity} | Subtotal: $${price * quantity}`,
    )
    .join("\n");
