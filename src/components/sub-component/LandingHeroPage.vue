<template>
    <div class="h-screen bg-cover bg-center bg-fixed" :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="bg-blackOverlay">
            <div class="container mx-auto relative h-screen">
                <div class="absolute bottom-[23vh] left-0 w-full justify-items-center font-radley">
                    <div class="justify-items-center animate-transition-left delay-1000 fill-mode-forwards"><img :src="IconImage"></div>
                    <h1 class="text-xl text-text-title pb-10 pt-14 w-full">{{ mainText }}</h1>
                    <div class="text-base text-text-title w-full border-b-2 border-[#F9DBB7] pb-10">{{ subText }}</div>
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
        IconImage: {
            type: String,
            required: false,
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