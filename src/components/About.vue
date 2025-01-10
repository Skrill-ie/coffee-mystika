<template>
    <div class="overflow-x-hidden text-sm">
      <HeroSectionMain :heroImage="heroImage" :mainText="mainText" :subText="subText"/>
      <section class="lg:h-screen flex items-center justify-center bg-black-secondary font-radley">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 pb-10 md:py-10 container mx-auto items-center px-3">
          <div class="flex md:gap-5 h-4/5">
            <div class="w-2/3 flex flex-col md:gap-5">
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
          <div class="text-left lg:w-96 mx-auto">
            <p class="text-4xl md:text-5xl mb-10 text-text-title">A History of <br>Cafe Mystika</p>
            <p class="text-text-paragraph">
              Nestled in the tranquil landscapes of Valencia, Negros Oriental, Cafe Mystika was born out of a passion for coffee, community, and sustainability. Recognizing the need for a space where locals and tourists alike could enjoy high-quality beverages while unwinding in nature, the idea for the café was set into motion.

              From the beginning, Cafe Mystika embraced a dual focus: delivering forward-thinking coffee creations and championing a community-driven approach to <hospitality class=""></hospitality>
            </p>
          </div>
        </div>
      </section>
      <section class="bg-black-primary py-20 px-3 font-radley">
        <p class="text-4xl md:text-5xl mb-10 text-text-title ">Cafe Mystika Through Time</p>
        <div class="max-w-screen-lg mx-auto text-center relative h-full">
          <div class="absolute md:left-1/2 transform -translate-x-1/2 h-full border-l-8 md:border-l-4 border-gray-300 opacity-55 z-10"></div>
          <div class="flex flex-col gap-8">
          <div class="md:w-3/6 flex flex-col items-center justify-center p-6 md:p-10 text-text-title bg-black-secondary relative">
            <div class="w-full lg:w-2/3 border-4 border-text-divider text-2xl mb-10 py-2">Inception and Conceptualization</div>
            <div class="text-text-paragraph text-left">
              The concept for Cafe Mystika began with a vision of creating a haven for coffee lovers and adventurers. The idea was to offer an escape from the hustle and bustle of urban life, blending sustainability with creativity in beverage offerings.
            </div>
            <div class="absolute w-9 h-9 rounded-full bg-button-active -left-5 md:-right-5 md:left-auto z-20"></div>
          </div>
          <div class="md:w-3/6 flex flex-col items-center justify-center p-6 md:p-10  text-text-title bg-black-secondary md:ml-auto relative">
            <div class="w-full lg:w-2/3 border-4 border-text-divider text-2xl mb-10 py-2">Establishment</div>
            <div class="text-text-paragraph text-left">Cafe Mystika opened its doors in Valencia, Negros Oriental, with a menu celebrating local and international coffee. From day one, the café offered a space that catered to everyone, from solo travelers seeking solitude to families enjoying a peaceful outing.</div>
            <div class="absolute w-9 h-9 rounded-full bg-button-active -left-5 z-20"></div>
          </div>
          <div class="md:w-3/6 flex flex-col items-center justify-center p-6 md:p-10  text-text-title bg-black-secondary relative">
            <div class="w-full lg:w-2/3 border-4 border-text-divider text-2xl mb-10 py-2">Expansion of Offerings</div>
            <div class="text-text-paragraph text-left">Building on its success, Cafe Mystika expanded its menu to include a diverse range of beverages and complementary products to suit every preference, ensuring its inclusivity.</div>
            <div class="absolute w-9 h-9 rounded-full bg-button-active -left-5 md:-right-5 md:left-auto z-20"></div>
          </div>
          <div class="md:w-3/6 flex flex-col items-center justify-center p-6 md:p-10  text-text-title bg-black-secondary md:ml-auto relative">
            <div class="w-full lg:w-2/3 border-4 border-text-divider text-2xl mb-10 py-2">Community Initiatives</div>
            <div class="text-text-paragraph text-left">Cafe Mystika began actively engaging with the local community through sustainability projects, collaborations with local farmers and artisans, and events that brought people together, reflecting its ethos of serving all walks of life. </div>
            <div class="absolute w-9 h-9 rounded-full bg-button-active -left-5 z-20"></div>
          </div>
          <div class="md:w-3/6 flex flex-col items-center justify-center p-6 md:p-10  text-text-title bg-black-secondary relative">
            <div class="w-full lg:w-2/3 border-4 border-text-divider text-2xl mb-10 py-2">Recognition as a Local and Tourist Favorite</div>
            <div class="text-text-paragraph text-left">Known for its innovative beverages and serene ambiance, the café became a sought-after destination for both locals and tourists seeking quality and peace of mind.</div>
            <div class="absolute w-9 h-9 rounded-full bg-button-active -left-5 md:-right-5 md:left-auto z-20"></div>
          </div>
          <div class="md:w-3/6 flex flex-col items-center justify-center p-6 md:p-10  text-text-title bg-black-secondary md:ml-auto relative">
            <div class="w-full lg:w-2/3 border-4 border-text-divider text-2xl mb-10 py-2">Sustainability Milestones</div>
            <div class="text-text-paragraph text-left">Staying true to its mission, Cafe Mystika achieved significant milestones in adopting sustainable practices, from eco-friendly packaging to sourcing ethically and locally. </div>
            <div class="absolute w-9 h-9 rounded-full bg-button-active -left-5 z-20"></div>
          </div>
          <div class="md:w-3/6 flex flex-col items-center justify-center p-6 md:p-10  text-text-title bg-black-secondary relative">
            <div class="w-full lg:w-2/3 border-4 border-text-divider text-2xl mb-10 py-2">Looking Ahead</div>
            <div class="text-text-paragraph text-left">Cafe Mystika continues to evolve, staying at the forefront of the coffee industry while remaining grounded in its mission to unite people and provide a timeless experience for all.</div>
            <div class="absolute w-9 h-9 rounded-full bg-button-active -left-5 md:-right-5 md:left-auto z-20"></div>
          </div>
          </div>
        </div>
      </section>
      <section class="bg-fixed py-10" :style="{ backgroundImage: `url(${require('@/assets/images/Background.png')})` }">
        <div class="text-4xl md:text-5xl mb-10 font-radley text-text-title px-3">We Craft Tasty Moments to Remember</div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto justify-between gap-5 px-3 md:px-20">
          <div class="h-60 w-full lg:w-60 bg-black-primary p-8 flex flex-col justify-center">
            <img class="mx-auto w-16 h-16" src="../assets/icons/drying.png">
            <p class="mt-10 text-lg text-text-title font-radley">Drying the Beans</p>
          </div>
          <div class="h-60 w-full lg:w-60 bg-black-primary p-8 flex flex-col justify-center">
            <img class="mx-auto w-16 h-16" src="../assets/icons/roasting.png">
            <p class="mt-10 text-lg text-text-title font-radley">Roasting</p>
          </div>
          <div class="h-60 w-full lg:w-60 bg-black-primary p-8 flex flex-col justify-center">
            <img class="mx-auto w-16 h-16" src="../assets/icons/grinding.png">
            <p class="mt-10 text-lg text-text-title font-radley">Grinding</p>
          </div>
          <div class="h-60 w-full lg:w-60 bg-black-primary p-8 flex flex-col justify-center">
            <img class="mx-auto w-16 h-16" src="../assets/icons/done.png">
            <p class="mt-10 text-lg text-text-title font-radley">Perfect Coffee</p>
          </div>
        </div>
      </section>
      <section class="bg-black-primary py-20">
        <div class="text-4xl md:text-5xl mb-10 font-radley text-text-title px-3">Get to Know our Friendly Baristas</div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto justify-between gap-10 px-3">
          <div v-for="(barista, key) in sortedBaristas" :key="key" class="h-96 mx-auto w-full sm:w-3/4 md:w-full relative bg-center "
               :style="{ backgroundImage: `url(${barista.baristaImage})` }">
            <div class=" lg:-mt-14 px-5 z-10 absolute -bottom-5 left-0 w-full">
              <div class="bg-black-secondary py-3 font-radley shadow">
                <span class="text-text-title text-2xl">{{ barista.baristaName }}</span>
                <p class="text-text-paragraph mb-3 opacity-55">Gen. {{ barista.baristaGen }} Barista</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="flex items-center justify-center bg-black-secondary font-radley">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 pb-10 md:py-10 container mx-auto items-center px-3">
          <div class="text-left lg:w-80 mx-auto order-2 lg:order-1 md:flex lg:block gap-x-16">
            <div class="px-5">
              <div class="text-4xl md:text-5xl mb-10 text-text-title">Vision</div>
              <p class="text-text-paragraph">
                To be a globally recognized café rooted in the heart of Valencia, Negros Oriental, celebrated for crafting innovative and diverse beverages that unite people from all walks of life. We aspire to create a sustainable café experience that honors our local heritage while welcoming the world.
              </p>
            </div>
          </div>
          <div class="flex md:gap-5 order-1 lg:order-2 h-4/5">
            <div class="w-3/5">
              <img src="../assets/images/image-3.png" alt="Latte Art" class="w-full h-full object-cover">
            </div>
            <div class="w-2/3 md:w-1/3 flex flex-col md:gap-5">
              <div class="h-2/3">
                <img src="../assets/images/image-5.png" alt="Coffee Beans" class="w-full h-full object-cover">
              </div>
              <div class="h-1/3 overflow-hidden">
                <img src="../assets/images/image-6.png" alt="Barista Side View" class="w-full h-full object-cover">
              </div>
            </div>
          </div>
          <div class="mt-10 text-left mx-auto order-4 lg:order-4 md:flex lg:block gap-x-16">
            <div class="px-5">
              <div class="text-4xl md:text-5xl mb-10 md:mb-10 lg:my-10 text-text-title">Mission</div>
              <ul class="text-text-paragraph list-disc">
                <li class="mb-3">To serve exceptional coffee and beverages that cater to the unique tastes of both locals and tourists, ensuring every customer finds something they love.</li>
                <li class="mb-3">To foster a welcoming and inclusive environment that builds connections within the community and beyond.</li>
                <li class="mb-3">To prioritize sustainability in every aspect of our operations, from sourcing ingredients to serving our products.</li>
                <li class="mb-3">To support local farmers, artisans, and businesses, promoting a culture of collaboration and growth.</li>
                <li class="mb-3">To provide an unforgettable experience that inspires relaxation, connection, and joy for everyone who visits Cafe Mystika.</li>
              </ul>
            </div>
          </div>
          <div class="lg:flex md:gap-5 order-3 lg:order-3 h-4/5 hidden">
            <div class="w-3/5">
              <img src="../assets/images/image-3.png" alt="Latte Art" class="w-full h-full object-cover">
            </div>
            <div class="w-2/3 md:w-1/3 flex flex-col md:gap-5">
              <div class="h-2/3">
                <img src="../assets/images/image-5.png" alt="Coffee Beans" class="w-full h-full object-cover">
              </div>
              <div class="h-1/3 overflow-hidden">
                <img src="../assets/images/image-6.png" alt="Barista Side View" class="w-full h-full object-cover">
              </div>
            </div>
          </div>
        </div>
      </section>
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
          baristaImage:(require('@/assets/images/baristas/barista-1.png')),
          baristaName: "Peach",
          baristaGen: "5",
        },
        barista2:{
          baristaImage:(require('@/assets/images/baristas/barista-2.png')),
          baristaName: "Dean Valencia",
          baristaGen: "6",
        },
        barista3:{
          baristaImage:(require('@/assets/images/baristas/barista-3.png')),
          baristaName: "Dehbro Tabaloc",
          baristaGen: "1",
        },
        barista4:{
          baristaImage:(require('@/assets/images/baristas/barista-4.png')),
          baristaName: "Jean Villarosa",
          baristaGen: "5",
        },
          barista5:{
          baristaImage:(require('@/assets/images/baristas/barista-5.png')),
          baristaName: "Kristina Serion",
          baristaGen: "6",
        },
        barista6:{
          baristaImage:(require('@/assets/images/baristas/barista-6.png')),
          baristaName: "Charles Lara",
          baristaGen: "3",
        },
        barista7:{
          baristaImage:(require('@/assets/images/baristas/barista-7.png')),
          baristaName: "Bogz Ama",
          baristaGen: "1",
        },
        barista8:{
          baristaImage:(require('@/assets/images/baristas/barista-8.png')),
          baristaName: "Anthony Elmaga",
          baristaGen: "6",
        },
        barista9:{
          baristaImage:(require('@/assets/images/baristas/barista-9.png')),
          baristaName: "Nicole Paulo",
          baristaGen: "6",
        },
        barista10:{
          baristaImage:(require('@/assets/images/baristas/barista-10.png')),
          baristaName: "Martton Macapanas",
          baristaGen: "2",
        },
        barista11:{
          baristaImage:(require('@/assets/images/baristas/barista-11.png')),
          baristaName: "Laurie Bungcal",
          baristaGen: "3",
        },
        barista12:{
          baristaImage:(require('@/assets/images/baristas/barista-12.png')),
          baristaName: "Juan Ronato",
          baristaGen: "2",
        },
        barista13:{
          baristaImage:(require('@/assets/images/baristas/barista-13.png')),
          baristaName: "Carl Labrador",
          baristaGen: "3",
        },
        barista14:{
          baristaImage:(require('@/assets/images/baristas/barista-14.png')),
          baristaName: "Leira Ronato",
          baristaGen: "2",
        },
        barista15:{
          baristaImage:(require('@/assets/images/baristas/barista-15.png')),
          baristaName: "Malmar Marana",
          baristaGen: "1",
        },
        barista16:{
          baristaImage:(require('@/assets/images/baristas/barista-16.png')),
          baristaName: "Jem Bandiola",
          baristaGen: "5",
        },
        barista17:{
          baristaImage:(require('@/assets/images/baristas/barista-17.png')),
          baristaName: "Candice",
          baristaGen: "1",
        },
        barista18:{
          baristaImage:(require('@/assets/images/baristas/barista-18.png')),
          baristaName: "Wil Ybanez",
          baristaGen: "1",
        },
        barista19:{
          baristaImage:(require('@/assets/images/baristas/barista-19.png')),
          baristaName: "Michael Sumanoy",
          baristaGen: "2",
        },
        barista20:{
          baristaImage:(require('@/assets/images/baristas/barista-20.png')),
          baristaName: "Sven Sayrne",
          baristaGen: "1",
        },
        barista21:{
          baristaImage:(require('@/assets/images/baristas/barista-21.png')),
          baristaName: "Marvic",
          baristaGen: "1",
        },
        barista22:{
          baristaImage:(require('@/assets/images/baristas/barista-22.png')),
          baristaName: "Clarke Atienza",
          baristaGen: "6",
        },
      },
      heroImage: (require('@/assets/images/herobackground2.png')),
      mainText: "Meet the Dream Team",
      subText: "Since 2021 , Cafe Mystika has been on a mission to provide sustainable and ethical, hand roasted, specialty coffee  at a fair price for you and the farmers"
    };
  },
    computed:{
      sortedBaristas() {
        return Object.values(this.baristaDetail).sort(
            (a, b) => a.baristaGen - b.baristaGen
        );
      },
    }
  };
  </script>
  