class ShoppingCart {
  products = []

  addProduct = (product) => {
    if(product.price <= 0) {
      throw new Error('Invalid price')
    }
    this.products.push(product)
  }

  removeProduct = (id) => {
    const products = this.products.filter(item => item.id !== id)
    this.products = products
  }

  getTotalPrice = () => {
    let totalPrice = 0
    this.products.forEach(item => {
      totalPrice += item.price
    })
    return totalPrice
  }
}

module.exports = {
  ShoppingCart
}
