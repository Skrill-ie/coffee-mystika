<template>
  <div class="">
    <div class="container mx-auto flex justify-between py-2">
      <p><span class="text-text-divider">Location :</span><span class="text-text-paragraph"> Valencia Negros Oriental</span></p>
      <p><span class="text-text-divider">Opening Hours :</span><span class="text-text-paragraph"> 10 : 00 AM - 11 : 00 PM</span></p>
    </div>
    <nav class="py-6 bg-black-secondary bg-opacity-50  text-white font-radley">
      <div class="container mx-auto flex justify-between">
        <router-link to="/">Home</router-link>
        <ul class="grid grid-cols-4 gap-x-8 w-2/4 justify-between">
          <li class="flex-1">
            <router-link to="/about" class="px-5 py-3 w-full block rounded-lg transition ease-in-out delay-150" exact-active-class="bg-button-active">Classes</router-link>
          </li>
          <li class="flex-1">
            <router-link to="/about" class="px-5 py-3 w-full block rounded-lg transition ease-in-out delay-150" exact-active-class="bg-button-active">About</router-link>
          </li>
          <li class="flex-1">
            <router-link to="/contact" class="px-5 py-3 w-full block rounded-lg transition ease-in-out delay-150" exact-active-class="bg-button-active">Blog</router-link>
          </li>
          <li class="flex-1">
            <router-link to="/contact" class="px-5 py-3 w-full block rounded-lg transition ease-in-out delay-150" exact-active-class="bg-button-active">Contact Us</router-link>
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