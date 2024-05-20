class ShoppingCart {
  products = []
  totalPrice = 0

  //product example: {name: 'Biscuits', price: 10}

  addProduct = (product) => {
    this.products.push(product)
  }

  calculateTotalPrice = () => 
    this.products.forEach(product => this.totalPrice += product.price)

  getCart = () => ({
    products: this.products,
    totalPrice: this.totalPrice
  })
}

module.exports = {
  ShoppingCart
}
