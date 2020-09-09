

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}



import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const detail = () => import('../views/detail/detail')
//安插件
Vue.use(VueRouter)
//创路由对象
const routes = [
  {
    path: '',
    redirect: '/home',
    meta:{
      keepAlive:true,

    }
  },
  {
    path: '/home',
    component: Home,
    meta:{
      keepAlive:true,

    }
  },
  {
    path: '/category',
    component: Category,
    meta:{
      keepAlive:true,

    }
  },
  {
    path: '/cart',
    component: Cart,
    meta:{
      type:'login',
      keepAlive:true,

    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      keepAlive:true,

    }
  },
  {
    path: '/detail/:iid',
    component: detail
  },
  

]
const router = new VueRouter({
  routes,
  mode: 'history'
})
//导出
export default router

