<template>
    <main>
      <h1>User Reports - {{ userReports.length }}</h1>
      <section v-for="(report, index) in userReports" :key="index">
        <div class="item" :for="index">
          <div class="tp">
            <img src="@/assets/dp.jpg" alt="" />
            <div class="txt">
              <p class="bold">{{ report.agent.name }}</p>
              <p class="light">{{ report.agent.email }}</p>
              <p class="light">{{ report.agent.createdAt }}</p>
              <br />
              <p class="bold">User Reported - {{ report.user.name }}</p>
            </div>
          </div>
          <br /><br />
          <p>
            <b>{{ report.title }}</b>
          </p>
          <p class="comment">
            {{ report.description }}
          </p>
        </div>
      </section>
    </main>
    <Loader v-if="loading" />
  </template>
  
  <script>
  import axios from "axios";
  import { API_URL } from "../../config/config.js";
  import $ from "jquery";
  import Loader from "@/components/Loader.vue";
  
  export default {
    data() {
      return {
        loading: true,
        userReports: [],
      };
    },
    mounted() {
      // Fetch user reports when the component is created
      this.fetchUserReports();
    },
    methods: {
      async fetchUserReports() {
        try {
          // Check if token exists
          if (!localStorage.getItem("token")) {
            this.$router.push("/");
            return;
          }
          const response = await axios.get(`${API_URL}/user/get-user-reports`, {
            headers: {
              token: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          this.userReports = response.data.data.userReports;
          this.loading = false;
        } catch (error) {
          console.error("Fetch users failed:", error.message);
        }
      },
    },
    components: {
      Loader,
    },
  };
  </script>
  
  <style scoped lang="scss">
  main {
    padding: 30px;
    height: 100vh;
    @media (max-width: 710px) {
      padding: 30px 20px;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    section {
      display: grid;
        max-width: 800px;
        margin: auto;
  
      div.item {
        padding: 20px;
        box-shadow: 0px 2px 10px #0022;
        border-radius: 10px;
        margin-bottom: 30px;
        div.tp {
          display: flex;
          gap: 10px;
          img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
          }
          div.txt {
            p.bold {
              font-weight: 600;
              font-size: 18px;
            }
          }
        }
  
        p.comment {
          font-size: 14px;
          margin-top: 20px;
        }
      }
    }
  }
  </style>
  