<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- overlay for sidebar -->
  <div
      v-if="openSidebar"
      class="fixed inset-0 bg-black-secondary bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 z-20"
      @click="toggleSidebar"
  ></div>
  <!-- overlay for modal -->
  <div
      v-if="openModal"
      class="fixed inset-0 bg-black-secondary bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 z-30"
      @click="toggleModal"
  ></div>
  <NavAppBar :openSidebar="openSidebar" :openModal="openModal" @toggle-sidebar="toggleSidebar" @toggle-modal="toggleModal"/>
  <div class="-mt-40">
    <router-view/>
    <AppFooter/>
  </div>
  <div class="absolute bottom-0 right-0 w-24 h-24 m-10 bg-text-title rounded-full shine-effect"><SocialIcons/></div>
</template>

<script>
import NavAppBar from './components/NavBar.vue'; // Import the Navbar component
import AppFooter from './components/Footer.vue'; // Import the Footer component
import SocialIcons from './components/SocialIcon.vue'; // Import the Footer component

 
export default {
  name: 'App',
  components: {
    NavAppBar,
    AppFooter,
    SocialIcons,
  },
  data() {
    return {
      openSidebar: false,
      openModal:false,
    };
  },
  methods: {
    toggleSidebar() {
      this.openSidebar = !this.openSidebar;
    },
    toggleModal(){
      this.openModal = !this.openModal;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
</style>