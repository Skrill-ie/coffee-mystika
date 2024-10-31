<template>
    <div>
      <HeroSectionMain :heroImage="heroImage" :mainText="mainText" :subText="subText" :paragraphText="paragraphText"/>
    </div>
    <div class="container mx-auto">
      <!--<img src="../assets/images/mystika5.png">-->
      <h1 class="text-xl text-left pt-10 font-radley text-text-title">Recent Posts</h1>
      <div>
        
      </div>
      <p class="text-base text-left font-radley text-text-title">Lorem epsum odor amet, consectetuer adipiscing elit.</p>
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
        paragraphText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum lacus nulla, et condimentum nunc tristique nec. Donec ornare velit ipsum, eget blandit augue egestas convallis. In auctor diam urna, sit amet viverra diam convallis eget. Morbi sed eleifend lacus. Fusce sit amet eleifend sapien, at varius odio. Nunc sed neque pretium, pharetra erat in, feugiat diam. Aliquam erat volutpat. "
      };
    },
  };
  </script>
  