<template>
    <div class="mt-40">
      <div class="py-20 container mx-auto px-3 md:px-10">
        <p class="text-5xl mb-10 font-radley text-text-title ">Have a Word <br> with Us</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div class="bg-black-secondary w-full xl:w-3/4 mx-auto h-52 py-10 px-5 md:px-0 font-radley">
            <p class="text-text-divider text-3xl mb-5"> Customer Service:</p>
            <div class="flex sm:w-1/2 lg:w-1/3 mx-auto mb-5 text-text-paragraph font-imFell"><img src="../assets/icons/Vector-2.png"><span class="ml-5">help@mystika.com</span></div>
            <div class="flex sm:w-1/2 lg:w-1/3 mx-auto text-text-paragraph font-imFell"><img src="../assets/icons/Vector-3.png"><span class="ml-5">0905-000-000</span></div>
          </div>
          <div class="bg-black-secondary w-full xl:w-3/4 mx-auto h-52 py-10 px-5 md:px-0 font-radley">
            <p class="text-text-divider text-3xl mb-5">Wholesale:</p>
            <div class="flex sm:w-1/2 lg:w-1/3 mx-auto mb-5 text-text-paragraph font-imFell"><img src="../assets/icons/Vector-2.png"><span class="ml-5">help@mystika.com</span></div>
            <div class="flex sm:w-1/2 lg:w-1/3 mx-auto text-text-paragraph font-imFell"><img src="../assets/icons/Vector-3.png"><span class="ml-5">0905-000-000</span></div>
          </div>
        </div>
      </div>
      <div class="md:pb-20 container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20">
          <div class="w-full xl:w-3/4 mx-auto py-10 px-3 lg:px-10 xl:px-0 font-radley order-2 lg:order-1">
            <div class="mb-10 lg:text-center text-start">
              <p class="text-5xl mb-10 font-radley text-text-title">Get cozy and Follow our Socials!</p>
              <p class="w-full lg:mx-auto text-text-paragraph">Join up with the Cafe Mystika Socials — get the latest news, special deals, and secret coffee notes brewed just for you!</p>
            </div>
            <div class="flex gap-10 justify-center">
              <div><a target="_blank" :href="socialInstagram"><img class="w-24" src="../assets/icons/instagram.png"></a></div>
              <div><a target="_blank" :href="socialYoutube"><img class="w-24" src="../assets/icons/youtube.png"></a></div>
              <div><a target="_blank" :href="socialFacebook"><img class="w-24" src="../assets/icons/facebook.png"></a></div>
<!--              <div class="mt-10 grid grid-cols-1 gap-x-3 gap-y-3 sm:gap-x-6 sm:gap-y-6 sm:grid-cols-6">-->
<!--                <div class="sm:col-span-3">-->
<!--                  <div class="mt-2">-->
<!--                    <input type="text"-->
<!--                           name="first-name"-->
<!--                           placeholder="First Name"-->
<!--                           id="first-name"-->
<!--                           autocomplete="given-name"-->
<!--                           class="border bg-transparent placeholder-[#FDECD8] border-[#F9DBB7] p-4 focus:outline-none focus:ring-2 focus:ring-text-divider focus:border-text-divider bg-black-primary text-text-divider w-full">-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="sm:col-span-3">-->
<!--                  <div class="mt-2">-->
<!--                    <input type="text" name="last-name" placeholder="Last Name" id="last-name" autocomplete="last-name"-->
<!--                           class="border bg-transparent placeholder-[#FDECD8] border-[#F9DBB7] p-4 focus:outline-none focus:ring-2 focus:ring-text-divider focus:border-text-divider bg-black-primary text-text-divider w-full">-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="sm:col-span-6">-->
<!--                  <div class="mt-2">-->
<!--                    <input type="email" name="email" placeholder="Email Adress" id="email" autocomplete="email"-->
<!--                           class="border bg-transparent placeholder-[#FDECD8] border-[#F9DBB7] p-4 focus:outline-none focus:ring-2 focus:ring-text-divider focus:border-text-divider bg-black-primary text-text-divider w-full">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <button class="mt-6 bg-button-active hover:bg-orange-400 transition w-full py-4 text-text-paragraph rounded-md"> Message Us </button>-->

            </div>
          </div>
          <div class="w-full xl:w-3/4 mx-auto py-0 md:py-10 font-radley order-1 lg:order-2">
            <div class="flex xl:justify-center h-full">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d705.7907064776172!2d123.2466837592959!3d9.281037125473096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab6700254fb5cd%3A0x102c972ead890ff6!2sCafe%20Mystika%20Valencia%20Espresso%20Bar!5e0!3m2!1sen!2ssg!4v1730140450245!5m2!1sen!2ssg"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  class="w-full xl:w-96 h-full"
                  referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactUs',
    data() {
      return {
        socialFacebook: "https://www.facebook.com/CafeMystika",
        socialInstagram: "https://www.instagram.com/cafemystika/",
        socialYoutube: "https://www.youtube.com/c/ThePinoyDrinker",
      };
    },
  };
  </script>
  