<template>
  <div class="block">
    <div v-bind="getRootProps()">
      <input v-bind="getInputProps()" />

      <p v-if="isDragActive">Drop the files here ...</p>
      <p v-else>Drag 'n' drop some files here, or click to select files</p>
    </div>

    <button @click="open">open</button>
  </div>
</template>

<script setup lang="ts">
import { useDropzone } from "vue3-dropzone";

const emit = defineEmits(["onUploaded"]);

const { getRootProps, getInputProps, isDragActive, ...rest } = useDropzone({
  onDrop,
});

function onDrop(acceptFiles, rejectReasons) {
  emit("onUploaded", acceptFiles[0]);
}
</script>
