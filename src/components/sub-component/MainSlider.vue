<template>
    <div class="h-screen bg-cover bg-center bg-fixed"  :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="container mx-auto text-text-paragraph">
            <span class="text-2xl">{{ mainText }}</span>
            <p>{{ subText }}</p>
        </div>

    </div>
</template>
<script>
export default {
  name: 'MainSlider',
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
    }
};
</script>