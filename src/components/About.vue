<template>
    <div>
      <HeroSectionMain :heroImage="heroImage" :mainText="mainText" :subText="subText"/>
      <div class="h-screen bg-black-secondary font-radley">
        <div class="grid grid-cols-2 gap-10 py-10 container mx-auto items-center">
          <div class="flex gap-5">
            <div class="flex flex-col flex-[2] gap-5 ml-2">
              <div class="flex-1 bg-purple-700 flex items-center justify-center rounded-lg">
                01
              </div>
              <div class="flex-1 bg-purple-500 flex items-center justify-center rounded-lg">
                02
              </div>
            </div>
            <div class="flex-1 bg-purple-500 flex items-center justify-center rounded-lg h-96">
              03
            </div>
          </div>
          <div class="text-left w-96 mx-auto">
            <p class="text-5xl mb-10">A History of <br>Cafe Mystika</p>
            <span>Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum neque ultricies sem eros id? Consequat a curae quam faucibus mollis. Sodales tincidunt elementum cursus lobortis suspendisse aptent ligula. Litora nulla ante ut justo curae iaculis dapibus urna torquent. Cubilia odio enim felis class vitae velit magnis ridiculus. </span>
          </div>
        </div>
      </div>
      <div class="bg-black-primary">
        <div class="flex container mx-auto">
        <div class="h-48 w-1/3 bg-purple-700 "></div>
        <div class="h-48 w-1/3 bg-purple-500 "></div>
        <div class="h-48 w-1/3 bg-purple-700 "></div>
        </div>
      </div>
      <div class="bg-black-primary py-20">
        <div class="text-5xl mb-10">We Craft Tasty Moments to <br> Remember</div>
        <div class="flex container mx-auto">
          <div class="h-48 w-1/4 bg-purple-700 "></div>
          <div class="h-48 w-1/4 bg-purple-500 "></div>
          <div class="h-48 w-1/4 bg-purple-700 "></div>
          <div class="h-48 w-1/4 bg-purple-500 "></div>
        </div>
      </div>
      <div class="bg-black-primary py-20">
        <div class="text-5xl mb-10">Get to Know our Friendly <br> Baristas</div>
        <div class="flex container mx-auto">
          <div class="h-48 w-1/4 bg-purple-700 "></div>
          <div class="h-48 w-1/4 bg-purple-500 "></div>
          <div class="h-48 w-1/4 bg-purple-700 "></div>
          <div class="h-48 w-1/4 bg-purple-500 "></div>
        </div>
      </div>
      <div class="h-screen bg-black-secondary font-radley">
        <div class="grid grid-cols-2 gap-10 py-10 container mx-auto items-center">
          <div class="text-left w-96 mx-auto">
            <p class="text-5xl mb-10">A History of <br>Cafe Mystika</p>
            <span>Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum neque ultricies sem eros id? Consequat a curae quam faucibus mollis. Sodales tincidunt elementum cursus lobortis suspendisse aptent ligula. Litora nulla ante ut justo curae iaculis dapibus urna torquent. Cubilia odio enim felis class vitae velit magnis ridiculus. </span>
          </div>
          <div class="flex gap-5">
            <div class="flex-1 bg-purple-500 flex items-center justify-center rounded-lg h-96">
              03
            </div>
            <div class="flex flex-col flex-[2] gap-5 ml-2">
              <div class="flex-1 bg-purple-700 flex items-center justify-center rounded-lg">
                01
              </div>
              <div class="flex-1 bg-purple-500 flex items-center justify-center rounded-lg">
                02
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
    name: 'AboutUs',
    components: {
      HeroSectionMain,
    },
    data() {
    return {
      heroImage: (require('@/assets/images/HeroBackground.png')),
      mainText: "Meet the Dream Team",
      subText: "Since 2021 , Cafe Mystika has been on a mission to provide sustainable and ethical, hand roasted, specialty coffee  at a fair price for you and the farmers"
    };
  },
  };
  </script>
  