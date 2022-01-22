<template>
  <div class="block">
    <div>
      <input ref="file" type="file" @change="onDrop" style="display: none" />

      <div
        @click="file.click()"
        class="border-2 border-sky-300 border-dashed rounded-lg bg-sky-100 px-12 py-12 text-center"
      >
        <!-- <span v-if="isDragActive">Drop the files here ...</span>
        <span v-else>Drag 'n' drop image here, or click to select image</span> -->
        click to select a image
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDropzone } from "vue3-dropzone";

const emit = defineEmits(["onUploaded"]);

const { getRootProps, getInputProps, isDragActive, ...rest } = useDropzone({
  onDrop
});

const file = ref();

function onDrop(acceptFiles: any) {
  //   console.log(rejectReasons);
  emit("onUploaded", acceptFiles.target.files["0"]);
}
</script>
