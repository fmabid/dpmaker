<template>
  <div>
    <div v-if="imgPath">
      <img :src="imgPath" />
    </div>

    <Uploader @on-uploaded="updateImagePath" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Uploader from "@/components/Uploader.vue";

const imgPath = ref("");

function updateImagePath(file) {
  imgPath.value = URL.createObjectURL(file);

  var image = new Image();
  var reader = new FileReader();
}
</script>
