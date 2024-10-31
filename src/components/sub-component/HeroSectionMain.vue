<template>
    <div class="h-screen bg-cover bg-center h-fit pb-48"  :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="container mx-auto pt-[32rem]">
            <h1 class="text-xl text-left font-radley text-text-title">{{ mainText }}</h1>
            <p class="text-base text-left font-radley text-text-title">{{ subText }}</p>
            <p class="text-mid text-left font-radley text-text-paragraph pt-7" v-if="paragraphText">{{ paragraphText }}</p>
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