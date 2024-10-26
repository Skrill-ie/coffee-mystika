<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <NavAppBar/>
  <router-view/>

</template>

<script>
// import { HelloWorld } from './router';
import NavAppBar from './components/NavBar.vue'; // Import the Navbar component

export default {
  name: 'App',
  components: {
    NavAppBar
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
  margin-top: 60px;
}
</style>
