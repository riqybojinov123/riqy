import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({ items: [] }),
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },
  actions: {
    addToCart(product) {
      const found = this.items.find((item) => item.id === product.id)
      if (found) found.quantity += 1
      else this.items.push({ ...product, quantity: 1 })
    },
    increase(id) {
      const item = this.items.find((entry) => entry.id === id)
      if (item) item.quantity += 1
    },
    decrease(id) {
      const item = this.items.find((entry) => entry.id === id)
      if (!item) return
      if (item.quantity > 1) item.quantity -= 1
      else this.remove(id)
    },
    remove(id) { this.items = this.items.filter((item) => item.id !== id) },
    clearCart() { this.items = [] },
  },
})
