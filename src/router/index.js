import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexView from '../views/HomeView.vue'
import ShowView from '../views/ShowView.vue'
import NewView from '../views/NewView.vue'
import ProductEditView from '../views/ProductEditView.vue'
import MultiSelectView from '../views/MultiSelectView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/multi',
    name: 'multi-select',
    component: MultiSelectView
  },
  {
    path: '/products',
    name: 'index',
    component: IndexView
  },
  {
    path: '/product/:id/edit',
    name: 'product-edit',
    component: ProductEditView
  },
  {
    path: '/products/:id',
    name: 'show-view',
    component: ShowView
  },
  {
    path: '/products/new',
    name: 'new-product-view',
    component: NewView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
