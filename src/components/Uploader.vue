<template>
  <div class="block">
    <div v-bind="{ getRootProps: getRootProps() }">
      <input v-bind="{ getInputProps: getInputProps() }" />

      <div
        class="border-2 border-sky-300 border-dashed rounded-lg bg-sky-100 px-12 py-12 text-center"
      >
        <span v-if="isDragActive">Drop the files here ...</span>
        <span v-else>Drag 'n' drop image here, or click to select image</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDropzone } from "vue3-dropzone";

const emit = defineEmits(["onUploaded"]);

const { getRootProps, getInputProps, isDragActive, ...rest } = useDropzone({
  onDrop
});

function onDrop(acceptFiles: Array<any>, rejectReasons: any) {
  //   console.log(acceptFiles);
  //   console.log(rejectReasons);
  emit("onUploaded", acceptFiles[0]);
}
</script>
