<template>
    <div>
      <HeroSectionMain :heroImage="heroImage" :mainText="mainText" :subText="subText" :paragraphText="paragraphText"/>
    </div>
    <div class="container py-20 mx-auto pb-10">
      <div class="grid gap-5 xl:gap-14 lg:grid-cols-3">
        <div class="w-full max-w-5xl lg:col-span-2 px-5 lg:pl-10"> <!--divide section 1-->
          <ul class="grid gap-5 lg:gap-10 grid-cols-2 grid-rows-2">
            <li v-for="(blog, index) in blogs" :key="'blog'+index">
              <div @click="toggleBlogModal(blog)">
                <div><img :src="blog.blogImage" class="size-full"></div>
                <div class="text-lg lg:text-2xl text-text-paragraph font-radley text-left pt-4 text-ellipsis">{{ blog.title }}</div>
                <div class="text-xs lg:text-sm text-right text-gray-500 font-radley pt-7">{{ blog.date }}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="lg:col-span-1"> <!--divide section 2-->
          <div class="text-sm lg:sticky lg:top-36">
            <div class=" bg-black-secondary w-full font-radley px-5 lg:px-10 pb-10">
              <div class="pt-10 text-center lg:text-start">
                <p class="text-4xl mb-10 font-radley text-text-title">Get cozy and join our newsletter family!</p>
                <p class="w-3/4 lg:w-full mx-auto text-text-paragraph">Cozy up with the Cafe Mystika Newsletter — get the latest news, special deals, and secret coffee notes brewed just for you!</p>
              </div>
              <div class="pt-5">
                <input type="text" id="fname" name="fname" placeholder="First Name" style="color: #FDECD8" class="w-full border-solid border bg-transparent placeholder-[#FDECD8] border-[#F9DBB7] px-4 py-4">
                <input type="text" id="fname" name="lname" placeholder="Last Name" style="color: #FDECD8" class="w-full border-solid border bg-transparent placeholder-[#FDECD8] border-[#F9DBB7] px-4 py-4 my-5">
                <input type="text" id="email" name="email" placeholder="Email" style="color: #FDECD8" class="w-full border-solid border bg-transparent placeholder-[#FDECD8] border-[#F9DBB7] px-4 py-4">
              </div>
              <div class="pt-4">
                <button class="px-5 py-3 w-full block rounded-lg bg-button-active hover:bg-orange-400 transition">Subscribe</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  <BlogModal :showBlogModal="showBlogModal" :currentBlog="currentBlog"  @close-blog-modal="closeBlogModal" />
  </template>
  
  <script>
  import HeroSectionMain from './sub-component/HeroSectionMain.vue'
  import BlogModal from "./sub-component/BlogModal.vue";

  export default {
    name: 'BlogPage',
    components: {
      HeroSectionMain,
      BlogModal,
    },
    data() {
      return {
        heroImage: (require('@/assets/images/blog/mystika5.jpg')),
        mainText: "Featured Post",
        subText: "Lorem epsum odor amet, consectetuer adipiscing elit",
        paragraphText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum lacus nulla, et condimentum nunc tristique nec. Donec ornare velit ipsum, eget blandit augue egestas convallis. In auctor diam urna, sit amet viverra diam convallis eget. Morbi sed eleifend lacus. Fusce sit amet eleifend sapien, at varius odio. Nunc sed neque pretium, pharetra erat in, feugiat diam. Aliquam erat volutpat. ",
        blogs: [
          { blogImage: (require('@/assets/images/blog/Group40.png')), title: 'Lorem  odor amet, consectetuer  elit', date: 'October 1, 2024', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum lacus nulla, et condimentum nunc tristique nec. Donec ornare velit ipsum, eget blandit augue egestas convallis. In auctor diam urna, sit amet viverra diam convallis eget. Morbi sed eleifend lacus. Fusce sit amet eleifend sapien, at varius odio. Nunc sed neque pretium, pharetra erat in, feugiat diam. Aliquam erat volutpat. '},
          { blogImage: (require('@/assets/images/blog/Group40.png')), title: 'Lorem  amet, consectetuer adipiscing ', date: 'October 2, 2024', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum lacus nulla, et condimentum nunc tristique nec. Donec ornare velit ipsum, eget blandit augue egestas convallis. In auctor diam urna, sit amet viverra diam convallis eget. Morbi sed eleifend lacus. Fusce sit amet eleifend sapien, at varius odio. Nunc sed neque pretium, pharetra erat in, feugiat diam. Aliquam erat volutpat. '},
          { blogImage: (require('@/assets/images/blog/Group40.png')), title: 'Lorem ,  adipiscing elit', date: 'October 3, 2024', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum lacus nulla, et condimentum nunc tristique nec. Donec ornare velit ipsum, eget blandit augue egestas convallis. In auctor diam urna, sit amet viverra diam convallis eget. Morbi sed eleifend lacus. Fusce sit amet eleifend sapien, at varius odio. Nunc sed neque pretium, pharetra erat in, feugiat diam. Aliquam erat volutpat. '},
          { blogImage: (require('@/assets/images/blog/Group40.png')), title: 'Lorem  amet, consectetuer  elit', date: 'October 4, 2024', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum lacus nulla, et condimentum nunc tristique nec. Donec ornare velit ipsum, eget blandit augue egestas convallis. In auctor diam urna, sit amet viverra diam convallis eget. Morbi sed eleifend lacus. Fusce sit amet eleifend sapien, at varius odio. Nunc sed neque pretium, pharetra erat in, feugiat diam. Aliquam erat volutpat. '},
        ],
        showBlogModal: false,
        currentBlog: {},
      };
    },
    methods: {
      toggleBlogModal(blog) {
        this.currentBlog = blog;
        this.showBlogModal = true;
        this.preventBodyScroll(true);
      },
      closeBlogModal() {
        this.currentBlog = {};
        this.showBlogModal = false;
        this.preventBodyScroll(false);
      },
      preventBodyScroll(disable) {
        const body = document.body;
        if (disable) {
          body.style.overflow = "hidden"; // Disable scrolling
        } else {
          body.style.overflow = ""; // Reset overflow to default
        }
      },
    }
  };
  </script>
  