<script setup>
import { defineAsyncComponent } from 'vue';
import Header from './AboutHeader.vue';
const Section = defineAsyncComponent(() => import('./AboutSection.vue'));
const Footer = defineAsyncComponent(() => import('./AboutFooter.vue'));
</script>

<template>
    <Header />
    <Section />
    <Footer />
</template>