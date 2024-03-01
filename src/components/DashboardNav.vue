<template>
  <nav>
    <div class="desktop">
      <div class="body-menu">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/logo1.png" alt="">
          </router-link>
        </div>
        <div class="font-inter routerLinks">
          <router-link v-for="(link, index) in links" :key="index" :to="link.to" class="routerLink">
            <i :class="link.icon"></i>
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="mobile" v-if="menu">
      <div class="body-menu">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/logo1.png" alt="">
          </router-link>
        </div>
        <div class="font-inter routerLinks">
          <router-link v-for="(link, index) in links" :key="index" :to="link.to" class="routerLink">
            <i :class="link.icon"></i>
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
      <div class="toggle">
        <i class="bi bi-x" v-if="menu" @click="menu = false"></i>
        <i class="bi bi-list" v-else @click="menu = true"></i>
      </div>
  </nav>
</template>
  
<script setup>

import { ref } from "vue";
const menu = ref(false)

const links = ref([
  {
    name: "Users",
    to: "/dashboard",
    icon: "bi bi-grid-1x2-fill",
  },
  {
    name: "Agents",
    to: "/agents",
    icon: "bi bi-person-check",
  },
  {
    name: "Shop orders",
    to: "/shoporders",
    icon: "bi bi-bag-check-fill",
  },
  {
    name: "Orders",
    to: "/orders",
    icon: "bi bi-basket",
  },
  {
    name: "Withdrawals",
    to: "/withdrawals",
    icon: "bi bi-cash-stack",
  },
  {
    name: "Reports",
    to: "/reports",
    icon: "bi bi-flag-fill",
  },
]);
</script>
  
  
<style  scoped lang="scss">
a {
  font-weight: 700;
  font-size: 13px;
  padding: 13px;
  text-decoration: none;
  color: #ffffff;
  height: 40px;
  margin-bottom: 5px;
}

a.router-link-exact-active {

  color: #2D2FE4;
  background: #ffffff;
}

.body-menu {
  width: 180px;
  height: 100vh;
  background: #2D2FE4;
  padding: 0px;
}
nav{
  div.mobile{
    position: absolute;
    z-index: 1;
  }
  div.toggle{
    position: absolute;
    display: none;
    justify-content: flex-end;
    right: 30px;
    top: 10px;
    width: 100%;
    i{
      color: #2D2FE4;
      font-size: 28px;
    }
  @media(max-width: 710px){
    display: flex;
  }
  }
}
div.desktop{
  @media(max-width: 710px){
    display: none;
  }
}

.logo {
  width: 150px;
  padding: 20px 0px 0px;
  margin: 0px 0px 30px;

  img {
    width: 100%;
  }
}

.routerLinks {
  display: flex;
  flex-direction: column;
}

.routerLink i {
  margin-right: 5px;
}
</style>
  