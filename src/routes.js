import { ProductsPage, BasketPage, CheckoutPage } from './views';

const routes = [
  {
    path: '/',
    component: ProductsPage,
  },
  {
    path: '/basket',
    component: BasketPage,
  },
  {
    path: '/checkout',
    component: CheckoutPage,
  },
];

export default routes;
