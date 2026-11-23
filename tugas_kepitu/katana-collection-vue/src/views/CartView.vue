<script setup>
import { useCartStore } from '../stores/cart'
const cart = useCartStore()
const rupiah = (value) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value)
</script>

<template>
  <main class="cart-page section-wrap">
    <p class="eyebrow">YOUR SELECTION</p>
    <h1>Daftar koleksi</h1>
    <p class="muted cart-subtitle">Ringkasan item dekoratif yang kamu pilih.</p>

    <div v-if="cart.items.length" class="cart-layout">
      <div class="cart-list">
        <article v-for="item in cart.items" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" />
          <div class="cart-item-info">
            <p class="eyebrow">{{ item.category }}</p>
            <h3>{{ item.name }}</h3>
            <strong>{{ rupiah(item.price) }}</strong>
            <div class="quantity">
              <button @click="cart.decrease(item.id)" aria-label="Kurangi jumlah">−</button>
              <span>{{ item.quantity }}</span>
              <button @click="cart.increase(item.id)" aria-label="Tambah jumlah">+</button>
              <button class="remove" @click="cart.remove(item.id)">Hapus</button>
            </div>
          </div>
        </article>
      </div>
      <aside class="summary">
        <p class="eyebrow">RINGKASAN</p>
        <div class="summary-row"><span>Total item</span><strong>{{ cart.totalItems }}</strong></div>
        <div class="summary-row total"><span>Total simulasi</span><strong>{{ rupiah(cart.totalPrice) }}</strong></div>
        <button class="button full" @click="cart.clearCart()">Kosongkan daftar</button>
        <p class="fine-print">Demo praktikum: tidak ada transaksi atau pengiriman sungguhan.</p>
      </aside>
    </div>

    <div v-else class="empty-state">
      <div class="empty-icon">✳</div>
      <h2>Daftarmu masih kosong</h2>
      <p>Tambahkan item dekoratif dari halaman koleksi.</p>
      <RouterLink to="/" class="button">Kembali ke koleksi</RouterLink>
    </div>
  </main>
</template>
