import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Flavors from '../views/Flavors.vue'
import Decorations from '../views/Decorations.vue'
import MakeOrder from '../views/MakeOrder.vue'
import Admin from '../views/Admin.vue'
import Orders from '../views/Orders.vue'
import Inventory from '../views/Inventory'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/flavors',
    name: 'flavors',
    component: Flavors
  },
  {
    path: '/decorations',
    name: 'decorations',
    component: Decorations
  },
  {
    path: '/make-order',
    name: 'make-order',
    component: MakeOrder
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/admin/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/admin/inventory',
    name: 'inventory',
    component: Inventory
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
