<template>
    <div class="h-screen bg-cover bg-center"  :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="container mx-auto"></div>

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
    }
};
</script>