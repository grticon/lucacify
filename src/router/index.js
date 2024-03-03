import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Login.vue";
import DashboardLayout from "@/views/Dashboard/index.vue";
import Dashboard from "@/views/Dashboard/Users.vue";
import Agents from "@/views/Dashboard/Agents.vue";
import ShopOrders from "@/views/Dashboard/ShopOrders.vue";
import Orders from "@/views/Dashboard/Orders.vue";
import Withdrawals from "@/views/Dashboard/Withdrawals.vue";
import AgentReports from "@/views/Dashboard/AgentReports.vue";
import UserReports from "@/views/Dashboard/UserReports.vue";
import BugReports from "@/views/Dashboard/BugReports.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "",
          name: "dashboard",
          component: Dashboard,
          meta: { requiresAuth: true },
        },
        {
          path: "/agents",
          name: "agents",
          component: Agents,
          meta: { requiresAuth: true },
        },
        {
          path: "/shoporders",
          name: "shoporders",
          component: ShopOrders,
          meta: { requiresAuth: true },
        },
        {
          path: "/orders",
          name: "orders",
          component: Orders,
          meta: { requiresAuth: true },
        },
        {
          path: "/withdrawals",
          name: "withdrawals",
          component: Withdrawals,
          meta: { requiresAuth: true },
        },
        {
          path: "/userreports",
          name: "userreports",
          component: UserReports,
          meta: { requiresAuth: true },
        },
        {
          path: "/agentreports",
          name: "agentreports",
          component: AgentReports,
          meta: { requiresAuth: true },
        },
        {
          path: "/bugreports",
          name: "bugreports",
          component: BugReports,
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (to.matched.some((record) => record.meta.requiresAuth) && !token) {
    // Redirect to login if the route requires authentication and no token is found
    next("/");
  } else {
    next(); // Continue to the requested route
  }
});

export default router;
