<template>
  <div class="h-screen">
    <div>
      <LandingHeroPage :heroImage="heroImage" :IconImage="IconImage" :mainText="mainText" :subText="subText"/>
    </div>
  </div>
</template>

<script>
import LandingHeroPage from './sub-component/LandingHeroPage.vue'

export default {
  name: 'LandingPage',
  components: {
      LandingHeroPage,
    },
    data() {
      return {
        heroImage: (require('@/assets/images/bglanding.png')),
        IconImage: (require('@/assets/icons/HeroLandingLogo.png')),
        mainText: "Coffee and Memories",
        subText: "Since 2021 , Cafe Mystika has been on a mission to provide sustainable and ethical, hand roasted, specialty coffee  at a fair price for you and the farmers.",
      };
      
    },
}
</script>

