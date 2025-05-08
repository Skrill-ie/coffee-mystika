<template>
    <div>
      <!-- New subscription packages section -->
      <div class="relative overflow-hidden bg-black-secondary">
        <!-- Title -->
        <div class="text-center font-radley mt-60">
          <div class="text-4xl md:text-5xl text-text-title">Our Services</div>
          <div class="text-sm text-text-paragraph mt-4 w-[950px] mx-auto">
            Café Mystika brings craft coffee and cocktails to your gatherings with curated packages made for every mood. From rich moka brews and smooth espresso shots to vibrant fruity blends and refined signature cocktails, each sip is thoughtfully prepared to impress, connect, and elevate your experience.
          </div>
        </div>
        <div
          class="flex justify-center gap-4 py-[7rem] mx-auto max-w-[1900px] relative"
          :style="{
            maskImage: activePackage === 0 
              ? 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 7%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)' // Disable left fade
              : activePackage === packages.length - 1 
              ? 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 7%, rgba(0, 0, 0, 1) 100%)' // Disable right fade
              : 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 7%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)',
            WebkitMaskImage: activePackage === 0 
              ? 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 7%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)'
              : activePackage === packages.length - 1 
              ? 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 7%, rgba(0, 0, 0, 1) 100%)'
              : 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 7%, rgba(0, 0, 0, 1) 95%, rgba(0, 0, 0, 0) 100%)',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }"
        >
          <div
            v-for="(packageItem, index) in packages"
            :key="index"
            class="flex items-start gap-4"
            :style="{
              transform: activePackage !== null 
                ? `translateX(calc(${(index - activePackage) * 320}px - ${(activePackage - 2) * 320}px))` // Center the active package
                : 'translateX(0)', // Default position when no package is active
              transition: 'transform 0.3s ease-in-out', // Smooth transition
            }"
          >
            <!-- Package Card and Image Container -->
            <div class="flex flex-row items-start gap-4">
              <!-- Package Card -->
              <div
                :class="[ 
                  'flex bg-button-active p-4 text-center shadow-md rounded-tl-2xl rounded-br-2xl flex-col justify-between transition-all duration-300 relative',
                  activePackage === index 
                    ? 'flex-none w-[300px] h-[750px] z-20' // Ensure active package is on top
                    : activePackage === null 
                      ? 'flex-none w-[300px] h-[750px]' // All packages at 100% opacity when no package is active
                      : 'flex-none w-[300px] h-[750px] opacity-50' // Set inactive packages to opacity-50
                ]"
              >
                <div>
                  <h3 class="mb-2 text-black-secondary text-sm font-bold font-radley" v-html="packageItem.title"></h3>
                  <span class="font-bold text-black-secondary text-mid font-radley" v-html="packageItem.price"></span>
                  <p class="mb-3 mt-4 text-black-secondary text-lite font-radley" v-html="packageItem.description"></p>
                </div>
                <!-- Learn More button -->
                <button
                  class="mt-4 px-4 py-2 bg-black-secondary text-text-title rounded-lg hover:text-white font-radley text-sm self-center mb-[1rem]"
                  @click="toggleActivePackage(index)"
                >
                  Learn More!
                </button>
              </div>

              <!-- Active Package Image -->
              <div
                v-if="activePackage === index"
                class="flex items-center w-[1000px] relative rounded-lg shadow-lg"
                :style="{ 
                  transform: 'translateX(0)', // Position the image beside the card
                  transition: 'transform 0.3s ease-in-out' 
                }"
              >
                <!-- Gradient Overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black-primary to-transparent z-10 rounded-lg"
                ></div>

                <!-- Active Package Image -->
                <img
                  :src="packageItem.image"
                  alt="Active Package Image"
                  class="w-full h-[750px] rounded-lg object-cover z-0"
                />

                <!-- Full Description -->
                <div
                  class="absolute bottom-8 left-0 w-full p-4 z-20"
                >
                  <p class="text-text-paragraph text-sm font-radley text-left" v-html="packageItem.fullDescription"></p>
                </div>

                <!-- Close button -->
                <button
                  class="absolute bottom-4 right-4 px-4 py-2 bg-button-active text-white rounded-lg hover:bg-red-600 z-20"
                  @click="toggleActivePackage(null)"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      packages: [
        {
          title: 'Moka Package',
          description: `<ul class="list-disc pl-5 text-left">
                          <li><b>Bold & Smooth</b> – Brewed to impress, every cup delivers rich flavor.</li>
                          <li><b>Artisan Energy</b> – Classic Moka Pot magic with a modern edge.</li>
                          <li><b>Elevate Every Gathering</b> – Simple to brew, unforgettable to serve.</li>
                          <li><b>Pure or Creative</b> – Enjoy it black or with your signature twist.</li>
                          <li><b>Warmth in Every Pour</b> – Comfort, charm, and caffeine in one package.</li>
                        </ul>`,
          fullDescription: `<b>Bold, smooth, and brewed to impress — our Moka Pot Package delivers coffee with character.</b> This method showcases the rich depth of flavor in every cup, offering your guests a simple yet elevated caffeine experience. Whether served pure and black or with a creative twist, each brew brings warmth, energy, and artisanal charm to any gathering.`,
          price: 'Starts @<br>₱9,500',
          image: require('@/assets/images/services/moka.jpg'),
        },
        {
          title: 'Espresso Package',
          description: `<ul class="list-disc pl-5 text-left">
                          <li><b>Café-Quality at Home</b> – Brewed to perfection, every single pour.</li>
                          <li><b>Bold to Creamy</b> – Enjoy rich shots or silky-smooth lattes.</li>
                          <li><b>Precision & Balance</b> – Smooth, bold, and never bitter.</li>
                          <li><b>Loved by Guests</b> – Impress coffee lovers with every cup.</li>
                          <li><b>Craft in Every Cup</b> – Perfect for enthusiasts and casual sippers alike.</li>
                        </ul>`,
          fullDescription: `<b>Brewed to perfection — our Espresso Package delivers café-quality coffee with every pour.</b> From bold shots to creamy lattes, our espresso machine guarantees a smooth, rich, and balanced experience your guests will love. Ideal for coffee enthusiasts and anyone who appreciates craft in every cup.`,
          price: 'Starts @<br>₱11,500',
          image: require('@/assets/images/services/espresso.jpg'),
        },
        {
          title: 'OG Series<br>(Uses pouring brands)',
          description: `<ul class="list-disc pl-5 text-left">
                          <li><b>The OG Series</b> – A tribute to timeless flavors & iconic moments.</li>
                          <li><b>Signature & Classic</b> – Handpicked favorites from behind the bar.</li>
                          <li><b>Every Sip, a Story</b> – Crafted with history, heart, and bold character.</li>
                          <li><b>Revisit or Discover</b> – Rediscover your go-to or meet your next favorite.</li>
                          <li><b>Crafted with Passion</b> – Where mixology meets legacy.</li>
                        </ul>`,
          fullDescription: `<b>Discover the OG Series — a tribute to timeless flavors and unforgettable moments.</b> Handpicked from our most loved classics and signature creations, each cocktail tells the story of our journey behind the bar. Whether you're revisiting a favorite or finding a new go-to, every sip captures the essence of our craft, our history, and our passion for the art of mixology.`,
          price: 'Starts @<br>₱10,500/<span class="text-sm">100 PAX</span>',
          image: require('@/assets/images/services/OG-series.jpg'),
        },
        {
          title: 'Fruity and Floral',
          description: `<ul class="list-disc pl-5 text-left">
                          <li><b>Fruity & Floral Package</b> – Where fresh meets finesse.</li>
                          <li><b>Juicy Meets Elegant</b> – Ripe fruits + delicate floral infusions.</li>
                          <li><b>Handcrafted Creations</b> – Signature cocktails & bespoke blends.</li>
                          <li><b>Aromatic & Refreshing</b> – Bursting with flavor, fragrance & charm.</li>
                          <li><b>Nature-Inspired Sophistication</b> – Bright, tropical, or soft & fragrant.</li>
                          <li><b>Elevate Every Sip</b> – A sensory journey in every glass.</li>
                        </ul>`,
          fullDescription: `<b>Experience the Fruity & Floral Package – where fresh meets finesse.</b> This handcrafted cocktail collection celebrates the vibrant fusion of ripe fruits and delicate floral infusions. From signature creations to bespoke masterpieces, each drink is a refreshing sensory journey—bursting with juicy flavors, aromatic syrups, and elegant floral notes. Whether you're craving something bright and tropical or soft and fragrant, this package brings a touch of sophistication and nature-inspired charm to every sip.`,
          price: 'Starts @<br>₱12,000/<span class="text-sm">100 PAX</span>',
          image: require('@/assets/images/services/fruity-and-floral.jpg'),
        },
        {
          title: 'Exclusive',
          description: `<ul class="list-disc pl-5 text-left">
                          <li><b>The Exclusive Package</b> – Refined spirits, timeless sophistication.</li>
                          <li><b>Rich & Earthy</b> – Top-shelf whiskeys, rums, and brandies.</li>
                          <li><b>Crafted for the Discerning</b> – Bold flavor meets elegant execution.</li>
                          <li><b>Classics Reimagined</b> – Masterfully balanced & deeply complex.</li>
                          <li><b>Authentic Luxury</b> – A curated experience in every sip.</li>
                        </ul>`,
          fullDescription: `<b>Elevate your taste with the Exclusive Package – a celebration of refined spirits and timeless sophistication.</b> Crafted for those who appreciate depth, character, and quality, this collection showcases top-shelf whiskeys, rums, and brandies with rich, earthy notes and smooth, crisp finishes. Each cocktail is a masterclass in balance and complexity—whether it’s a reimagined classic or a bespoke creation tailored to your palate. Designed for the discerning, this package delivers bold flavor, elegance, and authenticity in every sip.`,
          price: 'Starts @<br>₱18,500/<span class="text-sm">50 PAX</span>',
          image: require('@/assets/images/services/exclusive.jpg'),
        },
      ],
      activePackage: null, // Tracks the currently active package
    };
  },
  methods: {
    toggleActivePackage(index) {
      this.activePackage = index === this.activePackage ? null : index;
    },
  },
};
</script>