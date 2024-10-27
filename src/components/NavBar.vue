<template>
  <div class="">
    <div class="container mx-auto flex justify-between py-2">
      <p><span class="text-text-divider">Location :</span><span class="text-text-paragraph"> Valencia Negros Oriental</span></p>
      <p><span class="text-text-divider">Opening Hours :</span><span class="text-text-paragraph"> 10 : 00 AM - 11 : 00 PM</span></p>
    </div>
    <nav class="py-10 bg-black-secondary bg-opacity-50  text-white font-radley">
      <div class="container mx-auto flex justify-between">
        <router-link to="/">Home</router-link>
        <ul class="flex w-2/4 justify-between">
          <li>
            <router-link to="/about" class="px-5 py-3 w-32" exact-active-class="bg-button-active">Classes</router-link>
          </li>
          <li>
            <router-link to="/about" class="px-5 py-3 w-32" exact-active-class="bg-button-active">About</router-link>
          </li>
          <li>
            <router-link to="/contact" class="px-5 py-3 w-32" exact-active-class="bg-button-active">Blog</router-link>
          </li>
          <li>
            <router-link to="/contact" class="px-5 py-3 w-32" exact-active-class="bg-button-active">Contact Us</router-link>
          </li>
        </ul>
        <router-link to="/">Shop</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavAppBar',
};
</script>