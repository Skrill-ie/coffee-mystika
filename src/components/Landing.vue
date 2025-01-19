<template>
  <section class="h-auto sm:h-screen"> <!--Hero Section-->
    <div>
      <LandingHeroPage :heroImage="heroImage" :IconImage="IconImage" :mainText="mainText" :subText="subText"/>
    </div>
  </section>
  <section class="md:h-screen bg-black-secondary justify-items-center"><!--Third Section-->
    <div class="flex flex-col md:flex-row md:gap-10 font-radley w-full m-auto items-center h-full">
      <div class="w-full h-full md:w-1/2">
        <img class="w-full h-80 md:h-full object-cover" src="../assets/images/landing/sec3image.png">
      </div>
      <div class="w-full md:w-1/2 text-left px-3 md:px-10 max-w-3xl py-16 lg:py-0">
        <div class="text-4xl md:text-5xl mb-16 text-text-title">Coffee and Science come together, warmly brewed.</div>
        <div class="text-text-paragraph text-sm">Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum neque ultricies sem eros id? Consequat a curae quam faucibus mollis. Sodales tincidunt elementum cursus lobortis suspendisse aptent ligula.</div>
      </div>
    </div>
  </section>
  <section class="py-10 md:py-20">
    <div class="text-text-title text-4xl md:text-5xl font-radley mb-16">Partnered Creations</div>
    <div class="block lg:hidden">
      <div class="flex w-full font-radley">
      <button
            v-for="(featuredMerch, index) in featuredMerch" :key="index" @click="setActiveTab(index)"
            :class="['px-4 py-2 text-sm font-medium w-1/2',activeMerch === index ? 'rounded-t-lg bg-button-active text-black-secondary': 'bg-black-primary text-text-paragraph opacity-55']"
        >
          {{ featuredMerch.name }}
        </button>
      </div>
      <div class="font-radley text-left container mx-auto py-16 px-3 flex flex-col lg:flex-row bg-button-active">
        <transition
            name="fade"
            mode="out-in"
        >
        <div :key="activeMerch" class="block md:flex">
          <div class="w-full md:w-1/2">
            <img class="h-full w-full mx-auto" :src="featuredMerch[activeMerch].src">
          </div>
          <div class="w-full md:w-1/2 pt-10 md:pl-5 text-black-secondary">
              <div class="text-4xl md:text-5xl pb-16 w-full"> {{ featuredMerch[activeMerch].name }}</div>
              <div class="">{{ featuredMerch[activeMerch].description }}</div>
              <div class="pt-10">
                <div class="pb-3"> Available sizes: </div>
                <ul class="flex gap-4">
                  <li class="rounded-full border w-10 text-center">XS</li>
                  <li class="rounded-full border w-10 text-center">S</li>
                  <li class="rounded-full border w-10 text-center">M</li>
                  <li class="rounded-full border w-10 text-center">L</li>
                  <li class="rounded-full border w-10 text-center">XL</li>
                  <li class="rounded-full border w-10 text-center">2XL</li>
                </ul>
              </div>
              <div class="text-3xl md:text-4xl font-bold py-10"> Php{{ featuredMerch[activeMerch].price }}</div>
              <a target="_blank" href="https://m.me/CafeMystika" class="w-full bg-black-secondary text-text-paragraph block text-center py-5">Let's Connect!</a>
            </div>
        </div>
        </transition>
      </div>
    </div>
    <div class="hidden lg:flex gap-16 font-radley container mx-auto">
      <div v-for="(items,index) in featuredMerch" :key="index">
        <div class="flex lg:flex-col bg-button-active">
          <div class="w-1/2 lg:w-3/4 mx-auto pt-10">
            <img class="w-full" :src="items.src">
          </div>
          <div class="py-10 text-black-secondary px-3 lg:px-10 text-left">
            <div class="text-4xl md:text-5xl pb-10 w-full"> {{ items.name }}</div>
            <div class="">{{ items.description }}</div>
            <div class="pt-10">
              <div class="pb-3"> Available sizes: </div>
              <ul class="flex gap-4">
                <li class="rounded-full border w-10 text-center">XS</li>
                <li class="rounded-full border w-10 text-center">S</li>
                <li class="rounded-full border w-10 text-center">M</li>
                <li class="rounded-full border w-10 text-center">L</li>
                <li class="rounded-full border w-10 text-center">XL</li>
                <li class="rounded-full border w-10 text-center">2XL</li>
              </ul>
            </div>
            <div class="text-3xl md:text-4xl font-bold py-10"> Php{{ items.price }}</div>
            <a target="_blank" href="https://m.me/CafeMystika" class="w-full bg-black-secondary text-text-paragraph block text-center py-5">Let's Connect!</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-black-secondary justify-items-center py-10 md:py-20"><!--Second Section-->
    <div class="font-radley px-3 pb-16 lg:pb-20 text-left md:text-center">
      <div class="text-4xl md:text-5xl text-text-title pb-10 w-full ">Our customer's favorite</div>
      <div class="text-sm text-text-paragraph max-w-3xl">Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum neque ultricies sem eros id? Consequat a curae quam faucibus mollis. Sodales tincidunt elementum cursus lobortis suspendisse aptent ligula.</div>
    </div>
    <div class="w-full col-span-3">
      <div class="grid lg:gap-8 grid-cols-12 ">
        <div v-for="(fav, index) in customerFav" :key="'fav'+index" class="h-52 lg:h-96 mx-auto w-full col-span-4 md:w-full relative bg-center bg-cover bg-no-repeat"
             :style="{ backgroundImage: `url(${fav.customerFavImage})` }">
        </div>
      </div>
    </div>
  </section>
  <section class="bg-black-secondary justify-items-center"><!--Fifth Section-->
    <div class="flex flex-col lg:flex-row font-radley w-full m-auto items-center max-w-screen-xl lg:py-20">
      <div class="order-2 md:order-1 px-3 lg:px-10 py-10 lg:py-0 mx-auto text-left lg:mr-16">
        <div class="text-4xl md:text-5xl text-text-title">Simply Cozy Sips</div>
        <div class="text-sm  text-text-paragraph py-10 border-text-divider border-b">Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum neque ultricies sem eros id?</div>
        <div class="row-span-2 pt-10">
          <ul>
          <li  v-for="(coffee, index) in menu" :key="'coffee'+index"  class="pb-5 md:pb-7">
            <div class="flex mb-3">
              <div class="text-left text-sm text-text-paragraph md:w-48 font-bold"> {{ coffee.coffeeName }}</div>
              <div class="border-dotted border-[#FDECD8] border-b-[2px] xl:border-b-[2px] w-full h-5 xl:h-4 mx-5 opacity-55"></div>
              <div class="text-right text-sm text-text-divider"> {{ coffee.coffeePrice }}<sup>.00</sup></div>
            </div>
            <div class="text-text-paragraph opacity-55">{{coffee.description}}</div>
          </li>
        </ul>
        </div>
      </div>
      <div class="order-1 md:order-2 m-auto hidden lg:block">
        <img class="w-full" src="../assets/images/landing/sec5image.png">
      </div>
    </div>
  </section>
  <section class="bg-black-primary justify-items-center py-10 lg:py-20"><!--Sixth Section-->
    <h1 class="text-4xl md:text-5xl text-text-title pb-16 w-full font-radley">We work hand-in-hand<br>with the best people!</h1>
    <div class="w-full max-w-4xl px-3">
      <div class="flex flex-col md:flex-row gap-16">
          <div class="pt-7 w-full opacity-50 md:opacity-100">
            <img src="../assets/images/landing/jollycow.png" class="mx-auto max-h-40 w-46">
          </div>
          <div class="pt-7 w-full opacity-50 md:opacity-100">
            <img src="../assets/images/landing/yanyan.png" class="mx-auto max-h-40">
          </div>
          <div class="pt-7 w-full opacity-50 md:opacity-100">
            <img src="../assets/images/landing/familyschoice.png" class="mx-auto max-h-40">
          </div>
          <div class="pt-7 w-full opacity-50 md:opacity-100">
            <img src="../assets/images/landing/gourmetfarms.png" class="mx-auto max-h-40">
          </div>
      </div>
    </div>
  </section>
  <section class="h-full bg-black-secondary justify-items-center py-10 lg:py-20"><!--Seventh Section-->
    <h1 class="text-4xl md:text-5xl text-text-title w-full font-radley pb-16">A taste of the custom drinks <br>we've crafted for you.</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3">
      <div v-for="(video, index) in tutorialDrinks" :key="'video'+index" class="grid-cols-1 justify-items-center">
        <iframe :src="video.link"
                class=""
                width="202.50"
                height="360"
                style="border: none; overflow: hidden;"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>
      </div>
    </div>

  </section>
