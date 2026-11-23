<script setup>
import { ref, computed } from 'vue'

const judul = ref('')
const kategori = ref('Fiksi')
const sudahDibaca = ref(false)

const daftarBuku = ref([
  { id: 1, judul: 'Laskar Pelangi', kategori: 'Novel', sudahDibaca: true },
  { id: 2, judul: 'Atomic Habits', kategori: 'Pengembangan Diri', sudahDibaca: false },
  { id: 3, judul: 'Bumi', kategori: 'Fiksi', sudahDibaca: false }
])

// Computed property untuk menghitung buku yang sudah selesai dibaca.
const jumlahSelesai = computed(() =>
  daftarBuku.value.filter((buku) => buku.sudahDibaca).length
)

const persentaseSelesai = computed(() =>
  daftarBuku.value.length
    ? Math.round((jumlahSelesai.value / daftarBuku.value.length) * 100)
    : 0
)

function tambahBuku() {
  const nama = judul.value.trim()
  if (!nama) return

  daftarBuku.value.push({
    id: Date.now(),
    judul: nama,
    kategori: kategori.value,
    sudahDibaca: sudahDibaca.value
  })

  judul.value = ''
  kategori.value = 'Fiksi'
  sudahDibaca.value = false
}

function hapusBuku(id) {
  daftarBuku.value = daftarBuku.value.filter((buku) => buku.id !== id)
}
</script>

<template>
  <section class="content">
    <div class="panel form-panel">
      <div class="section-heading">
        <div>
          <p class="eyebrow">TAMBAH CATATAN</p>
          <h2>Input Buku</h2>
        </div>
        <span class="book-emoji">✍️</span>
      </div>

      <form @submit.prevent="tambahBuku">
        <label for="judul">Judul buku</label>
        <input
          id="judul"
          v-model="judul"
          type="text"
          placeholder="Contoh: Negeri 5 Menara"
          required
        />

        <label for="kategori">Kategori buku</label>
        <select id="kategori" v-model="kategori">
          <option>Fiksi</option>
          <option>Novel</option>
          <option>Pengembangan Diri</option>
          <option>Pendidikan</option>
          <option>Sejarah</option>
          <option>Teknologi</option>
          <option>Biografi</option>
          <option>Lainnya</option>
        </select>

        <label class="check-row">
          <input v-model="sudahDibaca" type="checkbox" />
          <span>Buku sudah selesai dibaca</span>
        </label>

        <button class="primary-button" type="submit">＋ Tambahkan Buku</button>
      </form>
    </div>

    <div class="summary-grid">
      <div class="summary-card">
        <span class="summary-icon">📖</span>
        <div><p>Total buku</p><strong>{{ daftarBuku.length }}</strong></div>
      </div>
      <div class="summary-card">
        <span class="summary-icon">✅</span>
        <div><p>Selesai dibaca</p><strong>{{ jumlahSelesai }}</strong></div>
      </div>
      <div class="summary-card">
        <span class="summary-icon">⏳</span>
        <div><p>Belum selesai</p><strong>{{ daftarBuku.length - jumlahSelesai }}</strong></div>
      </div>
    </div>

    <div class="panel list-panel">
      <div class="list-heading">
        <div>
          <p class="eyebrow">KOLEKSI PRIBADI</p>
          <h2>Daftar Buku</h2>
        </div>
        <span class="count-pill">{{ daftarBuku.length }} buku</span>
      </div>

      <div class="progress-area">
        <div class="progress-label">
          <span>Progres membaca</span>
          <strong>{{ persentaseSelesai }}%</strong>
        </div>
        <div class="progress-track">
          <div class="progress-fill" :style="{ width: persentaseSelesai + '%' }"></div>
        </div>
      </div>

      <div v-if="daftarBuku.length" class="book-list">
        <article v-for="buku in daftarBuku" :key="buku.id" class="book-item">
          <div class="book-cover">📘</div>
          <div class="book-info">
            <h3 :class="{ completed: buku.sudahDibaca }">{{ buku.judul }}</h3>
            <p>{{ buku.kategori }}</p>
            <span :class="['status', buku.sudahDibaca ? 'done' : 'pending']">
              {{ buku.sudahDibaca ? '✓ Selesai dibaca' : '● Belum selesai' }}
            </span>
          </div>
          <label class="read-toggle" :title="buku.sudahDibaca ? 'Tandai belum dibaca' : 'Tandai selesai dibaca'">
            <input v-model="buku.sudahDibaca" type="checkbox" />
            <span>Dibaca</span>
          </label>
          <button class="delete-button" type="button" @click="hapusBuku(buku.id)" aria-label="Hapus buku">×</button>
        </article>
      </div>
      <div v-else class="empty-state">
        <span>📚</span>
        <h3>Belum ada buku</h3>
        <p>Tambahkan buku pertama melalui formulir di atas.</p>
      </div>
    </div>
  </section>
</template>