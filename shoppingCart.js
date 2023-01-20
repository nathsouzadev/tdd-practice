class ShoppingCart {
  products = []
  totalPrice = 0

  addProduct = (product) => {
    this.products.push(product)
    let totalPrice = 0
    this.products.forEach(item => {
      totalPrice += item.price
    })
    this.totalPrice = totalPrice
  }

  removeProduct = () => []
}

module.exports = {
  ShoppingCart
}
