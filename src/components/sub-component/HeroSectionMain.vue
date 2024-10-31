<template>
    <div class="h-screen bg-cover bg-center bg-fixed"  :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="container mx-auto relative h-screen">
            <div class="absolute bottom-20 left-0 text-left font-radley">
                <h1 class="text-xl text-text-title">{{ mainText }}</h1>
                <div class="text-sm text-text-title w-1/2">{{ subText }}</div>
                <p class="text-text-paragraph pt-7" v-if="paragraphText">{{ paragraphText }}</p>
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