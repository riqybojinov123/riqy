<script setup>
import { useCartStore } from './stores/cart'
const cart = useCartStore()
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <RouterLink to="/" class="brand"><span class="brand-mark">刀</span><span>KATANA<span class="brand-light"> COLLECTION</span></span></RouterLink>
      <nav><RouterLink to="/">Beranda</RouterLink><a href="/#koleksi">Koleksi</a><RouterLink to="/cart" class="cart-link">Daftar pilihan <span>{{ cart.totalItems }}</span></RouterLink></nav>
    </header>
    <RouterView />
    <footer class="site-footer">
      <RouterLink to="/" class="brand"><span class="brand-mark">刀</span><span>KATANA<span class="brand-light"> COLLECTION</span></span></RouterLink>
      <p>Replika dekoratif untuk koleksi dan interior. Bukan senjata fungsional.</p>
      <span>© 2026 KATANA COLLECTION</span>
    </footer>
  </div>
</template>
