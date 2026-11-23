<script setup>
defineProps({ product: { type: Object, required: true } })
const emit = defineEmits(['add'])
const rupiah = (value) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value)
</script>

<template>
  <article class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
      <span class="product-tag">{{ product.tag }}</span>
    </div>
    <div class="product-info">
      <p class="eyebrow">{{ product.category }}</p>
      <h3>{{ product.name }}</h3>
      <p class="product-desc">{{ product.description }}</p>
      <div class="product-bottom">
        <strong>{{ rupiah(product.price) }}</strong>
        <button class="button button-small" @click="emit('add', product)">Tambah</button>
      </div>
    </div>
  </article>
</template>
