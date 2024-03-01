<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter } from "vue-router";

const email = ref('');
const password = ref('');
</script>

<template>
  <main>
    <div class="form">
      <img src="@/assets/logo2.png" alt="" width="200px">
      <form action="">
        <div class="full">
          <label for="email">Email</label>
          <input type="email" name="" id="email" v-model="email">
        </div>
        <div class="full">
          <label for="password">Password</label>
          <input type="password" name="" id="password" v-model="password">
        </div>
        <div class="full">
          <router-link to="/dashboard">
            <button>Login</button>
          </router-link>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

  div.form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      margin: 0px 0px 30px;
    }

    form {
      display: grid;
      gap: 20px;
      width: 100%;
      max-width: 500px;
      margin: auto;

      div.full {
        display: grid;

        label {
          font-size: 14px;
          margin-bottom: 5px;
          letter-spacing: 1px;
        }

        input {
          height: 50px;
          width: 100%;
          border-radius: 5px;
          border: 1px solid #999;
          outline: none;
          padding: 0px 15px;
        }
        button {
        height: 56px;
        width: 100%;
        border-radius: 5px;
        border: none;
        background-color: #3f3fc0;
        color: #FFF;
        font-size: 14px;
        letter-spacing: 2px;
      }
      }
    }
  }
}
</style>
