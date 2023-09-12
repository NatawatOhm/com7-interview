<template>
  <div>
    <Header />
    <slot name="content" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Header from './Header.vue'
  import Footer from './Footer.vue'
</script>

<style lang="scss" scoped></style>
