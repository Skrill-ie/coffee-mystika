<template>
    <div class="h-auto sm:h-screen bg-cover bg-right-bottom md:bg-center bg-fixed" :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="bg-blackOverlay pt-16 sm:pt-0">
            <div class="container mx-auto h-screen pb-10 px-5 lg:px-10">
              <div class="relative h-full">
                <div class="md:text-left absolute inset-x-0 bottom-1/4 font-radley"> <!-- Adjusted bottom position -->
                    <div class="text-5xl lg:text-xl text-text-title mb-10">{{ mainText }}</div>
                    <div class="text-sm text-text-paragraph w-full lg:w-3/4"> <!-- Adjusted width -->
                      <p class="mb-10">{{ subText }}</p>
                      <p class="hidden lg:block" v-if="paragraphText">{{ paragraphText }}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
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
            required: false, // Adjust to true if this is required
        },
        mainText: {
            type: String,
            required: false, // Adjust to true if this is required
        },
        paragraphText: {
            type: String,
            required: false,
        }
    }
};
</script>