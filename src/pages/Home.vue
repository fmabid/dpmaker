<template>
  <div class="h-auto w-full px-12 py-4">
    <div class="flex flex-row justify-center items-center">
      <ImageViewer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ImageViewer from "@/components/ImageViewer.vue";

const count = ref(0);
</script>

<style scoped></style>
