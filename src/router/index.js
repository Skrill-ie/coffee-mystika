// add all import components
import { createRouter, createWebHashHistory } from 'vue-router';
import LandingPage from '../components/Landing.vue';
import AboutUs from '../components/About.vue';
import ContactUs from '../components/Contact.vue';
import BlogPage from '../components/Blog.vue';


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
    component: BlogPage, // Route to Contact component
  },
],
});

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });


export {  AboutUs, ContactUs };
export default router;
