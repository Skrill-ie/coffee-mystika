<template>
  <div class="sticky top-0 z-10 shadow">
    <div class="bg-black-primary text-xs">
      <div class="container mx-auto flex justify-between py-2 ">
        <div class="flex w-64 items-center "><img src="../assets/icons/Vector.png"><span class="text-text-divider">Location :</span><span class="text-text-paragraph"> Valencia Negros Oriental</span></div>
        <div class="flex items-center "><img src="../assets/icons/Vector-1.png"><span class="text-text-divider">Opening Hours :</span><span class="text-text-paragraph"> 10 : 00 AM - 11 : 00 PM</span></div>
      </div>
    </div>
    <nav class="py-6 bg-black-secondary bg-opacity-65  text-white font-radley">
      <div class="container mx-auto flex justify-between">
        <router-link to="/"><img src="../assets/icons/cafe-mystika-icon.png"></router-link>
        <ul class="grid grid-cols-4 gap-x-8 w-2/4 justify-between">
          <li class="flex-1">
            <router-link to="/about" class="px-5 py-3 w-full block rounded-lg transition ease-in-out delay-150" exact-active-class="bg-button-active">Classes</router-link>
          </li>
          <li class="flex-1">
            <router-link to="/about" class="px-5 py-3 w-full block rounded-lg transition ease-in-out delay-150" exact-active-class="bg-button-active">About</router-link>
          </li>
          <li class="flex-1">
            <router-link to="/blog" class="px-5 py-3 w-full block rounded-lg transition ease-in-out delay-150" exact-active-class="bg-button-active">Blog</router-link>
          </li>
          <li class="flex-1">
            <router-link to="/contact" class="px-5 py-3 w-full block rounded-lg transition ease-in-out delay-150" exact-active-class="bg-button-active">Contact Us</router-link>
          </li>
        </ul>
        <router-link to="/"><img src="../assets/icons/shop-icon.png"></router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavAppBar',
};
</script>