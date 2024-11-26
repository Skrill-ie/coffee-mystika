<template>
  <!-- overlay for sidebar -->
  <div
      v-if="openSidebar"
      class="fixed inset-0 bg-black-secondary bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 z-20"
      @click="toggleSidebar"
  ></div>
  <!-- overlay for modal -->
  <div
      v-if="openModal"
      class="fixed inset-0 bg-black-secondary bg-opacity-50 backdrop-blur-sm transition-all duration-300 z-30"
      @click="toggleModal"
  ></div>
  <SocialIcons/>
  <NavAppBar :openSidebar="openSidebar" :openModal="openModal" @toggle-sidebar="toggleSidebar" @toggle-modal="toggleModal"/>
  <div class="-mt-40">
    <router-view/>
    <AppFooter/>
  </div>

</template>

<script>
import NavAppBar from './components/sub-component/NavBar.vue'; // Import the Navbar component
import AppFooter from './components/sub-component/Footer.vue'; // Import the Footer component
import SocialIcons from './components/sub-component/SocialIcon.vue'; // Import the Footer component

 
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

</style>