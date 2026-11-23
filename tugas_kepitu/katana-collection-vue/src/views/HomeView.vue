<script setup>
import { products } from '../data/products'
import { useCartStore } from '../stores/cart'
import ProductCard from '../components/ProductCard.vue'
const cart = useCartStore()
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow hero-eyebrow">THE ART OF JAPANESE CRAFT</p>
        <h1>Warisan budaya.<br /><span>Sentuhan koleksi.</span></h1>
        <p class="hero-text">Temukan replika katana dekoratif untuk melengkapi ruang koleksi dan interior bergaya Jepang.</p>
        <a class="button" href="#koleksi">Jelajahi Koleksi <span>↗</span></a>
        <p class="hero-note">Koleksi pajangan dan replika tumpul — bukan untuk penggunaan sebagai senjata.</p>
      </div>
      <div class="hero-art">
        <div class="art-frame">
          <img src="https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=90" alt="Koleksi dekorasi bergaya Jepang" />
        </div>
        <span class="vertical-label">CRAFT • CULTURE • COLLECTION</span>
      </div>
    </section>

    <section class="intro-strip">
      <span>01 / CURATED COLLECTION</span>
      <p>Desain yang terinspirasi dari estetika Jepang, dipilih untuk para kolektor dan pencinta dekorasi.</p>
    </section>

    <section id="koleksi" class="collection section-wrap">
      <div class="section-heading">
        <div><p class="eyebrow">PILIHAN KAMI</p><h2>Koleksi unggulan</h2></div>
        <span class="muted">03 ITEMS</span>
      </div>
      <div class="product-grid">
        <ProductCard v-for="product in products" :key="product.id" :product="product" @add="cart.addToCart" />
      </div>
    </section>

    <section class="craft-banner">
      <p class="eyebrow">DETAIL • ESTETIKA • KARAKTER</p>
      <h2>Ruang koleksi yang<br />punya cerita.</h2>
      <p>Jadikan elemen dekoratif sebagai aksen yang memperkuat karakter ruanganmu.</p>
      <RouterLink to="/cart" class="text-link">Lihat daftar koleksi <span>→</span></RouterLink>
    </section>
  </main>
</template>
