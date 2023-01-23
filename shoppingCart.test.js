const { ShoppingCart } = require("./shoppingCart");

describe("ShoppingCart", () => {
  it("should add a new product in the list", () => {
    const shoppingCart = new ShoppingCart();
    shoppingCart.products = [
      { id: 1, price: 3 },
      { id: 2, price: 5 }
    ];
    shoppingCart.addProduct({ id: 3, price: 2 })
    expect(shoppingCart.products).toMatchObject([
      { id: 1, price: 3 },
      { id: 2, price: 5 },
      { id: 3, price: 2 }
    ]);
  });

  it("should return a error if product has price equal or less than 0", () => {
    const shoppingCart = new ShoppingCart();
    expect(() => shoppingCart.addProduct({ id: 3, price: 0 })).toThrow(new Error('Invalid price')) 
  })

  it("should remove product from the list", () => {
    const shoppingCart = new ShoppingCart();
    shoppingCart.products = [
      { id: 1, price: 3 },
      { id: 2, price: 5 }
    ];
    shoppingCart.removeProduct(1)
    expect(shoppingCart.products).toMatchObject([
      { id: 2, price: 5 }
    ]);
  })

  it("should return total price", () => {
    const shoppingCart = new ShoppingCart();
    shoppingCart.products = [
      { id: 1, price: 3 },
      { id: 2, price: 5 }
    ];
    expect(shoppingCart.getTotalPrice()).toBe(8)
  })
});
