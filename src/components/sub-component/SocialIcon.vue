<template>
    <div class="relative">
      <button @click="toggleSocials"
              :class="['fixed bottom-4 right-0 w-24 h-24 m-3 mr-0 bg-text-title shine-effect z-30 transition-all duration-500 ease-in-out drop-shadow-lg overflow-hidden',
              isSocialsOpen ? 'rounded-full':'rounded-l-full']">
        <img src="../../assets/images/angelo.jpg">
      </button>

      <div
        :class="[
        'fixed bottom-4 right-4 bg-stone-900 my-5 text-white rounded-lg shadow-lg transition-transform duration-300 w-96 z-20 justify-items-center',
        isSocialsOpen ? 'translate-x-0' : 'translate-x-full'
      ]">
        <div class="flex mx-5 my-3 space-x-5 pr-10">
          <div><a target="_blank" :href="socialInstagram"><img class="w-14" src="../../assets/icons/instagram.png"></a></div>
          <div><a target="_blank" :href="socialYoutube"><img class="w-14" src="../../assets/icons/youtube.png"></a></div>
          <div><a target="_blank" :href="socialFacebook"><img class="w-14" src="../../assets/icons/facebook.png"></a></div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'SocialIcons',
  data() {
    return {
      isSocialsOpen: false, // Tracks menu open/close state
      socialFacebook: "https://www.facebook.com/CafeMystika",
      socialInstagram: "https://www.instagram.com/cafemystika/",
      socialYoutube: "https://www.youtube.com/c/ThePinoyDrinker",
    };
  },
  methods: {
    toggleSocials() {
      this.isSocialsOpen = !this.isSocialsOpen; // Toggles the state
    },
  },
};
</script>

<style>
@keyframes shine {
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
}
.shine-effect {
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2));
  background-size: 200% 200%;
  animation: shine 1.5s infinite;

}
.social-container{
  width: 45rem;
}
</style>