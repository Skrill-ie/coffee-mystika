<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <NavAppBar/>
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
  }
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