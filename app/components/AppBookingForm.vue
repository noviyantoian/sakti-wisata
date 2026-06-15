<script setup lang="ts">
const { state, step, prefillFromPackage, setCustomEnquiry, next, prev } = useBooking()
const { send } = useWaMessage()

const packages = getAllPackages()

const STEPS = [
  { n: 1, label: 'Pilih Paket' },
  { n: 2, label: 'Data Diri' },
  { n: 3, label: 'Konfirmasi' },
]

const PAX_OPTIONS = [
  '1 orang',
  '2 orang (pasangan)',
  '3–4 orang',
  '5–8 orang',
  '9+ orang (grup)',
]
const REFERRAL_OPTIONS = [
  'Instagram',
  'Google',
  'TikTok',
  'Teman / keluarga',
  'Pernah ikut trip',
  'Lainnya',
]

// Bind package <select> to shared booking state.
const selectedId = computed<string>({
  get: () => state.value.packageId,
  set: (id) => {
    if (id === 'custom') {
      setCustomEnquiry()
      return
    }
    const pkg = getPackageBySlug(id)
    if (pkg) prefillFromPackage(pkg)
  },
})

const today = new Date().toISOString().slice(0, 10)

const canStep1 = computed(
  () => Boolean(state.value.packageId && state.value.pax && state.value.departureDate),
)
const canStep2 = computed(
  () => Boolean(state.value.name.trim() && state.value.whatsapp.trim() && state.value.city.trim()),
)

const fieldClass =
  'w-full border border-rice-2 bg-white px-4 py-3 text-deep placeholder:text-deep/35 outline-none transition-colors duration-200 focus:border-gold'
const labelClass = 'mb-1.5 block text-sm font-medium text-deep/80'

const priceEstimate = computed(() => {
  if (!state.value.packageId) return ''
  if (state.value.packagePrice === 'custom') return 'Disesuaikan dengan kebutuhanmu'
  return `Rp ${formatPrice(state.value.packagePrice)} / ${state.value.packagePricePer}`
})
</script>

