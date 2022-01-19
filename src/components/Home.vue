<template>
  <div class="text-center space-x-4 py-4">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>

  <div class="bg-yellow-100 w-full px-12">j</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<style scoped></style>
