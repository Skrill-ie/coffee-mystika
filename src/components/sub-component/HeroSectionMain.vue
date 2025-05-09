<template>
    <div class="h-auto sm:h-screen bg-cover bg-right-bottom md:bg-center bg-fixed" :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="bg-blackOverlay pt-16 sm:pt-0">
            <div class="container mx-auto h-screen pb-10 px-5 lg:px-10">
              <div class="relative h-full">
                <div class="md:text-left absolute inset-x-0 bottom-1/4 font-radley">
                    <div class="text-5xl lg:text-xl text-text-title mb-10 slide-in-bottom" style="animation-delay: 0ms;">{{ mainText }}</div>
                    <div class="text-sm text-text-paragraph w-full lg:w-3/4">
                      <p class="mb-10 slide-in-bottom text-mid" style="animation-delay: 5ms;">{{ subText }}</p>
                      <p class="hidden lg:block slide-in-bottom" v-if="paragraphText" style="animation-delay: 10ms;">{{ paragraphText }}</p>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes slideInBottom {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-in-bottom {
  animation: slideInBottom 1s ease-out forwards;
}
</style>

<script>
export default {
  name: 'HeroSectionMain',
  props: {
    heroImage: {
      type: String,
      required: true,
    },
    subText: {
      type: String,
      required: false,
    },
    mainText: {
      type: String,
      required: false,
    },
    paragraphText: {
      type: String,
      required: false,
    },
  },
};
</script>