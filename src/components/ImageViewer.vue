<template>
  <div class="relative flex flex-col space-y-10">
    <div class="block mx-auto">
      <div class="flex flex-row items-center justify-center" ref="imageNode">
        <div
          v-if="imgPath"
          class="w-96 h-96 flex flex-row items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <div class="imgSize mx-auto rounded-full overflow-hidden">
            <img
              class="imgSize mx-auto object-cover object-center"
              :src="imgPath"
            />
            No image
          </div>
        </div>
      </div>

      <div id="bar"></div>

      <Uploader class="mt-10" @on-uploaded="updateImagePath" />
    </div>

    <button
      :disabled="!imgPath"
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
// "https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
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

<style>
.imgSize {
  width: 23rem;
  height: 23rem;
}
</style>
