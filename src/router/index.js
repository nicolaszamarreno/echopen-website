import Vue from 'vue';
import Router from 'vue-router';

// views
import Home from '@/view/home/Home';
import Product from '@/view/product/Product';
import Presenting from '@/view/presenting/Presenting';
import Contribute from '@/view/contribute/Contribute';
import Contact from '@/view/contact/Contact';

// components
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        header: Header,
        footer: Footer,
      },
    },
    {
      path: '/product',
      name: 'Product',
      components: {
        default: Product,
        header: Header,
        footer: Footer,
      },
    },
    {
      path: '/presenting',
      name: 'Presenting',
      components: {
        default: Presenting,
        header: Header,
        footer: Footer,
      },
    },
    {
      path: '/contribute',
      name: 'Contribute',
      components: {
        default: Contribute,
        header: Header,
        footer: Footer,
      },
    },
    {
      path: '/contact',
      name: 'Contact',
      components: {
        default: Contact,
        header: Header,
        footer: Footer,
      },
    },
  ],
});