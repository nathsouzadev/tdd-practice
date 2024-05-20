const { ShoppingCart } = require("./shoppingCart");

describe("ShoppingCart", () => {
  it("should add a new product in the list", () => {
    const shoppingCart = new ShoppingCart();
    const product = { name: "Biscuits", price: 10 };

    shoppingCart.addProduct(product);

    expect(shoppingCart.products).toMatchObject([product]);
    expect(shoppingCart.totalPrice).toBe(0);
  });

  it("should calculate the total price of the products", () => {
    const shoppingCart = new ShoppingCart();
    shoppingCart.products = [
      { name: "Biscuits", price: 10 },
      { name: "Cakes", price: 20 }
    ]

    shoppingCart.calculateTotalPrice();
    expect(shoppingCart.totalPrice).toBe(30);
  });

  it("should return the list of products and the total price", () => {
    const shoppingCart = new ShoppingCart();
    shoppingCart.addProduct({ name: "Biscuits", price: 10 });
    shoppingCart.addProduct({ name: "Cakes", price: 20 });
    shoppingCart.calculateTotalPrice();
    expect(shoppingCart.getCart()).toMatchObject({
      products: [
        { name: "Biscuits", price: 10 },
        { name: "Cakes", price: 20 }
      ],
      totalPrice: 30
    })
  })
});
