<template>
    <div>
      <HeroSectionMain :heroImage="heroImage" :mainText="mainText" :subText="subText" :paragraphText="paragraphText"/>
    </div>
    <div class="container mx-auto pb-10">
      <!--<img src="../assets/images/mystika5.png">-->
      <h1 class="text-xl text-left pt-10 font-radley text-text-title">Recent Posts</h1>
      <div class="grid gap-14 grid-cols-3 divide-x divide-[#FDECD8]">
        <div class="w-full max-w-5xl col-span-2"> <!--divide section 1-->
          <ul class="grid gap-16 grid-cols-2 grid-rows-2">
            <li v-for="(blog, index) in blogs" :key="'blog'+index">
              <div class="pt-7">
                <div><img :src="blog.blogImage" class="size-full"></div>
                <div class="text-mid text-text-paragraph font-radley text-left pt-4">{{ blog.title }}</div>
                <div class="grid grid-cols-2 font-radley pt-7">
                  <div class="text-sm text-text-paragraph text-left">{{ blog.date }}</div>
                  <div class="text-sm text-text-paragraph text-right">{{ blog.comments }}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="pl-14 pt-7"> <!--divide section 2-->
          <div class="grid grid-rows-2 gap-24">
            <div class="grid grid-cols-1 grid-rows-2 divide-y divide-[#FDECD8] bg-black-secondary w-full font-radley h-fit pl-10 pr-10 pb-10">
              <div class="text-base text-text-title text-left pt-10">Newsletter</div>
              <div class="pt-5 grid grid-cols-2 gap-4 h-20">
                <input type="text" id="fname" name="fname" placeholder="First Name" style="color: #FDECD8" class="w-full border-solid border bg-transparent placeholder-[#FDECD8] border-[#F9DBB7] px-4 py-4">
                <input type="text" id="fname" name="lname" placeholder="Last Name" style="color: #FDECD8" class="w-full border-solid border bg-transparent placeholder-[#FDECD8] border-[#F9DBB7] px-4 py-4">
              </div>
              <div>
                <input type="text" id="email" name="email" placeholder="Email" style="color: #FDECD8" class="w-full border-solid border bg-transparent placeholder-[#FDECD8] border-[#F9DBB7] px-4 py-4">
              </div>
              <div class="pt-4">
                <button class="px-5 py-3 w-full block rounded-lg bg-button-active hover:bg-orange-400 transition">Subscribe</button>
              </div>
            </div>

            <div class="grid grid-cols-1 grid-rows-2 divide-y divide-[#FDECD8] bg-black-secondary w-full font-radley h-[15rem] pl-10 pr-10 pb-10">
              <div class="text-base text-text-title text-left pt-10">Follow Us</div>
              <div class="pt-5 grid justify-items-center grid-cols-3 h-20 w-full">
                <a href="https://www.facebook.com/CafeMystika" target="_blank"><div class="size-16"><img src="../assets/images/blog/icons/facebook_mystika_5968764.png"></div></a>
                <a href="https://www.instagram.com/cafemystika/" target="_blank"><div class="size-16"><img src="../assets/images/blog/icons/instagram_mystika_1384015.png"></div></a>
                <a href="https://www.youtube.com/c/ThePinoyDrinker" target="_blank"><div class="size-16"><img src="../assets/images/blog/icons/social_mystika_15707814.png"></div></a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HeroSectionMain from './sub-component/HeroSectionMain.vue'

  export default {
    name: 'BlogPage',
    components: {
      HeroSectionMain,
    },
    data() {
      return {
        heroImage: (require('@/assets/images/blog/mystika5.jpg')),
        mainText: "Featured Post",
        subText: "Lorem epsum odor amet, consectetuer adipiscing elit",
        paragraphText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum lacus nulla, et condimentum nunc tristique nec. Donec ornare velit ipsum, eget blandit augue egestas convallis. In auctor diam urna, sit amet viverra diam convallis eget. Morbi sed eleifend lacus. Fusce sit amet eleifend sapien, at varius odio. Nunc sed neque pretium, pharetra erat in, feugiat diam. Aliquam erat volutpat. ",
        blogs: [
          { blogImage: (require('@/assets/images/blog/Group40.png')), title: 'Lorem Epsum odor amet, consectetuer adipiscing elit', date: 'October 1, 2024', comments:'Read comments. . .'},
          { blogImage: (require('@/assets/images/blog/Group40.png')), title: 'Lorem Epsum odor amet, consectetuer adipiscing elit', date: 'October 1, 2024', comments:'Read comments. . .'},
          { blogImage: (require('@/assets/images/blog/Group40.png')), title: 'Lorem Epsum odor amet, consectetuer adipiscing elit', date: 'October 1, 2024', comments:'Read comments. . .'},
          { blogImage: (require('@/assets/images/blog/Group40.png')), title: 'Lorem Epsum odor amet, consectetuer adipiscing elit', date: 'October 1, 2024', comments:'Read comments. . .'},
        ]
      };
      
    },
  };
  </script>
  