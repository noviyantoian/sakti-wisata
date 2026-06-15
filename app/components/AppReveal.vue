<script setup lang="ts">
// Scroll-reveal wrapper. SSR-safe: content is in the DOM for SEO;
// IntersectionObserver toggles the .is-visible class on enter.
const props = withDefaults(defineProps<{ as?: string; delay?: number }>(), {
  as: 'div',
  delay: 0,
})

const el = ref<HTMLElement | null>(null)

onMounted(() => {
  const node = el.value
  if (!node) return
  if (!('IntersectionObserver' in window)) {
    node.classList.add('is-visible')
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          io.unobserve(node)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )
  io.observe(node)
})
</script>

<template>
  <component
    :is="as"
    ref="el"
    class="reveal"
    :style="delay ? { transitionDelay: `${delay}ms` } : undefined"
  >
    <slot />
  </component>
</template>
