<script setup>
import { defineAsyncComponent } from 'vue'
import Header from './Header.vue';
const Section = defineAsyncComponent({
  loader: () => import('./Section.vue'),
  loadingComponent: { template: '<div style="height: 100vh"></div>' }, // Placeholder
  delay: 200 // Show loading after 200ms
})
</script>

<template>
    <Header />
    <Section />
</template>