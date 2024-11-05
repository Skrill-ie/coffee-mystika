<template>
    <div>
      <HeroSectionMain :heroImage="heroImage" :mainText="mainText" :subText="subText"/>
      <div class="h-screen flex items-center justify-center bg-black-secondary font-radley">
        <div class="grid grid-cols-2 gap-10 py-10 container mx-auto items-center">
          <div class="flex gap-5 h-4/5">
            <div class="w-2/3 flex flex-col gap-5">
              <div class="h-2/3">
                <img src="../assets/images/image.png" alt="Coffee Beans" class="w-full h-full object-cover">
              </div>
              <div class="h-1/3 overflow-hidden">
                <img src="../assets/images/image-2.png" alt="Barista Side View" class="w-full h-full object-cover">
              </div>
            </div>
            <div class="w-1/3">
              <img src="../assets/images/image-1.png" alt="Latte Art" class="w-full h-full object-cover">
            </div>
          </div>
          <div class="text-left w-96 mx-auto">
            <p class="text-5xl mb-10 text-text-title">A History of <br>Cafe Mystika</p>
            <span class="text-text-paragraph">Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum neque ultricies sem eros id? Consequat a curae quam faucibus mollis. Sodales tincidunt elementum cursus lobortis suspendisse aptent ligula. Litora nulla ante ut justo curae iaculis dapibus urna torquent. Cubilia odio enim felis class vitae velit magnis ridiculus. </span>
          </div>
        </div>
      </div>
      <div class="bg-black-primary">
        <div class="flex container mx-auto text-center divide-x py-20">
          <div class="h-64 w-1/3 flex flex-col items-center justify-center p-10 font-radley text-text-title">
            <div class="w-1/2 border border-4 border-text-divider text-5xl mb-10 py-2">2022</div>
            <div class="text-2xl ">Where we Started</div>
            <div class="text-text-paragraph">Lorem ipsum odor amet, consectetuer adipiscing elit. </div>
          </div>
          <div class="h-64 w-1/3 flex flex-col items-center justify-center p-10 font-radley text-text-title">
            <div class="w-1/2 border border-4 border-text-divider text-5xl mb-10 py-2">2022</div>
            <div class="text-2xl ">Where we Started</div>
            <div class="text-text-paragraph">Lorem ipsum odor amet, consectetuer adipiscing elit. </div>
          </div>
          <div class="h-64 w-1/3 flex flex-col items-center justify-center p-10 font-radley text-text-title">
            <div class="w-1/2 border border-4 border-text-divider text-5xl mb-10 py-2">2022</div>
            <div class="text-2xl ">Where we Started</div>
            <div class="text-text-paragraph">Lorem ipsum odor amet, consectetuer adipiscing elit. </div>
          </div>
        </div>
      </div>
      <div class="bg-fixed py-10" :style="{ backgroundImage: `url(${require('@/assets/images/Background.png')})` }">
        <div class="text-5xl mb-10 font-radley text-text-title">We Craft Tasty Moments to <br> Remember</div>
        <div class="flex container mx-auto justify-between px-20">
          <div class="h-60 w-60 bg-black-primary p-8 flex flex-col justify-center">
            <img class="mx-auto w-16 h-16" src="../assets/icons/drying.png">
            <p class="mt-10 text-lg text-text-title font-radley">Drying the Beans</p>
          </div>
          <div class="h-60 w-60 bg-black-primary p-8 flex flex-col justify-center">
            <img class="mx-auto w-16 h-16" src="../assets/icons/roasting.png">
            <p class="mt-10 text-lg text-text-title font-radley">Roasting</p>
          </div>
          <div class="h-60 w-60 bg-black-primary p-8 flex flex-col justify-center">
            <img class="mx-auto w-16 h-16" src="../assets/icons/grinding.png">
            <p class="mt-10 text-lg text-text-title font-radley">Grinding</p>
          </div>
          <div class="h-60 w-60 bg-black-primary p-8 flex flex-col justify-center">
            <img class="mx-auto w-16 h-16" src="../assets/icons/done.png">
            <p class="mt-10 text-lg text-text-title font-radley">Perfect Coffee</p>
          </div>
        </div>
      </div>
      <div class="bg-black-primary py-20">
        <div class="text-5xl mb-10 font-radley text-text-title">Get to Know our Friendly <br> Baristas</div>
        <div class="flex container mx-auto justify-between gap-5">
          <div v-for="(barista, key) in baristaDetail" :key="key" class="h-96 w-1/4 relative">
            <img class="relative z-10" :src="barista.baristaImage" :alt="barista.baristaName">
            <div class="-mt-14 px-5 z-20 absolute bottom-0 left-0 w-full">
              <div class="bg-black-secondary py-3 font-radley shadow">
                <h2 class="text-text-title text-lg">{{ barista.baristaName }}</h2>
                <p class="text-text-paragraph mb-3">Gen. {{ barista.baristaGen }} Barista</p>
                <p class="text-text-divider">{{ barista.baristaOccupation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-screen flex items-center justify-center bg-black-secondary font-radley">
        <div class="grid grid-cols-2 gap-10 py-10 container mx-auto items-center">
          <div class="text-left w-96 mx-auto">
            <p class="text-5xl mb-10 text-text-title">Vision</p>
            <span class="text-text-paragraph">Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum neque ultricies sem eros id? Consequat a curae quam faucibus mollis. Sodales tincidunt elementum cursus lobortis suspendisse aptent ligula. Litora nulla ante ut justo curae iaculis dapibus urna torquent. Cubilia odio enim felis class vitae velit magnis ridiculus. </span>
            <p class="text-5xl my-10 text-text-title">Mission</p>
            <span class="text-text-paragraph">Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum neque ultricies sem eros id? Consequat a curae quam faucibus mollis. Sodales tincidunt elementum cursus lobortis suspendisse aptent ligula. Litora nulla ante ut justo curae iaculis dapibus urna torquent. Cubilia odio enim felis class vitae velit magnis ridiculus. </span>
          </div>
          <div class="flex gap-5 h-4/5">
            <div class="w-3/5">
              <img src="../assets/images/image-3.png" alt="Latte Art" class="w-full h-full object-cover">
            </div>
            <div class="w-1/3 flex flex-col gap-5">
              <div class="h-2/3">
                <img src="../assets/images/image-5.png" alt="Coffee Beans" class="w-full h-full object-cover">
              </div>
              <div class="h-1/3 overflow-hidden">
                <img src="../assets/images/image-6.png" alt="Barista Side View" class="w-full h-full object-cover">
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
      baristaDetail: {
        barista1:{
          baristaImage:(require('@/assets/images/baristas/barista.png')),
          baristaName: "Sven Sayrne",
          baristaGen: "1",
          baristaOccupation: "Mountain Origin",
        },
        barista2:{
          baristaImage:(require('@/assets/images/baristas/barista.png')),
          baristaName: "Deen Mathew Valencia",
          baristaGen: "2",
          baristaOccupation: "Mountain Origin",
        },
        barista3:{
          baristaImage:(require('@/assets/images/baristas/barista.png')),
          baristaName: "Raymond Quilaga",
          baristaGen: "3",
          baristaOccupation: "Mountain Origin",
        },
        barista4:{
          baristaImage:(require('@/assets/images/baristas/barista.png')),
          baristaName: "Sven Sayrne",
          baristaGen: "3",
          baristaOccupation: "Mountain Origin",
        },
      },
      heroImage: (require('@/assets/images/HeroBackground.png')),
      mainText: "Meet the Dream Team",
      subText: "Since 2021 , Cafe Mystika has been on a mission to provide sustainable and ethical, hand roasted, specialty coffee  at a fair price for you and the farmers"
    };
  },
  };
  </script>
  