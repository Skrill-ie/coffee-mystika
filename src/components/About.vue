<template>
    <div>
      <MainSlider :heroImage="heroImage"/>
    </div>
  </template>
  
  <script>
  import MainSlider from './sub-component/MainSlider.vue'
  export default {
    name: 'AboutUs',
    components: {
      MainSlider,
    },
    data() {
    return {
      heroImage: (require('@/assets/images/HeroBackground.png'))
    };
  },
  };
  </script>
  