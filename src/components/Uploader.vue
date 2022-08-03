<template>
  <div class="block">
    <!-- <div v-bind="getRootProps()">
      <input v-bind="getInputProps()" />

      <div
        class="border-2 border-sky-300 border-dashed rounded-lg bg-sky-100 px-12 py-12 text-center"
      >
        <span v-if="isDragActive">Drop the files here ...</span>
        <span v-else>Drag 'n' drop image here, or click to select image</span>
      </div>
    </div> -->

    <Dropzone
      class="border-2 border-sky-300 border-dashed rounded-lg bg-sky-100 px-12 py-12 text-center"
      @onSelect="handler"
    >
      <p>Drop file here</p>
    </Dropzone>
  </div>
</template>

<script setup lang="ts">
// import { useDropzone } from "vue3-dropzone";
import Dropzone from "vue3-simple-dropzone";

const emit = defineEmits(["onUploaded"]);

// const { getRootProps, getInputProps, isDragActive, ...rest } = useDropzone({
//   onDrop
// });

// function onDrop(acceptFiles, rejectReasons) {
//   //   console.log(acceptFiles);
//   //   console.log(rejectReasons);
//   console.log(acceptFiles[0]);

//   emit("onUploaded", acceptFiles[0]);
// }

function handler(params) {
  console.log(params);
  emit("onUploaded", params);
}
</script>
