<script setup>
import { defineAsyncComponent } from 'vue';
import GamesHeader from './GamesHeader.vue';
const GamesData = defineAsyncComponent(() => import('./GamesData.vue'));
</script>

<template>
    <GamesHeader />
    <GamesData />
</template>