<template>
  <div class="flex min-h-dvh flex-col bg-white">
    <AppNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
    <AppFloatingWA />
  </div>
</template>
