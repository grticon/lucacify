<template>
    <nav class="body-menu">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo1.png" alt="">
        </router-link>
      </div>
      <div class="font-inter routerLinks">
        <router-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="routerLink"
        >
          <i :class="link.icon"></i> 
          {{ link.name }}
        </router-link>
      </div>
    </nav>
  </template>
  
  <script setup>
  
  import { ref } from "vue";
  
  const links = ref([
    {
      name: "Users",
      to: "/dashboard",
      icon: "bi bi-heart-fill",
    },
    {
      name: "Agents",
      to: "/agents",
      icon: "bi bi-file-text-fill",
    },
    {
      name: "Orders",
      to: "/orders",
      icon: "bi bi-gear-fill",
    },
    {
      name: "Withdrawals",
      to: "/withdrawals",
      icon: "bi bi-gear-fill",
    },
    {
      name: "Reports",
      to: "/reports",
      icon: "bi bi-gear-fill",
    },
  ]);
  </script>
  
  
  <style  scoped lang="scss">
  
    // @import url('https://fonts.googleapis.com/css?family=Inter&display=swap');

  a{
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
  .body-menu{
    width: 180px;
    height: 100vh;
    background: #2D2FE4;
    padding: 0px;
    @media(max-width: 710px){
      display: none;
    }
  }
  .logo{
    width: 150px;
    padding: 10px 0px;
    margin: 10px 0px 30px;
    img{
      width: 100%;
    }
  }
  .routerLinks{
    display: flex;
    flex-direction: column;
  }
  .routerLink i{
    margin-right: 5px;
  }
  </style>
  