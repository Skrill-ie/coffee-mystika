<template>
  <div class="h-screen"> <!--Hero Section-->
    <div>
      <LandingHeroPage :heroImage="heroImage" :IconImage="IconImage" :mainText="mainText" :subText="subText"/>
    </div>
  </div>
  <div class="md:h-screen bg-black-secondary justify-items-center"><!--Third Section-->
    <div class="grid grid-cols-2 gap-5 md:gap-10  container font-radley w-full m-auto items-center h-full">
      <div class="col-span-2 md:col-span-1 h-52 md:h-4/5 bg-center bg-fixed lg:bg-local bg-no-repeat" :style="{ backgroundImage: `url(${require('../assets/images/landing/sec3image.png')})` }"></div>
      <div class="col-span-2 md:col-span-1 text-left px-3 py-10 lg:py-0 mx-auto lg:w-96">
        <div class="text-center md:text-left text-4xl md:text-5xl mb-10 text-text-title">Coffee and Science come together, warmly brewed.</div>
        <div class="text-center md:text-left text-text-paragraph text-sm">Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum neque ultricies sem eros id? Consequat a curae quam faucibus mollis. Sodales tincidunt elementum cursus lobortis suspendisse aptent ligula.</div>
      </div>
    </div>
  </div>
  <div class="h-full bg-black-primary justify-items-center"><!--Fourth Section-->
    <div class="grid grid-flow-col relative container font-radley">
      <div><img class="size-full" src="../assets/images/landing/sec4image.png"></div>
      <div><img class="size-full" src="../assets/images/landing/sec4image2.png"></div>
      <div><img class="size-full" src="../assets/images/landing/sec4image3.png"></div>
    </div>
  </div>
  <div class="bg-black-primary justify-items-center py-10 md:py-20"><!--Second Section-->
    <div class="font-radley px-3 pb-10 lg:pb-20">
      <div class="text-4xl md:text-5xl text-text-title pb-10 w-full ">Our customer's favorite</div>
      <div class="text-sm  text-center  text-text-paragraph max-w-3xl">Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum neque ultricies sem eros id? Consequat a curae quam faucibus mollis. Sodales tincidunt elementum cursus lobortis suspendisse aptent ligula.</div>
    </div>
    <div class="w-full max-w-5xl col-span-3">
      <div class="grid lg:gap-16 grid-cols-3 ">
        <div v-for="(fav, index) in customerFav" :key="'fav'+index" class="h-52 lg:h-96 mx-auto w-full md:w-full relative bg-center"
             :style="{ backgroundImage: `url(${fav.customerFavImage})` }">
        </div>
      </div>
    </div>
  </div>
  <div class="lg:h-screen bg-black-secondary justify-items-center"><!--Fifth Section-->
    <div class="grid grid-cols-8 relative font-radley w-full m-auto items-center h-full">
      <div class="col-span-8 md:col-span-5 order-2 md::order-1 px-3 md:px-10 py-10 lg:py-0 mx-auto lg:max-w-lg">
        <div class="text-4xl md:text-5xl text-text-title">Simply Cozy <br>Bites & Sips</div>
        <div class="text-sm  text-text-paragraph py-10 border-text-divider border-b">Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum neque ultricies sem eros id?</div>
        <div class="row-span-2 pt-10">
          <ul>
          <li  v-for="(coffee, index) in menu" :key="'coffee'+index" class="grid grid-flow-col auto-cols-auto gap-4 pb-5 md:pb-10">
            <div class="text-left text-sm  text-text-paragraph"> {{ coffee.coffeeName }}</div>
            <div class="col-span-9 border-dotted border-[#FDECD8] border-b-[3px] xl:border-b-[6px] w-full h-5 xl:h-9"></div>
            <div class="text-right text-sm text-text-divider"> {{ coffee.coffeePrice }}<sup>.00</sup></div>
          </li>
        </ul>
        </div>
      </div>
      <div class="col-span-8 md:col-span-3 order-1 md:order-2 h-40 md:h-full bg-fixed bg-no-repeat bg-right" :style="{ backgroundImage: `url(${require('../assets/images/landing/sec5image.png')})` }"></div>
    </div>
  </div>
  <div class="bg-black-primary justify-items-center py-10 lg:py-20"><!--Sixth Section-->
    <h1 class="text-4xl md:text-5xl text-text-title pb-10 w-full font-radley">We work hand-in-hand<br>with the best people!</h1>
    <div class="w-full max-w-4xl">
      <ul class="grid lg:gap-80 grid-cols-2">
        <li>
          <div class="pt-7">
            <div class=""><img src="../assets/images/landing/sec6image.png" class="mx-auto max-h-40"></div>
          </div>
        </li>
        <li>
          <div class="pt-7">
            <div class=""><img src="../assets/images/landing/sec6image2.png" class="mx-auto max-h-40"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="h-full bg-black-secondary justify-items-center py-10 lg:py-20"><!--Seventh Section-->
    <h1 class="text-4xl md:text-5xl text-text-title w-full font-radley pb-10">A taste of the custom drinks <br>we've crafted for you.</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 ">
      <div v-for="(video, index) in tutorialDrinks" :key="'video'+index" class="grid-cols-1">
        <iframe :src="video.link"
                class="justify-self-end"
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
    
  </div>
</template>

<script>
import LandingHeroPage from './sub-component/LandingHeroPage.vue'

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
        customerFav: [
          { customerFavImage: (require('@/assets/images/landing/favimage1.png')) },
          { customerFavImage: (require('@/assets/images/landing/favimage2.png')) },
          { customerFavImage: (require('@/assets/images/landing/favimage3.png')) }
        ],
        menu:[
          { coffeeName:"Americano", coffeePrice:"160" },
          { coffeeName:"Latte", coffeePrice:"160" },
          { coffeeName:"Macchiato", coffeePrice:"160" },
          { coffeeName:"Mocha", coffeePrice:"160" },
          { coffeeName:"Vanilla", coffeePrice:"160" },
        ],
        tutorialDrinks:[
          { link:"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCafeMystika%2Fvideos%2F831331079120923%3Flocale%3Dnl_BE&width=500&show_text=false&height=889&appId" },
          { link:"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCafeMystika%2Fvideos%2F1275775460059323&width=500&show_text=false&height=889&appId" },
          { link:"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCafeMystika%2Fvideos%2F1275775460059323&width=500&show_text=false&height=889&appId" },
        ]
      };
      
    },
}
</script>

