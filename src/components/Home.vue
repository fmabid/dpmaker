<script setup lang="ts">
import { ref } from "vue";

// defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
</template>

<style scoped></style>
