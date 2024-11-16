<template>
  <div class="h-screen"> <!--Hero Section-->
    <div>
      <LandingHeroPage :heroImage="heroImage" :IconImage="IconImage" :mainText="mainText" :subText="subText"/>
    </div>
  </div>
  <div class="h-[45rem] bg-black-primary justify-items-center"><!--Second Section-->
    <h1 class="text-xl text-text-title pb-10 pt-14 w-full font-radley">Our customer's favorite</h1>
    <div class="w-full max-w-5xl col-span-3">
      <ul class="grid gap-16 grid-cols-3">
        <li v-for="(fav, index) in customerFav" :key="'fav'+index">
          <div class="pt-7">
            <div><img :src="fav.customerFavImage" class="size-full"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="h-screen bg-black-secondary justify-items-center"><!--Third Section-->
    <div class="grid grid-rows-4 grid-flow-col gap-y-4 gap-x-24 pt-[18.5vh] container relative font-radley">
      <div class="row-span-4 col-span-4"><img class="md:size-auto" src="../assets/images/landing/sec3image.png"></div>
      <div class="row-span-2 col-span-2 text-left text-xl text-text-title leading-[6rem] pt-20">Coffee and Science come together, warmly brewed.</div>
      <div class="row-span-2 col-span-2 text-left text-mid text-text-paragraph pt-10">Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum neque ultricies sem eros id? Consequat a curae quam faucibus mollis. Sodales tincidunt elementum cursus lobortis suspendisse aptent ligula.</div>
    </div>
  </div>
  <div class="h-full bg-black-primary justify-items-center"><!--Fourth Section-->
    <div class="grid grid-flow-col gap-4 pt-10 pb-10 container relative font-radley">
      <div><img class="size-full" src="../assets/images/landing/sec4image.png"></div>
      <div><img class="size-full" src="../assets/images/landing/sec4image2.png"></div>
      <div><img class="size-full" src="../assets/images/landing/sec4image3.png"></div>
    </div>
  </div>
  <div class="h-screen bg-black-secondary justify-items-center"><!--Fifth Section-->
    <div class="grid grid-rows-4 grid-flow-col gap-y-4 gap-x-24 pt-[9.5vh] container relative font-radley">
      <div class="col-span-2 text-left text-xl text-text-title leading-[6rem]">Simply Cozy <br>Bites & Sips</div>
      <div class="col-span-2 text-left text-mid text-text-paragraph">Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum neque ultricies sem eros id?</div>
      <div class="row-span-2 col-span-2">
        <ul>
          <li class="grid grid-flow-col auto-cols-auto gap-4 pb-10">
            <h1 class="text-left text-base text-text-paragraph">Americano</h1>
            <div class="col-span-9 border-dotted border-[#FDECD8] border-b-[6px] w-full h-9"></div>
            <h1 class="text-right text-base text-text-divider">160.00</h1>
          </li>
          <li class="grid grid-flow-col auto-cols-auto gap-4 pb-10">
            <h1 class="text-left text-base text-text-paragraph">Latte</h1>
            <div class="col-span-9 border-dotted border-[#FDECD8] border-b-[6px] w-full h-9"></div>
            <h1 class="text-right text-base text-text-divider">160.00</h1>
          </li>
          <li class="grid grid-flow-col auto-cols-auto gap-4 pb-10">
            <h1 class="text-left text-base text-text-paragraph">Macchiato</h1>
            <div class="col-span-9 border-dotted border-[#FDECD8] border-b-[6px] w-full h-9"></div>
            <h1 class="text-right text-base text-text-divider">160.00</h1>
          </li>
          <li class="grid grid-flow-col auto-cols-auto gap-4 pb-10">
            <h1 class="text-left text-base text-text-paragraph">Mocha</h1>
            <div class="col-span-9 border-dotted border-[#FDECD8] border-b-[6px] w-full h-9"></div>
            <h1 class="text-right text-base text-text-divider">160.00</h1>
          </li>
          <li class="grid grid-flow-col auto-cols-auto gap-4 pb-10">
            <h1 class="text-left text-base text-text-paragraph">Cappucino</h1>
            <div class="col-span-9 border-dotted border-[#FDECD8] border-b-[6px] w-full h-9"></div>
            <h1 class="text-right text-base text-text-divider">160.00</h1>
          </li>
        </ul>
      </div>
      <div class="row-span-4 col-span-4"><img class="md:size-auto" src="../assets/images/landing/sec5image.png"></div>
    </div>
  </div>
  <div class="h-[47rem] bg-black-primary justify-items-center"><!--Sixth Section-->
    <h1 class="text-xl text-text-title pb-10 pt-14 w-full font-radley">We work hand-in-hand<br>with the best people!</h1>
    <div class="w-full max-w-4xl">
      <ul class="grid gap-80 grid-cols-2">
        <li>
          <div class="pt-7">
            <div><img src="../assets/images/landing/sec6image.png" class="size-full"></div>
          </div>
        </li>
        <li>
          <div class="pt-7">
            <div><img src="../assets/images/landing/sec6image2.png" class="size-full"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="h-screen bg-black-secondary justify-items-center"><!--Seventh Section-->
    <h1 class="text-xl text-text-title pb-10 pt-32 w-full font-radley">A little taste of the tutorial drinks<br> we've crafted just for you!</h1>
    <div class="grid grid-cols-2 container relative">
      <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCafeMystika%2Fvideos%2F831331079120923%3Flocale%3Dnl_BE&width=500&show_text=false&height=889&appId"
              class="justify-self-end"
              width="500"
              height="889"
              style="border:none;overflow:hidden"
              scrolling="no" frameborder="0" allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>
      <div class="bg-black-primary w-2/3 justify-self-start">
        <h1 class="text-left text-base text-text-title font-radley m-8">RECIPE below <br><br>Our student barista is here! Let's watch @Adingdingding as she makes a mocktail that you could try!</h1>
        <p class="text-left text-sm text-text-paragraph h-96 font-radley mt-10 m-8 overflow-auto"> 
            Our student barista is here! Let's watch Nicole Paulo as she makes a mocktail that you could try!<br><br>
            15 ml Monin Orgeat Syrup<br>
            15 ml Elderflower Syrup<br>
            3 drops saline<br>
            15 ml lemon juice<br>
            60 ml green tea<br>
            ENJOY DISCOUNTS + OFFERS!<br>
            KOFIL Yanyan DGTE and Dipolog<br>
            GRANDE Bakeworld Davao and Tagum<br>
            Use Code: TPDANGELO<br><br>
            Try this recipe and visit Cafe Mystika for our curated drinks!<br>
        </p>
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
        ]
      };
      
    },
}
</script>

