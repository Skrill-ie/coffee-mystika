<template>
  <div class="sticky top-0 z-30 shadow-md">
    <!--  store details  -->
    <div class="bg-black-primary text-xs hidden md:block">
      <div class="container mx-auto flex justify-between py-2 md:px-10 lg:px-5">
        <div class="flex w-64 items-center">
          <img src="../../assets/icons/Vector.png" />
          <span class="text-text-divider">Location :</span>
          <span class="text-text-paragraph"> Valencia Negros Oriental</span>
        </div>
        <div class="flex items-center">
          <img src="../../assets/icons/Vector-1.png" />
          <span class="ml-1 text-text-divider">Opening Hours :</span>
          <span class="text-text-paragraph"> 10 : 00 AM - 11 : 00 PM</span>
        </div>
      </div>
    </div>
    <!--  main nav  -->
    <nav :class="navbarClass" class="py-6 px-3 md:px-10 lg:px-5 bg-black-secondary font-radley transition-all duration-300">
      <div class="container mx-auto justify-between flex items-center">
        <!--   Main Logo    -->
        <router-link to="/" @click="resetActiveIndex">
          <img src="../../assets/icons/cafe-mystika-icon.png" />
        </router-link>
        <!--     Burger menu     -->
        <button
          @click="toggleSidebar"
          type="button"
          class="inline-flex items-center w-10 h-10 justify-center text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <!--   Sidebar Menu   -->
        <div
          v-if="isSidebarOpen"
          class="absolute top-16 left-0 w-full bg-black-secondary text-white lg:hidden"
          id="navbar-default"
        >
          <ul class="flex flex-col space-y-4 p-4">
            <li
              v-for="(item, index) in navItems"
              :key="index"
              class="text-center"
            >
              <router-link
                :to="item.link"
                class="block py-2 px-4 rounded-lg hover:bg-gray-700"
                @click="closeSidebar"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!--   Desktop Nav Bar   -->
        <div class="relative hidden lg:grid grid-cols-5 gap-x-8 lg:w-3/5 xl:w-2/4 justify-between" id="navbar-default">
          <li
            v-for="(item, index) in navItems"
            :key="index"
            class="flex-1 relative list-none"
          >
            <router-link
              v-if="item.label !== 'Class'"
              :to="item.link"
              class="px-5 py-3 w-full block rounded-lg transition ease-in-out delay-150"
              :class="{ 'bg-button-active': activeIndex === index }"
              @click="setActiveIndex(index)"
            >
              {{ item.label }}
            </router-link>
            <!-- Special case for Class -->
            <button
              v-else
              class="px-5 py-3 w-full block rounded-lg transition ease-in-out delay-150 text-center"
              :class="{ 'bg-button-active': activeIndex === index }"
              @click="handleClassButtonClick(index)"
            >
              {{ item.label }}
            </button>
          </li>
        </div>
        <button @click="handleShopButtonClick" class="hidden lg:block">
          <img src="../../assets/icons/shop-icon.png" />
        </button>
        <!-- Modal Component -->
        <ModalComponent :openModal="isModalOpen" :currentPageType="currentPageType" @close="handleModalClose" />
      </div>
    </nav>
  </div>
</template>

<script>
import ModalComponent from "./Modal.vue";

export default {
  name: "NavAppBar",
  components: {
    ModalComponent,
  },
  data() {
    return {
      isSidebarOpen: false, // Tracks whether the sidebar is open
      isModalOpen: false, // Tracks whether the modal is open
      currentPageType: null, // Tracks the type of modal content
      scrollY: 0, // Scroll position
      scrollLimit: 100,
      isInitialLoad: true,
      activeIndex: null, // No button is active by default
      previousActiveIndex: null, // Tracks the previously active button
      navItems: [
        { label: "Class", link: "/class" },
        { label: "About", link: "/about" },
        { label: "Blog", link: "/blog" },
        { label: "Services", link: "/services" },
        { label: "Contact Us", link: "/contact" },
      ],
    };
  },
  computed: {
    navbarClass() {
      const opacity = Math.min(this.scrollY / this.scrollLimit, 1);
      return {
        "bg-transparent text-text-paragraph": opacity === 0,
        "bg-opacity-100 text-text-divider lg:text-text-paragraph": opacity > 0,
      };
    },
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen; // Toggle the sidebar state
    },
    closeSidebar() {
      this.isSidebarOpen = false; // Close the sidebar
    },
    toggleModal(currentPageType = null) {
      this.isModalOpen = !this.isModalOpen; // Toggle the modal state
      this.currentPageType = currentPageType; // Set the modal content type
    },
    setActiveIndex(index) {
      this.activeIndex = index;
    },
    resetActiveIndex() {
      this.activeIndex = null; // Reset the active index to deactivate all buttons
    },
    handleClassButtonClick(index) {
      this.previousActiveIndex = this.activeIndex; // Store the previous active index
      this.setActiveIndex(index); // Set the active index to the "Class" button
      this.toggleModal("class"); // Open the modal
    },
    handleShopButtonClick() {
      this.previousActiveIndex = this.activeIndex; // Store the previous active index
      this.setActiveIndex(null); // Deactivate all buttons while the modal is open
      this.toggleModal("shop"); // Open the shop modal
    },
    handleModalClose() {
      this.isModalOpen = false; // Close the modal
      this.setActiveIndex(this.previousActiveIndex); // Restore the previous active index
    },
  },
  watch: {
    $route(to, from) {
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
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Remove scroll event listener when component is destroyed
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>