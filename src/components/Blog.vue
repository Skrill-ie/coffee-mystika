<template>
    <div>
      <HeroSectionMain :heroImage="heroImage" :mainText="mainText" :subText="subText" :paragraphText="paragraphText"/>
    </div>
    <div class="container py-20 mx-auto pb-10">
      <div class="grid gap-5 xl:gap-14 lg:grid-cols-3">
        <div class="w-full max-w-5xl lg:col-span-2 px-3 lg:pl-10"> <!--divide section 1-->
          <ul class="grid gap-5 lg:gap-10 grid-cols-2 grid-rows-2">
            <li 
              v-for="(blog, index) in blogs" 
              :key="'blog'+index" 
              :class="{'slide-in-bottom': isVisible[index]}" 
              :style="{ animationDelay: `${index * 10}ms` }"
              ref="blogItems"
            >
              <div @click="toggleBlogModal(blog)">
                <div><img :src="blog.blogImage" class="size-full"></div>
                <div class="text-lg lg:text-2xl text-text-paragraph font-radley text-left pt-4 text-ellipsis">{{ blog.title }}</div>
                <div class="text-xs lg:text-sm text-left text-gray-500 font-radley pt-3 lg:pt-7">{{ blog.date }}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="lg:col-span-1"> <!--divide section 2-->
          <div class="text-sm lg:sticky lg:top-36">
            <div class=" bg-black-secondary w-full font-radley px-3 lg:px-10 pb-10">
              <div class="pt-10 text-center lg:text-start">
                <p class="text-4xl mb-10 font-radley text-text-title">Get cozy and follow our Socials!</p>
                <p class="mx-auto text-text-paragraph py-10">Cozy up with the Cafe Mystika Socials — get the latest news, special deals, and secret coffee notes brewed just for you!</p>
              </div>
              <div class="flex gap-10 justify-center">
                <div><a target="_blank" :href="socialInstagram"><img class="w-24" src="../assets/icons/instagram.png"></a></div>
                <div><a target="_blank" :href="socialYoutube"><img class="w-24" src="../assets/icons/youtube.png"></a></div>
                <div><a target="_blank" :href="socialFacebook"><img class="w-24" src="../assets/icons/facebook.png"></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <BlogModal :showBlogModal="showBlogModal" :currentBlog="currentBlog"  @close-blog-modal="closeBlogModal" />
</template>

