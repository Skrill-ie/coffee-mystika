<template>
  <div v-if="openModal" :class="[
        'fixed inset-0 flex items-center justify-center z-50',
        modalBackgroundClass
      ]">
    <div class="bg-black-secondary rounded-lg shadow-lg max-w-3xl w-full z-10">
      <div class="grid grid-cols-2">
        <div class="col-span-2 relative md:col-span-1 h-48 bg-center md:h-full md:w-full bg-no-repeat bg-cover" :style="{ backgroundImage: `url(${imageFeatured})` }">
          <div class="md:hidden absolute inset-x-0 bottom-0 block text-4xl font-radley text-text-paragraph capitalize bg-opacity-50 bg-black-secondary py-2">
            {{ currentPageType }} Coming Soon
          </div>
        </div>
        <div class="col-span-2 md:col-span-1 md:text-left px-5 py-0 pb-10 md:py-20">
          <div class="hidden md:block text-4xl font-radley text-text-paragraph mb-4 capitalize">{{ currentPageType }} Coming Soon</div>
          <div class="py-10 text-text-paragraph">
            <span v-if="currentPageType === 'shop'" >Exciting things are on the way! Our shop is coming soon—stay tuned!</span>
            <span v-else> Get ready—our class is launching soon! Stay tuned for updates!</span>
          </div>
          <button @click="$emit('close')" class="px-4 py-2 bg-button-active rounded-md hover:bg-orange-400 transition w-full text-text-paragraph">
            Close
          </button>
        </div>
      </div>
      <div class="flex justify-end space-x-2">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    openModal: {
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
      imageMerch:(require('@/assets/images/merch.png')),
      imageClass:(require('@/assets/images/image.png')),
      imageFeatured:"",
      modalBackgroundClass: 'bg-black bg-opacity-0', // Initial background (transparent),
    }
  },
  watch : {
    currentPageType(newVal) {
      if  (newVal === "shop") {
        this.imageFeatured = this.imageMerch;
      } else {
        this.imageFeatured = this.imageClass;
      }
    },
    openModal(newVal) {
      if (newVal) {
        // When the modal opens, animate to full opacity
        this.modalBackgroundClass = 'bg-black bg-opacity-50 transition-opacity duration-500';
      } else {
        // When the modal closes, reset background to transparent
        this.modalBackgroundClass = 'bg-black bg-opacity-0 transition-opacity duration-500';
      }
    },
  },
};
</script>
