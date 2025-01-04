<template>
  <div class="sticky top-0 z-30 shadow-md">
    <!--  store details  -->
    <div class="bg-black-primary text-xs hidden md:block">
      <div class="container mx-auto flex justify-between py-2 md:px-10 lg:px-5">
        <div class="flex w-64 items-center "><img src="../../assets/icons/Vector.png"><span class="text-text-divider">Location :</span><span class="text-text-paragraph"> Valencia Negros Oriental</span></div>
        <div class="flex items-center "><img src="../../assets/icons/Vector-1.png"><span class="ml-1 text-text-divider ">Opening Hours :</span><span class="text-text-paragraph"> 10 : 00 AM - 11 : 00 PM</span></div>
      </div>
    </div>
    <!--  main nav  -->
    <nav :class="navbarClass" class="py-6 px-3 md:px-10 lg:px-5 bg-black-secondary font-radley transition-all duration-300">
      <div class="container mx-auto justify-between flex items-center">
        <!--   Main Logo    -->
        <router-link to="/"><img src="../../assets/icons/cafe-mystika-icon.png"></router-link>
        <!--     Burger menu     -->
        <button @click="toggleSidebar" type="button" class="inline-flex items-center w-10 h-10 justify-center text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

        <!--   Desktop Nav Bar   -->
        <ul class="hidden lg:grid grid-cols-4 gap-x-8 lg:w-3/5 xl:w-2/4 justify-between" id="navbar-default">
          <li class="flex-1">
                <button @click="toggleModal('class')" class="px-5 py-3 w-full block rounded-lg transition ease-in-out delay-150">Class</button>
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
        <button @click="toggleModal('shop')" class="hidden lg:block"><img src="../../assets/icons/shop-icon.png"></button>
        <ModalComponent :openModal="openModal" :currentPageType="currentPageType" @close="toggleModal" />
      </div>
      <!-- Mobile Sidebar Menu (Slides in from the Right) -->
      <div :class="openSidebar? 'translate-x-0' : 'translate-x-full'"
           class="fixed top-0 right-0 h-full w-64 bg-black-secondary text-white transform transition-transform duration-300 ease-in-out z-30 lg:hidden">
        <div class="absolute top-6 left-4 w-24"><img src="../../assets/icons/cafe-mystika-word.png"></div>
        <!-- Close Button (for mobile sidebar) -->
        <button @click="toggleSidebar" class="absolute top-4 right-4 text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <!-- Sidebar Links -->

        <div class="mt-16 p-4 pr-0">
          <ul class="space-y-4 text-left">
            <li><button @click="toggleModal('shop')" class="block px-2 py-3 rounded-l-md transition ease-in-out delay-150">Shop</button></li>
            <li><button @click="toggleModal('class')" class="block px-2 py-3 rounded-l-md transition ease-in-out delay-150">Class</button></li>
            <li><router-link to="/about" class="block px-2 py-3 rounded-l-md transition ease-in-out delay-150" exact-active-class="bg-button-active">About</router-link></li>
            <li><router-link to="/blog" class="block px-2 py-3 rounded-l-md transition ease-in-out delay-150" exact-active-class="bg-button-active">Blog</router-link></li>
            <li><router-link to="/contact" class="block px-2 py-3 rounded-l-md transition ease-in-out delay-150" exact-active-class="bg-button-active">Contact Us</router-link></li>
          </ul>
        </div>
        <div class="mx-auto p-4 pb-10 border-t-2 border-black-primary absolute  inset-x-0 bottom-0">
          <div class="text-left text-2xl text-text-divider">Contact</div>
          <div class="flex items-center mt-6 mb-4">
            <div class="w-6 h-6 mr-3">
              <img src="../../assets/icons/Vector.png">
            </div>
            <span class="text-text-paragraph"> Valencia Negros Oriental</span>
          </div>
          <div class="flex items-center ">
            <div class="w-6 h-6 mr-3">
              <img src="../../assets/icons/Vector-1.png">
            </div>
            <span class="text-text-paragraph"> 10 : 00 AM - 11 : 00 PM</span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

import ModalComponent from "./Modal.vue";


export default {
  name: 'NavAppBar',
  components: {
    ModalComponent,
  },
  data() {
    return {
      isModalOpen: false,
      currentPageType:null,
      scrollY: 0, // Scroll position
      scrollLimit: 100,
      isInitialLoad: true,
    };
  },
  props: {
    openSidebar: {
      type: Boolean,
      required: true,
    },
    openModal: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    navbarClass() {
      const opacity = Math.min(this.scrollY / this.scrollLimit, 1);
      return {
        'bg-transparent text-text-paragraph': opacity === 0,
        'bg-opacity-100 text-text-divider lg:text-text-paragraph': opacity > 0,
      };
    },
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
    toggleSidebar() {
      this.$emit('toggle-sidebar');

    },
    toggleModal(currentPageType) {
      this.currentPageType = currentPageType;
      this.$emit('toggle-modal');

    },
  },
  watch: {
    $route(to,from) {
      console.log(to.fullPath, from.fullPath);
      if (!this.isInitialLoad) {
        if (to.fullPath !== "/") {
          this.toggleSidebar();
        }
      }
      this.isInitialLoad = false;
    },
  },
  mounted() {
    // Add scroll event listener when component is mounted
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // Remove scroll event listener when component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>