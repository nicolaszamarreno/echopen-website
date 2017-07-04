import Vue from 'vue';
import Router from 'vue-router';

// views
import Home from '@/view/home/Home';
import Product from '@/view/product/Product';

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
  ],
});
