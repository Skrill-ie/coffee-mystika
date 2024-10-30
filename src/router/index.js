// add all import components
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import AboutUs from '../components/About.vue';
import ContactUs from '../components/Contact.vue';
import BlogPage from '../components/Blog.vue';


// export all components
export { default as HelloWorld } from '../components/HelloWorld.vue';
// export { default as MainSlider } from '../components/sub-component/MainSlider.vue';


//routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


export {  AboutUs, ContactUs };
export default router;
