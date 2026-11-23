<script setup>
import BukuCatatan from './components/BukuCatatan.vue'
</script>

<template>
  <main class="page">
    <header class="hero">
      <div class="hero-icon">📚</div>
      <p class="eyebrow">APLIKASI CATATAN MEMBACA</p>
      <h1>Buku Catatan</h1>
      <p class="subtitle">Catat buku yang ingin kamu baca dan pantau progres bacaanmu.</p>
    </header>

    <BukuCatatan />

    <footer>Praktikum Pemrograman Web · Vue 3 Composition API</footer>
  </main>
</template>