</template>

<script>
import LandingHeroPage from './sub-component/HeroSectionMain.vue'

export default {
  name: 'LandingPage',
  components: {
      LandingHeroPage,
    },
    data() {
      return {
        heroImage: (require('@/assets/images/bglanding.png')),
        IconImage: (require('@/assets/icons/HeroLandingLogo.png')),
        mainText: "Coffee and Memories",
        subText: "Since 2021 , Cafe Mystika has been on a mission to provide sustainable and ethical, hand roasted, specialty coffee  at a fair price for you and the farmers.",
        activeMerch: 0,
        customerFav: [
          { customerFavImage: (require('@/assets/images/landing/favimage-1.jpg')) },
          { customerFavImage: (require('@/assets/images/landing/favimage-2.jpg')) },
          { customerFavImage: (require('@/assets/images/landing/favimage-3.jpg')) }
        ],
        menu:[
          { coffeeName:"Spanish Latte", coffeePrice:"139",description: "a creamy blend of bold espresso, silky steamed milk, and a touch of sweet condensed milk that’ll have you coming back for more!"},
          { coffeeName:"Vietnamese", coffeePrice:"140",description: "a rich, robust brew sweetened with silky condensed milk, creating the perfect balance of strength and indulgence!" },
          { coffeeName:"Hibiscus Tea", coffeePrice:"135",description: "a vibrant, tangy, and naturally caffeine-free infusion bursting with floral notes and a hint of fruity sweetness!" },
          { coffeeName:"Cafe Mocha", coffeePrice:"139",description: "a perfect blend of bold espresso, velvety steamed milk, and rich chocolate, delivering pure coffee-chocolate bliss in every sip!" },
          { coffeeName:"Vanilla Latte", coffeePrice:"139",description: "a creamy blend of bold espresso, steamed milk, and a hint of sweet, aromatic vanilla for the perfect touch of indulgence!" },
        ],
        tutorialDrinks:[
          { link:"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCafeMystika%2Fvideos%2F831331079120923%3Flocale%3Dnl_BE&width=500&show_text=false&height=889&appId" },
          { link:"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCafeMystika%2Fvideos%2F1275775460059323&width=500&show_text=false&height=889&appId" },
          { link:"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCafeMystika%2Fvideos%2F1275775460059323&width=500&show_text=false&height=889&appId" },
        ],
        featuredMerch:[
            {
              name:"LABARENTO",
              description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum neque ultricies sem eros id? Consequat a curae quam faucibus mollis. Sodales tincidunt elementum cursus lobortis suspendisse aptent ligula.",
              price: "750.00",
              src:(require('@/assets/images/MERCH-V1.png')),

            },
          {
            name:"ORCULLO",
            description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum neque ultricies sem eros id? Consequat a curae quam faucibus mollis. Sodales tincidunt elementum cursus lobortis suspendisse aptent ligula.",
            price: "750.00",
            src:(require('@/assets/images/MERCH-V2.png')),

          },
        ]
      };
      
    },
    methods: {
      setActiveTab(index) {
        this.activeMerch = index;
      },
    },
}
</script>

<style>
/* Tailwind CSS animations for the tabs */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>

