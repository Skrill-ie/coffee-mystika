<template>
   <nav class="flex justify-between container mx-auto">
    <router-link to="/">Home</router-link>
    <ul class="flex w-2/4 justify-between">
      <li>
        <router-link to="/about">Classes</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Blog</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <router-link to="/">Shop</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavAppBar',
};
</script>