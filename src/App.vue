<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <NavAppBar/>
  <router-view/>
  <AppFooter/>
</template>

<script>
// import { HelloWorld } from './router';
import NavAppBar from './components/NavBar.vue'; // Import the Navbar component
import AppFooter from './components/Footer.vue'; // Import the Footer component
 
export default {
  name: 'App',
  components: {
    NavAppBar,
    AppFooter,
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
</style>
