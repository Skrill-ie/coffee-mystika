<template>
    <div class="bg-black-secondary font-radley">
        <div class="bg-black-primary pt-10 md:pt-0">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-x-20 container mx-auto md:py-10">
                <div class="col-span-4 md:col-span-2 xl:col-span-4 px-5 border-b-2 xl:border-none border-black-secondary">
                    <div class="flex items-center justify-center md:justify-items-start xl:mb-10">
                        <div class="pr-8"><img src="../../assets/icons/cafe-mystika-icon-2.png"></div>
                        <div><img src="../../assets/icons/cafe-mystika-word.png"></div>
                    </div>
                    <p class="xl:text-left text-text-paragraph py-10 max-w-md mx-auto">Since 2021 , Cafe Mystika has been on a mission to provide sustainable and ethical, hand roasted, specialty coffee  at a fair price for you and the farmers</p>
                </div>
                <div class="col-span-4 md:col-span-1 xl:col-span-4 order-3 md:order-2 pl-10 lg:px-10 py-10 xl:py-0">
                    <div class="text-3xl mb-10 text-left text-text-title">Contact Us</div >
                    <ul class="text-text-paragraph ">
                        <li class="mb-3"><span class="inline-flex justify-start w-full"><img class="mr-5" src="../../assets/icons/Vector-1.png" alt="">10:00 am - 11:00 pm</span></li>
                        <li class="mb-3"><span class="inline-flex justify-start w-full"><img class="mr-5" src="../../assets/icons/Vector.png" alt=""> Valencia, Negros Oriental</span></li>
                        <li class="mb-3"><span class="inline-flex justify-start w-full"><img class="mr-5" src="../../assets/icons/Vector-2.png" alt="">Help@mystika.com</span></li>
                        <li class="mb-3"><span class="inline-flex justify-start w-full"><img class="mr-5" src="../../assets/icons/Vector-3.png" alt="">+639 - 0000 - 000</span></li>
                    </ul>
                </div>
                <div class="col-span-4 md:col-span-1 xl:col-span-4 order-2 md:order-3 pr-10 lg:px-10 py-10 xl:py-0">
                    <div class="text-3xl mb-10 text-text-title text-left px-5 xl:px-0">We're Here</div>
                    <div class="flex xl:justify-center ">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d705.7907064776172!2d123.2466837592959!3d9.281037125473096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab6700254fb5cd%3A0x102c972ead890ff6!2sCafe%20Mystika%20Valencia%20Espresso%20Bar!5e0!3m2!1sen!2ssg!4v1730140450245!5m2!1sen!2ssg"
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy"
                            class="w-full xl:w-96"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-text-paragraph py-2 text-xs md:text-sm">Copyright @ Cafemystika 2024</div>
    </div>
</template>
<script>
export default {
  name: 'AppFooter',
};
</script>