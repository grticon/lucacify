import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Login.vue'
import DashboardLayout from "@/views/Dashboard/index.vue";
import Dashboard from "@/views/Dashboard/Users.vue";
import Agents from "@/views/Dashboard/Agents.vue";
import ShopOrders from "@/views/Dashboard/ShopOrders.vue";
import Orders from "@/views/Dashboard/Orders.vue";
import Withdrawals from "@/views/Dashboard/Withdrawals.vue"
import Reports from "@/views/Dashboard/Reports.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "",
          name: "dashboard",
          component: Dashboard,
        },
        {
          path: "/agents",
          name: "agents",
          component: Agents,
        },
        {
          path: "/shoporders",
          name: "shoporders",
          component: ShopOrders,
        },
        {
          path: "/orders",
          name: "orders",
          component: Orders,
        },
        {
          path: "/withdrawals",
          name: "withdrawals",
          component: Withdrawals,
        },
        {
          path: "/reports",
          name: "reports",
          component: Reports,
        },
      ],
    },
  ]
})

export default router
