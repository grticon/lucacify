<script>
import { ref } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import axios from "axios";
import { API_URL } from "../config/config.js";

export default {
  data() {
    return {
      emailOrUsername: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          `${API_URL}/auth/login-admin`,
          {
            emailOrUsername: this.emailOrUsername,
            password: this.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        localStorage.setItem("token", response.data.data.token);
        // redirect to dashboard
        this.$router.push("/dashboard");
      } catch (error) {
        // Handle login error
        if (error.response && error.response.status !== 200) {
          const message = error.response.data.message || "An error occurred.";
          alert(message);
        } else {
          console.error("Login failed:", error);
        }
      }
    },
  },
};
</script>

<template>
  <main>
    <div class="form">
      <img src="@/assets/logo2.png" alt="" width="200px" />
      <p class="greet">Welcome back! Admin</p>
      <form @submit.prevent="login">
        <div class="full">
          <label for="emailOrUsername">Email or Username</label>
          <input
            type="emailOrUsername"
            name=""
            id="emailOrUsername"
            v-model="emailOrUsername"
          />
        </div>
        <div class="full">
          <label for="password">Password</label>
          <input type="password" name="" id="password" v-model="password" />
        </div>
        <div class="full">
          <button type="submit">Login</button>
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
      margin: 0px 0px 10px;
    }
    p.greet {
      margin: 0px 0px 30px;
      font-size: 20px;
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
          color: #fff;
          font-size: 14px;
          letter-spacing: 2px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
