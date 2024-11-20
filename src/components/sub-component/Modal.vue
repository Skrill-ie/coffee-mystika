<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-black-secondary rounded-lg shadow-lg max-w-lg max-h-screen h-3/4 w-full z-10">
      <div class="grid grid-rows-3 grid-flow-col gap-4 h-full">
        <div class="row-span-3 ..."><div class="bg-cover h-full w-full" :style="{ backgroundImage: `url(${image1})` }"></div></div>
        <div class="col-span-2 ...">02</div>
        <div class="row-span-2 col-span-2 ...">
            03
        </div>
      </div>
      <h4 class="text-2xl font-radley font-bold mb-4 capitalize">{{ currentPageType }} Coming Soon</h4>
      <div class="flex justify-end space-x-2">
        <button @click="$emit('close')" class="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition w-full">
          Close
        </button>
      </div>
    </div>
    <div v-if="isOpen" class="h-full w-full bg-black-secondary absolute bg-opacity-50"></div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    isOpen: {
      type: Boolean,
      required: true, // The parent must pass this prop
    },
    currentPageType: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      // featuredMerch:{
        image1:(require('@/assets/images/merch.png')),
        // image2:(require('@/assets/images/baristas/merch2.JPG')),
        // image3:(require('@/assets/images/baristas/merc3.JPG')),
        // image4:(require('@/assets/images/baristas/merch4.JPG')),
      // },
    }
  },
};
</script>