<template>
  <div class="bg-rice p-6 shadow-2xl shadow-deep/20 sm:p-8 lg:p-10">
    <!-- Step indicator -->
    <ol class="mb-8 flex items-center gap-2">
      <li v-for="(s, i) in STEPS" :key="s.n" class="flex flex-1 items-center gap-2">
        <span
          class="grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-semibold transition-colors duration-300"
          :class="step >= s.n ? 'bg-rust text-rice' : 'bg-rice-2 text-deep/50'"
        >
          <AppIcon v-if="step > s.n" name="check" class="h-4 w-4" />
          <template v-else>{{ s.n }}</template>
        </span>
        <span
          class="hidden text-sm font-medium sm:block"
          :class="step >= s.n ? 'text-deep' : 'text-deep/45'"
        >
          {{ s.label }}
        </span>
        <span
          v-if="i < STEPS.length - 1"
          class="h-px flex-1 transition-colors duration-300"
          :class="step > s.n ? 'bg-rust' : 'bg-rice-2'"
        />
      </li>
    </ol>

    <form @submit.prevent>
      <!-- Step 1 -->
      <div v-show="step === 1" class="space-y-5">
        <div>
          <label for="bk-paket" :class="labelClass">Paket yang diminati</label>
          <select id="bk-paket" v-model="selectedId" :class="fieldClass">
            <option value="" disabled>Pilih paket…</option>
            <option v-for="p in packages" :key="p.slug" :value="p.slug">{{ p.name }}</option>
            <option value="custom">Belum yakin / mau konsultasi custom</option>
          </select>
          <p v-if="priceEstimate" class="mt-2 text-sm text-rust">
            <AppIcon name="tag" class="-mt-0.5 mr-1 inline h-4 w-4" />Estimasi: {{ priceEstimate }}
          </p>
        </div>

        <div class="grid gap-5 sm:grid-cols-2">
          <div>
            <label for="bk-pax" :class="labelClass">Jumlah peserta</label>
            <select id="bk-pax" v-model="state.pax" :class="fieldClass">
              <option value="" disabled>Pilih jumlah…</option>
              <option v-for="o in PAX_OPTIONS" :key="o" :value="o">{{ o }}</option>
            </select>
          </div>
          <div>
            <label for="bk-date" :class="labelClass">Perkiraan tanggal berangkat</label>
            <input
              id="bk-date"
              v-model="state.departureDate"
              type="date"
              :min="today"
              :class="fieldClass"
            />
          </div>
        </div>

        <div class="flex justify-end pt-2">
          <button
            type="button"
            :disabled="!canStep1"
            class="inline-flex cursor-pointer items-center gap-2 bg-rust px-6 py-3 text-sm font-semibold text-rice transition-colors duration-200 hover:bg-rust-light disabled:cursor-not-allowed disabled:opacity-40"
            @click="next"
          >
            Lanjut <AppIcon name="arrowRight" class="h-4 w-4" />
          </button>
        </div>
      </div>

      <!-- Step 2 -->
      <div v-show="step === 2" class="space-y-5">
        <div class="grid gap-5 sm:grid-cols-2">
          <div>
            <label for="bk-name" :class="labelClass">Nama lengkap</label>
            <input id="bk-name" v-model="state.name" type="text" placeholder="Nama kamu" :class="fieldClass" />
          </div>
          <div>
            <label for="bk-wa" :class="labelClass">Nomor WhatsApp</label>
            <input
              id="bk-wa"
              v-model="state.whatsapp"
              type="tel"
              inputmode="tel"
              placeholder="08xxxxxxxxxx"
              :class="fieldClass"
            />
          </div>
          <div>
            <label for="bk-email" :class="labelClass">Email <span class="text-deep/40">(opsional)</span></label>
            <input id="bk-email" v-model="state.email" type="email" placeholder="email@kamu.com" :class="fieldClass" />
          </div>
          <div>
            <label for="bk-city" :class="labelClass">Kota asal</label>
            <input id="bk-city" v-model="state.city" type="text" placeholder="mis. Jakarta" :class="fieldClass" />
          </div>
        </div>

        <div class="flex items-center justify-between pt-2">
          <button
            type="button"
            class="inline-flex cursor-pointer items-center gap-2 px-4 py-3 text-sm font-medium text-deep/70 transition-colors hover:text-rust"
            @click="prev"
          >
            <AppIcon name="arrowRight" class="h-4 w-4 rotate-180" /> Kembali
          </button>
          <button
            type="button"
            :disabled="!canStep2"
            class="inline-flex cursor-pointer items-center gap-2 bg-rust px-6 py-3 text-sm font-semibold text-rice transition-colors duration-200 hover:bg-rust-light disabled:cursor-not-allowed disabled:opacity-40"
            @click="next"
          >
            Lanjut <AppIcon name="arrowRight" class="h-4 w-4" />
          </button>
        </div>
      </div>

      <!-- Step 3 -->
      <div v-show="step === 3" class="space-y-5">
        <div>
          <label for="bk-notes" :class="labelClass">Permintaan khusus <span class="text-deep/40">(opsional)</span></label>
          <textarea
            id="bk-notes"
            v-model="state.notes"
            rows="3"
            placeholder="mis. ada anak kecil, alergi makanan, request kamar terpisah…"
            :class="fieldClass"
          />
        </div>
        <div>
          <label for="bk-ref" :class="labelClass">Tahu SaktiWisata dari mana?</label>
          <select id="bk-ref" v-model="state.referralSource" :class="fieldClass">
            <option value="">Pilih…</option>
            <option v-for="o in REFERRAL_OPTIONS" :key="o" :value="o">{{ o }}</option>
          </select>
        </div>

        <!-- Ringkasan -->
        <div class="border border-rice-2 bg-white p-5 text-sm">
          <p class="eyebrow mb-3 text-sage">Ringkasan</p>
          <dl class="space-y-2">
            <div class="flex justify-between gap-4">
              <dt class="text-deep/55">Paket</dt>
              <dd class="text-right font-medium text-deep">{{ state.packageName || '-' }}</dd>
            </div>
            <div class="flex justify-between gap-4">
              <dt class="text-deep/55">Peserta</dt>
              <dd class="text-right font-medium text-deep">{{ state.pax || '-' }}</dd>
            </div>
            <div class="flex justify-between gap-4">
              <dt class="text-deep/55">Tanggal</dt>
              <dd class="text-right font-medium text-deep">{{ formatDate(state.departureDate) }}</dd>
            </div>
            <div class="flex justify-between gap-4 border-t border-rice-2 pt-2">
              <dt class="text-deep/55">Estimasi</dt>
              <dd class="text-right font-semibold text-rust">{{ priceEstimate || '-' }}</dd>
            </div>
          </dl>
        </div>

        <div class="flex items-center justify-between pt-1">
          <button
            type="button"
            class="inline-flex cursor-pointer items-center gap-2 px-4 py-3 text-sm font-medium text-deep/70 transition-colors hover:text-rust"
            @click="prev"
          >
            <AppIcon name="arrowRight" class="h-4 w-4 rotate-180" /> Kembali
          </button>
          <button
            type="button"
            class="inline-flex cursor-pointer items-center gap-2 bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
            @click="send"
          >
            <AppIcon name="whatsapp" class="h-5 w-5" /> Kirim via WhatsApp
          </button>
        </div>
        <p class="text-center text-xs text-deep/45">
          Kamu akan diarahkan ke WhatsApp dengan pesan otomatis. Tim kami balas secepatnya. 🙏
        </p>
      </div>
    </form>
  </div>
</template>
