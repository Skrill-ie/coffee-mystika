<template>
    <div>
      <MainSlider :heroImage="heroImage" :mainText="mainText" :subText="subText"/>
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
      heroImage: (require('@/assets/images/HeroBackground.png')),
      mainText: "Meet the Dream Team",
      subText: "Since 2021 , Cafe Mystika has been on a mission to provide sustainable and ethical, hand roasted, specialty coffee  at a fair price for you and the farmers"
    };
  },
  };
  </script>
  