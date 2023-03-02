import CartContext from "./cart-context";

const addItemToCartHandler = () => {};

const removeItemToCartHandler = () => {};

const CartProvider = (props) => {
  return (
    <CartContext.Provider
      value={{
        items: [
          {
            id: "m1",
            name: "Sushi",
            amount: 2,
            price: 22.99,
          },
          {
            id: "m2",
            name: "Schnitzel",
            amount: 1,
            price: 16.5,
          },
          {
            id: "m3",
            name: "Barbecue Burger",
            amount: 1,
            price: 12.99,
          },
          {
            id: "m4",
            name: "Green Bowl",
            amount: 1,
            price: 18.99,
          },
        ],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
