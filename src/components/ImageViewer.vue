<template>
  <div class="relative flex flex-col space-y-10">
    <div class="block mx-auto">
      <div ref="imageNode">
        <div class="w-3/4 mx-auto" v-if="imgPath">
          <img :src="imgPath" />
          No image
        </div>
      </div>

      <div id="bar"></div>

      <Uploader @on-uploaded="updateImagePath" />
    </div>

    <button
      @click="convertToImage"
      class="bg-lime-400 text-sky-50 px-12 py-2 rounded-lg"
    >
      Download
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import domtoimage from "dom-to-image";
import Uploader from "@/components/Uploader.vue";

/**
 * Template Refs
 */

const imageNode = ref();

/**
 * Variables
 */

const imgPath = ref("");

/**
 * Functions
 */

function updateImagePath(file) {
  imgPath.value = URL.createObjectURL(file);

  var image = new Image();
  var reader = new FileReader();
}

function convertToImage() {
  domtoimage.toBlob(imageNode.value).then(function (blob) {
    const link = window.URL.createObjectURL(blob);

    download(link, "output.png");
  });
}

function download(link: string, name: string) {
  let a = document.createElement("a");
  a.href = link;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
</script>
