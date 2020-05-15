import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/view/main'
import Home from '@/view/home'
import Catalog from '@/view/catalog'
import Shoppingcart from '@/view/shoppingcart'
import Order from '@/view/order'
import Usercenter from '@/view/usercenter'
import Addressmain from '@/view/addressmain'
import Addressedit from '@/view/addressedit'
import Orderpage from '@/view/orderpage'
import Coupon from '@/view/coupon'
import Product from '@/view/product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
      children: [
        {
          path: "/",
          component: Home,
          meta: ["首页"]
        }, {
          path: "/catalog",
          component: Catalog,
          meta: ["服务"]
        }, {
          path: "/shoppingcart",
          component: Shoppingcart,
          meta: ["购物车"]
        },
        {
          path: "/order",
          component: Order,
          meta: ["订单"]
        }, {
          path: "/user",
          component: Usercenter,
          meta: ["用户"]
        }
      ]
    },
    {
      path: '/addresslist',
      name: 'addresslist',
      component: Addressmain,
    },
    {
      path: '/addressedit',
      name: 'addressedit',
      component: Addressedit,
    },
    {
      path: '/orderpage',
      name: 'orderpage',
      component: Orderpage,
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: Coupon,
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
    }
  ]
})
