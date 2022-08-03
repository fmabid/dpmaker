<template>
  <div class="block">
    <Dropzone
      class="border-2 border-sky-300 border-dashed rounded-lg bg-sky-100 text-center"
      @onSelect="handler"
    >
      <p class="p-12">Click here or Drop image</p>
    </Dropzone>
  </div>
</template>

<script setup lang="ts">
import Dropzone from "vue3-simple-dropzone";

const emit = defineEmits(["onUploaded"]);

function handler(event: any) {
  emit("onUploaded", event);
}
</script>
