// add all import components
import { createRouter, createWebHashHistory } from 'vue-router';
import LandingPage from '../components/Landing.vue';
import AboutUs from '../components/About.vue';
import ContactUs from '../components/Contact.vue';
import BlogPage from '../components/Blog.vue';
import Services from '../components/Services.vue';


// export all components
export { default as LandingPage } from '../components/Landing.vue';
// export { default as MainSlider } from '../components/sub-component/MainSlider.vue';


//routes
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
  {
    path: '/',
    name: 'Home',
    component: LandingPage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs, // Route to About component
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactUs, // Route to Contact component
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage, // Route to Blog component
  },
  {
    path: '/services',
    name: 'Services',
    component: Services, // Route to Services component
  },
],
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position, go to it (for back/forward browser navigation)
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth", // Optional: adds a smooth scrolling animation
      };
    }
    // Default: Scroll to top
    document.body.style.overflow = '';
    return { top:0 };
  },

});

router.beforeEach((to, from, next) => {
  document.body.style.overflow = ''; // Ensure scroll unlocked
  console.log(`Navigating to ${to.fullPath}`);
  next();
});
export {  AboutUs, ContactUs };
export default router;
