<template>
    <div>
      <HeroSectionMain :heroImage="heroImage" :mainText="mainText" :subText="subText" :paragraphText="paragraphText"/>
    </div>
    <div class="container mx-auto">
      <!--<img src="../assets/images/mystika5.png">-->
      <h1 class="text-xl text-left pt-10 font-radley text-text-title">Recent Posts</h1>
      <p class="text-base text-left font-radley text-text-title">Lorem epsum odor amet, consectetuer adipiscing elit.</p>
      <div class="grid gap-14 grid-cols-3 divide-x">
        <div class="w-full max-w-5xl col-span-2"> <!--divide section 1-->
          <ul class="grid gap-4 grid-cols-2 grid-rows-3 grid-flow-col">
            <li v-for="(blog, index) in blogs" :key="'blog'+index">
              <div>
                <div class="bg-stone-700 border-2">
                  <div class="image"><img :src="blog.blogImage"></div>
                  <div class="title">{{ blog.title }}</div>
                  <div class="date">{{ blog.date }}</div>
                  <div class="comments">{{ blog.comments }}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="pl-14"> <!--divide section 2-->
          <div class="size-20 bg-stone-700 border-2 w-full ">

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
          { blogImage: (require('@/assets/images/blog/Group40.png')), title: 'Lorem Epsum', date: 'October 1, 2024', comments:'Read comments. . .'},
          { blogImage: (require('@/assets/images/blog/Group40.png')), title: 'Lorem Epsum', date: 'October 1, 2024', comments:'Read comments. . .'},
          { blogImage: (require('@/assets/images/blog/Group40.png')), title: 'Lorem Epsum', date: 'October 1, 2024', comments:'Read comments. . .'},
          { blogImage: (require('@/assets/images/blog/Group40.png')), title: 'Lorem Epsum', date: 'October 1, 2024', comments:'Read comments. . .'},
          { blogImage: (require('@/assets/images/blog/Group40.png')), title: 'Lorem Epsum', date: 'October 1, 2024', comments:'Read comments. . .'},
          { blogImage: (require('@/assets/images/blog/Group40.png')), title: 'Lorem Epsum', date: 'October 1, 2024', comments:'Read comments. . .'},
        ]
      };
      
    },
  };
  </script>
  