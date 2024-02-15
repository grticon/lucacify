<template>
  <div class="flex">
    <DashboardNav />
    <div class="view relative">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import DashboardNav from "@/components/DashboardNav.vue";
import { onMounted } from "vue";
</script>

<style scoped lang="scss">
.flex {
  display: flex;
  width: 100%;
  height: 100vh;
}

.view {
  width: calc(100vw - 180px);
  height: 100vh;
  overflow-y: scroll !important;

  @media (max-width: 710px) {
    width: 100vw;
  }
}
</style>