<style scoped>
@keyframes slideInBottom {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Ensure elements are hidden by default */
li {
  opacity: 0;
  visibility: hidden; /* Prevent rendering until animation starts */
}

/* Make them visible when the animation starts */
.slide-in-bottom {
  animation: slideInBottom 1s ease-out forwards;
  opacity: 1;
  visibility: visible; /* Ensure visibility during animation */
}
</style>

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
      mainText: "Blogs & News",
      subText: "Brewing Stories One Cup at a Time",
      paragraphText: "Welcome to the cozy corner of our passion — where the aroma of freshly brewed beans meets the warmth of community storytelling. These blog posts is your behind-the-scenes pass to everything we love: from the origin of our favorite blends and barista secrets, to seasonal drink highlights and stories from our regulars. Whether you're a passionate coffee connoisseur or someone who just loves a good vibe and a better latte, there's a seat at the table for you here.",
      blogs: [
        { 
          blogImage: (require('@/assets/images/blog/spiced-mocha-frappe-item.png')), 
          title: "A drink that mirrors Capricorn's essence - Spiced Mocha Frappe", 
          date: 'January 23, 2025', 
          content:'Capricorn season is here. To celebrate, we’ve crafted the Spiced Mocha Frappe, a drink that mirrors Capricorn’s essence. Its bold espresso, velvety chocolate, and exotic chai spices create a blend that is both steady and indulgent, perfect for embracing the determined and refined energy of the season. <br><br><br> <img src="' + require('@/assets/images/blog/spiced-mocha-frappe.png') + '"> <br><br><img src="' + require('@/assets/images/blog/spiced-mocha-frappe-recipe.jpg') + '"><br> This series is designed to help you bring creativity and personality to your menu, inspired by the traits of each zodiac sign. Stay tuned! <br><br> #DaVinciGourmet #HoroscopeFlavours #CapricornSeason #FlavourInnovation #CoffeeArtistry #BaristaInspiration #SpicedMocha'
        },
        { 
          blogImage: (require('@/assets/images/blog/mocha-sphere-item.png')), 
          title: "A refined expression of the DaVinci Gourmet ethos - The Mocha Sphere", 
          date: 'January 19, 2025', 
          content:'The Mocha Sphere is a refined expression of the DaVinci Gourmet ethos—where art, craft, and science unite to create an unforgettable sensory experience. <br><br><br> <img src="' + require('@/assets/images/blog/mocha-sphere.jpg') + '"><br> From its visually stunning form to the precision of molecular gastronomy, Mikael Jasin transforms chocolate into a delicate creamy sphere. <br><br><img src="' + require('@/assets/images/blog/mocha-sphere-ingredients.jpg') + '"><br> A perfect balance of flavour, technique, and innovation, this creation showcases how DaVinci Gourmet inspires extraordinary artistry in every detail. <br><br><img src="' + require('@/assets/images/blog/mocha-sphere-method.jpg') + '"><br> Stay tuned as we share more of Mikael’s groundbreaking creations and their stories. <br><br> #DaVinciGourmet #ArtCraftScience #FlavourInnovation #BaristaCraftsmanship #CoffeeArtistry #FlavourGenius'
        },
        { 
          blogImage: (require('@/assets/images/blog/irish-coffee-item.png')), 
          title: 'From inspiration to creation - Another Recipe from Da Vinci Gourmet by Emerson Nascimento', 
          date: 'November 19, 2024', 
          content:'This is a take on my favourite coffee drink, Irish coffee. As a two-time champion of the Brazillian Coffee in Good Spirits competition, I’ve honed my skills in creating this classic bevarage, known for its rich and comforting flavors. <br><br><br> <img src="' + require('@/assets/images/blog/irish-coffee.jpg') + '"><br> For the DaVinci Gourmet Barista Craft Championship, I’ve crafted a non-alcoholic version that captures  the essence of traditional Irish coffee by carefully selecting ingredients that gives the original’s complex notes of caramel, whiskey, and butter, along with its signature silky texture and smooth, yougurt-like acidity, I ensure every sip delivers the familiar warmth and richness. <br><br><img src="' + require('@/assets/images/blog/irish-coffee-ingredients.jpg') + '"> <br><br><img src="' + require('@/assets/images/blog/irish-coffee-method.jpg') + '"><br>'
        },
        { 
          blogImage: (require('@/assets/images/blog/growing-customer-base-item.png')), 
          title: 'The secret to growing your customer base - Cafe Mystika', 
          date: 'October 20, 2024', 
          content:'The secret to growing your customer base isn’t just in the coffee, it’s in the experience. People crave more than just a cup, they want a reason to return, to feel like part of something special. Your café needs to be more than just a stop for caffeine; it should be a destination. So, how do you make that happen? <br><br><br> <img src="' + require('@/assets/images/blog/growing-customer-base.jpg') + '"> <br><br> Here are some actionable tips to help you grow your café business and draw in more customers: <br><br> ⭐️ Create an Instagrammable Atmosphere - People love sharing their experiences. Design your space with unique, visually appealing elements that make customers want to post and tag your café. <br><br> ⭐️ Offer Seasonal or Limited-Time Drinks - Keep your menu fresh by introducing seasonal coffees or limited-edition drinks. This not only keeps regulars coming back but also generates buzz. <br><br> ⭐️ Host Coffee Tasting Events - Engage your community by offering coffee tasting or brewing workshops. This positions your café as an expert hub and gives customers a reason to visit beyond their usual cup. <br><br> ⭐️ Loyalty Programs with a Twist - Everyone loves a free coffee, but add an extra layer by including personalized rewards based on their preferences, such as offering a free pastry with their favorite brew. <br><br> ⭐️ Collaborate with Local Businesses - Partner with local artisans or creators for pop-up events in your café. This expands your customer reach and gives your café a community-focused appeal. <br><br> ⭐️ Focus on Customer Service Excellence - Great coffee gets people in the door, but excellent service keeps them coming back. Train your staff to engage with customers personally, creating a warm and welcoming vibe. <br><br> ⭐️ Leverage Online Ordering and Delivery - Make it easy for customers to enjoy your coffee wherever they are by offering online ordering, takeout, and delivery options. <br><br> These tips are easy to implement but can make a huge difference in how people see your café. What’s one thing you’re ready to try?'
        },
      ],
      isVisible: [], // Tracks visibility of each blog item
      showBlogModal: false,
      currentBlog: {},
      socialFacebook: "https://www.facebook.com/CafeMystika",
      socialInstagram: "https://www.instagram.com/cafemystika/",
      socialYoutube: "https://www.youtube.com/c/ThePinoyDrinker",
    };
  },
  mounted() {
    this.initializeObserver();
  },
  methods: {
    initializeObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Array.from(this.$refs.blogItems).indexOf(entry.target);
              if (index !== -1) {
                this.isVisible[index] = true; // Directly modify the reactive array
              }
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
      );

      this.$refs.blogItems.forEach((item) => observer.observe(item));
    },
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
  },
};
</script>
